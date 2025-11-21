'use client';
import { useEffect, useMemo, useState } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { tests } from '../../../data/tests';
import { useSession, signIn, signOut } from 'next-auth/react';
import { recordAttempt, getAttempts } from '../../../lib/storage';

const formatTime = (sec) => {
  const h = Math.floor(sec / 3600).toString().padStart(2, '0');
  const m = Math.floor((sec % 3600) / 60).toString().padStart(2, '0');
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${h}:${m}:${s}`;
};

export default function TestPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session, status } = useSession();
  const params = useParams();
  const testId = params?.id;
  const [responses, setResponses] = useState({});
  const [startedAt, setStartedAt] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [submitted, setSubmitted] = useState(null);
  const [reveals, setReveals] = useState({});
  const [attempts, setAttempts] = useState([]);

  const test = useMemo(() => tests.find((t) => t.id === testId), [testId]);

  useEffect(() => {
    if (!test) return;
    // fresh attempt on load
    startFresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testId]);

  // Load attempts history (kept for review, but not forced into the active attempt)
  useEffect(() => {
    if (!session?.user?.email || !test) {
      setAttempts([]);
      return;
    }
    const history = (getAttempts() || []).filter((a) => a.user === session.user.email && a.testId === test.id);
    setAttempts(history);
    const attemptParam = searchParams?.get('attempt');
    if (attemptParam) {
      const found = history.find((a) => String(a.finishedAt) === attemptParam);
      if (found) reviewAttempt(found);
    }
  }, [session, test, searchParams]);

  // countdown
  useEffect(() => {
    if (!startedAt || submitted) return;
    const id = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          handleSubmit(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startedAt, submitted]);

  const handleOption = (qid, idx, type) => {
    setResponses((prev) => {
      const current = prev[qid] || [];
      if (type === 'radio') return { ...prev, [qid]: [idx] };
      const exists = current.includes(idx);
      const next = exists ? current.filter((v) => v !== idx) : [...current, idx];
      return { ...prev, [qid]: next };
    });
  };

  const handleSubmit = (auto = false) => {
    if (!test || !session?.user?.email) return;
    let score = 0;
    const details = test.questions.map((q) => {
      const userAns = (responses[q.id] || []).slice().sort();
      const correct = q.answer.slice().sort();
      const isCorrect = userAns.length === correct.length && userAns.every((v, i) => v === correct[i]);
      if (isCorrect) score += 1;
      return { qid: q.id, isCorrect, userAns, correct };
    });
    const finishedAt = Date.now();
    const attempt = {
      user: session?.user?.email || 'anonymous',
      testId: test.id,
      testTitle: test.title,
      startedAt,
      finishedAt,
      durationSec: Math.round((finishedAt - startedAt) / 1000),
      score,
      total: test.questions.length,
      percentage: Math.round((score / test.questions.length) * 100),
      answers: details,
      autoSubmitted: auto
    };
    const updated = recordAttempt(attempt);
    setAttempts(updated.filter((a) => a.testId === test.id && a.user === (session?.user?.email || '')));
    setSubmitted(attempt);
  };

  const startFresh = () => {
    if (!test) return;
    setResponses({});
    setSubmitted(null);
    setReveals({});
    setStartedAt(Date.now());
    setTimeLeft((test.durationMinutes || 120) * 60);
  };

  const reviewAttempt = (attempt) => {
    if (!attempt) return;
    setSubmitted(attempt);
    const prefill = {};
    (attempt.answers || []).forEach((a) => {
      prefill[a.qid] = a.userAns || [];
    });
    setResponses(prefill);
  };

  const toggleReveal = (qid) => {
    setReveals((prev) => ({ ...prev, [qid]: !prev[qid] }));
  };

  const formatAnswers = (q, arr) => arr.map((i) => q.options[i]).join(', ');

  const getStatus = (q) => {
    if (!submitted) return null;
    const found = submitted.answers?.find((a) => a.qid === q.id);
    if (!found || (found.userAns || []).length === 0) return 'unattempted';
    return found.isCorrect ? 'correct' : 'wrong';
  };

  const statusIcon = (status) => {
    if (status === 'correct') return <span className="text-green-600 font-bold ml-2" aria-label="correct">✔</span>;
    if (status === 'wrong') return <span className="text-red-600 font-bold ml-2" aria-label="wrong">✕</span>;
    if (status === 'unattempted') return <span className="text-yellow-500 font-bold ml-2" aria-label="unattempted">•</span>;
    return null;
  };

  if (!test) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50" style={{ width: '100%' }}>
        <div className="text-center">
          <p className="text-xl text-gray-700">Test not found.</p>
          <button onClick={() => router.push('/dashboard')} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Back to Dashboard</button>
        </div>
      </div>
    );
  }
  if (status === 'loading') return null;
  if (status !== 'authenticated') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center space-y-4">
          <p className="text-lg text-gray-700">Please sign in with Google to take this test.</p>
          <button
            onClick={() => signIn('google', { callbackUrl: `/test/${testId}` })}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen text-gray-900" style={{ width: '100%' }}>
      <div className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="font-semibold text-gray-800 text-lg">{test.title}</div>
            <div className="text-sm text-gray-500">{test.questions.length} questions • {test.durationMinutes || 120} minutes</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-blue-600 font-semibold">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{formatTime(timeLeft)}</span>
            </div>
            <button onClick={() => handleSubmit(false)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Submit</button>
            <button onClick={() => router.push('/dashboard')} className="px-4 py-2 rounded-lg border border-gray-300">Exit</button>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 pb-4 flex items-center justify-between text-sm text-gray-700">
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {test.questions.map((_, idx) => (
                <span key={idx} className={`h-2 w-12 rounded-full ${idx < (submitted ? submitted.answers.filter(a => a.isCorrect).length : 0) ? 'bg-blue-600' : 'bg-gray-200'}`} />
              ))}
            </div>
            <div className="font-semibold">{submitted ? `${submitted.answers.filter(a => a.isCorrect).length}/${test.questions.length}` : `0/${test.questions.length}`}</div>
          </div>
          {submitted && (
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs">Correct {submitted.answers.filter(a => a.isCorrect).length}</span>
              <span className="px-2 py-1 rounded-full bg-red-100 text-red-700 text-xs">Wrong {submitted.answers.filter(a => !a.isCorrect && (a.userAns || []).length > 0).length}</span>
              <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs">Unanswered {submitted.answers.filter(a => (a.userAns || []).length === 0).length}</span>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 space-y-4">
        {submitted && (
          <div className="p-5 bg-gray-50 rounded-xl border flex flex-wrap gap-4">
            <div>
              <div className="text-sm text-gray-600">Score</div>
              <div className="text-2xl font-semibold">{submitted.score}/{submitted.total}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Accuracy</div>
              <div className="text-2xl font-semibold">{submitted.percentage}%</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Right</div>
              <div className="text-lg font-semibold text-green-700">{submitted.answers.filter(a => a.isCorrect).length}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Wrong</div>
              <div className="text-lg font-semibold text-red-700">{submitted.answers.filter(a => !a.isCorrect && (a.userAns || []).length > 0).length}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Skipped</div>
              <div className="text-lg font-semibold text-yellow-700">{submitted.answers.filter(a => (a.userAns || []).length === 0).length}</div>
            </div>
            <button
              onClick={() => setReveals(Object.fromEntries(test.questions.map((q) => [q.id, true])))}
              className="ml-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Review All
            </button>
            <button
              onClick={() => startFresh()}
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              Start new attempt
            </button>
          </div>
        )}

        {test.questions.map((q, qIdx) => {
          const currentStatus = getStatus(q);
          return (
            <div key={q.id} className="rounded-xl border bg-white shadow-sm p-4">
              <div className="flex items-start justify-between">
                <div className="font-semibold text-gray-900">{qIdx + 1}. {q.question}</div>
                {statusIcon(currentStatus)}
              </div>
              <div className="mt-3 space-y-3">
                {q.options.map((opt, idx) => {
                  const isUser = (responses[q.id] || []).includes(idx);
                  const isCorrect = (q.answer || []).includes(idx);
                  const showReveal = !!submitted;
                  let border = 'border border-gray-200';
                  let bg = 'bg-white';
                  let text = 'text-gray-800';
                  if (showReveal && isCorrect) {
                    border = 'border-2 border-green-500';
                    bg = 'bg-green-50';
                    text = 'text-green-800';
                  } else if (showReveal && isUser && !isCorrect) {
                    border = 'border-2 border-red-500';
                    bg = 'bg-red-50';
                    text = 'text-red-800';
                  }
                  return (
                    <label
                      key={idx}
                      className={`flex items-start gap-3 rounded-lg p-3 ${border} ${bg}`}
                    >
                      <input
                        disabled={!!submitted}
                        type={q.type === 'checkbox' ? 'checkbox' : 'radio'}
                        name={`q-${q.id}`}
                        checked={(responses[q.id] || []).includes(idx)}
                        onChange={() => handleOption(q.id, idx, q.type)}
                        className="mt-1"
                      />
                      <div className={`${text}`}>
                        <div className="font-medium">{String.fromCharCode(65 + idx)}. {opt}</div>
                        {showReveal && isCorrect && <div className="text-xs text-green-700 mt-1">Right answer</div>}
                        {showReveal && isUser && !isCorrect && <div className="text-xs text-red-700 mt-1">Not quite</div>}
                      </div>
                    </label>
                  );
                })}
              </div>

              {submitted && (
                <div className="mt-4 bg-gray-50 border border-dashed rounded-lg p-3 text-sm text-gray-700">
                  <div><strong>Correct:</strong> {formatAnswers(q, q.answer)}</div>
                  <div><strong>Your:</strong> {formatAnswers(q, submitted.answers?.find((a) => a.qid === q.id)?.userAns || []) || 'No answer'}</div>
                  {q.explanation && <div className="mt-2 text-gray-700">{q.explanation}</div>}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

'use client';
import { useEffect, useMemo, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { tests } from '../../../data/tests';
import { getSession, recordAttempt, clearSession } from '../../../lib/storage';

const formatTime = (sec) => {
  const h = Math.floor(sec / 3600).toString().padStart(2, '0');
  const m = Math.floor((sec % 3600) / 60).toString().padStart(2, '0');
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${h}:${m}:${s}`;
};

export default function TestPage() {
  const router = useRouter();
  const params = useParams();
  const testId = params?.id;
  const [session, setSession] = useState(null);
  const [responses, setResponses] = useState({});
  const [startedAt, setStartedAt] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [submitted, setSubmitted] = useState(null);
  const [reveals, setReveals] = useState({});

  const test = useMemo(() => tests.find((t) => t.id === testId), [testId]);

  useEffect(() => {
    const sess = getSession();
    if (!sess) {
      router.replace('/login');
      return;
    }
    setSession(sess);
  }, [router]);

  useEffect(() => {
    if (!test) return;
    setStartedAt(Date.now());
    setTimeLeft((test.durationMinutes || 120) * 60);
    setResponses({});
    setSubmitted(null);
    setReveals({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testId]);

  // countdown
  useEffect(() => {
    if (!startedAt) return;
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
  }, [startedAt]);

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
    if (!test || !session) return;
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
      user: session.email,
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
    recordAttempt(attempt);
    setSubmitted(attempt);
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

  return (
    <div className="flex bg-[#f8f9fa] min-h-screen text-gray-900" style={{ width: '100%' }}>
      <aside className="hidden md:block w-64 fixed top-0 left-0 h-full bg-white border-r border-gray-200 p-4 z-20">
        <div className="flex items-center space-x-2 mb-8">
          <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-xl font-bold text-gray-800">MockYourTest</span>
        </div>
        <nav className="space-y-2">
          <button
            onClick={() => router.push('/dashboard')}
            className="w-full flex items-center space-x-3 p-3 rounded-lg text-left text-gray-600 hover:bg-gray-100 transition duration-150"
          >
            <span>← Dashboard</span>
          </button>
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
          <button
            onClick={() => { clearSession(); router.replace('/login'); }}
            className="w-full flex items-center justify-center space-x-3 p-3 text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition duration-150"
          >
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 md:ml-64">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">{test.title}</h1>
              <p className="text-sm text-gray-500">{test.questions.length} questions • 120 minutes</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{formatTime(timeLeft)}</span>
              </div>
              <button onClick={() => handleSubmit(false)} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">Submit</button>
              <button onClick={() => router.push('/dashboard')} className="px-4 py-2 rounded-lg border border-gray-300">Exit</button>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-6 space-y-4">
          {submitted && (
            <div className="p-4 bg-blue-50 text-blue-700 rounded-lg flex items-center justify-between">
              <div>
                <div className="font-semibold">Result: {submitted.score}/{submitted.total} ({submitted.percentage}%)</div>
                <div className="text-sm text-blue-600">
                  {submitted.autoSubmitted ? 'Auto-submitted (time up).' : 'Submitted.'} {new Date(submitted.finishedAt).toLocaleString()}
                </div>
              </div>
              <button
                onClick={() => setReveals(Object.fromEntries(test.questions.map((q) => [q.id, true])))}
                className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Reveal All
              </button>
            </div>
          )}

          {test.questions.map((q) => (
            <div key={q.id} className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
              <h3 className="font-semibold text-gray-800 flex items-center">
                Q{q.id}: {q.question}
                {statusIcon(getStatus(q))}
              </h3>
              <div className="mt-3 space-y-2">
                {q.options.map((opt, idx) => (
                  <label key={idx} className="flex items-center gap-2 p-2 rounded hover:bg-gray-50">
                    <input
                      type={q.type === 'checkbox' ? 'checkbox' : 'radio'}
                      name={`q-${q.id}`}
                      checked={(responses[q.id] || []).includes(idx)}
                      onChange={() => handleOption(q.id, idx, q.type)}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>

              {submitted && (
                <div className="mt-3">
                  <button
                    type="button"
                    onClick={() => toggleReveal(q.id)}
                    className="text-sm font-semibold text-blue-600 hover:underline"
                  >
                    {reveals[q.id] ? 'Hide explanation' : 'Show answer & reasoning'}
                  </button>
                  {reveals[q.id] && (
                    <div className="mt-2 p-3 bg-gray-50 rounded border border-dashed border-gray-200 text-sm">
                      <div><strong>Correct:</strong> {formatAnswers(q, q.answer)}</div>
                      <div><strong>Your:</strong> {formatAnswers(q, submitted.answers?.find((a) => a.qid === q.id)?.userAns || []) || 'No answer'}</div>
                      {q.explanation && <div className="mt-2 text-gray-700">{q.explanation}</div>}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </main>

        <footer className="bg-gray-200 text-center py-4 text-sm text-gray-600">
          MockYourTest • Local practice • ACCA mocks and more
        </footer>
      </div>
    </div>
  );
}

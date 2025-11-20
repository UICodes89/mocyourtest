'use client';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';
import { tests } from '../../data/tests';
import { getAttempts } from '../../lib/storage';

export default function DashboardPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [view, setView] = useState('dashboard');
  const [attempts, setAttempts] = useState([]);

  // test runner state
  const [activeTestId, setActiveTestId] = useState(tests[0]?.id);

  useEffect(() => {
    if (status === 'authenticated' && session?.user?.email) {
      setAttempts((getAttempts() || []).filter((a) => a.user === session.user.email));
    }
  }, [status, session]);

  const activeTest = useMemo(() => tests.find((t) => t.id === activeTestId) || tests[0], [activeTestId]);

  const totals = useMemo(() => {
    if (!attempts.length) return { avg: 0, count: 0, hours: 0 };
    const count = attempts.length;
    const avg = Math.round(attempts.reduce((s, a) => s + a.percentage, 0) / count);
    const hours = (attempts.reduce((s, a) => s + (a.durationSec || 0), 0) / 3600).toFixed(1);
    return { avg, count, hours };
  }, [attempts]);

  const recent = attempts.slice().reverse().slice(0, 5);

  const trend = attempts
    .filter((a) => a.testId === activeTestId)
    .slice(-10)
    .sort((a, b) => a.finishedAt - b.finishedAt);

  const formatTime = (sec) => {
    const h = Math.floor(sec / 3600).toString().padStart(2, '0');
    const m = Math.floor((sec % 3600) / 60).toString().padStart(2, '0');
    const s = Math.floor(sec % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  if (status === 'loading') return null;
  if (status !== 'authenticated') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center space-y-4">
          <p className="text-lg text-gray-700">Please sign in with Google to access the dashboard.</p>
          <button
            onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex bg-[#f8f9fa] min-h-screen text-gray-900" style={{ width: '100%' }}>
      {/* Sidebar */}
      <aside className="hidden md:block w-64 fixed top-0 left-0 h-full bg-white border-r border-gray-200 p-4 z-20">
        <div className="flex items-center space-x-2 mb-8">
          <svg className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12.5l2.5 2.5L16 9" />
          </svg>
          <span className="text-lg font-bold text-gray-800">MockYourTest</span>
        </div>
        <nav className="space-y-2">
          {['dashboard', 'history', 'profile'].map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`nav-link w-full flex items-center space-x-3 p-3 rounded-lg text-left transition duration-150 ${
                view === v ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="capitalize">{v}</span>
            </button>
          ))}
        </nav>
        <div className="absolute bottom-4 left-4 right-4 space-y-2">
          <div className="flex items-center space-x-2 text-sm text-gray-700 bg-gray-50 rounded-lg p-3 border border-gray-200">
            <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
              {(session?.user?.name || session?.user?.email || 'U').charAt(0).toUpperCase()}
            </div>
            <div className="overflow-hidden">
              <div className="font-semibold truncate">{session?.user?.name || 'Profile'}</div>
              <div className="text-gray-500 truncate">{session?.user?.email}</div>
            </div>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="w-full flex items-center justify-center space-x-3 p-3 text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition duration-150"
          >
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-4 sm:p-8">
        <header className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">{view.charAt(0).toUpperCase() + view.slice(1)}</h1>
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
              {(session?.name || session?.email || 'U').charAt(0).toUpperCase()}
            </div>
            <span className="text-gray-700 font-medium">{session?.name || session?.email}</span>
          </div>
        </header>

        {/* Dashboard View */}
        {view === 'dashboard' && (
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-blue-600">
                <h2 className="text-2xl font-semibold text-gray-800">Welcome back, {session?.name || 'Learner'} 👋</h2>
                <p className="mt-1 text-gray-500">Ready for your next ACCA mock? Pick a test below and start the timer.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card p-5 border-b-4 border-green-500">
                  <p className="text-sm font-medium text-gray-500">Overall Accuracy</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{totals.avg}<span className="text-xl">%</span></p>
                  <p className="text-xs text-green-500 mt-1 flex items-center">Keep improving</p>
                </div>
                <div className="card p-5 border-b-4 border-blue-600">
                  <p className="text-sm font-medium text-gray-500">Total Tests Taken</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{totals.count}</p>
                  <p className="text-xs text-blue-600 mt-1">Local 30-day history</p>
                </div>
                <div className="card p-5 border-b-4 border-yellow-500">
                  <p className="text-sm font-medium text-gray-500">Hours Practicing</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{totals.hours}</p>
                  <p className="text-xs text-yellow-600 mt-1">Tracked from timed sessions</p>
                </div>
              </div>

              {/* Test Runner */}
              <div className="card p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Start a Mock Test</h3>
                    <p className="text-gray-500 text-sm">ACCA sets loaded from your library. Each session opens in its own page.</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <select
                      value={activeTestId}
                      onChange={(e) => setActiveTestId(e.target.value)}
                      className="p-2 border rounded-lg"
                    >
                      {tests.map((t) => (
                        <option key={t.id} value={t.id}>{t.title}</option>
                      ))}
                    </select>
                    <button
                      onClick={() => router.push(`/test/${activeTestId}`)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      Open Test Page
                    </button>
                  </div>
                </div>
              </div>

              {/* Trend */}
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Performance Trend (Active Test)</h3>
                <div className="flex gap-3 items-end min-h-[120px]">
                  {trend.length === 0 && <p className="text-gray-500">No data yet.</p>}
                  {trend.map((a, idx) => (
                    <div key={idx} className="text-center">
                      <div
                        className="w-6 rounded"
                        style={{
                          height: `${Math.max(8, a.percentage)}px`,
                          background: 'linear-gradient(120deg, #2563eb, #0ea5e9)'
                        }}
                        title={`${a.percentage}%`}
                      />
                      <div className="text-xs text-gray-500 mt-1">{a.percentage}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-8">
              <div className="card p-6 bg-blue-600 text-white">
                <h3 className="text-xl font-bold mb-2">Continue Testing</h3>
                <p className="text-sm text-blue-100">Open the selected mock in a dedicated page.</p>
                <div className="flex items-center mt-3 mb-4 space-x-2">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>{activeTest?.title}</span>
                </div>
                <button
                  onClick={() => router.push(`/test/${activeTestId}`)}
                  className="w-full text-center block bg-white text-blue-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-150"
                >
                  Open Test Page →
                </button>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
                <ul className="space-y-4">
                  {recent.length === 0 && <li className="text-gray-500">No attempts yet.</li>}
                  {recent.map((a, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-green-500 mt-1">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </span>
                      <div>
                        <p className="text-gray-700">Completed <span className="font-medium">{a.testTitle}</span></p>
                        <p className="text-xs text-gray-500">{new Date(a.finishedAt).toLocaleString()} • {a.percentage}%</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Start a New Mock Test</h3>
                <div className="space-y-3">
                  {tests.slice(0, 3).map((t) => (
                    <button
                      key={t.id}
                      onClick={() => { setActiveTestId(t.id); router.push(`/test/${t.id}`); }}
                      className="flex justify-between items-center w-full p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition"
                    >
                      <span className="text-gray-700">{t.title}</span>
                      <span className="text-blue-600 font-medium">→</span>
                    </button>
                  ))}
                </div>
                <a href="#categories" className="mt-4 text-blue-600 font-medium block text-center hover:underline">
                  View All Categories
                </a>
              </div>
            </div>
          </section>
        )}

        {/* History View */}
        {view === 'history' && (
          <section className="card p-6">
            <h2 className="text-2xl font-bold mb-4">Test History</h2>
            {attempts.length === 0 && <p className="text-gray-500">No attempts yet.</p>}
            {attempts.length > 0 && (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Taken</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score %</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time Taken</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {attempts.slice().reverse().map((a, idx) => (
                      <tr key={idx}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{a.testTitle}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(a.finishedAt).toLocaleString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{a.percentage}%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatTime(a.durationSec || 0)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}

        {/* Profile View */}
        {view === 'profile' && (
          <section className="card p-8">
            <h2 className="text-2xl font-bold mb-6">Personal Details & Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1 space-y-2">
                <button className="w-full text-left p-3 rounded-lg bg-blue-100 text-blue-600 font-semibold">Profile</button>
                <button className="w-full text-left p-3 rounded-lg text-gray-800 hover:bg-gray-100">Test Preferences</button>
                <button className="w-full text-left p-3 rounded-lg text-gray-800 hover:bg-gray-100">Security</button>
              </div>
              <div className="md:col-span-2 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    defaultValue={session?.name || ''}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    value={session?.email || ''}
                    disabled
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-gray-50"
                  />
                </div>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">Save Changes</button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

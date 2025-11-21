'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginClient({ googleConfigured, missingKeys = [] }) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/dashboard');
    }
  }, [status, router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl border border-gray-100 p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="mx-auto h-12 w-12 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
            MYT
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Sign in to MockYourTest</h1>
          <p className="text-gray-500 text-sm">Use your Google account to access dashboards and attempts.</p>
        </div>

        <button
          type="button"
          onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
          disabled={!googleConfigured}
          className={`w-full flex items-center justify-center gap-3 rounded-xl py-3 font-semibold shadow-sm transition ${
            googleConfigured
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-100 text-gray-500 cursor-not-allowed border border-dashed'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.16 0 5.98 1.13 8.2 2.98l6.13-6.13C34.94 3.4 29.83 1.5 24 1.5 14.74 1.5 6.64 6.71 2.85 14.26l7.14 5.54C11.7 13.64 17.27 9.5 24 9.5z" />
            <path fill="#4285F4" d="M46.5 24.5c0-1.78-.16-3.49-.46-5.14H24v9.73h12.7c-.55 2.98-2.22 5.5-4.72 7.18l7.14 5.54C43.83 37.67 46.5 31.48 46.5 24.5z" />
            <path fill="#FBBC05" d="M10.44 28.79C9.68 26.6 9.29 24.32 9.29 22c0-2.32.39-4.6 1.15-6.79l-7.14-5.54C1.3 13.22 0 17.45 0 22c0 4.55 1.3 8.78 3.3 12.33l7.14-5.54z" />
            <path fill="#34A853" d="M24 44.5c5.83 0 10.94-1.92 14.59-5.29l-7.14-5.54c-2.03 1.36-4.62 2.17-7.45 2.17-6.73 0-12.3-4.14-14.15-9.8l-7.14 5.54C6.64 41.29 14.74 44.5 24 44.5z" />
            <path fill="none" d="M0 0h48v48H0z" />
          </svg>
          <span>Continue with Google</span>
        </button>

        {!googleConfigured && (
          <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-800">
            <div className="font-semibold mb-1">Google sign-in is not configured.</div>
            <p>Set these environment variables and restart the app:</p>
            <code className="block bg-white border border-yellow-200 rounded-md px-3 py-2 mt-2 text-xs text-gray-700">
              GOOGLE_CLIENT_ID=&lt;your id&gt;
              <br />
              GOOGLE_CLIENT_SECRET=&lt;your secret&gt;
              <br />
              NEXTAUTH_SECRET=&lt;random 32+ chars&gt;
            </code>
          </div>
        )}

        <div className="text-center text-sm text-gray-500">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

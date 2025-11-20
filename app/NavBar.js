'use client';
import { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function NavBar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center space-x-4 text-sm font-semibold">
        {session?.user ? (
          <button
            className="text-gray-600 hover:text-blue-600"
            onClick={() => signOut({ callbackUrl: '/' })}
            type="button"
          >
            Logout
          </button>
        ) : (
          <button
            className="text-gray-600 hover:text-blue-600"
            onClick={() => setOpen(true)}
            type="button"
          >
            Login
          </button>
        )}
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="text-center space-y-3">
              <div className="text-lg font-bold text-gray-800">Sign in to MockYourTest</div>
              <p className="text-sm text-gray-500">Use your Google account to continue</p>
              <button
                onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
                className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 rounded-lg py-3 hover:border-blue-500 hover:shadow"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.16 0 5.98 1.13 8.2 2.98l6.13-6.13C34.94 3.4 29.83 1.5 24 1.5 14.74 1.5 6.64 6.71 2.85 14.26l7.14 5.54C11.7 13.64 17.27 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.5 24.5c0-1.78-.16-3.49-.46-5.14H24v9.73h12.7c-.55 2.98-2.22 5.5-4.72 7.18l7.14 5.54C43.83 37.67 46.5 31.48 46.5 24.5z" />
                  <path fill="#FBBC05" d="M10.44 28.79C9.68 26.6 9.29 24.32 9.29 22c0-2.32.39-4.6 1.15-6.79l-7.14-5.54C1.3 13.22 0 17.45 0 22c0 4.55 1.3 8.78 3.3 12.33l7.14-5.54z" />
                  <path fill="#34A853" d="M24 44.5c5.83 0 10.94-1.92 14.59-5.29l-7.14-5.54c-2.03 1.36-4.62 2.17-7.45 2.17-6.73 0-12.3-4.14-14.15-9.8l-7.14 5.54C6.64 41.29 14.74 44.5 24 44.5z" />
                  <path fill="none" d="M0 0h48v48H0z" />
                </svg>
                <span className="font-semibold text-gray-700">Continue with Google</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

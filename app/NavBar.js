'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { clearSession, getSession } from './libClient';

export default function NavBar() {
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const refresh = () => setSession(getSession());
    refresh();
    window.addEventListener('mock-session-changed', refresh);
    return () => window.removeEventListener('mock-session-changed', refresh);
  }, []);

  const handleLogout = () => {
    clearSession();
    setSession(null);
    router.replace('/login');
  };

  return (
    <nav className="flex items-center space-x-4 text-sm font-semibold">
      {session ? (
        <button
          className="text-gray-600 hover:text-blue-600"
          onClick={handleLogout}
          type="button"
        >
          Logout
        </button>
      ) : (
        <Link href="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
      )}
    </nav>
  );
}

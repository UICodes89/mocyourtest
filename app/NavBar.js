'use client';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function NavBar() {
  const { data: session } = useSession();

  return (
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
          onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
          type="button"
        >
          Login
        </button>
      )}
    </nav>
  );
}

'use client';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

const NavBar = dynamic(() => import('./NavBar'), { ssr: false });

export default function ClientHeader() {
  const pathname = usePathname();
  const lower = (pathname || '').toLowerCase();
  const isAuthArea = lower.startsWith('/dashboard') || lower.startsWith('/test');

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {!isAuthArea ? (
          <>
            <div className="flex items-center space-x-2">
              <svg className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12.5l2.5 2.5L16 9" />
              </svg>
              <span className="text-lg font-bold text-gray-800">MockYourTest</span>
            </div>
            <NavBar />
          </>
        ) : (
          <div className="w-full h-14" />
        )}
      </div>
    </header>
  );
}

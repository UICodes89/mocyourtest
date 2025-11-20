import './globals.css';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import Providers from './providers';

const ClientHeader = dynamic(() => import('./ClientHeader'), { ssr: false });

export const metadata = {
  title: 'Mock Test Suite',
  description: 'Practice mocks with local analytics'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, width: '100%' }}>
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        <Providers>
          <ClientHeader />
          <main style={{ width: '100%' }}>{children}</main>
          <footer className="bg-gray-900 text-white text-center py-6 text-sm">
            MockYourTest • Mock tests for ACCA, coding, medical, finance, and more
          </footer>
        </Providers>
      </body>
    </html>
  );
}

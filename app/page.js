'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useSession, signIn } from 'next-auth/react';

export default function HomePage() {
  const { data: session } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="bg-[#f8f9fa] text-gray-900">
      <header className="pt-16 pb-20 sm:pt-24 sm:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Ace Your <span className="text-blue-600">Career Exams</span> with <br className="hidden sm:inline" /> Realistic Mock Tests
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Practice makes perfect. Access hundreds of high-quality, full-length mock tests across every professional and academic field.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#categories" className="bg-blue-600 text-white py-3 px-8 rounded-xl font-semibold text-lg shadow-xl hover:bg-blue-700 transition duration-300 transform">
              Explore All Test Categories
            </a>
            {session?.user ? (
              <Link href="/dashboard" className="text-blue-600 bg-white border border-blue-600 py-3 px-8 rounded-xl font-semibold text-lg hover:bg-blue-50 transition duration-300 transform">
                Go to Dashboard
              </Link>
            ) : (
              <button
                onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
                className="text-blue-600 bg-white border border-blue-600 py-3 px-8 rounded-xl font-semibold text-lg hover:bg-blue-50 transition duration-300 transform"
              >
                Sign in with Google
              </button>
            )}
          </div>
        </div>
      </header>

      <section id="features" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">The Edge You Need to Succeed</h2>
            <p className="mt-4 text-xl text-gray-500">Structured practice built on expert analysis.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Real Exam Simulation', desc: 'Time constraints, difficulty, and format match official exams.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
              { title: 'Detailed Analytics', desc: 'Section-wise scores, time reports, and growth tracking.', icon: 'M9 19V6l12-3v14' },
              { title: 'Verified Explanations', desc: 'Clear solutions to drive understanding, not rote learning.', icon: 'M12 6.253v13m0-13a4.75 4.75 0 00-4.75 4.75h9.5' }
            ].map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg transition duration-300 border-t-4 border-blue-600">
                <svg className="h-8 w-8 text-blue-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={f.icon} />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-3 text-base text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Practice in Every Field Imaginable</h2>
            <p className="mt-4 text-xl text-gray-500">IT, finance, civil services, medical, aptitude, MBA, and beyond.</p>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {[
              { label: 'Software/IT', bg: 'bg-blue-100', text: 'text-blue-600', hoverBg: 'group-hover:bg-blue-600', hoverText: 'group-hover:text-white' },
              { label: 'Finance & Banking', bg: 'bg-green-100', text: 'text-green-600', hoverBg: 'group-hover:bg-green-600', hoverText: 'group-hover:text-white' },
              { label: 'Civil Services', bg: 'bg-red-100', text: 'text-red-600', hoverBg: 'group-hover:bg-red-600', hoverText: 'group-hover:text-white' },
              { label: 'Aptitude & Logic', bg: 'bg-yellow-100', text: 'text-yellow-600', hoverBg: 'group-hover:bg-yellow-600', hoverText: 'group-hover:text-white' },
              { label: 'Medical Entrances', bg: 'bg-indigo-100', text: 'text-indigo-600', hoverBg: 'group-hover:bg-indigo-600', hoverText: 'group-hover:text-white' },
              { label: 'MBA/Management', bg: 'bg-pink-100', text: 'text-pink-600', hoverBg: 'group-hover:bg-pink-600', hoverText: 'group-hover:text-white' }
            ].map((c, idx) => (
              <a key={idx} href="#" className="group block p-4 bg-white rounded-xl shadow-md border border-gray-200 transition duration-300 hover:shadow-lg hover:border-blue-600">
                <div className="text-center">
                  <div className={`w-10 h-10 mx-auto ${c.bg} ${c.text} rounded-full flex items-center justify-center mb-3 transition ${c.hoverBg} ${c.hoverText}`}>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  </div>
                  <p className={`text-sm font-medium text-gray-700 transition ${c.hoverText}`}>{c.label}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="#" className="text-blue-600 font-semibold hover:underline text-lg">
              View all 100+ categories →
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to take the next step in your preparation?
          </h2>
            <p className="mt-4 text-xl text-blue-100">
            Join thousands of successful candidates who trusted MockYourTest.
          </p>
          <div className="mt-8">
            <Link href="/login" className="bg-white text-blue-600 py-3 px-8 rounded-xl font-semibold text-lg shadow-2xl hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              Start Your Free Mock Test Today
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-3">MockYourTest</h4>
              <p className="text-sm text-gray-400">Your partner in exam excellence.</p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-3">Company</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-3">Resources</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Test Guides</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-3">Legal</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-gray-700 text-center">
            <p className="text-sm text-gray-400">© 2025 MockYourTest, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

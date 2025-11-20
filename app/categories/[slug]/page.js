'use client';
import { useMemo } from 'react';
import { useSession, signIn } from 'next-auth/react';
import Link from 'next/link';
import { tests } from '../../../data/tests';

const titleFromSlug = (slug) => slug.replace(/-/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());

export default function CategoryDetail({ params }) {
  const { data: session } = useSession();
  const slug = params?.slug || '';
  const title = titleFromSlug(slug);

  const filtered = useMemo(() => {
    const normalize = (v) => (v || 'general').toLowerCase().replace(/\s+/g, '-');
    return tests.filter((t) => normalize(t.category) === slug);
  }, [slug]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{title}</h1>
        {!session && (
          <button
            onClick={() => signIn('google', { callbackUrl: `/categories/${slug}` })}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Login with Google
          </button>
        )}
      </div>
      {filtered.length === 0 && (
        <p className="text-gray-600">No tests in this category yet.</p>
      )}
      {filtered.map((test) => (
        <div key={test.id} className="p-4 bg-white rounded-lg shadow-sm border flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">{test.title}</h3>
            <p className="text-sm text-gray-500">Questions: {test.questions.length} • Duration: {test.durationMinutes || 120} min</p>
          </div>
          {session ? (
            <Link href={`/test/${test.id}`} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Start Test
            </Link>
          ) : (
            <button
              onClick={() => signIn('google', { callbackUrl: `/test/${test.id}` })}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Login to Start
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

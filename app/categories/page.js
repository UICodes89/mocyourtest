'use client';
import Link from 'next/link';

const categories = [
  'Business & Finance',
  'Software / IT',
  'Civil Services',
  'Aptitude & Logic',
  'Medical Entrances',
  'MBA / Management',
  'Engineering',
  'Data & Analytics',
  'Language Tests',
  'Custom'
];

export default function CategoriesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Test Categories</h1>
      <p className="text-gray-600 mb-6">Pick a category to view available mocks. Login with Google to start or create tests.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/categories/${encodeURIComponent(cat.toLowerCase().replace(/\\s+/g, '-') )}`}
            className="p-4 bg-white shadow-sm border rounded-lg hover:border-blue-500 hover:shadow"
          >
            <h3 className="font-semibold text-gray-800">{cat}</h3>
            <p className="text-sm text-gray-500">View available tests</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

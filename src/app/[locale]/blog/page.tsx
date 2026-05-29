import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { blogPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Blog - Solar Energy Guides & Comparisons',
  description: 'Expert guides on solar panels, inverters, and the solar energy industry. Buying guides, technology comparisons, and import tips.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Breadcrumb items={[{ label: 'Blog' }]} />

      <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-4 mb-8">
        Blog
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="aspect-video bg-gray-200" />
            <div className="p-4 space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-block px-2 py-0.5 text-xs font-medium bg-primary-50 text-primary-700 rounded">
                  {post.category}
                </span>
                <time className="text-xs text-gray-500">{post.date}</time>
                <span className="text-xs text-gray-500">{post.readTime}</span>
              </div>
              <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-1 pt-1">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

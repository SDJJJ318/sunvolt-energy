import { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '@/components/shared/PageBanner';
import { news } from '@/data/news';

export const metadata: Metadata = {
  title: 'News - Solar Industry Updates & Company News',
  description: 'Stay updated with the latest solar industry trends, technology updates, and company news from SunVolt Energy.',
  alternates: { canonical: '/news' },
};

export default function NewsPage() {
  return (
    <>
      <PageBanner
        title="News"
        subtitle="Latest solar industry trends, technology updates, and company news"
        image="/images/hero/sungrow-emea.jpg"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'News' }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article) => (
          <Link
            key={article.id}
            href={`/news/${article.slug}`}
            className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="aspect-video bg-gray-200" />
            <div className="p-4 space-y-2">
              <time className="text-xs text-gray-500">{article.date}</time>
              <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {article.excerpt}
              </p>
              <span className="inline-block text-sm text-primary-600 font-medium mt-2">
                Read More
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}

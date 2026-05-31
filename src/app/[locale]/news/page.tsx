import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '@/components/shared/Sidebar';
import PageBanner from '@/components/shared/PageBanner';
import { news } from '@/data/news';

export const metadata: Metadata = {
  title: 'News - Solar Industry Updates & Company News',
  description: 'Stay updated with the latest solar industry trends, technology updates, and company news from SunVolt Energy.',
  alternates: { canonical: '/news' },
};

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <PageBanner
        title="News"
        subtitle="Latest solar industry trends, technology updates, and company news"
        image="/images/hero/sungrow-emea.jpg"
      />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href={`/${locale}`} className="hover:text-primary-600">Home</Link>
          <span className="mx-1.5">/</span>
          <span className="text-primary-600">News</span>
        </nav>
        <div className="flex gap-8">
          <div className="w-56 shrink-0 hidden lg:block">
            <Sidebar />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Latest News</h2>
            <div className="space-y-6">
              {news.map((article) => (
                <Link
                  key={article.id}
                  href={`/${locale}/news/${article.slug}`}
                  className="flex gap-5 group border-b border-gray-100 pb-6 last:border-0"
                >
                  <div className="w-48 h-32 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={192}
                      height={128}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <time className="text-xs text-gray-400">{article.date}</time>
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-1 mt-0.5">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{article.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { news } from '@/data/news';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export function generateStaticParams() {
  const locales = ['en', 'fr', 'ru', 'pt', 'es', 'ar'];
  return locales.flatMap((locale) =>
    news.map((article) => ({ locale, slug: article.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = news.find((a) => a.slug === slug);
  if (!article) return { title: 'Not Found' };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const article = news.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <Breadcrumb
        items={[{ label: 'News', href: `/${locale}/news` }, { label: article.title }]}
      />

      <Link
        href={`/${locale}/news`}
        className="inline-flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 mt-4 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to News
      </Link>

      <article>
        <time className="text-sm text-gray-500">{article.date}</time>
        <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
          {article.title}
        </h1>
        <div className="prose prose-gray max-w-none">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}

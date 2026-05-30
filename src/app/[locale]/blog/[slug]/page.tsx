import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { blogPosts, getBlogBySlug } from '@/data/blog';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: 'Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function renderContent(content: string) {
  const blocks = content.split('\n\n');
  return blocks.map((block, index) => {
    const trimmed = block.trim();

    // Handle ## headings
    if (trimmed.startsWith('## ')) {
      return (
        <h2
          key={index}
          className="text-xl font-bold text-gray-900 mt-8 mb-4"
        >
          {trimmed.replace('## ', '')}
        </h2>
      );
    }

    // Handle ### headings
    if (trimmed.startsWith('### ')) {
      return (
        <h3
          key={index}
          className="text-lg font-semibold text-gray-900 mt-6 mb-3"
        >
          {trimmed.replace('### ', '')}
        </h3>
      );
    }

    // Handle bullet lists
    if (trimmed.startsWith('- ')) {
      const items = trimmed.split('\n').filter((line) => line.startsWith('- '));
      return (
        <ul key={index} className="list-disc list-inside space-y-1 mb-4 text-gray-700">
          {items.map((item, i) => (
            <li key={i}>{item.replace(/^- /, '')}</li>
          ))}
        </ul>
      );
    }

    // Handle tables (skip rendering as plain text)
    if (trimmed.startsWith('|')) {
      return (
        <div key={index} className="overflow-x-auto mb-4">
          <pre className="text-sm text-gray-700 whitespace-pre-wrap">{trimmed}</pre>
        </div>
      );
    }

    // Regular paragraph
    return (
      <p key={index} className="text-gray-700 leading-relaxed mb-4">
        {trimmed}
      </p>
    );
  });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <Breadcrumb
        items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]}
      />

      <article className="mt-6">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-50 text-primary-700 rounded-full mb-3">
          {post.category}
        </span>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
          <span>{post.author}</span>
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>

        <div className="prose prose-gray max-w-none">
          {renderContent(post.content)}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-200">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA box */}
        <div className="mt-10 p-6 bg-primary-50 rounded-lg border border-primary-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Need help choosing the right solar panels?
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Our team can help you find the best solution for your project.
            Contact us for a free consultation.
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center px-5 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </article>
    </div>
  );
}

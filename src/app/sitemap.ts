import type { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { news } from '@/data/news';
import { blogPosts } from '@/data/blog';
import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/lib/utils';

const { locales } = routing;

// Build the hreflang alternates map for a path (without locale prefix), e.g.
// "/products" -> { en: ".../en/products", fr: ".../fr/products", ... }
function languages(path: string): Record<string, string> {
  return Object.fromEntries(
    locales.map((locale) => [locale, `${SITE_URL}/${locale}${path}`])
  );
}

// One sitemap entry per locale for a given path, each carrying the full
// hreflang alternates so Google knows they are translations of each other.
function localizedEntries(
  path: string,
  opts: { lastModified?: Date; changeFrequency?: 'weekly' | 'monthly'; priority?: number }
): MetadataRoute.Sitemap {
  const langs = languages(path);
  return locales.map((locale) => ({
    url: `${SITE_URL}/${locale}${path}`,
    lastModified: opts.lastModified ?? new Date(),
    changeFrequency: opts.changeFrequency ?? 'monthly',
    priority: opts.priority ?? 0.7,
    alternates: { languages: langs },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths: Array<{
    path: string;
    changeFrequency: 'weekly' | 'monthly';
    priority: number;
  }> = [
    { path: '', changeFrequency: 'weekly', priority: 1 },
    { path: '/products', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/solutions', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/downloads', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/news', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.6 },
  ];

  const staticPages = staticPaths.flatMap((p) =>
    localizedEntries(p.path, { changeFrequency: p.changeFrequency, priority: p.priority })
  );

  const productPages = products.flatMap((product) =>
    localizedEntries(`/products/${product.slug}`, { priority: 0.8 })
  );

  const newsPages = news.flatMap((article) =>
    localizedEntries(`/news/${article.slug}`, {
      lastModified: new Date(article.date),
      priority: 0.6,
    })
  );

  const blogPages = blogPosts.flatMap((post) =>
    localizedEntries(`/blog/${post.slug}`, {
      lastModified: new Date(post.date),
      priority: 0.7,
    })
  );

  return [...staticPages, ...productPages, ...newsPages, ...blogPages];
}

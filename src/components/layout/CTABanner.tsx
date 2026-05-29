import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { headers } from 'next/headers';

export default async function CTABanner() {
  const t = await getTranslations('cta');
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';
  const locale = pathname.split('/')[1] || 'en';

  return (
    <section className="bg-primary-600">
      <div className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
          {t('title')}
        </h2>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center px-6 py-3 bg-white text-primary-700 font-semibold rounded-md hover:bg-gray-100 transition-colors"
        >
          {t('button')}
        </Link>
      </div>
    </section>
  );
}

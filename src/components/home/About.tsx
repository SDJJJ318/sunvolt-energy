import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { headers } from 'next/headers';

export default async function About() {
  const t = await getTranslations('about');
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';
  const locale = pathname.split('/')[1] || 'en';

  const highlights = [0, 1, 2, 3].map((i) => t(`highlights.${i}`));

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">{t('sectionLabel')}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('title')}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{t('description')}</p>
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-8 mb-8">
              <div className="border-l-4 border-primary-600 pl-4">
                <p className="text-2xl font-bold text-gray-900">500m²</p>
                <p className="text-sm text-gray-500">{t('stats.office')}</p>
              </div>
              <div className="border-l-4 border-primary-600 pl-4">
                <p className="text-2xl font-bold text-gray-900">5000m²</p>
                <p className="text-sm text-gray-500">{t('stats.warehouse')}</p>
              </div>
            </div>
            <Link href={`/${locale}/about`} className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors">
              {t('learnMore')}
            </Link>
          </div>
          <div className="lg:col-span-2">
            <img src="/images/about-install.jpg" alt="Solar panels installation" className="w-full rounded-xl object-cover aspect-[4/5]" />
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { headers } from 'next/headers';

export default async function Solutions() {
  const t = await getTranslations('solutions');
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';
  const locale = pathname.split('/')[1] || 'en';

  const items = [0, 1, 2].map((i) => ({
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
  }));

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">{t('sectionLabel')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('sectionTitle')}</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              {items.map((item) => (
                <div key={item.title}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link href={`/${locale}/contact`} className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors">
                {t('cta')}
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80" alt="Residential solar installation" className="w-full aspect-[3/4] object-cover rounded-xl" />
            <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80" alt="Commercial solar farm" className="w-full aspect-[3/4] object-cover rounded-xl mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
}

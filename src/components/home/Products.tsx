import Link from 'next/link';
import Image from 'next/image';
import { featuredProducts } from '@/data/products';
import { getTranslations } from 'next-intl/server';
import { headers } from 'next/headers';

export default async function Products() {
  const t = await getTranslations('products');
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';
  const locale = pathname.split('/')[1] || 'en';

  const displayProducts = featuredProducts.slice(0, 8);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">{t('sectionLabel')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('sectionTitle')}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <Link key={product.id} href={`/${locale}/products/${product.slug}`} className="group">
              <div className="aspect-square bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <Image src={product.image} alt={product.name} width={400} height={400} className="w-full h-full object-contain p-4" />
              </div>
              <h3 className="mt-3 text-sm md:text-base font-medium text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2">
                {product.name}
              </h3>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href={`/${locale}/products`} className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors">
            {t('viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
}

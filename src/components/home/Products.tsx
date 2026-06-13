import Link from 'next/link';
import Image from 'next/image';
import { featuredProducts } from '@/data/products';
import { brands } from '@/data/brands';
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
              <div className="aspect-[4/5] bg-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <Image src={product.image} alt={product.name} width={400} height={500} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="pt-3 px-1">
                <p className="text-xs font-semibold text-primary-600 uppercase mb-0.5">
                  {brands.find((b) => b.id === product.brand)?.name}
                </p>
                <h3 className="text-sm font-bold text-gray-900 leading-tight mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>
                {product.wattages && product.wattages.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {product.wattages.map((w) => (
                      <span
                        key={w}
                        className="inline-block px-1.5 py-0.5 text-xs bg-gray-100 text-gray-700 rounded"
                      >
                        {w}
                      </span>
                    ))}
                  </div>
                )}
              </div>
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

'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '@/components/shared/Sidebar';
import Breadcrumb from '@/components/shared/Breadcrumb';
import Strength from '@/components/home/Strength';
import { products } from '@/data/products';
import { brands } from '@/data/brands';

const brandBanners: Record<string, string> = {
  jinko: '/images/banners/jinko_b.png',
  longi: '/images/banners/longji_b.png',
  'ja-solar': '/images/banners/ja_b.png',
  trina: '/images/banners/trina_b.png',
};

const allBanners = Object.values(brandBanners);

const brandMeta: Record<string, { title: string; subtitle: string }> = {
  '': { title: 'Products', subtitle: 'Tier-1 solar panels from the world\'s leading manufacturers' },
  jinko: { title: 'Jinko Solar', subtitle: 'World\'s largest solar panel manufacturer' },
  longi: { title: 'LONGi Solar', subtitle: 'Global leader in monocrystalline silicon technology' },
  'ja-solar': { title: 'JA Solar', subtitle: 'High-efficiency solar modules for every application' },
  trina: { title: 'Trina Solar', subtitle: 'Smart energy solutions for a sustainable future' },
};

function ProductsBanner({ currentBrand }: { currentBrand: string }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (currentBrand) return;
    const id = setInterval(() => setActive((i) => (i + 1) % allBanners.length), 3000);
    return () => clearInterval(id);
  }, [currentBrand]);

  const src = currentBrand && brandBanners[currentBrand]
    ? brandBanners[currentBrand]
    : allBanners[active];

  const { title, subtitle } = brandMeta[currentBrand] ?? brandMeta[''];

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden flex items-start">
      <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 px-8 md:px-16 pt-16 md:pt-20">
        <h1 className="text-3xl md:text-5xl font-bold text-white">{title}</h1>
        <p className="mt-3 text-base md:text-lg text-gray-200 max-w-2xl">{subtitle}</p>
      </div>
    </div>
  );
}

function ProductContent() {
  const searchParams = useSearchParams();
  const locale = useLocale();
  const currentBrand = searchParams.get('brand') || '';

  const filteredProducts = currentBrand
    ? products.filter((p) => p.brand === currentBrand)
    : products;

  const brandName = currentBrand
    ? brands.find((b) => b.id === currentBrand)?.name
    : 'All Products';

  return (
    <>
      <ProductsBanner currentBrand={currentBrand} />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-8">
          <div className="w-64 shrink-0 hidden lg:block">
            <Sidebar currentBrand={currentBrand} />
          </div>
          <div className="flex-1 min-w-0">
            <Breadcrumb items={[{ label: 'Products' }]} />

            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">{brandName}</h1>
              <span className="text-sm text-gray-500">
                {filteredProducts.length} products
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <Link
                href={`/${locale}/products`}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                  !currentBrand
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </Link>
              {brands.map((brand) => (
                <Link
                  key={brand.id}
                  href={`/${locale}/products?brand=${brand.id}`}
                  className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                    currentBrand === brand.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {brand.name}
                </Link>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/${locale}/products/${product.slug}`}
                  className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[4/5] bg-gray-50 flex items-center justify-center overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={375}
                      className="object-contain w-full h-full group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4 border-t border-gray-100">
                    <p className="text-xs font-semibold text-primary-600 uppercase mb-1">
                      {brands.find((b) => b.id === product.brand)?.name}
                    </p>
                    <h3 className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-2">
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
          </div>
        </div>
      </div>
      <Strength />
    </>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
      <ProductContent />
    </Suspense>
  );
}

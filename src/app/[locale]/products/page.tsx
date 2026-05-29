'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '@/components/shared/Sidebar';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { products } from '@/data/products';
import { brands } from '@/data/brands';

function ProductGrid() {
  const searchParams = useSearchParams();
  const currentBrand = searchParams.get('brand') || '';

  const filteredProducts = currentBrand
    ? products.filter((p) => p.brand === currentBrand)
    : products;

  const brandName = currentBrand
    ? brands.find((b) => b.id === currentBrand)?.name
    : 'All Products';

  return (
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

        {/* Brand filter tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Link
            href="/products"
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
              href={`/products?brand=${brand.id}`}
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

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-square bg-white p-4 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-contain w-full h-full group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4 border-t border-gray-100">
                <h3 className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {product.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
        <ProductGrid />
      </Suspense>
    </div>
  );
}

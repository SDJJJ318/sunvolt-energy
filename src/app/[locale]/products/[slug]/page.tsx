import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { products, getProductBySlug } from '@/data/products';
import { brands } from '@/data/brands';
import { getWhatsAppLink } from '@/lib/utils';
import { ProductSchema } from '@/components/seo/JsonLd';

export function generateStaticParams() {
  const locales = ['en', 'fr', 'ru', 'pt', 'es', 'ar'];
  return locales.flatMap((locale) =>
    products.map((product) => ({ locale, slug: product.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  const brandName = brands.find(b => b.id === product.brand)?.name || '';
  return {
    title: `${product.name} - ${brandName} Solar Panel`,
    description: `${product.shortDescription}. ${product.wattage} ${brandName} solar panel. Get competitive pricing and fast delivery from SunVolt Energy.`,
    alternates: { canonical: `/products/${slug}` },
    openGraph: {
      title: `${product.name} - ${product.wattage} ${brandName}`,
      description: product.shortDescription,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const brandName =
    brands.find((b) => b.id === product.brand)?.name || product.brand;

  const relatedProducts = products
    .filter((p) => p.brand === product.brand && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      <ProductSchema
        name={product.name}
        description={product.shortDescription}
        brand={brandName}
        sku={product.id}
        image={product.image}
      />
      <div className="max-w-7xl mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: 'Products', href: `/${locale}/products` },
          { label: product.name },
        ]}
      />

      {/* Product detail */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
        {/* Left: Product image */}
        <div className="aspect-[3/4] bg-white border border-gray-200 rounded-lg p-6 flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={667}
            className="object-contain w-full h-full"
          />
        </div>

        {/* Right: Product info */}
        <div className="space-y-6">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-50 text-primary-700 rounded-full mb-3">
              {brandName}
            </span>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
              {product.name}
            </h1>
            {product.shortDescription && (
              <p className="mt-3 text-gray-600">{product.shortDescription}</p>
            )}
          </div>

          {/* Specs table */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              Specifications
            </h2>
            <table className="w-full text-sm">
              <tbody>
                {Object.entries(product.specs).map(([key, value], index) => (
                  <tr
                    key={key}
                    className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2.5 font-medium text-gray-700 capitalize w-1/3">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </td>
                    <td className="px-4 py-2.5 text-gray-600">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              Key Features
            </h2>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-600 mt-1.5 shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Request Quote
            </Link>
            <a
              href={getWhatsAppLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((rp) => (
              <Link
                key={rp.id}
                href={`/${locale}/products/${rp.slug}`}
                className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-square bg-white p-4 flex items-center justify-center">
                  <Image
                    src={rp.image}
                    alt={rp.name}
                    width={300}
                    height={300}
                    className="object-contain w-full h-full group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4 border-t border-gray-100">
                  <h3 className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {rp.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
    </>
  );
}

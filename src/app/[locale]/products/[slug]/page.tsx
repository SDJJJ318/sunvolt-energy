import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import Sidebar from '@/components/shared/Sidebar';
import ProductImageGallery from '@/components/shared/ProductImageGallery';
import { products, getProductBySlug } from '@/data/products';
import { brands } from '@/data/brands';
import { getWhatsAppLink } from '@/lib/utils';
import { ProductSchema } from '@/components/seo/JsonLd';
import ProductInquiryForm from '@/components/shared/ProductInquiryForm';

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
    description: `${product.shortDescription}. ${product.wattage} ${brandName} solar panel. Get competitive pricing and fast delivery from XinHaoYang New Energy.`,
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
  if (!product) notFound();

  const brandName = brands.find((b) => b.id === product.brand)?.name || product.brand;
  const relatedProducts = products
    .filter((p) => p.brand === product.brand && p.id !== product.id)
    .slice(0, 4);

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
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1.5">
          <Link href={`/${locale}`} className="hover:text-primary-600">Home</Link>
          <span>/</span>
          <Link href={`/${locale}/products`} className="hover:text-primary-600">Products</Link>
          <span>/</span>
          <span className="text-primary-600">{product.name}</span>
        </nav>

        <div className="flex gap-8">
          {/* Left sidebar */}
          <div className="w-56 shrink-0 hidden lg:block">
            <Sidebar currentBrand={product.brand} />
          </div>

          {/* Main content */}
          <div className="flex-1 min-w-0 space-y-10">

            {/* Top: image + info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product image gallery */}
              <ProductImageGallery
                images={product.images?.length ? product.images : [product.image]}
                alt={product.name}
              />

              {/* Product info */}
              <div className="space-y-5">
                <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
                <div className="text-sm text-gray-600 space-y-1.5">
                  <div><span className="font-medium text-gray-700">Place of Origin：</span>Jiangsu, China</div>
                  <div><span className="font-medium text-gray-700">Brand Name：</span>{brandName}</div>
                  <div><span className="font-medium text-gray-700">Certification：</span>IEC, ISO9001:2015, TUV, PV, CNAS</div>
                  {product.wattage && (
                    <div><span className="font-medium text-gray-700">Wattage：</span>{product.wattage}</div>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-primary-600 text-white font-medium rounded hover:bg-primary-700 transition-colors"
                  >
                    ✉ Quote Now
                  </Link>
                  <a
                    href={getWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-primary-600 text-primary-600 font-medium rounded hover:bg-primary-50 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Product Details - datasheet images */}
            <div>
              <h2 className="text-base font-semibold text-gray-900 mb-3">Product Details</h2>
              {product.datasheetImages?.length ? (
                <div className="space-y-2">
                  {product.datasheetImages.map((src, i) => (
                    <Image key={i} src={src} alt={`${product.name} datasheet page ${i + 1}`} width={1200} height={850} className="w-full h-auto border border-gray-200 rounded" />
                  ))}
                </div>
              ) : (
                <table className="w-full text-sm border border-gray-200 rounded overflow-hidden">
                  <tbody>
                    {Object.entries(product.specs).map(([key, value], i) => (
                      <tr key={key} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-4 py-2.5 font-medium text-gray-700 w-1/3 border-b border-gray-100 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </td>
                        <td className="px-4 py-2.5 text-primary-600 border-b border-gray-100">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {/* Product Description */}
            <div>
              <h2 className="text-base font-semibold text-gray-900 mb-3">Product Description</h2>
              <p className="text-gray-600 text-sm mb-4">{product.shortDescription}</p>
              <ul className="space-y-1.5">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-1.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Online message / inquiry form */}
            <div>
              <h2 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span>🖥</span> Online message
              </h2>
              <ProductInquiryForm productName={product.name} />
            </div>

            {/* Recommend Products */}
            {relatedProducts.length > 0 && (
              <div>
                <h2 className="text-base font-semibold text-gray-900 mb-4">Recommend Products</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {relatedProducts.map((rp) => (
                    <Link
                      key={rp.id}
                      href={`/${locale}/products/${rp.slug}`}
                      className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div className="aspect-square bg-white p-3 flex items-center justify-center">
                        <Image
                          src={rp.image}
                          alt={rp.name}
                          width={200}
                          height={200}
                          className="object-contain w-full h-full group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="p-2 border-t border-gray-100 bg-primary-600">
                        <p className="text-xs text-white font-medium line-clamp-2 text-center">{rp.name}</p>
                        {rp.wattage && <p className="text-xs text-primary-100 text-center mt-0.5">{rp.wattage}</p>}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}

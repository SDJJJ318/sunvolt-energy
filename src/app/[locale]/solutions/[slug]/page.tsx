import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import Sidebar from '@/components/shared/Sidebar';
import { projects, getProjectBySlug } from '@/data/projects';
import { getWhatsAppLink } from '@/lib/utils';
import ProductInquiryForm from '@/components/shared/ProductInquiryForm';

export function generateStaticParams() {
  const locales = ['en', 'fr', 'ru', 'pt', 'es', 'ar'];
  return locales.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} - Solar Project Case`,
    description: project.description,
    alternates: { canonical: `/solutions/${slug}` },
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.id !== project.id).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1.5">
        <Link href={`/${locale}`} className="hover:text-primary-600">Home</Link>
        <span>/</span>
        <Link href={`/${locale}/solutions`} className="hover:text-primary-600">Solutions</Link>
        <span>/</span>
        <span className="text-primary-600">{project.title}</span>
      </nav>

      <div className="flex gap-8">
        <div className="w-56 shrink-0 hidden lg:block">
          <Sidebar />
        </div>

        <div className="flex-1 min-w-0 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden bg-gray-100 aspect-video">
              <Image
                src={project.image}
                alt={project.title}
                width={640}
                height={360}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-5">
              <h1 className="text-2xl font-bold text-gray-900">{project.title}</h1>
              <div className="text-sm text-gray-600 space-y-1.5">
                <div><span className="font-medium text-gray-700">Location: </span>{project.location}</div>
                <div><span className="font-medium text-gray-700">Capacity: </span>{project.capacity}</div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-primary-600 text-white font-medium rounded hover:bg-primary-700 transition-colors"
                >
                  ✉ Get a Quote
                </Link>
                <a
                  href={getWhatsAppLink(project.title)}
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

          <div>
            <h2 className="text-base font-semibold text-gray-900 mb-3">Project Overview</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span>🖥</span> Online message
            </h2>
            <ProductInquiryForm productName={project.title} />
          </div>

          {related.length > 0 && (
            <div>
              <h2 className="text-base font-semibold text-gray-900 mb-4">More Cases</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {related.map((p) => (
                  <Link
                    key={p.id}
                    href={`/${locale}/solutions/${p.slug}`}
                    className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-video bg-gray-100 overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.title}
                        width={240}
                        height={135}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-2 border-t border-gray-100 bg-primary-600">
                      <p className="text-xs text-white font-medium line-clamp-2 text-center">{p.title}</p>
                      <p className="text-xs text-primary-100 text-center mt-0.5">{p.capacity}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

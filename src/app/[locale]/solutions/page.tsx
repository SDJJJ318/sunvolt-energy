import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '@/components/shared/Sidebar';
import PageBanner from '@/components/shared/PageBanner';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Solutions - Solar Project Cases Worldwide',
  description: 'Explore our solar project cases across 50+ countries.',
  alternates: { canonical: '/solutions' },
};

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <PageBanner
        title="Solutions"
        subtitle="Solar project cases across 50+ countries — residential, commercial, and utility-scale"
        image="/images/hero/sungrow-emea.jpg"
      />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href={`/${locale}`} className="hover:text-primary-600">Home</Link>
          <span className="mx-1.5">/</span>
          <span className="text-primary-600">Solutions</span>
        </nav>
        <div className="flex gap-8">
          <div className="w-56 shrink-0 hidden lg:block">
            <Sidebar />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">All Cases</h2>
            <div className="space-y-6">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/${locale}/solutions/${project.slug}`}
                  className="flex gap-5 group border-b border-gray-100 pb-6 last:border-0"
                >
                  <div className="w-48 h-32 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={192}
                      height={128}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-1">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 mb-2">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{project.location}</span>
                      <span className="text-xs bg-primary-50 text-primary-700 px-2 py-0.5 rounded">{project.capacity}</span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { Metadata } from 'next';
import Sidebar from '@/components/shared/Sidebar';
import PageBanner from '@/components/shared/PageBanner';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Solutions - Solar Project Cases Worldwide',
  description: 'Explore our solar project cases across 50+ countries. From 2MW to 15MW installations for residential, commercial, and utility-scale applications.',
  alternates: { canonical: '/solutions' },
};

export default function SolutionsPage() {
  return (
    <>
      <PageBanner
        title="Solutions"
        subtitle="Solar project cases across 50+ countries — residential, commercial, and utility-scale"
        image="/images/hero/sungrow-emea.jpg"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Solutions' }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-8">
          <div className="w-64 shrink-0 hidden lg:block">
            <Sidebar />
          </div>
          <div className="flex-1 min-w-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <div className="aspect-video bg-gray-200" />
                <div className="p-4 space-y-3">
                  <h3 className="text-base font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded">
                      {project.location}
                    </span>
                    <span className="inline-block px-2 py-0.5 text-xs bg-primary-50 text-primary-700 rounded">
                      {project.capacity}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

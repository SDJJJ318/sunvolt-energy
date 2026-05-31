import { Metadata } from 'next';
import { FileText, Download } from 'lucide-react';
import Sidebar from '@/components/shared/Sidebar';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { brands } from '@/data/brands';

export const metadata: Metadata = {
  title: 'Downloads - Product Datasheets & Brochures',
  description: 'Download product datasheets and technical specifications for Jinko, LONGi, Trina, JA Solar, and Canadian Solar panels. PDF format.',
  alternates: { canonical: '/downloads' },
};

interface DatasheetFile {
  name: string;
  file: string;
  brand: string;
}

const datasheets: DatasheetFile[] = [
  // Jinko Solar
  { name: '575-600W N-Type 72 Half Cell Bifacial Module With Dual Glass', file: '575-600W N-Type 72 Half Cell Bifacial Module With Dual Glass.pdf', brand: 'Jinko Solar' },
  { name: '605-630W N-Type 66 Half Cell Bifacial Module With Dual Glass', file: '605-630W N-Type 66 Half Cell Bifacial Module With Dual Glass.pdf', brand: 'Jinko Solar' },
  { name: '625-650W N-Type 66 Half Cell Bifacial Module With Dual Glass', file: '625-650W N-Type 66 Half Cell Bifacial Module With Dual Glass.pdf', brand: 'Jinko Solar' },
  { name: '625-650W N-Type 78 Half Cell Bifacial Module With Dual Glass', file: '625-650W N-Type 78 Half Cell Bifacial Module With Dual Glass.pdf', brand: 'Jinko Solar' },
  { name: '650-670W N-Type 66 Half Cell Bifacial Module With Dual Glass', file: '650-670W N-Type 66 Half Cell Bifacial Module With Dual Glass.pdf', brand: 'Jinko Solar' },
  { name: '710-735W N-Type 66 Half Cell Bifacial Module With Dual Glass', file: '710-735W N-Type 66 Half Cell Bifacial Module With Dual Glass.pdf', brand: 'Jinko Solar' },
  { name: 'BIPV Unpacking Instruction', file: 'BIPV Unpacking Instruction.pdf', brand: 'Jinko Solar' },
  { name: 'IEC61215 & IEC61730 2016 1500V Single Glass', file: 'IEC61215&IEC61730 2016 1500V Single Glass.pdf', brand: 'Jinko Solar' },
  { name: 'IEC61215 & IEC61730 2016 Dual Glass', file: 'IEC61215&IEC61730 2016 Dual Glass.pdf', brand: 'Jinko Solar' },
  { name: 'JinkoSolar Global Installation Manual (EN)', file: 'JinkoSolar Global Installation Manual_202601-EN.pdf', brand: 'Jinko Solar' },
  { name: 'Limited Warranty — Bifacial Module', file: 'LIMITED WARRANTY REV.EN20250919-LINEAR-BIFACIAL MODULE.pdf', brand: 'Jinko Solar' },
  { name: 'Limited Warranty — Monofacial Module', file: 'LIMITED WARRANTY REV.EN20250919-LINEAR-MONOFACIAL MODULE.pdf', brand: 'Jinko Solar' },
  { name: 'Module Types in 1000V SG Certificate', file: 'module types in 1000V SG certificate.pdf', brand: 'Jinko Solar' },
  { name: 'UL61730 Bifacial Single Glass', file: 'UL61730 Bifacial Single Glass.pdf', brand: 'Jinko Solar' },
  { name: 'UL61730 Monofacial Single Glass', file: 'UL61730 Monofacial Single Glass.pdf', brand: 'Jinko Solar' },
  { name: 'Unpacking and Storage Instruction (EN)', file: 'Unpacking and Storage Instruction-EN 2024.04.29.pdf', brand: 'Jinko Solar' },
];

const brandOrder = ['Jinko Solar'];

export default function DownloadsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex gap-8">
        <div className="w-64 shrink-0 hidden lg:block">
          <Sidebar mode="downloads" />
        </div>
        <div className="flex-1 min-w-0">
          <Breadcrumb items={[{ label: 'Downloads' }]} />

          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-4 mb-8">
            Downloads
          </h1>

          <div className="space-y-10">
            {brandOrder.map(brand => {
              const files = datasheets.filter(d => d.brand === brand);
              const brandId = brands.find(b => b.name === brand)?.id ?? '';
              return (
                <div key={brand} id={`brand-${brandId}`} className="scroll-mt-24">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                    {brand}
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200 text-left">
                          <th className="px-4 py-3 font-medium text-gray-700">File Name</th>
                          <th className="px-4 py-3 font-medium text-gray-700 hidden md:table-cell">Introduction</th>
                          <th className="px-4 py-3 font-medium text-gray-700 hidden sm:table-cell">Size</th>
                          <th className="px-4 py-3 font-medium text-gray-700">Operate</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {files.map(file => (
                          <tr key={file.file} className="hover:bg-gray-50">
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-2">
                                <FileText className="w-4 h-4 text-red-500 shrink-0" />
                                <span className="text-gray-900">{file.name}</span>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-gray-500 hidden md:table-cell">
                              {file.brand} datasheet
                            </td>
                            <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">
                              PDF
                            </td>
                            <td className="px-4 py-3">
                              <a
                                href={`/datasheets/${encodeURIComponent(file.file)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium"
                              >
                                <Download size={14} />
                                Download
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

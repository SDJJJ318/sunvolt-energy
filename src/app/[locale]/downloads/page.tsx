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
  url: string;
  brand: string;
}

const datasheets: DatasheetFile[] = [
  { name: '575-600W N-Type 72 Half Cell Bifacial Module With Dual Glass', url: 'https://drive.google.com/uc?export=download&id=1TOwS2kz-q4SOiukbuwn1vKbf1bEwqog6', brand: 'Jinko Solar' },
  { name: '605-630W N-Type 66 Half Cell Bifacial Module With Dual Glass', url: 'https://drive.google.com/uc?export=download&id=1JmXeql_CYNooWGDCPAoIP7XYn9X0WCFd', brand: 'Jinko Solar' },
  { name: '625-650W N-Type 66 Half Cell Bifacial Module With Dual Glass', url: 'https://drive.google.com/uc?export=download&id=1cHfoIGswY1CnyQ1AVd_2xZn7LtzIup24', brand: 'Jinko Solar' },
  { name: '625-650W N-Type 78 Half Cell Bifacial Module With Dual Glass', url: 'https://drive.google.com/uc?export=download&id=10e7D3xDPCxy5PF1ES-vnTej69CUH69-p', brand: 'Jinko Solar' },
  { name: '650-670W N-Type 66 Half Cell Bifacial Module With Dual Glass', url: 'https://drive.google.com/uc?export=download&id=1WgJIvz-KNgom7nFRUsxZmUfe9fcn2tlI', brand: 'Jinko Solar' },
  { name: '710-735W N-Type 66 Half Cell Bifacial Module With Dual Glass', url: 'https://drive.google.com/uc?export=download&id=1U1KalJfwESviHPlBqrx4vfw7YmC2UYcz', brand: 'Jinko Solar' },
  { name: 'BIPV Unpacking Instruction', url: 'https://drive.google.com/uc?export=download&id=14QO2DifxliGPrrK1hcGr_hBMZX5NsmeY', brand: 'Jinko Solar' },
  { name: 'IEC61215 & IEC61730 2016 1500V Single Glass', url: 'https://drive.google.com/uc?export=download&id=1Jub02QLiGCE5j-J2-ZkxLUSUQk6YFqMs', brand: 'Jinko Solar' },
  { name: 'IEC61215 & IEC61730 2016 Dual Glass', url: 'https://drive.google.com/uc?export=download&id=1xYyQ6C-qrBPLbqpygM3etjXxLYWF9lp1', brand: 'Jinko Solar' },
  { name: 'JinkoSolar Global Installation Manual (EN)', url: 'https://drive.google.com/uc?export=download&id=1cGBTUgGvOSOqo3gZBpqH-OmRHq4FxCnH', brand: 'Jinko Solar' },
  { name: 'Limited Warranty — Bifacial Module', url: 'https://drive.google.com/uc?export=download&id=1e8YAXoH2AlMBOVZxYKZPUakYnSlcHudU', brand: 'Jinko Solar' },
  { name: 'Limited Warranty — Monofacial Module', url: 'https://drive.google.com/uc?export=download&id=1HgiRIumntx7AR8PC1RqdsHOyom291KH3', brand: 'Jinko Solar' },
  { name: 'Module Types in 1000V SG Certificate', url: 'https://drive.google.com/uc?export=download&id=1o4lwSVRD34yI_pmK4TNanJ4ZdRlOKRzK', brand: 'Jinko Solar' },
  { name: 'UL61730 Bifacial Single Glass', url: 'https://drive.google.com/uc?export=download&id=1j7lD3aZcKVaSl0twPhDxbJ0l5PKLv8LK', brand: 'Jinko Solar' },
  { name: 'UL61730 Monofacial Single Glass', url: 'https://drive.google.com/uc?export=download&id=1d6zajoS_YEK8T6SIFKymQczV8ZHpZ5sQ', brand: 'Jinko Solar' },
  { name: 'Unpacking and Storage Instruction (EN)', url: 'https://drive.google.com/uc?export=download&id=1qjMexLnGIP5pN6UKFnlIkm6MSrYDzVVG', brand: 'Jinko Solar' },
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
                          <tr key={file.url} className="hover:bg-gray-50">
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
                                href={file.url}
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

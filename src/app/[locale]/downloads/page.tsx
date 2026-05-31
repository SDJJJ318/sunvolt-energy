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
  { name: 'Tiger Pro 72HC 550-570W', file: 'Tiger Pro 72HC 550-570 Watt.pdf', brand: 'Jinko Solar' },
  { name: 'Tiger Pro 72HC-BDVP 535-555W', file: 'Tiger Pro 72HC-BDVP 535-555 Watt.pdf', brand: 'Jinko Solar' },
  // LONGi Solar
  { name: 'Hi-MO 7 LR7-72HGD 595-625W', file: 'LR7-72HGD 595-625M.pdf', brand: 'LONGi Solar' },
  { name: 'Hi-MO 9 LR7-72HYD 625-660W', file: 'LR7-72HYD 625-660M.pdf', brand: 'LONGi Solar' },
  { name: 'Hi-MO 7 LR5-72HGD 560-590W', file: 'LR5-72HGD 560-590M.pdf', brand: 'LONGi Solar' },
  { name: 'Hi-MO 8 LR8-66HGD 595-625W', file: 'LR8-66HGD 595-625M.pdf', brand: 'LONGi Solar' },
  { name: 'LR7-72HVH 630-650W', file: 'LR7-72HVH 630-650M.pdf', brand: 'LONGi Solar' },
  { name: 'LR7-72HVD 625-645W', file: 'LR7-72HVD 625-645M.pdf', brand: 'LONGi Solar' },
  { name: 'LR7-72HTH 620-630W', file: 'LR7-72HTH 620-630M.pdf', brand: 'LONGi Solar' },
  { name: 'LR5-72HTH 565-585W', file: 'LR5-72HTH 565-585M.pdf', brand: 'LONGi Solar' },
  { name: 'LR5-72HPH 545-565W', file: 'LR5-72HPH 545-565M.pdf', brand: 'LONGi Solar' },
  { name: 'LR5-72HBD 540-560W', file: 'LR5-72HBD 540-560M.pdf', brand: 'LONGi Solar' },
  { name: 'LR5-54HTH 420-440W', file: 'LR5-54HTH 420-440M.pdf', brand: 'LONGi Solar' },
  { name: 'LR5-54HPH 405-425W', file: 'LR5-54HPH 405-425M.pdf', brand: 'LONGi Solar' },
  { name: 'LR7-54HVH 490-505W', file: 'LR7-54HVH 490-505M.pdf', brand: 'LONGi Solar' },
  // Trina Solar
  { name: 'Vertex N 695-720W', file: 'Vertex_N 695-720.pdf', brand: 'Trina Solar' },
  { name: 'Vertex N 595-625W', file: 'Vertex_N 595-625.pdf', brand: 'Trina Solar' },
  { name: 'Vertex D 655-675W', file: 'Vertex_D 655-675.pdf', brand: 'Trina Solar' },
  { name: 'Vertex D 590-610W', file: 'Datasheet_Vertex_D 590-610.pdf', brand: 'Trina Solar' },
  { name: 'Vertex D 565-585W', file: 'Datasheet_Vertex_D 565-585.pdf', brand: 'Trina Solar' },
  { name: 'Vertex D 490-515W', file: 'Datasheet_Vertex_D 490-515.pdf', brand: 'Trina Solar' },
  { name: 'Vertex D 480-505W', file: 'Datasheet_Vertex_D 480-505.pdf', brand: 'Trina Solar' },
  { name: 'Vertex 475-505W', file: 'Vertex 475-505.pdf', brand: 'Trina Solar' },
  { name: 'Vertex S+ 425-450W', file: 'VertexS+425-450.pdf', brand: 'Trina Solar' },
  { name: 'Vertex S+ 430-455W', file: 'Vertex S+430-455.pdf', brand: 'Trina Solar' },
  { name: 'Vertex S+ 430-460W', file: 'Vertex S+430-460.pdf', brand: 'Trina Solar' },
  { name: 'Vertex S+ 455W', file: 'Vertex S+455W.pdf', brand: 'Trina Solar' },
  { name: 'Vertex S+ 505W', file: 'Vertex S+505W.pdf', brand: 'Trina Solar' },
  { name: 'Vertex N 720W Brochure', file: 'VertexN_720W brochure_EN.pdf', brand: 'Trina Solar' },
  { name: 'Vertex 670W Brochure', file: 'Vertex210_670W_brochure_EN.pdf', brand: 'Trina Solar' },
  // JA Solar
  { name: 'JAM72D42 LB 615-640W', file: 'JAM72D42 LB 615-640W.pdf', brand: 'JA Solar' },
  { name: 'JAM72D40 LB 580-605W', file: 'JAM72D40 LB 580-605W.pdf', brand: 'JA Solar' },
  { name: 'JAM72D40 MB 570-595W', file: 'JAM72D40 MB 570-595W.pdf', brand: 'JA Solar' },
  { name: 'JAM66D45 LB 595-620W', file: 'JAM66D45 LB 595-620W.pdf', brand: 'JA Solar' },
  { name: 'JAM66D42 MB 570-595W', file: 'JAM66D42 MB 570-595W.pdf', brand: 'JA Solar' },
  { name: 'JAM72D30 LB 555-580W', file: 'JAM72D30 LB 555-580W.pdf', brand: 'JA Solar' },
  { name: 'JAM72D30 MB 535-560W', file: 'JAM72D30 MB 535-560W.pdf', brand: 'JA Solar' },
  { name: 'JAM54D40 LB 430-455W', file: 'JAM54D40 LB 430-455W.pdf', brand: 'JA Solar' },
  { name: 'JAM72S30 LR 560-585W', file: 'JAM72S30 LR 560-585W.pdf', brand: 'JA Solar' },
  { name: 'JAM72S30 MR 540-565W', file: 'JAM72S30 MR 540-565W.pdf', brand: 'JA Solar' },
  // Canadian Solar
  { name: 'HiKu7 72HL4-(V) 580-605W', file: '72HL4-(V) 580-605 Watt.pdf', brand: 'Canadian Solar' },
  { name: 'HiKu7 72HL4-BDV 575-600W', file: '72HL4-BDV 575-600 Watt.pdf', brand: 'Canadian Solar' },
  { name: 'HiKu7 66HL4M-(V) 610-635W', file: '66HL4M-(V) 610-635 Watt.pdf', brand: 'Canadian Solar' },
  { name: 'HiKu7 66HL4M-BDV 605-630W', file: '66HL4M-BDV 605-630 Watt.pdf', brand: 'Canadian Solar' },
  { name: 'HiKu7 78HL4-BDV 625-650W', file: '78HL4-BDV 625-650 Watt.pdf', brand: 'Canadian Solar' },
  { name: 'HiKu7 60HL4-(V) 475-500W', file: '60HL4-(V) 475-500 Watt.pdf', brand: 'Canadian Solar' },
  { name: 'HiKu7 54HL4R-B 430-455W', file: '54HL4R-B 430-455 Watt.pdf', brand: 'Canadian Solar' },
  { name: 'HiKu7 54HL4R-BDB 425-450W', file: '54HL4R-BDB 425-450 Watt.pdf', brand: 'Canadian Solar' },
  { name: 'HiKu7 54HL4R-(V) 435-460W', file: '54HL4R-(V) 435-460 Watt.pdf', brand: 'Canadian Solar' },
];

const brandOrder = ['Jinko Solar', 'LONGi Solar', 'Trina Solar', 'JA Solar', 'Canadian Solar'];

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

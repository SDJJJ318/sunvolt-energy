import { Metadata } from 'next';
import { Package, ShieldCheck, Settings, Headphones } from 'lucide-react';
import PageBanner from '@/components/shared/PageBanner';

export const metadata: Metadata = {
  title: 'About Us - Leading Solar Panel Supplier in China',
  description: 'SunVolt Energy is a leading solar panel and inverter supplier based in Wuxi, China. Wide product range, quality guarantee, customized solutions, and after-sales service.',
  alternates: { canonical: '/about' },
};

const advantages = [
  {
    icon: Package,
    title: 'Product Range',
    description:
      'We supply a comprehensive range of Tier-1 solar panels from the world\'s leading manufacturers including Jinko, LONGi, Trina, JA Solar, and Canadian Solar.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Guarantee',
    description:
      'Every product we supply comes with full manufacturer warranty and verified authenticity. We only deal in genuine A-grade panels with traceable serial numbers.',
  },
  {
    icon: Settings,
    title: 'Customized Solutions',
    description:
      'Our team helps you select the optimal panel configuration for your specific project requirements, climate conditions, and budget constraints.',
  },
  {
    icon: Headphones,
    title: 'After-Sales Service',
    description:
      'We provide ongoing technical support, warranty claim assistance, and logistics coordination to ensure your projects run smoothly from start to finish.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Leading solar panel & inverter supplier delivering clean energy worldwide"
        image="/images/hero/sungrow-emea.jpg"
      />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {advantages.map((item) => (
          <div
            key={item.title}
            className="border border-gray-200 rounded-xl p-6"
          >
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
              <item.icon className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
        </div>
      </div>
    </>
  );
}

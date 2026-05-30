'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { Headphones, ShieldCheck, Truck, Clock } from 'lucide-react';

const services = [
  {
    icon: Headphones,
    title: '24/7 Support',
    description:
      'Our team is available around the clock to answer your questions and provide technical assistance.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Guarantee',
    description:
      'All products come with full manufacturer warranty and are inspected before shipment.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description:
      'With our large warehouse stock and logistics network, we deliver to your site quickly and reliably.',
  },
  {
    icon: Clock,
    title: 'After-Sales Service',
    description:
      'Dedicated after-sales team to handle claims, replacements, and ongoing technical support.',
  },
];

export default function Service() {
  const locale = useLocale();
  return (
    <section className="py-16 md:py-20 bg-primary-600">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Provide Customers with the Best Service
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-white/20 flex items-center justify-center">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-100 text-primary-600 font-semibold rounded-lg transition-colors"
          >
            Contact Us Now
          </Link>
        </div>
      </div>
    </section>
  );
}
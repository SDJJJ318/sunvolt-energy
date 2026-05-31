'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import { company } from '@/data/company';
import { brands } from '@/data/brands';
import { getWhatsAppLink } from '@/lib/utils';

interface SidebarProps {
  currentBrand?: string;
}

export default function Sidebar({ currentBrand }: SidebarProps) {
  const locale = useLocale();
  return (
    <aside className="space-y-6">
      {/* Product Categories */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <h3 className="bg-primary-600 text-white font-semibold px-4 py-3 text-sm">
          Product
        </h3>
        <ul className="divide-y divide-gray-100">
          {brands.map((brand) => (
            <li key={brand.id}>
              <Link
                href={`/${locale}/products?brand=${brand.id}`}
                className={`block px-4 py-2.5 text-sm transition-colors ${
                  currentBrand === brand.id
                    ? 'text-primary-600 bg-primary-50 font-medium'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {brand.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <h3 className="bg-primary-600 text-white font-semibold px-4 py-3 text-sm">
          Contact
        </h3>
        <div className="p-4 space-y-3">
          <a
            href={`tel:${company.phone}`}
            className="flex items-start gap-2.5 text-sm text-gray-700 hover:text-primary-600 transition-colors"
          >
            <Phone className="w-4 h-4 mt-0.5 text-primary-600 shrink-0" />
            <span>{company.phone}</span>
          </a>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2.5 text-sm text-gray-700 hover:text-primary-600 transition-colors"
          >
            <MessageCircle className="w-4 h-4 mt-0.5 text-primary-600 shrink-0" />
            <span>WhatsApp</span>
          </a>
          <a
            href={`mailto:${company.email}`}
            className="flex items-start gap-2.5 text-sm text-gray-700 hover:text-primary-600 transition-colors"
          >
            <Mail className="w-4 h-4 mt-0.5 text-primary-600 shrink-0" />
            <span>{company.email}</span>
          </a>
          <div className="flex items-start gap-2.5 text-sm text-gray-700">
            <MapPin className="w-4 h-4 mt-0.5 text-primary-600 shrink-0" />
            <span>{company.address}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

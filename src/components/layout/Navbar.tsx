'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { brands } from '@/data/brands';

export default function Navbar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  // Extract locale prefix from pathname (e.g. /fr/products -> /fr)
  const localePrefix = '/' + (pathname.split('/')[1] || 'en');

  const navItems = [
    { label: t('home'), href: `${localePrefix}/` },
    { label: t('products'), href: `${localePrefix}/products`, hasDropdown: true },
    { label: t('about'), href: `${localePrefix}/about` },
    { label: t('solutions'), href: `${localePrefix}/solutions` },
    { label: t('downloads'), href: `${localePrefix}/downloads` },
    { label: t('news'), href: `${localePrefix}/news` },
    { label: t('contact'), href: `${localePrefix}/contact` },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href={`${localePrefix}/`}>
            <Image src="/images/logo.jpg" alt="XinHaoYang New Energy" width={160} height={48} className="h-12 w-auto object-contain" />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors rounded-md"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white border border-gray-100 rounded-lg shadow-lg py-2 min-w-[200px]">
                      {brands.map((brand) => (
                        <Link
                          key={brand.id}
                          href={`${localePrefix}/products?brand=${brand.id}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                        >
                          {brand.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={`${localePrefix}/contact`}
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-md hover:bg-primary-700 transition-colors"
            >
              {t('getQuote')}
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary-600"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileProductsOpen && (
                      <div className="ml-4 space-y-1">
                        {brands.map((brand) => (
                          <Link
                            key={brand.id}
                            href={`${localePrefix}/products?brand=${brand.id}`}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                            onClick={() => setMobileOpen(false)}
                          >
                            {brand.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href={`${localePrefix}/contact`}
              className="block w-full text-center px-5 py-2.5 mt-3 bg-primary-600 text-white text-sm font-semibold rounded-md hover:bg-primary-700 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {t('getQuote')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

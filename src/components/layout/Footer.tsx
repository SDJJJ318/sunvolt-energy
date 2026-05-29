import Link from 'next/link';
import { Sun, Globe, ExternalLink, Video, Phone, Mail, MapPin } from 'lucide-react';
import { company } from '@/data/company';
import { projects } from '@/data/projects';
import { getTranslations } from 'next-intl/server';
import { headers } from 'next/headers';

export default async function Footer() {
  const t = await getTranslations('footer');
  const tn = await getTranslations('nav');
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';
  const locale = pathname.split('/')[1] || 'en';
  const p = (path: string) => `/${locale}${path}`;

  const navLinks = [
    { label: tn('home'), href: p('/') },
    { label: tn('products'), href: p('/products') },
    { label: tn('about'), href: p('/about') },
    { label: tn('solutions'), href: p('/solutions') },
    { label: tn('downloads'), href: p('/downloads') },
    { label: tn('news'), href: p('/news') },
    { label: tn('contact'), href: p('/contact') },
  ];

  const recentProjects = projects.slice(0, 3);

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <Link href={p('/')} className="flex items-center gap-2 mb-4">
              <Sun className="w-7 h-7 text-primary-500" />
              <span className="text-lg font-bold text-white">SunVolt Energy</span>
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">{t('description')}</p>
            <div className="flex items-center gap-3">
              {[Globe, ExternalLink, Video].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-primary-600 hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('navigation')}</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('recentProjects')}</h3>
            <ul className="space-y-2.5">
              {recentProjects.map((project) => (
                <li key={project.id}>
                  <Link href={p('/solutions')} className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                    {project.title} — {project.location}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('contactUs')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 text-primary-500 shrink-0" />
                <a href={`tel:${company.phone}`} className="text-sm text-gray-400 hover:text-primary-400 transition-colors">{company.phone}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 text-primary-500 shrink-0" />
                <a href={`mailto:${company.email}`} className="text-sm text-gray-400 hover:text-primary-400 transition-colors">{company.email}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-500 shrink-0" />
                <span className="text-sm text-gray-400">{company.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} {company.name}. {t('allRights')}</p>
          <Link href={p('/privacy')} className="text-sm text-gray-500 hover:text-primary-400 transition-colors">{t('privacy')}</Link>
        </div>
      </div>
    </footer>
  );
}

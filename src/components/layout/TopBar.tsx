import { Phone, Mail, MessageCircle } from 'lucide-react';
import { company } from '@/data/company';
import { getWhatsAppLink } from '@/lib/utils';
import { getTranslations } from 'next-intl/server';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';

export default async function TopBar() {
  const t = await getTranslations('topbar');
  return (
    <div className="hidden md:block bg-primary-700 text-white text-sm">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp +86 158 6163 1952</span>
          </a>
          <a
            href={`tel:${company.phone}`}
            className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{company.phone}</span>
          </a>
          <a
            href={`mailto:${company.email}`}
            className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{company.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/80">{t('tagline')}</span>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}

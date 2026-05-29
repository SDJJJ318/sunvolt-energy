'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { routing } from '@/i18n/routing';

const LABELS: Record<string, string> = {
  en: 'EN', fr: 'FR', ru: 'RU', pt: 'PT', es: 'ES', ar: 'AR',
};

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const segments = pathname.split('/');
  const currentLocale = segments[1] || 'en';

  function switchLocale(locale: string) {
    segments[1] = locale;
    startTransition(() => router.push(segments.join('/') || '/'));
  }

  return (
    <div className="flex items-center gap-1">
      {routing.locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          disabled={isPending}
          className={`px-1.5 py-0.5 text-xs rounded transition-colors ${
            locale === currentLocale
              ? 'text-white font-semibold'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {LABELS[locale]}
        </button>
      ))}
    </div>
  );
}

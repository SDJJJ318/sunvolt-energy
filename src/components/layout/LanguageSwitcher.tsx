'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTransition, useState, useRef, useEffect } from 'react';

const LOCALES = [
  { code: 'en', label: 'English',   flag: 'gb' },
  { code: 'fr', label: 'Français',  flag: 'fr' },
  { code: 'ru', label: 'Русский',   flag: 'ru' },
  { code: 'pt', label: 'Português', flag: 'br' },
  { code: 'es', label: 'Español',   flag: 'es' },
  { code: 'ar', label: 'العربية',   flag: 'sa' },
];

function Flag({ code }: { code: string }) {
  return (
    <img
      src={`https://flagcdn.com/20x15/${code}.png`}
      width={20}
      height={15}
      alt={code}
      className="rounded-sm object-cover"
    />
  );
}

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const segments = pathname.split('/');
  const currentLocale = segments[1] || 'en';
  const current = LOCALES.find((l) => l.code === currentLocale) ?? LOCALES[0];

  function switchLocale(locale: string) {
    segments[1] = locale;
    setOpen(false);
    startTransition(() => router.push(segments.join('/') || '/'));
  }

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        disabled={isPending}
        className="flex items-center gap-1.5 px-2 py-1 text-sm text-white hover:text-gray-200 transition-colors"
      >
        <Flag code={current.flag} />
        <span className="font-medium">{current.code.toUpperCase()}</span>
        <svg className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-44 bg-white rounded-lg shadow-xl border border-gray-100 py-1" style={{ zIndex: 9999 }}>
          {LOCALES.map((locale) => (
            <button
              key={locale.code}
              onClick={() => switchLocale(locale.code)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${
                locale.code === currentLocale ? 'text-primary-600 font-semibold' : 'text-gray-700'
              }`}
            >
              <Flag code={locale.flag} />
              <span>{locale.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

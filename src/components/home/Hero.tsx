'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { getWhatsAppLink } from '@/lib/utils';

const slideSrcs = [
  'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80',
  '/images/hero/sungrow-emea.jpg',
];

export default function Hero() {
  const t = useTranslations('hero');
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slideSrcs.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slideSrcs.length) % slideSrcs.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {slideSrcs.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      ))}

      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <p className="text-sm md:text-base font-medium text-primary-400 mb-2">
              {t(`slides.${current}.subline`)}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              {t(`slides.${current}.headline`)}
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-8 max-w-xl">
              {t(`slides.${current}.description`)}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={`/${locale}/contact`} className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors">
                {t('getFreeQuote')}
              </Link>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-white/60 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors">
                {t('whatsapp')}
              </a>
            </div>
          </div>
        </div>
      </div>

      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors" aria-label="Previous slide">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors" aria-label="Next slide">
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slideSrcs.map((_, index) => (
          <button key={index} onClick={() => setCurrent(index)} className={`w-3 h-3 rounded-full transition-colors ${index === current ? 'bg-primary-500' : 'bg-white/50'}`} aria-label={`Go to slide ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}

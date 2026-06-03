'use client';

import { useState } from 'react';
import Image from 'next/image';

const partners = [
  { name: 'LONGi Solar', label: 'LONGI Brand', logo: '/images/brands/longi.svg', image: '/images/projects/solution-2.jpg' },
  { name: 'Jinko Solar', label: 'JinKo Solar Brand', logo: '/images/brands/jinko.png', image: '/images/projects/solution-1.jpg' },
  { name: 'Trina Solar', label: 'Trina Solar Brand', logo: '/images/brands/trina.png', image: '/images/projects/solution-4.jpg' },
  { name: 'JA Solar', label: 'JA SOLAR Brand', logo: '/images/brands/ja-solar.png', image: '/images/projects/solution-5.jpg' },
  { name: 'Canadian Solar', label: 'Canadian Solar Brand', logo: '/images/brands/canadian-solar.png', image: '/images/projects/solution-6.jpg' },
];

export default function Partners() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">
            Cooperation
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Partners
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start max-w-5xl mx-auto">
          {/* Left: brand list */}
          <div className="flex flex-col gap-2 w-full md:w-[420px] shrink-0">
            {partners.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setActive(i)}
                className={`flex items-center gap-4 px-5 py-3 rounded-lg border text-left transition-all ${
                  i === active
                    ? 'bg-primary-50 border-primary-400 shadow-sm'
                    : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'
                }`}
              >
                <div className="w-36 shrink-0 flex items-center justify-start">
                  <img src={p.logo} alt={p.name} className="h-10 w-full object-contain object-left" />
                </div>
                <span className="text-sm font-medium text-gray-700">{p.label}</span>
              </button>
            ))}
          </div>

          {/* Right: fixed-size image */}
          <div className="w-full md:w-[460px] h-[380px] shrink-0 rounded-xl overflow-hidden relative">
            <Image
              src={partners[active].image}
              alt={partners[active].name}
              fill
              className="object-cover"
              sizes="460px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

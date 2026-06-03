'use client';

import { useState } from 'react';
import Image from 'next/image';

const partners = [
  { name: 'LONGi Solar', logo: '/images/brands/longi.svg', image: '/images/projects/solution-2.jpg' },
  { name: 'Jinko Solar', logo: '/images/brands/jinko.png', image: '/images/projects/solution-1.jpg' },
  { name: 'Trina Solar', logo: '/images/brands/trina.svg', image: '/images/projects/solution-4.jpg' },
  { name: 'JA Solar', logo: '/images/brands/ja-solar.svg', image: '/images/projects/solution-5.jpg' },
  { name: 'Canadian Solar', logo: '/images/brands/canadian-solar.svg', image: '/images/projects/solution-6.jpg' },
];

export default function Partners() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">
            Cooperation
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Partners
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-stretch max-w-4xl mx-auto">
          {/* Left: brand list */}
          <div className="flex flex-col gap-3 flex-1">
            {partners.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setActive(i)}
                className={`flex items-center gap-4 px-5 py-3 rounded-lg border text-left transition-colors ${
                  i === active
                    ? 'bg-primary-100 border-primary-300'
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <img src={p.logo} alt={p.name} className="h-8 w-24 object-contain" />
                <span className="text-sm font-medium text-gray-700">{p.name} Brand</span>
              </button>
            ))}
          </div>

          {/* Right: image */}
          <div className="flex-1 rounded-xl overflow-hidden min-h-[300px]">
            <Image
              src={partners[active].image}
              alt={partners[active].name}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

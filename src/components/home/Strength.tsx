import Image from 'next/image';

const squareImages = Array.from({ length: 8 }, (_, i) => `/images/strength/img${i + 1}.jpg`);
// img10 (index 1) removed; remaining 6 chat screenshots in 2×3 grid
const portraitImages = Array.from({ length: 7 }, (_, i) => `/images/strength/img${i + 9}.jpg`).filter((_, i) => i !== 1);

const stats = [
  { value: '10GW+', label: 'Annual Supply Capacity' },
  { value: '50+', label: 'Countries Served' },
  { value: '1000+', label: 'Containers in Stock' },
  { value: '15+', label: 'Years Experience' },
];

export default function Strength() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Strong Supply, Ready to Ship
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We maintain large ready stock of Tier-1 solar panels from world-leading brands — fast delivery, competitive pricing, and reliable partnership.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-1">{s.value}</div>
              <div className="text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {squareImages.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-lg">
              <Image
                src={src}
                alt={`Warehouse stock ${i + 1}`}
                width={400}
                height={400}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* 6 WhatsApp chat screenshots: 2 rows × 3 columns, compact size */}
        <div className="grid grid-cols-3 gap-2 mt-3 max-w-3xl mx-auto">
          {portraitImages.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-lg">
              <Image
                src={src}
                alt={`Customer chat ${i + 1}`}
                width={360}
                height={750}
                className="w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

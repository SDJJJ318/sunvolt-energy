const partnerLogos = [
  { name: 'Jinko Solar', logo: '/images/brands/jinko.png' },
  { name: 'LONGi Solar', logo: '/images/brands/longi.svg' },
  { name: 'JA Solar', logo: '/images/brands/ja-solar.svg' },
  { name: 'Trina Solar', logo: '/images/brands/trina.svg' },
  { name: 'Canadian Solar', logo: '/images/brands/canadian-solar.svg' },
];

export default function Partners() {
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

        <div className="flex flex-wrap justify-center gap-6">
          {partnerLogos.map((p) => (
            <div
              key={p.name}
              className="w-44 h-16 bg-white border border-gray-200 rounded-lg shadow-sm flex items-center justify-center px-4"
            >
              <img src={p.logo} alt={p.name} className="max-h-10 max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

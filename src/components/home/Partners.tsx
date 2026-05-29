import { brands } from '@/data/brands';

export default function Partners() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">
            Cooperation
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Partners
          </h2>
        </div>

        {/* Brand Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="w-40 h-16 bg-white border border-gray-200 rounded-lg shadow-sm flex items-center justify-center"
            >
              <span className="text-sm font-bold text-gray-600">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

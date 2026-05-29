import { Users, Lightbulb, TrendingUp } from 'lucide-react';

const cards = [
  {
    icon: Users,
    title: 'Customer Oriented',
    description:
      'We put our customers first, providing tailored solutions and dedicated support for every project, big or small.',
  },
  {
    icon: Lightbulb,
    title: 'Constantly Innovate',
    description:
      'We partner with manufacturers at the forefront of solar technology, bringing you the latest high-efficiency products.',
  },
  {
    icon: TrendingUp,
    title: 'Reliable Supply Chain',
    description:
      'Our established logistics network and large warehouse ensure stable supply and fast delivery worldwide.',
  },
];

export default function Technology() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">
            Our Technology
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Where Can We Help You
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary-50 flex items-center justify-center">
                <card.icon className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

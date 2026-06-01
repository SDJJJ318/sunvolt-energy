import Link from 'next/link';
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
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/projects/solution-3.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary-400 uppercase tracking-wide mb-2">
            Our Technology
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Where Can We Help You
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
                <card.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            More Case &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
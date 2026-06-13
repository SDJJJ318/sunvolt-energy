import { Metadata } from 'next';
import Image from 'next/image';
import PageBanner from '@/components/shared/PageBanner';

export const metadata: Metadata = {
  title: 'About Us - Leading Solar Panel Supplier in China',
  description: 'XinHaoYang New Energy is a leading solar panel and inverter supplier based in Wuxi, China.',
  alternates: { canonical: '/about' },
};

const paragraphs = [
  'XinHaoYang New Energy is a globally renowned and leading strategic supplier of high-efficiency Tier 1 photovoltaic modules, as well as a professional large-scale new energy project supporting service provider. We have deeply taken root and developed steadily in China\'s new energy industry for over a decade, owning more than ten years of rich and practical international photovoltaic export operation experience.',
  'We have built long-term, in-depth, stable and official strategic cooperation partnerships with the most influential top-tier PV manufacturers across China, including LONGi, Jinko Solar, Trina Solar, JA Solar and other world-famous photovoltaic brands. With exclusive brand channel resources and superior supply chain advantages, we enjoy stable product sources, sufficient production allocation priority and strong market competitive strength.',
  'Our core business focuses on the global export and bulk wholesale of original authentic first-line brand solar panels. We maintain ultra-large-scale continuous spot inventory all year round, with sufficient stock reserves of full series photovoltaic modules of different power specifications, which can fully meet the urgent delivery demand, large-batch centralized procurement demand and long-term repetitive ordering demand of global large engineering projects, international EPC contractors, national regional exclusive distributors and global professional energy importers.',
];

const paragraphs2 = [
  'All solar modules we supply are 100% original factory genuine products, with complete international authoritative certification qualifications including CE, TUV, IEC, UL and other global mainstream certification standards. All products strictly comply with international quality inspection standards and regional market access regulations, fully adapting to the procurement and application requirements of Europe, North America, South America, the Middle East, Southeast Asia, Africa and other mainstream global markets.',
  'Our company always takes the supply of high-quality Tier 1 solar panels as our absolute core business. On the premise of focusing on PV module sales, we can selectively provide matching supporting products such as solar inverters and energy storage batteries according to the personalized procurement needs of different customers, helping buyers optimize product combination and facilitate overall project procurement.',
  'With a professional senior international business team, standardized export operation process, perfect global logistics distribution system and sound after-sales guarantee system, we are able to provide stable and uninterrupted bulk supply, highly competitive project exclusive pricing, efficient global transportation and timely after-sales response services for global partners.',
  'Relying on outstanding product quality, reliable supply capacity, honest business philosophy and years of overseas market service accumulation, XinHaoYang New Energy has established long-term and stable cooperative relations with a large number of high-quality enterprise clients all over the world. We are firmly committed to becoming the most reliable, most professional and most valued long-term strategic cooperative supplier in the global new energy engineering field.',
];

const partners = [
  { name: 'LONGi Solar', logo: '/images/brands/longi.svg' },
  { name: 'Jinko Solar', logo: '/images/brands/jinkosolar.png' },
  { name: 'Trina Solar', logo: '/images/brands/trina-new.png' },
  { name: 'JA Solar', logo: '/images/brands/ja-solar.png' },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      <span className="text-primary-600 text-2xl font-bold leading-none">▪</span>
      <h2 className="text-3xl font-bold text-gray-900">{children}</h2>
      <span className="text-primary-600 text-2xl font-bold leading-none">▪</span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Leading solar panel & inverter supplier delivering clean energy worldwide"
        image="/images/hero/sungrow-emea.jpg"
      />

      {/* Company Profile */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <SectionTitle>Company Profile</SectionTitle>

        <div className="space-y-5 text-gray-700 text-[15px] leading-relaxed mb-8">
          {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src="/images/projects/solution-4.jpg"
              alt="Solar project"
              width={700}
              height={394}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src="/images/projects/solution-7.jpg"
              alt="Solar installation"
              width={700}
              height={394}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-5 text-gray-700 text-[15px] leading-relaxed mb-8">
          {paragraphs2.map((p, i) => <p key={i}>{p}</p>)}
        </div>

        <div className="rounded-lg overflow-hidden">
          <Image
            src="/images/projects/solution-2.jpg"
            alt="Solar factory"
            width={1400}
            height={500}
            className="w-full object-cover max-h-72"
          />
        </div>
      </div>

      {/* Partners */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle>Partners</SectionTitle>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((p) => (
              <div
                key={p.name}
                className="bg-white border border-gray-200 rounded-lg flex items-center justify-center p-4 h-20 w-52"
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={160}
                  height={48}
                  className="object-contain max-h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

import Link from 'next/link';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function PageBanner({ title, subtitle, image }: PageBannerProps) {
  return (
    <section className="relative h-[220px] md:h-[300px] flex items-center justify-center overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white">{title}</h1>
        {subtitle && (
          <p className="mt-3 text-base md:text-lg text-gray-200 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

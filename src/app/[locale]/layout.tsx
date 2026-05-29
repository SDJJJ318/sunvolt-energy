import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import CTABanner from '@/components/layout/CTABanner';
import TawkChat from '@/components/layout/TawkChat';
import FloatingChat from '@/components/layout/FloatingChat';
import { OrganizationSchema, WebSiteSchema } from '@/components/seo/JsonLd';
import GoogleAnalytics from '@/components/seo/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sunvoltenergy.com'),
  title: {
    default: 'SunVolt Energy | Premium Solar Panels & Inverters Supplier',
    template: '%s | SunVolt Energy',
  },
  description:
    'Your trusted supplier of Tier-1 solar panels (Jinko, LONGi, JA Solar, Trina, Canadian Solar) and inverters. Competitive pricing, fast global delivery to 50+ countries.',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as never)) notFound();

  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans">
        <NextIntlClientProvider messages={messages}>
          <GoogleAnalytics />
          <OrganizationSchema />
          <WebSiteSchema />
          <TopBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <CTABanner />
          <Footer />
          <TawkChat />
          <FloatingChat />
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

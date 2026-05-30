import { company } from '@/data/company';

// Canonical site URL, used by sitemap/robots/metadata. Set NEXT_PUBLIC_SITE_URL
// in the deployment environment (Netlify) once a custom domain is bound; the
// fallback keeps things working before then. Trailing slash is stripped so
// callers can safely append paths.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://www.sunvoltenergy.com';

export function getWhatsAppLink(product?: string) {
  const message = product
    ? `Hi, I'm interested in ${product}. Please send me a quote.`
    : `Hi, I'd like to inquire about your solar products.`;
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}

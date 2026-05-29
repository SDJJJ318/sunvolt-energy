import { company } from '@/data/company';

export function getWhatsAppLink(product?: string) {
  const message = product
    ? `Hi, I'm interested in ${product}. Please send me a quote.`
    : `Hi, I'd like to inquire about your solar products.`;
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}

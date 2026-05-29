export type Brand =
  | 'jinko'
  | 'longi'
  | 'ja-solar'
  | 'trina'
  | 'canadian-solar'
  | 'deye'
  | 'goodwe'
  | 'growatt';

export type ProductCategory = 'solar-panel' | 'inverter';

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: Brand;
  category: ProductCategory;
  wattage?: string;
  specs: Record<string, string>;
  features: string[];
  image: string;
  featured: boolean;
  shortDescription: string;
}

export interface BrandInfo {
  id: Brand;
  name: string;
  category: ProductCategory;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  capacity: string;
  image: string;
  description: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  country: string;
  quote: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
}

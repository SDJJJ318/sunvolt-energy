import { BrandInfo } from '@/types';

export const brands: BrandInfo[] = [
  { id: 'jinko', name: 'Jinko Solar', category: 'solar-panel' },
  { id: 'longi', name: 'LONGi Solar', category: 'solar-panel' },
  { id: 'ja-solar', name: 'JA Solar', category: 'solar-panel' },
  { id: 'trina', name: 'Trina Solar', category: 'solar-panel' },
];

export const solarBrands = brands.filter(b => b.category === 'solar-panel');

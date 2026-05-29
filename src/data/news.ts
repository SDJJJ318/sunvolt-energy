import { NewsArticle } from '@/types';

export const news: NewsArticle[] = [
  {
    id: '1',
    slug: 'understanding-n-type-topcon-technology',
    title: 'Understanding N-type TOPCon Technology: The Future of Solar',
    excerpt: 'N-type TOPCon cells are revolutionizing solar panel efficiency. Learn why this technology is becoming the industry standard.',
    content: 'N-type TOPCon (Tunnel Oxide Passivated Contact) technology represents the next generation of solar cell design. Unlike traditional P-type PERC cells, N-type cells offer higher efficiency, lower degradation rates, and better performance in high-temperature environments. Major manufacturers like Jinko Solar, Trina Solar, and Canadian Solar have all shifted their production lines toward N-type TOPCon, with module efficiencies now exceeding 22.5%.',
    image: '/images/news/topcon.jpg',
    date: '2025-03-15',
  },
  {
    id: '2',
    slug: 'solar-energy-growth-africa-2025',
    title: 'Solar Energy Growth in Africa: Opportunities in 2025',
    excerpt: 'Africa\'s solar market is booming with new policies and investments driving rapid adoption across the continent.',
    content: 'The African solar market has seen unprecedented growth in 2025, driven by favorable government policies, declining panel costs, and increasing energy demand. Countries like Nigeria, Kenya, South Africa, and Egypt are leading the charge with ambitious renewable energy targets. The combination of high solar irradiance and growing electricity needs makes Africa one of the most promising markets for solar energy deployment.',
    image: '/images/news/africa-solar.jpg',
    date: '2025-02-28',
  },
  {
    id: '3',
    slug: 'how-to-choose-right-inverter',
    title: 'How to Choose the Right Inverter for Your Solar System',
    excerpt: 'Selecting the correct inverter is crucial for system performance. Here\'s a comprehensive guide to making the right choice.',
    content: 'The inverter is the heart of any solar system, converting DC power from panels into usable AC electricity. When choosing an inverter, consider factors like system size, single-phase vs three-phase requirements, hybrid vs on-grid functionality, and monitoring capabilities. Brands like Deye, GoodWe, and Growatt offer reliable options across all price points and application scenarios.',
    image: '/images/news/inverter-guide.jpg',
    date: '2025-02-10',
  },
  {
    id: '4',
    slug: 'bifacial-solar-panels-advantages',
    title: 'Bifacial Solar Panels: Double-Sided Energy Harvesting',
    excerpt: 'Bifacial panels can generate up to 30% more energy by capturing light from both sides. Learn about their advantages.',
    content: 'Bifacial solar panels are designed to capture sunlight from both the front and rear sides of the module, significantly increasing energy yield compared to traditional monofacial panels. When installed with proper ground clearance and reflective surfaces, bifacial modules can generate 10-30% additional energy. This technology is particularly effective in ground-mounted installations, carports, and areas with high albedo surfaces.',
    image: '/images/news/bifacial.jpg',
    date: '2025-01-20',
  },
];

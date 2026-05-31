import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1', slug: 'cambodia-beach-resort-400kw',
    title: '400kW Solar Panel System for Cambodia Beach Resort',
    location: 'Cambodia', capacity: '400 kW',
    image: '/images/projects/solution-1.jpg',
    description: 'As the resort is located close to the beach, it is difficult to use traditional power supply. The customer adopted our 20 kW off-grid solar system to supply power for the resort, ensuring uninterrupted electricity all day long. The system has been operating stably without any problems since May 2021.',
  },
  {
    id: '2', slug: 'australia-820kw-on-grid',
    title: '820 kW On-Grid Solar Power Station in Australia',
    location: 'Melbourne, Australia', capacity: '820 kW',
    image: '/images/projects/solution-2.jpg',
    description: 'This solar power system delivers high output with excellent performance. Installed in June 2019, the on-grid solar power station in Melbourne has been praised as a highly professional and reliable solar panel solution.',
  },
  {
    id: '3', slug: 'zimbabwe-5mw-commercial',
    title: '5 MW Solar Panel Project in Zimbabwe',
    location: 'Zimbabwe', capacity: '5 MW',
    image: '/images/projects/solution-3.jpg',
    description: 'A factory in a remote area of Zimbabwe was severely troubled by unstable power supply. We provided a complete 5MW high-efficiency solar panel solution, which effectively solved their energy problem. The client is satisfied with achieving energy independence and plans to expand cooperation.',
  },
  {
    id: '4', slug: 'uganda-12mw-commercial',
    title: '12 MW Solar Project in Uganda',
    location: 'Kampala, Uganda', capacity: '12 MW',
    image: '/images/projects/solution-4.jpg',
    description: 'After installing a 12MW solar power system in September 2021, the Ugandan customer confirmed stable operation with no faults at all. All users are highly satisfied with the performance, which fully meets local daily power needs.',
  },
  {
    id: '5', slug: 'romania-solar-wholesale',
    title: 'Romania Solar Panel Wholesale Project',
    location: 'Romania', capacity: 'Commercial',
    image: '/images/projects/solution-5.jpg',
    description: 'As solar energy demand keeps growing in Romania in Southeast Europe, this first cooperation with the client in April 2023 marks the beginning of a long-term collaboration. Monocrystalline solar panels sell well worldwide.',
  },
  {
    id: '6', slug: 'uganda-800kw-power',
    title: '800 kW Solar Panel Project in Uganda',
    location: 'Uganda', capacity: '800 kW',
    image: '/images/projects/solution-6.jpg',
    description: 'A local project manager in Uganda was facing serious power shortages. We provided an efficient 800 kW solar panel system in September 2023, which has been successfully put into operation. The problem of unstable power supply has been completely solved.',
  },
  {
    id: '7', slug: 'cambodia-20mw-on-grid',
    title: '20 MW Solar Panels for Cambodia',
    location: 'Cambodia', capacity: '20 MW',
    image: '/images/projects/solution-7.jpg',
    description: 'The on-grid solar power system converts solar energy into electricity without battery energy storage, transmitting power directly to the grid through an on-grid inverter. Installed in December 2022.',
  },
  {
    id: '8', slug: 'lebanon-solar-wholesale',
    title: 'Solar Panel Wholesale Project in Lebanon',
    location: 'Lebanon', capacity: 'Commercial',
    image: '/images/projects/solution-8.jpg',
    description: 'After purchasing and using these solar panels in July 2022, the client found they can efficiently convert solar energy into electricity with high conversion efficiency, working normally even in bad weather conditions.',
  },
  {
    id: '9', slug: 'thailand-8mw-off-grid',
    title: 'Thailand 8MW Off-Grid Solar Power System',
    location: 'Thailand', capacity: '8 MW',
    image: '/images/projects/solution-9.jpg',
    description: 'Installed in February 2022, the client expressed deep gratitude for the high-quality solar panels and reliable service. The sales team is professional and patient — an excellent supplier experience.',
  },
  {
    id: '10', slug: 'indonesia-3mw-jakarta',
    title: '3MW Solar Panel Project in Jakarta, Indonesia',
    location: 'Jakarta, Indonesia', capacity: '3 MW',
    image: '/images/projects/solution-10.jpg',
    description: 'Due to insufficient traditional power supply, the automobile sales headquarters often suffered power outages. After installing a 3MW off-grid solar power system in November 2019, the system performs very well with steady power generation every day.',
  },
  {
    id: '11', slug: 'libya-off-grid-project',
    title: 'Libya Off-Grid Solar Panel Project',
    location: 'Libya', capacity: 'Off-Grid',
    image: '/images/projects/solution-11.jpg',
    description: 'Supporting project for Libya Great Man-Made River, installed in February 2020. The solar panels run steadily with excellent product quality, providing reliable off-grid power for this large-scale infrastructure project.',
  },
  {
    id: '12', slug: 'cusco-5mw-farm',
    title: '5MW Solar Panel Project in Cusco',
    location: 'Cusco, Peru', capacity: '5 MW',
    image: '/images/projects/solution-12.jpg',
    description: 'Suitable for large farms in Cusco, installed in May 2020. High-quality solar panels and supporting accessories enable the power generation system to make full use of sunlight. Everything works perfectly.',
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find(p => p.slug === slug);
}


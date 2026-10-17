import { CompetitorBenchmark } from '../types';
import { UxStrategyPillar } from './benchmark';

// English versions of COMPETITOR_BENCHMARKS and UX_STRATEGY_PILLARS (same order)
export const COMPETITOR_BENCHMARKS_EN: CompetitorBenchmark[] = [
  {
    brand: 'Sunhouse',
    marketShare: '#1 mass-market household brand (North & Central Vietnam)',
    positioning: 'A household name for affordable, everyday appliances with a dense dealer network.',
    strengths: [
      'Deep distribution reaching district and commune level',
      'Wide product range (hobs, fans, small appliances, rice cookers)',
      'Prices accessible to the mass market'
    ],
    weaknesses: [
      'Cluttered website in a traditional retail style, crammed with banners',
      'Weak product search and attribute filters, lacking standardized specifications',
      'E-warranty activation still goes through SMS/hotline, unreliable web lookup',
      'Monotonous product photos with no modern living-space visuals'
    ],
    digitalExperienceGaps: [
      'No tool to choose appliances by room size (BTU/area)',
      'No visual multi-product comparison tool',
      'Slow web checkout with high drop-off from too many steps'
    ],
    chillamiAdvantage: 'Chillami is positioned as near-premium – quiet BLDC/Inverter technology, minimalist Nordic style, an instantly loading website with smart advisory tools and 1-click shopping.'
  },
  {
    brand: 'Kangaroo',
    marketShare: 'Leader in water purifiers, expanding into home appliances',
    positioning: 'A family health brand with a wide product range and strong advertising.',
    strengths: [
      'Strong brand recognition from TV commercials',
      'Good coverage through traditional dealers and electronics chains',
      'Many promotions and trade-in programs'
    ],
    weaknesses: [
      'Many promotional pop-ups that annoy premium customers',
      'Weak link between online shopping and directions to the nearest authorized dealer',
      'Spare part and accessory information is hard to find',
      'Mobile experience not optimized for one-handed use'
    ],
    digitalExperienceGaps: [
      'No fully automated e-warranty with digital QR/serial codes',
      'Product filters stop at price, with no deep filtering by smart features, motor or noise level'
    ],
    chillamiAdvantage: 'Chillami offers an elegant, ad-free interface, 1-second e-warranty serial lookup and real-time stock checks by showroom.'
  },
  {
    brand: 'Casper Vietnam',
    marketShare: 'Top 3 in air conditioners & TVs in Vietnam (mid-range segment)',
    positioning: 'Thai-standard products, an impressive 1-for-1 warranty and competitive prices.',
    strengths: [
      'Groundbreaking warranty policy that builds customer trust',
      'Fairly modern, minimalist product design',
      'Dynamic marketing aimed at young families'
    ],
    weaknesses: [
      'Website is mainly a brand catalogue / B2B resource for technicians and dealers rather than D2C',
      'No online payment or quick direct purchasing',
      'Shoppers have to find a dealer themselves or call the hotline'
    ],
    digitalExperienceGaps: [
      'No e-commerce cart with QR / card / 0% installment payments',
      'No interactive tool to size capacity for Vietnamese townhouses/apartments'
    ],
    chillamiAdvantage: 'Chillami covers both fronts: a D2C retail channel with 2-hour delivery and installation, and a B2B authorized dealer channel with clear discounts.'
  },
  {
    brand: 'Panasonic / Daikin Vietnam',
    marketShare: 'Dominant in the premium & project segments',
    positioning: 'Japanese brands with high durability and industry-leading air purification & energy-saving technology.',
    strengths: [
      'Outstanding brand reputation and quality',
      'World-leading Nanoe-X, Inverter and Swing Compressor technologies',
      'Popular in premium apartment projects'
    ],
    weaknesses: [
      'Expensive, with costly spare parts',
      'Heavy multinational-style website with complex menus that are hard to use on mobile',
      'No exact retail prices listed (customers must ask HVAC technicians for prices)'
    ],
    digitalExperienceGaps: [
      'Unclear shopping experience regarding prices and installation material costs',
      'Customer support through traditional static forms with slow responses'
    ],
    chillamiAdvantage: 'Chillami brings premium technology (BLDC SoftAir, German IGBT, Titanium Shield) at fair prices for Vietnamese families, with transparent pricing and all-inclusive free installation.'
  }
];

export const UX_STRATEGY_PILLARS_EN: UxStrategyPillar[] = [
  {
    pillar: '1. Transparent costs & installation',
    vietnamConsumerPainPoint: 'Customers fear surprise charges for installation materials (copper pipes, wiring, wall drilling) when buying ACs or water heaters online.',
    chillamiSolution: 'An "all-inclusive free delivery & installation" commitment shown clearly on product pages and at checkout.',
    keyFeatureInWebsite: '"Free Installation & 2h Delivery" badges and a clear materials breakdown on product detail pages.'
  },
  {
    pillar: '2. One-tap electronic warranty (E-Warranty) activation',
    vietnamConsumerPainPoint: 'Lost paper receipts, torn scratch cards and no idea how long the warranty has left.',
    chillamiSolution: 'An automated E-Warranty system using the serial number or phone number, with online repair history.',
    keyFeatureInWebsite: '"Warranty & Repairs" tab: activate in 30 seconds, check warranty status instantly and book a home technician.'
  },
  {
    pillar: '3. Accurate advisory tools (Smart Room Advisor)',
    vietnamConsumerPainPoint: 'Non-technical shoppers pick the wrong AC capacity (not cool enough or wasting power) or a noisy fan.',
    chillamiSolution: 'A smart BTU calculator that accounts for floor area, ceiling height, west-facing sun and number of people.',
    keyFeatureInWebsite: '"AC capacity by room" calculator and "BLDC SoftAir fan quiz" widgets that lead straight to the right model.'
  },
  {
    pillar: '4. Technical specification comparison',
    vietnamConsumerPainPoint: 'Hard to tell models in the same series apart, unsure between BLDC vs AC motors or Inverter vs non-Inverter.',
    chillamiSolution: 'A visual multi-product comparison matrix that highlights the key differences.',
    keyFeatureInWebsite: 'A "Compare" button on every product that opens a detailed side-by-side matrix.'
  },
  {
    pillar: '5. Checkout tailored to Vietnamese habits',
    vietnamConsumerPainPoint: 'Worried about card security; prefers scanning VietQR bank codes or paying COD after inspecting the goods.',
    chillamiSolution: 'Full support for dynamically generated VietQR codes, COD with inspection before payment, and 0% installments.',
    keyFeatureInWebsite: 'A simple 3-step checkout that auto-generates a VietQR code with the order ID for instant reconciliation.'
  }
];

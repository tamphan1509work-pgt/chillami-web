import { Product } from '../types';

// English overrides for PRODUCTS, keyed by product id.
// `variants` and `colorOptions` entries are merged by index onto the Vietnamese originals
// (so price, sku, hex and image always come from products.ts).
export interface ProductEnOverride {
  name: string;
  tagline: string;
  features: string[];
  specs: Record<string, string>;
  videoTitle?: string;
  variants?: { name: string; value: string; badge?: string }[];
  colorOptions?: { name: string }[];
  energyLabel?: Partial<NonNullable<Product['energyLabel']>>;
}

export const PRODUCTS_EN: Record<string, ProductEnOverride> = {
  'cf-100b': {
    name: 'Chillami Flow-100 BLDC Standing Fan',
    tagline: 'Ultra-quiet 13dB brushless BLDC motor with SoftAir natural breeze technology',
    features: [
      'Brushless DC Inverter motor saves 70% electricity',
      '24 adjustable speed levels with SoftAir natural breeze mode',
      'Ultra-low 13dB noise – ideal for babies and the elderly to sleep',
      'Smart off-timer up to 12 hours, remote control included',
      'Aerodynamic 7-blade design for soft, gentle airflow without wind blast'
    ],
    specs: {
      'Fan type': 'Standing fan',
      'Power': '28W (ultra energy-saving)',
      'Motor': 'DC Inverter (BLDC), 100% copper wiring',
      'Speed levels': '24 levels + 3 wind modes',
      'Blade diameter': '40 cm (7 aerodynamic blades)',
      'Minimum noise': '13 dB',
      'Remote control': 'Yes (multi-function remote + touch keys)',
      'Timer': '0.5 – 12 hours',
      'Height': 'Adjustable 90cm – 128cm',
      'Origin': 'Chillami R&D Technology'
    },
    videoTitle: 'Chillami Flow-100 BLDC review: 13dB noise test and SoftAir airflow',
    colorOptions: [
      { name: 'Snow White' },
      { name: 'Matte Black' },
      { name: 'Titanium Grey' }
    ],
    variants: [
      { name: 'Version', value: 'Standard Edition (24-speed remote)', badge: 'Most popular' },
      { name: 'Version', value: '20H Backup Battery Edition (Power-outage proof)', badge: '10,000mAh battery' },
      { name: 'Version', value: 'Smart WiFi AI Edition (App + voice control)', badge: 'Chillami IoT App' }
    ],
    energyLabel: {
      standard: 'TCVN 7826:2015 (Ministry of Industry and Trade)',
      efficiencyRatio: '2.95 m³/min.W (Top 5-star rating)',
      monthlyEstCost: '~18,000đ – 25,000đ/month (12h/day)',
      certifications: ['TCVN 7826:2015', 'Quacert Electrical Safety', 'ISO 9001:2015', 'EU RoHS', 'CE']
    }
  },
  'csw-80b': {
    name: 'Chillami Silent-Wall BLDC Wall Fan',
    tagline: 'Saves floor space, 120° 3D oscillation, smooth and vibration-free',
    features: [
      'Sturdy wall mount with anti-vibration rods that fully absorb oscillation',
      'Extra-wide 120° oscillation with flexible tilt angle',
      'New-generation BLDC motor runs cool, 24/7 continuous operation',
      'Remote control works through walls up to 8 meters'
    ],
    specs: {
      'Fan type': 'Household wall fan',
      'Power': '32W',
      'Motor': 'BLDC with premium ball bearings',
      'Speed levels': '12 soft wind levels',
      'Noise': '16 dB',
      'Control': 'Remote + auxiliary pull cord',
      'Oscillation': 'Automatic 120°',
      'Warranty': '24 months'
    },
    videoTitle: 'Install the Chillami Silent-Wall fan in just 5 minutes',
    variants: [
      { name: 'Color', value: 'White Cream' },
      { name: 'Color', value: 'Modern Grey' }
    ],
    energyLabel: {
      monthlyEstCost: '~20,000đ/month'
    }
  },
  'fb-180': {
    name: 'Chillami FB-180 Turbo Floor Air Circulator',
    tagline: 'Circulates fresh air in air-conditioned rooms, 15m air throw, 3D multi-directional oscillation',
    features: [
      'Spiral vortex grille (Vortex Airflow) spreads air evenly across the room',
      'Cools air-conditioned rooms twice as fast and removes temperature hot spots',
      'Smart 3D oscillation: 90° vertical tilt and 90° horizontal swing',
      'Compact modern design for tabletop or floor use'
    ],
    specs: {
      'Fan type': 'Floor air circulator',
      'Power': '38W',
      'Air throw': 'Up to 15 meters',
      'Oscillation': '3D multi-directional (horizontal + vertical)',
      'Timer': '8 hours',
      'Weight': '2.6 kg'
    },
    videoTitle: 'Testing the FB-180 Turbo Vortex airflow at 15m',
    variants: [
      { name: 'Configuration', value: 'Mechanical Knob Edition' },
      { name: 'Configuration', value: '3D Electronic Touch + Remote Edition', badge: 'Recommended' }
    ],
    energyLabel: {
      monthlyEstCost: '~24,000đ/month'
    }
  },
  'csa-200x': {
    name: 'Chillami Smart-Air IoT WiFi Smart Fan',
    tagline: 'Smartphone app control, temperature sensor automatically adjusts wind speed',
    features: [
      'Built-in room temperature & humidity sensor automatically picks the best wind speed',
      'WiFi control via the Chillami Smart Home app on iOS/Android',
      'Works with Google Home and Amazon Alexa voice commands',
      'Japanese BLDC motor with backup battery against sudden power cuts'
    ],
    specs: {
      'Fan type': 'IoT smart standing fan',
      'Connectivity': 'WiFi 2.4GHz + Bluetooth Mesh',
      'Power': '30W',
      'Sensor': 'High-precision thermo-hygrometer',
      'Voice assistants': 'Google Assistant, Alexa, Apple Siri',
      'Noise': '12 dB (night sleep mode)'
    },
    videoTitle: 'How to connect the Chillami Home app & voice control with the CSA-200X',
    variants: [
      { name: 'Version', value: 'Standard WiFi Edition (White)' },
      { name: 'Version', value: 'Pro Edition + 24H Backup Battery (Dark Grey)', badge: 'Top of the line' }
    ],
    energyLabel: {
      monthlyEstCost: '~19,000đ/month',
      certifications: ['TCVN 7826:2015', 'Quacert', 'ISO 9001:2015', 'RoHS', 'CE', 'MIC Telecom Conformity']
    }
  },
  'cpg-300': {
    name: 'Chillami PowerGo-Pro 15000mAh Rechargeable Fan',
    tagline: '15,000mAh lithium battery runs 28 hours non-stop, LED light, Type-C phone charging',
    features: [
      'The #1 solution for power outages and family picnics',
      'Durable LiFePO4 lithium battery that resists degradation, auto cut-off when full',
      'Type-C fast-charging output for your phone during power cuts',
      '3-level emergency LED light, soft and gentle at night'
    ],
    specs: {
      'Battery capacity': '15,000 mAh (safe LiFePO4)',
      'Runtime': '8 hours (high speed) – 28 hours (medium speed)',
      'Charging time': '3.5 hours via Type-C PD 30W',
      'Output ports': 'USB-A 18W, Type-C 20W for smartphones',
      'Weight': '1.8 kg'
    },
    videoTitle: 'Unboxing the PowerGo-Pro rechargeable fan: 28-hour battery runtime test',
    variants: [
      { name: 'Color & Battery', value: 'Military Olive – 15,000mAh' },
      { name: 'Color & Battery', value: 'Safari White – 15,000mAh' },
      { name: 'Color & Battery', value: 'Solar Upgrade 20,000mAh (with solar charging panel)', badge: 'Solar battery included' }
    ],
    energyLabel: {
      efficiencyRatio: 'Safe, fire- and explosion-proof LiFePO4 battery',
      monthlyEstCost: '~6,000đ/month',
      certifications: ['TCVN 7826', 'Quacert', 'CE', 'RoHS', 'UN38.3 Air Transport Safety']
    }
  },
  'cac-09eco': {
    name: 'Chillami Eco-Inverter 9000 BTU Air Conditioner',
    tagline: 'Health Guard anti-mold technology, pure cooling, 65% power savings with Eco-Inverter',
    features: [
      'Exclusive Health Guard technology kills bacteria and prevents mold in the indoor unit',
      'Smart Full Inverter keeps temperature stable within ±0.5°C',
      'Ag+ silver-ion antibacterial filter and PM2.5 fine dust mesh protect your lungs',
      '4-step i-Clean self-cleaning indoor coil prevents dust build-up',
      'Golden Fin gold-coated condenser resists salt-air corrosion',
      'Free delivery and standard installation at your home'
    ],
    specs: {
      'Cooling capacity': '9000 BTU / 1.0 HP (rooms < 15m²)',
      'Type': 'Cooling-only Inverter with Health Guard',
      'Energy efficiency': 'CSPF 5.25 (5-star energy saving)',
      'Refrigerant': 'New-generation eco-friendly R32',
      'Indoor unit noise': 'Only 19 dB (super-quiet mode)',
      'Copper piping': '100% inner-grooved for better heat exchange',
      'Made at': 'Homihub factory (Hung Yen, Vietnam)',
      'Warranty': '3 years unit, 5 years Inverter compressor with 1-for-1 replacement'
    },
    videoTitle: 'Free home delivery & installation process for the Chillami Eco-Inverter AC',
    variants: [
      { name: 'Capacity', value: '9000 BTU / 1.0 HP (rooms < 15m²)', badge: 'Small bedroom' },
      { name: 'Capacity', value: '12000 BTU / 1.5 HP (rooms 15-22m²)', badge: 'Most popular' },
      { name: 'Capacity', value: '18000 BTU / 2.0 HP (rooms 22-30m²)', badge: 'Large living room' }
    ],
    energyLabel: {
      standard: 'TCVN 7830:2015 (Ministry of Industry and Trade)',
      efficiencyRatio: 'CSPF 5.25 (Outstanding 5-star energy rating)',
      monthlyEstCost: '~280,000đ – 360,000đ/month (8h/night)'
    }
  },
  'cac-09slim': {
    name: 'Chillami Slim Series v3 Ultra-Thin Air Conditioner',
    tagline: 'Minimalist Scandinavian design only 16.8cm thick, ceiling airflow avoids direct drafts',
    features: [
      'Elegant curved Slim design that complements premium apartment interiors',
      'Smart dual louvers push air to the ceiling (Coanda Airflow) – no cold headaches',
      'SmartEye presence sensor raises the temperature when you leave to save power',
      'Hidden LED display under the front panel shows temperature discreetly'
    ],
    specs: {
      'Capacity': '9000 BTU Dual Inverter',
      'Indoor unit thickness': '16.8 cm (slimmest in its class)',
      'Airflow technology': 'Coanda ceiling airflow prevents chills',
      'Air purification': 'Plasma AirPurifier negative ion generator',
      'Warranty': '36 months official'
    }
  },
  'cic-2200d': {
    name: 'Chillami MasterChef Dual-IGBT Double Induction Hob',
    tagline: 'German Infineon IGBT power board, continuous low simmer at levels 1-3, beveled Kanger glass',
    features: [
      'Inverter technology simmers continuously at low heat – stews without burning',
      'Kanger Ceramic glass withstands thermal shock up to 750°C, 4-edge diamond bevel resists scratches',
      'Super-fast 2400W Booster for each cooking zone',
      'ChildLock safety lock, spill sensor shuts off within 3 seconds'
    ],
    specs: {
      'Cooking zones': '2 independent induction zones',
      'Total power': '4000W (2400W Booster per zone)',
      'Power board': 'Infineon IGBT (Germany)',
      'Control panel': 'Independent touch sliders with 9 heat levels',
      'Glass size': '730 x 430 mm',
      'Cut-out size': '680 x 390 mm',
      'Safety features': 'Overheat cut-off, key lock, spill sensor'
    }
  },
  'cic-1000s': {
    name: 'Chillami Solo-Pro Ultra-Slim Single Induction Hob',
    tagline: 'Only 3.5cm thin, powerful 2200W, free premium 304 stainless steel hot pot included',
    features: [
      'Slim, light modern design – easy to store or take to hot pot parties',
      'Double copper coil transfers heat fast and saves electricity',
      'Tempered crystal glass wipes clean of grease with just a damp cloth'
    ],
    specs: {
      'Power': '2200W',
      'Thickness': '3.5 cm',
      'Control': 'Touch & Slide',
      'Weight': '2.2 kg',
      'Free gift': 'Genuine 304 stainless steel hot pot'
    }
  },
  'chh-90t': {
    name: 'Chillami AirPure T-90 WaveSensor T-Shape Range Hood',
    tagline: 'Touchless WaveSensor gesture control, storm-force 1200m³/h suction, sealed grease-proof motor',
    features: [
      'WaveSensor technology: wave left-right to switch on/off and change 3 suction levels with greasy hands',
      'Powerful 1200 m³/h suction clears fish and frying smells in just 60 seconds',
      'Sealed BLDC turbine motor resists grease build-up, lasts over 10 years',
      'Removable 304 stainless steel filters are dishwasher-safe'
    ],
    specs: {
      'Style': 'Modern European T-shape (900mm)',
      'Suction power': '1200 m³/h',
      'Motor': 'Sealed twin BLDC turbine, low-noise',
      'Max noise': '< 52 dB (very quiet vs. ordinary hoods)',
      'Control': 'Wave gesture sensor + touch keys',
      'Lighting': 'Warm anti-glare LED bar 2 x 1.5W'
    }
  },
  'chh-75k': {
    name: 'Chillami SlopeCurved K-75 Angled Glass Range Hood',
    tagline: 'Angled black glass keeps your head clear while cooking, smart auto-opening smoke flap',
    features: [
      '45-degree angled glass design gives more headroom for the cook',
      'Glass flap automatically lifts open to capture smoke when switched on',
      'Activated carbon filter plus flexible outdoor exhaust duct option'
    ],
    specs: {
      'Style': 'Elegant angled glass (750mm)',
      'Suction power': '1350 m³/h',
      'Noise': '49 dB',
      'Smoke flap': 'Electronic auto-lift',
      'Warranty': '36 months official'
    }
  },
  'cwh-20sq': {
    name: 'Chillami Titanium-Shield 20L Square Water Heater',
    tagline: 'Durable Titanium enamel with 10-year tank warranty, new-generation dual ELCB anti-shock, 72h heat retention',
    features: [
      'Micro-crystal Titanium enamel tank withstands 8 Bar water pressure, fully limescale-proof',
      'Pure Incoloy 840 alloy heating element – durable, fast heating, scale-free',
      'TSS dual safety system with electronic ELCB anti-shock and bipolar thermal cut-off relay',
      'High-density SuperFoam insulation keeps water hot for 72 hours'
    ],
    specs: {
      'Capacity': '20 liters (for families of 2-3)',
      'Power': '2500W',
      'Style': 'Compact square for modern bathroom false ceilings',
      'Display': 'LED light shows when water is ready',
      'Anti-shock': 'Ultra-sensitive ELCB (cuts off in 0.01 seconds)',
      'Warranty': '10 years tank, 3 years components'
    },
    variants: [
      { name: 'Capacity', value: '15L (for 1-2 people)' },
      { name: 'Capacity', value: '20L (for 2-3 people)' },
      { name: 'Capacity', value: '30L (for 3-5 people)' }
    ]
  },
  'cwh-45dir': {
    name: 'Chillami Instant-Hot Turbo Direct Water Heater',
    tagline: 'Instant hot water in 2 seconds, whisper-quiet DC booster pump for low pressure, 5-mode massage shower head',
    features: [
      'Whisper-quiet DC inverter booster pump triples water pressure for high-rise homes or weak supply',
      'Instant heating with no waiting thanks to a 4500W copper heating element',
      'Flow sensor cuts power automatically when water stops, preventing fire and explosion',
      'Elegant chrome-plated shower set with 5 ionic massage spray modes'
    ],
    specs: {
      'Heater type': 'Direct (instant) heating',
      'Power': '4500W',
      'Booster pump': 'Yes (quiet DC inverter pump)',
      'Shower head': '5-jet antibacterial Ag+ shower head',
      'Warranty': '24 months'
    }
  },
  'crf-01': {
    name: 'Chillami Magic-Remote Smart Remote Control',
    tagline: 'Compatible with all Chillami fan and AC models, wide-angle infrared signal',
    features: [
      'Soft rubber keys with antibacterial coating',
      'Multi-directional infrared – no need to point directly at the device',
      'Built-in mini display shows device status'
    ],
    specs: {
      'Compatibility': 'Chillami fan & air conditioner ranges',
      'Battery': '2 AAA batteries (included)',
      'Range': '8 – 10 meters'
    }
  },
  'cff-02': {
    name: 'Activated Carbon Odor & Fine Dust Filter Set',
    tagline: 'Removes 99.9% of range hood grease odors and harmful fumes',
    features: [
      'Made from high-density coconut shell activated carbon',
      'Replace every 6-9 months to keep the best odor removal performance'
    ],
    specs: {
      'Packaging': 'Box of 2 round filters',
      'Shelf life': '3 years with seal unopened'
    }
  }
};

export const CATEGORIES_CONFIG_EN: Record<string, { name: string; subtitle: string; subcategories: string[] }> = {
  fan: {
    name: 'Electric Fans',
    subtitle: 'Ultra-quiet BLDC motor & SoftAir',
    subcategories: ['All fans', 'Standing fans', 'Wall fans', 'FB-180 floor fan', 'Energy-saving BLDC fans', 'IoT smart fans', 'Rechargeable fans']
  },
  ac: {
    name: 'Air Conditioners',
    subtitle: 'Eco Inverter & Coanda ceiling airflow',
    subcategories: ['All air conditioners', '9000 BTU', '12000 BTU', 'Slim Series v3', 'Series v5']
  },
  induction: {
    name: 'Induction Hobs',
    subtitle: 'German IGBT board for gentle simmering',
    subcategories: ['All induction hobs', 'Built-in double hobs', 'Single hobs']
  },
  hood: {
    name: 'Range Hoods',
    subtitle: 'WaveSensor gesture control',
    subcategories: ['All range hoods', 'Modern T-shape', 'Elegant angled glass']
  },
  water_heater: {
    name: 'Water Heaters',
    subtitle: 'Anti-corrosion Titanium enamel & ELCB',
    subcategories: ['All water heaters', 'Storage 15L/20L/30L', 'Direct Turbo heaters']
  },
  accessory: {
    name: 'Accessories & Parts',
    subtitle: 'Genuine Chillami spare parts',
    subcategories: ['All parts', 'Smart remotes', 'Activated carbon filters']
  }
};

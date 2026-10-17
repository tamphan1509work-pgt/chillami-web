import { FaqItem } from './faqs';

// English versions of FAQS (same ids and categories)
export const FAQS_EN: FaqItem[] = [
  {
    id: 'f1',
    category: 'mua-hang',
    question: 'What payment methods does Chillami accept?',
    answer: 'Chillami supports a range of payment methods: 1) Cash on delivery (COD) after you inspect the appliance; 2) Free instant bank transfer via VietQR; 3) Credit/ATM cards through the secure VNPAY gateway; 4) 0% interest installments over 3, 6 or 12 months by credit card.'
  },
  {
    id: 'f2',
    category: 'lap-dat',
    question: 'Is installation free when I buy an air conditioner or water heater?',
    answer: 'Yes! Chillami offers an exclusive policy: 100% free standard home installation for air conditioners, range hoods and water heaters in Hanoi, Ho Chi Minh City, Da Nang, Hai Phong and Can Tho. A specially trained official technician will contact you to book the most convenient time.'
  },
  {
    id: 'f3',
    category: 'bao-hanh',
    question: 'How does the 30-day 1-for-1 replacement policy work?',
    answer: 'If your product has any manufacturing defect within 30 days of activation or delivery, Chillami will replace it with a brand-new sealed unit at your home at no extra cost.'
  },
  {
    id: 'f4',
    category: 'bao-hanh',
    question: 'How do I activate my electronic warranty (E-Warranty)?',
    answer: 'It is very simple: go to "Activate warranty" on the Chillami website, enter the serial number printed on the unit or scan the QR code on the warranty card, and fill in your phone number. The system sends an SMS confirmation immediately – no paperwork to keep.'
  },
  {
    id: 'f5',
    category: 'cong-nghe',
    question: 'How is the BLDC motor in Chillami fans different from ordinary fans?',
    answer: 'A BLDC (Brushless DC) motor uses permanent magnets and an electronically controlled magnetic field. Its advantages: up to 70% lower power consumption, ultra-quiet operation from just 13dB (no humming), no overheating even when running day and night, and a lifespan 3-4 times longer than traditional AC motors.'
  },
  {
    id: 'f6',
    category: 'cong-nghe',
    question: 'How does the dual IGBT board in Chillami induction hobs make food taste better?',
    answer: 'Ordinary induction hobs use relay switching (on/off) at low heat, so the pot boils up and then stops, which easily burns food or makes soup boil over. Chillami\'s Infineon IGBT board modulates power continuously (Continuous Inverter), keeping a steady gentle simmer even at the lowest power levels (1-3) – perfect for Vietnamese braised, stewed and slow-cooked dishes.'
  }
];

// English overrides for ROOM_SOLUTIONS, keyed by id
export const ROOM_SOLUTIONS_EN: Record<string, { title: string; tagline: string; tips: string[] }> = {
  bedroom: {
    title: 'Bedroom Solutions',
    tagline: 'Deep, quiet sleep with gentle temperatures and no dry throat',
    tips: [
      'Choose a BLDC fan with noise below 20dB so it does not disturb REM sleep.',
      'Pick a Slim Coanda air conditioner that blows air toward the ceiling, not directly at your head and chest.',
      'Use the Sleep Curve mode, which raises the temperature by 1°C every 2 hours to avoid early-morning chills.'
    ]
  },
  living: {
    title: 'Living Room Solutions',
    tagline: 'Elegant open space with cool, fresh circulating air',
    tips: [
      'Pair the FB-180 vortex circulator with your living room AC to cool the whole room evenly in just 3 minutes.',
      'Use an IoT WiFi smart fan to switch it on remotely before you get home.'
    ]
  },
  kitchen: {
    title: 'Kitchen Solutions',
    tagline: 'A clean, airy kitchen free of grease smells for relaxed cooking',
    tips: [
      'The WaveSensor gesture-controlled range hood switches on without getting grease on the buttons.',
      'A double induction hob with gentle low-level simmering keeps traditional braised dishes rich in flavor.'
    ]
  },
  bathroom: {
    title: 'Bathroom Solutions',
    tagline: 'Warm water with complete safety for a refreshing, relaxing bath',
    tips: [
      'A Titanium enamel tank with a 10-year warranty suits water with high alum or lime content.',
      'The TSS dual safety system and electronic ELCB anti-shock cut power within 0.01s of any leakage.'
    ]
  }
};

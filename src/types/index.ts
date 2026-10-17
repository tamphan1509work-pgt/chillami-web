export interface Product {
  id: string;
  name: string;
  model: string;
  category: 'fan' | 'ac' | 'induction' | 'hood' | 'water_heater' | 'accessory';
  subCategory: string; // e.g. 'quat-cay', 'quat-treo-tuong', 'quat-bldc', 'dieu-hoa-9k', etc.
  price: number;
  originalPrice: number;
  discountPercent?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  gallery: string[];
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  isPromotion?: boolean;
  tagline: string;
  features: string[];
  specs: Record<string, string>;
  powerWatt?: number;
  energyRating?: number; // 1-5 stars
  warrantyMonths: number;
  variants?: {
    name: string;
    value: string;
    price: number;
    sku: string;
    colorHex?: string;
    image?: string;
    badge?: string;
  }[];
  colorOptions?: {
    name: string;
    hex: string;
    image?: string;
  }[];
  energyLabel?: {
    stars: number; // 1-5 stars
    standard: string; // e.g. 'TCVN 7826:2015'
    efficiencyRatio: string; // e.g. '2.95 m³/min.W' or 'CSPF 5.45'
    monthlyEstCost: string; // e.g. '~18.000đ - 25.000đ/tháng'
    savingPercent: number; // e.g. 70
    certifications: string[]; // ['TCVN 7826', 'Quacert', 'ISO 9001', 'CE', 'RoHS']
  };
  manualDownloadUrl?: string;
  videoUrl?: string;
  videoTitle?: string;
  videoDuration?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariant?: string;
  unitPrice: number;
}

export interface Dealer {
  id: string;
  name: string;
  type: 'Flagship Showroom' | 'Đại lý ủy quyền' | 'Siêu thị Điện máy đối tác';
  address: string;
  province: string;
  district: string;
  phone: string;
  openHours: string;
  hasParking: boolean;
  coordinates: { lat: number; lng: number };
  badges: string[];
}

export interface CompetitorBenchmark {
  brand: string;
  marketShare: string;
  positioning: string;
  strengths: string[];
  weaknesses: string[];
  digitalExperienceGaps: string[];
  chillamiAdvantage: string;
}

export interface WarrantyRecord {
  serialNumber: string;
  productName: string;
  model: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  purchaseDate: string;
  warrantyExpiry: string;
  status: 'active' | 'expired' | 'pending';
  dealerName: string;
}

export interface Order {
  id: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  items: CartItem[];
  totalAmount: number;
  paymentMethod: 'cod' | 'vietqr' | 'credit' | 'installment';
  status: 'processing' | 'confirmed' | 'shipping' | 'delivered';
  createdAt: string;
  estimatedDelivery: string;
  trackingTimeline: {
    title: string;
    time: string;
    done: boolean;
    description: string;
  }[];
}

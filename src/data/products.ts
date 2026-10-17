import { Product } from '../types';

// Livotec products listed on homichi.com (source: homichi_san_pham.csv).
// Prices of 0 with contactForPrice are shown as "Liên hệ" (contact for price).
export const PRODUCTS: Product[] = [
  {
    id: 'lio-666v',
    name: 'Bếp từ đôi Livotec E-smart LIO-666V',
    brand: 'Livotec',
    model: 'LIO-666V',
    category: 'induction',
    subCategory: 'bep-tu',
    price: 0,
    originalPrice: 0,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/10/livotec-e-smart-lio-666v-06-07-1.png-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/10/livotec-e-smart-lio-666v-06-07-1.png.webp'
    ],
    inStock: true,
    tagline: 'Bếp từ đôi chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LIO-666V',
      'Danh mục': 'Bếp từ',
      'Số vùng nấu': '2'
    },
    sourceUrl: 'https://homichi.com/bep-tu-doi-livotec-e-smart-lio-666v/',
    contactForPrice: true
  },
  {
    id: 'lid-888',
    name: 'Bếp điện từ đôi Livotec LID-888',
    brand: 'Livotec',
    model: 'LID-888',
    category: 'induction',
    subCategory: 'bep-tu',
    price: 0,
    originalPrice: 0,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/10/LID-888-02.png-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/10/LID-888-02.png.webp'
    ],
    inStock: true,
    tagline: 'Bếp điện từ đôi chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LID-888',
      'Danh mục': 'Bếp từ',
      'Số vùng nấu': '2',
      'Loại bếp': 'Điện từ (từ + hồng ngoại)'
    },
    sourceUrl: 'https://homichi.com/bep-dien-tu-doi-livotec-lid-888/',
    contactForPrice: true
  },
  {
    id: 'lv-200',
    name: 'Máy hút bụi không dây Livotec LV-200',
    brand: 'Livotec',
    model: 'LV-200',
    category: 'vacuum',
    subCategory: 'may-hut-bui',
    price: 0,
    originalPrice: 0,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_byl7p5byl7p5byl7-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_byl7p5byl7p5byl7.webp'
    ],
    inStock: true,
    tagline: 'Máy hút bụi không dây chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LV-200',
      'Danh mục': 'Máy hút bụi',
      'Kết nối': 'Không dây (dùng pin)'
    },
    sourceUrl: 'https://homichi.com/may-hut-bui-khong-day-livotec-lv-200/',
    contactForPrice: true
  },
  {
    id: 'lv-100',
    name: 'Máy hút bụi không dây Livotec LV-100',
    brand: 'Livotec',
    model: 'LV-100',
    category: 'vacuum',
    subCategory: 'may-hut-bui',
    price: 2700000,
    originalPrice: 2700000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_l2dv8hl2dv8hl2dv-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_l2dv8hl2dv8hl2dv.webp'
    ],
    inStock: true,
    tagline: 'Máy hút bụi không dây chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LV-100',
      'Danh mục': 'Máy hút bụi',
      'Kết nối': 'Không dây (dùng pin)'
    },
    sourceUrl: 'https://homichi.com/may-hut-bui-khong-day-livotec-lv-99/'
  },
  {
    id: 'lv-99',
    name: 'Máy hút bụi không dây Livotec LV-99',
    brand: 'Livotec',
    model: 'LV-99',
    category: 'vacuum',
    subCategory: 'may-hut-bui',
    price: 1800000,
    originalPrice: 1800000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_x319oax319oax319-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_x319oax319oax319.webp'
    ],
    inStock: true,
    tagline: 'Máy hút bụi không dây chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LV-99',
      'Danh mục': 'Máy hút bụi',
      'Kết nối': 'Không dây (dùng pin)'
    },
    sourceUrl: 'https://homichi.com/may-hut-bui-khong-day-livotec-lv-99-2/'
  },
  {
    id: 'lac-g62',
    name: 'Quạt điều hòa Livotec LAC-G62',
    brand: 'Livotec',
    model: 'LAC-G62',
    category: 'air_cooler',
    subCategory: 'quat-dieu-hoa',
    price: 3200000,
    originalPrice: 3200000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_z9gfrbz9gfrbz9gf-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_z9gfrbz9gfrbz9gf.webp'
    ],
    inStock: true,
    tagline: 'Quạt điều hòa chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LAC-G62',
      'Danh mục': 'Quạt điều hòa'
    },
    sourceUrl: 'https://homichi.com/quat-dieu-hoa-livotec-lac-g62/'
  },
  {
    id: 'lac-g60',
    name: 'Quạt điều hòa Livotec LAC-G60',
    brand: 'Livotec',
    model: 'LAC-G60',
    category: 'air_cooler',
    subCategory: 'quat-dieu-hoa',
    price: 2400000,
    originalPrice: 2400000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_8s6ooo8s6ooo8s6o-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_8s6ooo8s6ooo8s6o.webp'
    ],
    inStock: true,
    tagline: 'Quạt điều hòa chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LAC-G60',
      'Danh mục': 'Quạt điều hòa'
    },
    sourceUrl: 'https://homichi.com/quat-dieu-hoa-livotec-lac-g60/'
  },
  {
    id: 'lac-h66',
    name: 'Quạt điều hòa Livotec LAC-H66',
    brand: 'Livotec',
    model: 'LAC-H66',
    category: 'air_cooler',
    subCategory: 'quat-dieu-hoa',
    price: 8990000,
    originalPrice: 8990000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_8b2t7j8b2t7j8b2t-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_8b2t7j8b2t7j8b2t.webp'
    ],
    inStock: true,
    tagline: 'Quạt điều hòa chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LAC-H66',
      'Danh mục': 'Quạt điều hòa'
    },
    sourceUrl: 'https://homichi.com/quat-dieu-hoa-livotec-lac-h66/'
  },
  {
    id: 'lac-g66s',
    name: 'Quạt điều hòa Livotec LAC-G66S',
    brand: 'Livotec',
    model: 'LAC-G66S',
    category: 'air_cooler',
    subCategory: 'quat-dieu-hoa',
    price: 7590000,
    originalPrice: 7590000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_74v8gl74v8gl74v8-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_74v8gl74v8gl74v8.webp'
    ],
    inStock: true,
    tagline: 'Quạt điều hòa chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LAC-G66S',
      'Danh mục': 'Quạt điều hòa'
    },
    sourceUrl: 'https://homichi.com/quat-dieu-hoa-livotec-lac-g66s/'
  },
  {
    id: 'lac-h66s',
    name: 'Quạt điều hòa Livotec LAC-H66S',
    brand: 'Livotec',
    model: 'LAC-H66S',
    category: 'air_cooler',
    subCategory: 'quat-dieu-hoa',
    price: 0,
    originalPrice: 0,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/09/quat-dieu-hoa-livotec-lac-h66s-1.png-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/09/quat-dieu-hoa-livotec-lac-h66s-1.png.webp'
    ],
    inStock: true,
    tagline: 'Quạt điều hòa chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LAC-H66S',
      'Danh mục': 'Quạt điều hòa'
    },
    sourceUrl: 'https://homichi.com/quat-dieu-hoa-livotec-lac-h66s/',
    contactForPrice: true
  },
  {
    id: 'lch-1597d',
    name: 'Máy sưởi gốm Livotec LCH-1597D',
    brand: 'Livotec',
    model: 'LCH-1597D',
    category: 'heater',
    subCategory: 'may-suoi',
    price: 1640000,
    originalPrice: 1640000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/09/thumnail-may-suoi-gom-livotec-lch-1597d-2.png-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/09/thumnail-may-suoi-gom-livotec-lch-1597d-2.png.webp'
    ],
    inStock: true,
    tagline: 'Máy sưởi gốm chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LCH-1597D',
      'Danh mục': 'Máy sưởi',
      'Bộ phận sưởi': 'Gốm (ceramic)'
    },
    sourceUrl: 'https://homichi.com/may-suoi-gom-livotec-lch-1597d/'
  },
  {
    id: 'lch-2089t',
    name: 'Máy sưởi gốm Livotec LCH-2089T',
    brand: 'Livotec',
    model: 'LCH-2089T',
    category: 'heater',
    subCategory: 'may-suoi',
    price: 1850000,
    originalPrice: 1850000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/09/may-suoi-livotec-lch-2089t-2.png-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/09/may-suoi-livotec-lch-2089t-2.png.webp'
    ],
    inStock: true,
    tagline: 'Máy sưởi gốm chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LCH-2089T',
      'Danh mục': 'Máy sưởi',
      'Bộ phận sưởi': 'Gốm (ceramic)'
    },
    sourceUrl: 'https://homichi.com/may-suoi-gom-livotec-lch-2089t/'
  },
  {
    id: 'lch-2079t',
    name: 'Máy sưởi gốm Livotec LCH-2079T',
    brand: 'Livotec',
    model: 'LCH-2079T',
    category: 'heater',
    subCategory: 'may-suoi',
    price: 2400000,
    originalPrice: 2400000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/09/may-suoi-gom-livotec-lch-2079t-3-1.png-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/09/may-suoi-gom-livotec-lch-2079t-3-1.png.webp'
    ],
    inStock: true,
    tagline: 'Máy sưởi gốm chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LCH-2079T',
      'Danh mục': 'Máy sưởi',
      'Bộ phận sưởi': 'Gốm (ceramic)'
    },
    sourceUrl: 'https://homichi.com/may-suoi-gom-livotec-lch-2079t/'
  },
  {
    id: 'lhd-18iu',
    name: 'Máy hút ẩm Livotec LHD-18IU',
    brand: 'Livotec',
    model: 'LHD-18IU',
    category: 'dehumidifier',
    subCategory: 'may-hut-am',
    price: 5789000,
    originalPrice: 5789000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_ydqjy9ydqjy9ydqj-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_ydqjy9ydqjy9ydqj.webp'
    ],
    inStock: true,
    tagline: 'Máy hút ẩm chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LHD-18IU',
      'Danh mục': 'Máy hút ẩm'
    },
    sourceUrl: 'https://homichi.com/may-hut-am-livotec-lhd-18iu/'
  },
  {
    id: 'lhd-25ih',
    name: 'Máy hút ẩm Livotec LHD-25IH',
    brand: 'Livotec',
    model: 'LHD-25IH',
    category: 'dehumidifier',
    subCategory: 'may-hut-am',
    price: 7610000,
    originalPrice: 7610000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_6vp0zi6vp0zi6vp0-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_6vp0zi6vp0zi6vp0.webp'
    ],
    inStock: true,
    tagline: 'Máy hút ẩm chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LHD-25IH',
      'Danh mục': 'Máy hút ẩm'
    },
    sourceUrl: 'https://homichi.com/may-hut-am-livotec-lhd-25ih/'
  },
  {
    id: 'lhd-36iu',
    name: 'Máy hút ẩm Livotec LHD-36IU',
    brand: 'Livotec',
    model: 'LHD-36IU',
    category: 'dehumidifier',
    subCategory: 'may-hut-am',
    price: 7860000,
    originalPrice: 7860000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_723v3c723v3c723v-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_723v3c723v3c723v.webp'
    ],
    inStock: true,
    tagline: 'Máy hút ẩm chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LHD-36IU',
      'Danh mục': 'Máy hút ẩm'
    },
    sourceUrl: 'https://homichi.com/may-hut-am-livotec-lhd-36iu-2/'
  },
  {
    id: 'lwh-i30a26s',
    name: 'Bình nước nóng 30L gián tiếp LWH-I30A26S',
    brand: 'Livotec',
    model: 'LWH-I30A26S',
    category: 'water_heater',
    subCategory: 'binh-nuoc-nong',
    price: 4990000,
    originalPrice: 4990000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_g59k0sg59k0sg59k-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_g59k0sg59k0sg59k.webp'
    ],
    inStock: true,
    tagline: 'Bình nước nóng 30L gián tiếp chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LWH-I30A26S',
      'Danh mục': 'Bình nước nóng',
      'Dung tích': '30 lít',
      'Kiểu làm nóng': 'Gián tiếp'
    },
    sourceUrl: 'https://homichi.com/binh-nuoc-nong-30l-gian-tiep-lwh-i30a26s/'
  },
  {
    id: 'lwh-i30t26',
    name: 'Bình nước nóng 30L gián tiếp LWH-I30T26',
    brand: 'Livotec',
    model: 'LWH-I30T26',
    category: 'water_heater',
    subCategory: 'binh-nuoc-nong',
    price: 3990000,
    originalPrice: 3990000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_aj2o82aj2o82aj2o-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_aj2o82aj2o82aj2o.webp'
    ],
    inStock: true,
    tagline: 'Bình nước nóng 30L gián tiếp chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LWH-I30T26',
      'Danh mục': 'Bình nước nóng',
      'Dung tích': '30 lít',
      'Kiểu làm nóng': 'Gián tiếp'
    },
    sourceUrl: 'https://homichi.com/binh-nuoc-nong-30l-gian-tiep-lwh-i30t26/'
  },
  {
    id: 'lwh-i30b26',
    name: 'Bình nước nóng 30L gián tiếp LWH-I30B26',
    brand: 'Livotec',
    model: 'LWH-I30B26',
    category: 'water_heater',
    subCategory: 'binh-nuoc-nong',
    price: 3990000,
    originalPrice: 3990000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_g99ilog99ilog99i-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_g99ilog99ilog99i.webp'
    ],
    inStock: true,
    tagline: 'Bình nước nóng 30L gián tiếp chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LWH-I30B26',
      'Danh mục': 'Bình nước nóng',
      'Dung tích': '30 lít',
      'Kiểu làm nóng': 'Gián tiếp'
    },
    sourceUrl: 'https://homichi.com/binh-nuoc-nong-30l-gian-tiep-lwh-i30b26/'
  },
  {
    id: 'lwh-i30a25',
    name: 'Bình nước nóng 30L gián tiếp LWH-I30A25',
    brand: 'Livotec',
    model: 'LWH-I30A25',
    category: 'water_heater',
    subCategory: 'binh-nuoc-nong',
    price: 4279000,
    originalPrice: 4279000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_dnsqttdnsqttdnsq-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_dnsqttdnsqttdnsq.webp'
    ],
    inStock: true,
    tagline: 'Bình nước nóng 30L gián tiếp chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LWH-I30A25',
      'Danh mục': 'Bình nước nóng',
      'Dung tích': '30 lít',
      'Kiểu làm nóng': 'Gián tiếp'
    },
    sourceUrl: 'https://homichi.com/binh-nuoc-nong-30l-gian-tiep-lwh-i30a25/'
  },
  {
    id: 'lwh-i30x26',
    name: 'Bình nước nóng 30L gián tiếp LWH-I30X26',
    brand: 'Livotec',
    model: 'LWH-I30X26',
    category: 'water_heater',
    subCategory: 'binh-nuoc-nong',
    price: 3890000,
    originalPrice: 3890000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_jd4l6ljd4l6ljd4l-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_jd4l6ljd4l6ljd4l.webp'
    ],
    inStock: true,
    tagline: 'Bình nước nóng 30L gián tiếp chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LWH-I30X26',
      'Danh mục': 'Bình nước nóng',
      'Dung tích': '30 lít',
      'Kiểu làm nóng': 'Gián tiếp'
    },
    sourceUrl: 'https://homichi.com/binh-nuoc-nong-30l-gian-tiep-lwh-i30x26/'
  },
  {
    id: 'lwh-v15a26s',
    name: 'Bình nước nóng 15L gián tiếp LWH-V15A26S',
    brand: 'Livotec',
    model: 'LWH-V15A26S',
    category: 'water_heater',
    subCategory: 'binh-nuoc-nong',
    price: 3690000,
    originalPrice: 3690000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_etvl0petvl0petvl-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_etvl0petvl0petvl.webp'
    ],
    inStock: true,
    tagline: 'Bình nước nóng 15L gián tiếp chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LWH-V15A26S',
      'Danh mục': 'Bình nước nóng',
      'Dung tích': '15 lít',
      'Kiểu làm nóng': 'Gián tiếp'
    },
    sourceUrl: 'https://homichi.com/binh-nuoc-nong-15l-gian-tiep-lwh-v15a26s/'
  },
  {
    id: 'lwh-v15b26',
    name: 'Bình nước nóng 15L gián tiếp LWH-V15B26',
    brand: 'Livotec',
    model: 'LWH-V15B26',
    category: 'water_heater',
    subCategory: 'binh-nuoc-nong',
    price: 2990000,
    originalPrice: 2990000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_vwlrk2vwlrk2vwlr-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_vwlrk2vwlrk2vwlr.webp'
    ],
    inStock: true,
    tagline: 'Bình nước nóng 15L gián tiếp chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LWH-V15B26',
      'Danh mục': 'Bình nước nóng',
      'Dung tích': '15 lít',
      'Kiểu làm nóng': 'Gián tiếp'
    },
    sourceUrl: 'https://homichi.com/binh-nuoc-nong-15l-gian-tiep-lwh-v15b26-2/'
  },
  {
    id: 'lwh-v15t26',
    name: 'Bình nước nóng 15L gián tiếp LWH-V15T26',
    brand: 'Livotec',
    model: 'LWH-V15T26',
    category: 'water_heater',
    subCategory: 'binh-nuoc-nong',
    price: 2990000,
    originalPrice: 2990000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_9quoyk9quoyk9quo-1-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_9quoyk9quoyk9quo-1.webp'
    ],
    inStock: true,
    tagline: 'Bình nước nóng 15L gián tiếp chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LWH-V15T26',
      'Danh mục': 'Bình nước nóng',
      'Dung tích': '15 lít',
      'Kiểu làm nóng': 'Gián tiếp'
    },
    sourceUrl: 'https://homichi.com/binh-nuoc-nong-15l-gian-tiep-lwh-v15t26/'
  },
  {
    id: 'lwh-v15a25',
    name: 'Bình nước nóng 15L gián tiếp LWH-V15A25',
    brand: 'Livotec',
    model: 'LWH-V15A25',
    category: 'water_heater',
    subCategory: 'binh-nuoc-nong',
    price: 3289000,
    originalPrice: 3289000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_jfvhnjfvhnjfvhnj-2-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_jfvhnjfvhnjfvhnj-2.webp'
    ],
    inStock: true,
    tagline: 'Bình nước nóng 15L gián tiếp chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LWH-V15A25',
      'Danh mục': 'Bình nước nóng',
      'Dung tích': '15 lít',
      'Kiểu làm nóng': 'Gián tiếp'
    },
    sourceUrl: 'https://homichi.com/binh-nuoc-nong-15l-gian-tiep-lwh-v15a25/'
  },
  {
    id: 'lwh-v15x26',
    name: 'Bình nước nóng 15L gián tiếp LWH-V15X26',
    brand: 'Livotec',
    model: 'LWH-V15X26',
    category: 'water_heater',
    subCategory: 'binh-nuoc-nong',
    price: 2990000,
    originalPrice: 2990000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_a8losda8losda8lo-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_a8losda8losda8lo.webp'
    ],
    inStock: true,
    tagline: 'Bình nước nóng 15L gián tiếp chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LWH-V15X26',
      'Danh mục': 'Bình nước nóng',
      'Dung tích': '15 lít',
      'Kiểu làm nóng': 'Gián tiếp'
    },
    sourceUrl: 'https://homichi.com/binh-nuoc-nong-15l-gian-tiep-lwh-v15x26/'
  },
  {
    id: 'lwh-v20a25',
    name: 'Bình nước nóng 20L gián tiếp LWH-V20A25',
    brand: 'Livotec',
    model: 'LWH-V20A25',
    category: 'water_heater',
    subCategory: 'binh-nuoc-nong',
    price: 3685000,
    originalPrice: 3685000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_jfvhnjfvhnjfvhnj-2-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_jfvhnjfvhnjfvhnj-2.webp'
    ],
    inStock: true,
    tagline: 'Bình nước nóng 20L gián tiếp chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LWH-V20A25',
      'Danh mục': 'Bình nước nóng',
      'Dung tích': '20 lít',
      'Kiểu làm nóng': 'Gián tiếp'
    },
    sourceUrl: 'https://homichi.com/binh-nuoc-nong-20l-gian-tiep-lwh-v20a25/'
  },
  {
    id: 'lwh-i20a25',
    name: 'Bình nước nóng 20L gián tiếp LWH-I20A25',
    brand: 'Livotec',
    model: 'LWH-I20A25',
    category: 'water_heater',
    subCategory: 'binh-nuoc-nong',
    price: 3729000,
    originalPrice: 3729000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_dnsqttdnsqttdnsq-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_dnsqttdnsqttdnsq.webp'
    ],
    inStock: true,
    tagline: 'Bình nước nóng 20L gián tiếp chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LWH-I20A25',
      'Danh mục': 'Bình nước nóng',
      'Dung tích': '20 lít',
      'Kiểu làm nóng': 'Gián tiếp'
    },
    sourceUrl: 'https://homichi.com/binh-nuoc-nong-20l-gian-tiep-livotec-lwh-i20a25/'
  },
  {
    id: 'lwh-i20a26s',
    name: 'Bình nước nóng 20L gián tiếp LWH-I20A26S',
    brand: 'Livotec',
    model: 'LWH-I20A26S',
    category: 'water_heater',
    subCategory: 'binh-nuoc-nong',
    price: 4290000,
    originalPrice: 4290000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_g59k0sg59k0sg59k-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_g59k0sg59k0sg59k.webp'
    ],
    inStock: true,
    tagline: 'Bình nước nóng 20L gián tiếp chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LWH-I20A26S',
      'Danh mục': 'Bình nước nóng',
      'Dung tích': '20 lít',
      'Kiểu làm nóng': 'Gián tiếp'
    },
    sourceUrl: 'https://homichi.com/binh-nuoc-nong-20l-gian-tiep-livotec-lwh-i20a26s/'
  },
  {
    id: 'lwh-i20b26',
    name: 'Bình nước nóng 20L gián tiếp LWH-I20B26',
    brand: 'Livotec',
    model: 'LWH-I20B26',
    category: 'water_heater',
    subCategory: 'binh-nuoc-nong',
    price: 3490000,
    originalPrice: 3490000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_g99ilog99ilog99i-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_g99ilog99ilog99i.webp'
    ],
    inStock: true,
    tagline: 'Bình nước nóng 20L gián tiếp chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LWH-I20B26',
      'Danh mục': 'Bình nước nóng',
      'Dung tích': '20 lít',
      'Kiểu làm nóng': 'Gián tiếp'
    },
    sourceUrl: 'https://homichi.com/binh-nuoc-nong-20l-gian-tiep-livotec-lwh-i20b26/'
  },
  {
    id: 'lwh-i20t26',
    name: 'Bình nước nóng 20L gián tiếp LWH-I20T26',
    brand: 'Livotec',
    model: 'LWH-I20T26',
    category: 'water_heater',
    subCategory: 'binh-nuoc-nong',
    price: 3490000,
    originalPrice: 3490000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_aj2o82aj2o82aj2o-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_aj2o82aj2o82aj2o.webp'
    ],
    inStock: true,
    tagline: 'Bình nước nóng 20L gián tiếp chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LWH-I20T26',
      'Danh mục': 'Bình nước nóng',
      'Dung tích': '20 lít',
      'Kiểu làm nóng': 'Gián tiếp'
    },
    sourceUrl: 'https://homichi.com/binh-nuoc-nong-20l-gian-tiep-livotec-lwh-i20t26/'
  },
  {
    id: 'lwh-i20x26',
    name: 'Bình nước nóng 20L gián tiếp LWH-I20X26',
    brand: 'Livotec',
    model: 'LWH-I20X26',
    category: 'water_heater',
    subCategory: 'binh-nuoc-nong',
    price: 3390000,
    originalPrice: 3390000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_jd4l6ljd4l6ljd4l-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_jd4l6ljd4l6ljd4l.webp'
    ],
    inStock: true,
    tagline: 'Bình nước nóng 20L gián tiếp chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LWH-I20X26',
      'Danh mục': 'Bình nước nóng',
      'Dung tích': '20 lít',
      'Kiểu làm nóng': 'Gián tiếp'
    },
    sourceUrl: 'https://homichi.com/binh-nuoc-nong-20l-gian-tiep-livotec-lwh-i20x26/'
  },
  {
    id: 'lwh-v20a26s',
    name: 'Bình nước nóng 20L gián tiếp LWH-V20A26S',
    brand: 'Livotec',
    model: 'LWH-V20A26S',
    category: 'water_heater',
    subCategory: 'binh-nuoc-nong',
    price: 3990000,
    originalPrice: 3990000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_etvl0petvl0petvl-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_etvl0petvl0petvl.webp'
    ],
    inStock: true,
    tagline: 'Bình nước nóng 20L gián tiếp chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LWH-V20A26S',
      'Danh mục': 'Bình nước nóng',
      'Dung tích': '20 lít',
      'Kiểu làm nóng': 'Gián tiếp'
    },
    sourceUrl: 'https://homichi.com/binh-nuoc-nong-20l-gian-tiep-livotec-lwh-v20a26s/'
  },
  {
    id: 'lwh-v20b26',
    name: 'Bình nước nóng 20L gián tiếp LWH-V20B26',
    brand: 'Livotec',
    model: 'LWH-V20B26',
    category: 'water_heater',
    subCategory: 'binh-nuoc-nong',
    price: 3200000,
    originalPrice: 3200000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_vwlrk2vwlrk2vwlr-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_vwlrk2vwlrk2vwlr.webp'
    ],
    inStock: true,
    tagline: 'Bình nước nóng 20L gián tiếp chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LWH-V20B26',
      'Danh mục': 'Bình nước nóng',
      'Dung tích': '20 lít',
      'Kiểu làm nóng': 'Gián tiếp'
    },
    sourceUrl: 'https://homichi.com/binh-nuoc-nong-20l-gian-tiep-livotec-lwh-v20b26/'
  },
  {
    id: 'lwh-v20t26',
    name: 'Bình nước nóng 20L gián tiếp LWH-V20T26',
    brand: 'Livotec',
    model: 'LWH-V20T26',
    category: 'water_heater',
    subCategory: 'binh-nuoc-nong',
    price: 3200000,
    originalPrice: 3200000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_9quoyk9quoyk9quo-1-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_9quoyk9quoyk9quo-1.webp'
    ],
    inStock: true,
    tagline: 'Bình nước nóng 20L gián tiếp chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LWH-V20T26',
      'Danh mục': 'Bình nước nóng',
      'Dung tích': '20 lít',
      'Kiểu làm nóng': 'Gián tiếp'
    },
    sourceUrl: 'https://homichi.com/binh-nuoc-nong-gian-tiep-livotec-lwh-v20t26/'
  },
  {
    id: 'lwh-v20x26',
    name: 'Bình nước nóng 20L gián tiếp LWH-V20X26',
    brand: 'Livotec',
    model: 'LWH-V20X26',
    category: 'water_heater',
    subCategory: 'binh-nuoc-nong',
    price: 3350000,
    originalPrice: 3350000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_a8losda8losda8lo-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_a8losda8losda8lo.webp'
    ],
    inStock: true,
    tagline: 'Bình nước nóng 20L gián tiếp chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'LWH-V20X26',
      'Danh mục': 'Bình nước nóng',
      'Dung tích': '20 lít',
      'Kiểu làm nóng': 'Gián tiếp'
    },
    sourceUrl: 'https://homichi.com/binh-nuoc-nong-livotec-lwh-v20x26/'
  },
  {
    id: 'sb-616',
    name: 'Quạt cây Livotec SB-616',
    brand: 'Livotec',
    model: 'SB-616',
    category: 'fan',
    subCategory: 'quat-cay',
    price: 0,
    originalPrice: 0,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-sb-616-1-1.png-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-sb-616-1-1.png.webp'
    ],
    inStock: true,
    tagline: 'Quạt cây chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'SB-616',
      'Danh mục': 'Quạt cây'
    },
    sourceUrl: 'https://homichi.com/quat-cay-livotec-sb-616/',
    contactForPrice: true
  },
  {
    id: 's-420',
    name: 'Quạt cây Livotec S-420',
    brand: 'Livotec',
    model: 'S-420',
    category: 'fan',
    subCategory: 'quat-cay',
    price: 0,
    originalPrice: 0,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-s-420-1.png-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-s-420-1.png.webp'
    ],
    inStock: true,
    tagline: 'Quạt cây chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'S-420',
      'Danh mục': 'Quạt cây'
    },
    sourceUrl: 'https://homichi.com/quat-cay-livotec-s-420/',
    contactForPrice: true
  },
  {
    id: 's-400',
    name: 'Quạt cây Livotec S-400',
    brand: 'Livotec',
    model: 'S-400',
    category: 'fan',
    subCategory: 'quat-cay',
    price: 2420000,
    originalPrice: 2420000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-s-400-1.png-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-s-400-1.png.webp'
    ],
    inStock: true,
    tagline: 'Quạt cây chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'S-400',
      'Danh mục': 'Quạt cây'
    },
    sourceUrl: 'https://homichi.com/quat-cay-livotec-s-400/'
  },
  {
    id: 's-300',
    name: 'Quạt cây Livotec S-300',
    brand: 'Livotec',
    model: 'S-300',
    category: 'fan',
    subCategory: 'quat-cay',
    price: 1490000,
    originalPrice: 1490000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-s-300-1.png-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-s-300-1.png.webp'
    ],
    inStock: true,
    tagline: 'Quạt cây chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'S-300',
      'Danh mục': 'Quạt cây'
    },
    sourceUrl: 'https://homichi.com/quat-cay-livotec-s-300/'
  },
  {
    id: 's-150b',
    name: 'Quạt cây Livotec S-150B',
    brand: 'Livotec',
    model: 'S-150B',
    category: 'fan',
    subCategory: 'quat-cay',
    price: 1050000,
    originalPrice: 1050000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-s-150b-1.png-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-s-150b-1.png.webp'
    ],
    inStock: true,
    tagline: 'Quạt cây chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'S-150B',
      'Danh mục': 'Quạt cây'
    },
    sourceUrl: 'https://homichi.com/quat-cay-livotec-s-150b/'
  },
  {
    id: 's-200',
    name: 'Quạt cây Livotec S-200',
    brand: 'Livotec',
    model: 'S-200',
    category: 'fan',
    subCategory: 'quat-cay',
    price: 1650000,
    originalPrice: 1650000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-s-200-2-2.png-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-s-200-2-2.png.webp'
    ],
    inStock: true,
    tagline: 'Quạt cây chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'S-200',
      'Danh mục': 'Quạt cây'
    },
    sourceUrl: 'https://homichi.com/quat-cay-livotec-s-200/'
  },
  {
    id: 's-100',
    name: 'Quạt cây Livotec S-100',
    brand: 'Livotec',
    model: 'S-100',
    category: 'fan',
    subCategory: 'quat-cay',
    price: 1320000,
    originalPrice: 1320000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-s-100-4.png-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-s-100-4.png.webp'
    ],
    inStock: true,
    tagline: 'Quạt cây chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'S-100',
      'Danh mục': 'Quạt cây'
    },
    sourceUrl: 'https://homichi.com/quat-cay-livotec-s-100/'
  },
  {
    id: 'dhv12i',
    name: 'Điều hòa một chiều Livotec DHV12I Inverter',
    brand: 'Livotec',
    model: 'DHV12I',
    category: 'ac',
    subCategory: 'dieu-hoa',
    price: 11540000,
    originalPrice: 11540000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/dieu-hoa-mot-chieu-livotec-dhv12i-inverter-thumbnails-18-03.png-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/dieu-hoa-mot-chieu-livotec-dhv12i-inverter-thumbnails-18-03.png.webp'
    ],
    inStock: true,
    tagline: 'Điều hòa một chiều chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'DHV12I',
      'Danh mục': 'Điều hòa',
      'Công nghệ': 'Inverter',
      'Chức năng': 'Làm lạnh một chiều'
    },
    sourceUrl: 'https://homichi.com/dieu-hoa-mot-chieu-livotec-dhv12i-inverter/'
  },
  {
    id: 'dhv10-8i',
    name: 'Điều hòa một chiều Livotec DHV10.8I Inverter',
    brand: 'Livotec',
    model: 'DHV10.8I',
    category: 'ac',
    subCategory: 'dieu-hoa',
    price: 11190000,
    originalPrice: 11190000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/dieu-hoa-mot-chieu-livotec-dhv10-8i-inverter-01-06.png-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/dieu-hoa-mot-chieu-livotec-dhv10-8i-inverter-01-06.png.webp'
    ],
    inStock: true,
    tagline: 'Điều hòa một chiều chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'DHV10.8I',
      'Danh mục': 'Điều hòa',
      'Công nghệ': 'Inverter',
      'Chức năng': 'Làm lạnh một chiều'
    },
    sourceUrl: 'https://homichi.com/dieu-hoa-mot-chieu-livotec-dhv10-8i-inverter/'
  },
  {
    id: 'dhv09i',
    name: 'Điều hòa một chiều Livotec DHV09I Inverter',
    brand: 'Livotec',
    model: 'DHV09I',
    category: 'ac',
    subCategory: 'dieu-hoa',
    price: 10390000,
    originalPrice: 10390000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/08/dieu-hoa-mot-chieu-livotec-dhv09i-inverter-thumbnails-18-03.png-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/08/dieu-hoa-mot-chieu-livotec-dhv09i-inverter-thumbnails-18-03.png.webp'
    ],
    inStock: true,
    tagline: 'Điều hòa một chiều chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'DHV09I',
      'Danh mục': 'Điều hòa',
      'Công nghệ': 'Inverter',
      'Chức năng': 'Làm lạnh một chiều'
    },
    sourceUrl: 'https://homichi.com/dieu-hoa-mot-chieu-livotec-dhv09i-inverter/'
  },
  {
    id: 'dhv12j',
    name: 'Điều hòa một chiều Livotec DHV12J Inverter',
    brand: 'Livotec',
    model: 'DHV12J',
    category: 'ac',
    subCategory: 'dieu-hoa',
    price: 11990000,
    originalPrice: 11990000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/07/dieu-hoa-mot-chieu-livotec-dhv09j-inverter-thubnails-18-03.png-1-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/07/dieu-hoa-mot-chieu-livotec-dhv09j-inverter-thubnails-18-03.png-1.webp'
    ],
    inStock: true,
    tagline: 'Điều hòa một chiều chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'DHV12J',
      'Danh mục': 'Điều hòa',
      'Công nghệ': 'Inverter',
      'Chức năng': 'Làm lạnh một chiều'
    },
    sourceUrl: 'https://homichi.com/dieu-hoa-mot-chieu-livotec-dhv12j-inverter/'
  },
  {
    id: 'dhv10-8j',
    name: 'Điều hòa một chiều Livotec DHV10.8J Inverter',
    brand: 'Livotec',
    model: 'DHV10.8J',
    category: 'ac',
    subCategory: 'dieu-hoa',
    price: 11590000,
    originalPrice: 11590000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/07/dieu-hoa-mot-chieu-livotec-dhv10-8j-inverter-01-06.png-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/07/dieu-hoa-mot-chieu-livotec-dhv10-8j-inverter-01-06.png.webp'
    ],
    inStock: true,
    tagline: 'Điều hòa một chiều chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'DHV10.8J',
      'Danh mục': 'Điều hòa',
      'Công nghệ': 'Inverter',
      'Chức năng': 'Làm lạnh một chiều'
    },
    sourceUrl: 'https://homichi.com/dieu-hoa-mot-chieu-livotec-dhv10-8j-inverter/'
  },
  {
    id: 'dhv09j',
    name: 'Điều hòa một chiều Livotec DHV09J Inverter',
    brand: 'Livotec',
    model: 'DHV09J',
    category: 'ac',
    subCategory: 'dieu-hoa',
    price: 10790000,
    originalPrice: 10790000,
    rating: 0,
    reviewsCount: 0,
    image: 'https://homichi.com/wp-content/uploads/2026/07/dieu-hoa-mot-chieu-livotec-dhv09j-inverter-thubnails-18-03.png-1-300x300.webp',
    gallery: [
      'https://homichi.com/wp-content/uploads/2026/07/dieu-hoa-mot-chieu-livotec-dhv09j-inverter-thubnails-18-03.png-1.webp'
    ],
    inStock: true,
    tagline: 'Điều hòa một chiều chính hãng Livotec',
    features: [],
    specs: {
      'Thương hiệu': 'Livotec',
      Model: 'DHV09J',
      'Danh mục': 'Điều hòa',
      'Công nghệ': 'Inverter',
      'Chức năng': 'Làm lạnh một chiều'
    },
    sourceUrl: 'https://homichi.com/dieu-hoa-mot-chieu-livotec-dhv09j-inverter/'
  }
];

export const CATEGORIES_CONFIG = [
  {
    id: 'fan',
    name: 'Quạt cây',
    subtitle: 'Quạt cây Livotec chính hãng',
    image: 'https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-s-400-1.png-300x300.webp',
    count: PRODUCTS.filter((p) => p.category === 'fan').length,
    subcategories: [] as string[],
  },
  {
    id: 'ac',
    name: 'Điều hòa',
    subtitle: 'Điều hòa một chiều Inverter',
    image: 'https://homichi.com/wp-content/uploads/2026/08/dieu-hoa-mot-chieu-livotec-dhv09i-inverter-thumbnails-18-03.png-300x300.webp',
    count: PRODUCTS.filter((p) => p.category === 'ac').length,
    subcategories: [] as string[],
  },
  {
    id: 'air_cooler',
    name: 'Quạt điều hòa',
    subtitle: 'Làm mát bằng hơi nước',
    image: 'https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_z9gfrbz9gfrbz9gf-300x300.webp',
    count: PRODUCTS.filter((p) => p.category === 'air_cooler').length,
    subcategories: [] as string[],
  },
  {
    id: 'water_heater',
    name: 'Bình nước nóng',
    subtitle: 'Bình gián tiếp 15L / 20L / 30L',
    image: 'https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_g59k0sg59k0sg59k-300x300.webp',
    count: PRODUCTS.filter((p) => p.category === 'water_heater').length,
    subcategories: [] as string[],
  },
  {
    id: 'induction',
    name: 'Bếp từ',
    subtitle: 'Bếp từ đôi & bếp điện từ',
    image: 'https://homichi.com/wp-content/uploads/2026/10/livotec-e-smart-lio-666v-06-07-1.png-300x300.webp',
    count: PRODUCTS.filter((p) => p.category === 'induction').length,
    subcategories: [] as string[],
  },
  {
    id: 'dehumidifier',
    name: 'Máy hút ẩm',
    subtitle: 'Chống ẩm mốc mùa nồm',
    image: 'https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_ydqjy9ydqjy9ydqj-300x300.webp',
    count: PRODUCTS.filter((p) => p.category === 'dehumidifier').length,
    subcategories: [] as string[],
  },
  {
    id: 'heater',
    name: 'Máy sưởi',
    subtitle: 'Sưởi gốm ấm áp mùa đông',
    image: 'https://homichi.com/wp-content/uploads/2026/09/may-suoi-livotec-lch-2089t-2.png-300x300.webp',
    count: PRODUCTS.filter((p) => p.category === 'heater').length,
    subcategories: [] as string[],
  },
  {
    id: 'vacuum',
    name: 'Máy hút bụi',
    subtitle: 'Máy hút bụi không dây',
    image: 'https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_l2dv8hl2dv8hl2dv-300x300.webp',
    count: PRODUCTS.filter((p) => p.category === 'vacuum').length,
    subcategories: [] as string[],
  }
];

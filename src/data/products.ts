import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // --- 1. QUẠT ĐIỆN ---
  {
    id: 'cf-100b',
    name: 'Quạt Cây Chillami Flow-100 BLDC',
    model: 'CF-100B',
    category: 'fan',
    subCategory: 'quat-cay',
    price: 1890000,
    originalPrice: 2490000,
    discountPercent: 24,
    rating: 4.9,
    reviewsCount: 148,
    image: '/images/muji_fan.jpg',
    gallery: [
      '/images/muji_fan.jpg',
      '/images/standing_fan_76.jpg',
      '/images/floor_fan_simple.jpg'
    ],
    inStock: true,
    isBestSeller: true,
    tagline: 'Động cơ BLDC không chổi than siêu êm 13dB, công nghệ gió tự nhiên SoftAir',
    features: [
      'Động cơ DC Inverter không chổi than tiết kiệm 70% điện năng',
      '24 cấp độ gió điều chỉnh linh hoạt, chế độ gió tự nhiên SoftAir',
      'Độ ồn cực thấp chỉ 13dB - lý tưởng cho giấc ngủ trẻ nhỏ và người già',
      'Hẹn giờ tắt thông minh lên đến 12 tiếng, có điều khiển từ xa',
      'Cánh quạt 7 lá khí động học tạo luồng gió mềm mại, không gây bạt hơi'
    ],
    specs: {
      'Loại quạt': 'Quạt cây đứng',
      'Công suất': '28W (siêu tiết kiệm)',
      'Động cơ': 'DC Inverter (BLDC) 100% dây đồng',
      'Cấp độ gió': '24 cấp độ + 3 chế độ gió',
      'Đường kính cánh': '40 cm (7 cánh khí động học)',
      'Độ ồn tối thiểu': '13 dB',
      'Điều khiển từ xa': 'Có (Remote đa năng + phím cảm ứng)',
      'Hẹn giờ': '0.5 – 12 giờ',
      'Chiều cao': 'Điều chỉnh từ 90cm - 128cm',
      'Xuất xứ': 'Chillami R&D Technology'
    },
    powerWatt: 28,
    energyRating: 5,
    warrantyMonths: 24,
    manualDownloadUrl: '#',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    videoTitle: 'Review Quạt Chillami Flow-100 BLDC: Test độ ồn 13dB và luồng gió SoftAir',
    videoDuration: '04:15',
    colorOptions: [
      { name: 'Trắng Tuyết (Snow White)', hex: '#f8fafc', image: '/images/muji_fan.jpg' },
      { name: 'Đen Nhám (Matte Black)', hex: '#1e293b', image: '/images/standing_fan_76.jpg' },
      { name: 'Xám Titan (Titanium Grey)', hex: '#64748b', image: '/images/floor_fan_simple.jpg' }
    ],
    variants: [
      {
        name: 'Phiên bản',
        value: 'Bản Tiêu Chuẩn (Remote 24 cấp gió)',
        price: 1890000,
        sku: 'CF-100B-STD',
        badge: 'Phổ biến nhất'
      },
      {
        name: 'Phiên bản',
        value: 'Bản Pin Dự Phòng 20H (Chống mất điện)',
        price: 2290000,
        sku: 'CF-100B-BAT',
        badge: 'Pin 10.000mAh'
      },
      {
        name: 'Phiên bản',
        value: 'Bản Smart WiFi AI (Điều khiển qua App + Giọng nói)',
        price: 2490000,
        sku: 'CF-100B-WIFI',
        badge: 'App IoT Chillami'
      }
    ],
    energyLabel: {
      stars: 5,
      standard: 'TCVN 7826:2015 (Bộ Công Thương)',
      efficiencyRatio: '2.95 m³/min.W (Cấp 5 sao cao nhất)',
      monthlyEstCost: '~18.000đ - 25.000đ/tháng (Chạy 12h/ngày)',
      savingPercent: 75,
      certifications: ['TCVN 7826:2015', 'Quacert An Toàn Điện', 'ISO 9001:2015', 'RoHS Chuẩn Châu Âu', 'CE']
    }
  },
  {
    id: 'csw-80b',
    name: 'Quạt Treo Tường Chillami Silent-Wall BLDC',
    model: 'CSW-80B',
    category: 'fan',
    subCategory: 'quat-treo-tuong',
    price: 1550000,
    originalPrice: 1950000,
    discountPercent: 20,
    rating: 4.8,
    reviewsCount: 92,
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=80'
    ],
    inStock: true,
    isNew: false,
    tagline: 'Tiết kiệm không gian sàn, góc quay 3D 120 độ, êm ái chống rung',
    features: [
      'Gắn tường vững chắc, ti chống rung hấp thụ dao động triệt để',
      'Góc quay siêu rộng 120 độ, góc ngẩng gập linh hoạt',
      'Động cơ BLDC thế hệ mới không phát nhiệt, chạy liên tục 24/7',
      'Điều khiển từ xa xuyên tường tới 8 mét'
    ],
    specs: {
      'Loại quạt': 'Quạt treo tường gia đình',
      'Công suất': '32W',
      'Động cơ': 'BLDC Bearing bạc đạn cao cấp',
      'Cấp độ gió': '12 cấp độ gió mềm',
      'Độ ồn': '16 dB',
      'Điều khiển': 'Remote + dây kéo phụ trợ',
      'Góc quay': 'Quay tự động 120°',
      'Bảo hành': '24 tháng'
    },
    powerWatt: 32,
    energyRating: 5,
    warrantyMonths: 24,
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    videoTitle: 'Lắp đặt quạt treo tường Chillami Silent-Wall chỉ 5 phút',
    videoDuration: '03:10',
    variants: [
      { name: 'Màu sắc', value: 'Trắng Sữa (White Cream)', price: 1550000, sku: 'CSW-80B-WH' },
      { name: 'Màu sắc', value: 'Xám Tro Hiện Đại (Modern Grey)', price: 1590000, sku: 'CSW-80B-GR' }
    ],
    energyLabel: {
      stars: 5,
      standard: 'TCVN 7826:2015',
      efficiencyRatio: '2.80 m³/min.W',
      monthlyEstCost: '~20.000đ/tháng',
      savingPercent: 68,
      certifications: ['TCVN 7826', 'Quacert', 'ISO 9001']
    }
  },
  {
    id: 'fb-180',
    name: 'Quạt Sàn Tuần Hoàn Chillami FB-180 Turbo',
    model: 'FB-180',
    category: 'fan',
    subCategory: 'quat-san',
    price: 1290000,
    originalPrice: 1690000,
    discountPercent: 23,
    rating: 4.9,
    reviewsCount: 215,
    image: '/images/comfee_circulator.jpg',
    gallery: [
      '/images/comfee_circulator.jpg',
      '/images/fan_circulator.jpg',
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=900&q=80'
    ],
    inStock: true,
    isBestSeller: true,
    tagline: 'Tuần hoàn khí tươi phòng điều hòa, đẩy gió xa đến 15m, xoay đa chiều 3D',
    features: [
      'Lồng quạt xoắn ốc lốc xoáy (Vortex Airflow) khuếch tán không khí đều khắp phòng',
      'Giúp phòng điều hòa mát nhanh gấp đôi, triệt tiêu vùng nhiệt độ chênh lệch',
      'Xoay 3D thông minh: gật đầu lên xuống 90° và xoay ngang 90°',
      'Kích thước nhỏ gọn đặt bàn hoặc đặt sàn hiện đại'
    ],
    specs: {
      'Loại quạt': 'Quạt sàn tuần hoàn không khí (Air Circulator)',
      'Công suất': '38W',
      'Khoảng cách gió': 'Lên tới 15 mét',
      'Chế độ xoay': 'Xoay 3D đa hướng (ngang + dọc)',
      'Hẹn giờ': '8 tiếng',
      'Trọng lượng': '2.6 kg'
    },
    powerWatt: 38,
    energyRating: 5,
    warrantyMonths: 24,
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    videoTitle: 'Thử nghiệm gió xoắn ốc Vortex thổi xa 15m quạt FB-180 Turbo',
    videoDuration: '02:50',
    variants: [
      { name: 'Cấu hình', value: 'Bản Cơ Núm Xoay', price: 1290000, sku: 'FB-180-MEC' },
      { name: 'Cấu hình', value: 'Bản Điện Tử 3D Cảm Ứng + Remote', price: 1590000, sku: 'FB-180-TOUCH', badge: 'Khuyên dùng' }
    ],
    energyLabel: {
      stars: 5,
      standard: 'TCVN 7826:2015',
      efficiencyRatio: '2.85 m³/min.W',
      monthlyEstCost: '~24.000đ/tháng',
      savingPercent: 65,
      certifications: ['TCVN 7826', 'Quacert', 'CE']
    }
  },
  {
    id: 'csa-200x',
    name: 'Quạt Thông Minh Chillami Smart-Air IoT WiFi',
    model: 'CSA-200X',
    category: 'fan',
    subCategory: 'quat-thong-minh',
    price: 2450000,
    originalPrice: 3200000,
    discountPercent: 23,
    rating: 5.0,
    reviewsCount: 78,
    image: '/images/plus_minus_zero.jpg',
    gallery: [
      '/images/plus_minus_zero.jpg',
      '/images/muji_fan.jpg',
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80'
    ],
    inStock: true,
    isNew: true,
    tagline: 'Kết nối App điện thoại, cảm biến nhiệt độ tự động tăng giảm tốc độ gió',
    features: [
      'Cảm biến nhiệt độ và độ ẩm phòng tích hợp, tự động chọn tốc độ gió tối ưu',
      'Điều khiển qua WiFi bằng ứng dụng Chillami Smart Home trên iOS/Android',
      'Tương thích Google Home và Amazon Alexa ra lệnh giọng nói',
      'Động cơ BLDC Nhật Bản, pin dự phòng chống cúp điện đột ngột'
    ],
    specs: {
      'Loại quạt': 'Quạt cây thông minh IoT',
      'Kết nối': 'WiFi 2.4GHz + Bluetooth Mesh',
      'Công suất': '30W',
      'Cảm biến': 'Nhiệt ẩm kế độ chính xác cao',
      'Trợ lý ảo': 'Google Assistant, Alexa, Apple Siri',
      'Độ ồn': '12 dB (chế độ ngủ đêm)'
    },
    powerWatt: 30,
    energyRating: 5,
    warrantyMonths: 36,
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    videoTitle: 'Hướng dẫn kết nối App Chillami Home & điều khiển giọng nói với CSA-200X',
    videoDuration: '05:30',
    variants: [
      { name: 'Phiên bản', value: 'Bản Tiêu Chuẩn WiFi (Trắng)', price: 2450000, sku: 'CSA-200X-WH' },
      { name: 'Phiên bản', value: 'Bản Pro + Pin Dự Phòng 24H (Xám Đậm)', price: 2890000, sku: 'CSA-200X-BAT', badge: 'Cao cấp nhất' }
    ],
    energyLabel: {
      stars: 5,
      standard: 'TCVN 7826:2015',
      efficiencyRatio: '3.10 m³/min.W',
      monthlyEstCost: '~19.000đ/tháng',
      savingPercent: 80,
      certifications: ['TCVN 7826:2015', 'Quacert', 'ISO 9001:2015', 'RoHS', 'CE', 'MIC Hợp Quy Viễn Thông']
    }
  },
  {
    id: 'cpg-300',
    name: 'Quạt Tích Điện Chillami PowerGo-Pro 15000mAh',
    model: 'CPG-300',
    category: 'fan',
    subCategory: 'quat-tich-dien',
    price: 1390000,
    originalPrice: 1790000,
    discountPercent: 22,
    rating: 4.8,
    reviewsCount: 164,
    image: '/images/battery_fan.jpg',
    gallery: [
      '/images/battery_fan.jpg',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80'
    ],
    inStock: true,
    isPromotion: true,
    tagline: 'Pin Lithium 15.000mAh dùng 28 giờ liên tục, đèn LED chiếu sáng, sạc điện thoại Type-C',
    features: [
      'Giải pháp số 1 mùa mất điện hoặc dã ngoại picnic gia đình',
      'Pin Lithium LifePO4 bền bỉ không chai pin, tự ngắt khi đầy',
      'Cổng xuất Type-C sạc nhanh cho điện thoại khi mất điện',
      'Đèn LED cứu hộ 3 cấp độ sáng dịu nhẹ ban đêm'
    ],
    specs: {
      'Dung lượng pin': '15.000 mAh (LiFePO4 an toàn)',
      'Thời gian dùng': '8 giờ (gió mạnh) – 28 giờ (gió vừa)',
      'Thời gian sạc': '3.5 giờ qua cổng Type-C PD 30W',
      'Cổng ra': 'USB-A 18W, Type-C 20W sạc smartphone',
      'Trọng lượng': '1.8 kg'
    },
    powerWatt: 20,
    energyRating: 5,
    warrantyMonths: 18,
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    videoTitle: 'Mở hộp quạt tích điện PowerGo-Pro: Thử nghiệm thời lượng pin 28 giờ liên tục',
    videoDuration: '03:45',
    variants: [
      { name: 'Màu sắc & Pin', value: 'Xanh Rêu Quân Đội (Military Olive) - 15.000mAh', price: 1390000, sku: 'CPG-300-OLV' },
      { name: 'Màu sắc & Pin', value: 'Trắng Sữa Dã Ngoại (Safari White) - 15.000mAh', price: 1390000, sku: 'CPG-300-WHT' },
      { name: 'Màu sắc & Pin', value: 'Bản Nâng Cấp Solar 20.000mAh (Kèm tấm sạc mặt trời)', price: 1690000, sku: 'CPG-300-SOLAR', badge: 'Kèm Pin NLMT' }
    ],
    energyLabel: {
      stars: 5,
      standard: 'TCVN 7826:2015',
      efficiencyRatio: 'Pin LiFePO4 an toàn chống cháy nổ',
      monthlyEstCost: '~6.000đ/tháng',
      savingPercent: 85,
      certifications: ['TCVN 7826', 'Quacert', 'CE', 'RoHS', 'UN38.3 An Toàn Vận Chuyển Hàng Không']
    }
  },

  // --- 2. ĐIỀU HÒA ---
  {
    id: 'cac-09eco',
    name: 'Điều Hòa Chillami Eco-Inverter 9000 BTU',
    model: 'CAC-09ECO',
    category: 'ac',
    subCategory: 'dieu-hoa-9k',
    price: 6890000,
    originalPrice: 8500000,
    discountPercent: 19,
    rating: 4.9,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1590483736427-4638c4c79899?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80'
    ],
    inStock: true,
    isBestSeller: true,
    tagline: 'Công nghệ diệt nấm mốc Health Guard, làm mát thanh khiết, siêu tiết kiệm điện 65% Eco-Inverter',
    features: [
      'Công nghệ độc quyền Health Guard diệt khuẩn & ngăn chặn nấm mốc trong dàn lạnh',
      'Công nghệ Full Inverter thông minh duy trì nhiệt độ ổn định ±0.5°C',
      'Màng lọc ion bạc kháng khuẩn Ag+ và lưới lọc bụi mịn PM2.5 bảo vệ hệ hô hấp',
      'Tính năng tự làm sạch dàn lạnh i-Clean 4 bước chống đóng bụi bẩn',
      'Dàn tản nhiệt mạ vàng Golden Fin chống ăn mòn muối biển',
      'Miễn phí toàn bộ công vận chuyển và lắp đặt tiêu chuẩn tại nhà'
    ],
    specs: {
      'Công suất làm lạnh': '9000 BTU / 1.0 HP (Phòng < 15m²)',
      'Loại máy': '1 chiều lạnh Inverter Health Guard',
      'Hiệu suất năng lượng': 'CSPF 5.25 (5 sao tiết kiệm năng lượng)',
      'Gas làm lạnh': 'R32 thế hệ mới thân thiện môi trường',
      'Độ ồn dàn lạnh': 'Chỉ 19 dB (chế độ siêu tĩnh lặng)',
      'Ống đồng': '100% rãnh xoắn tăng hiệu suất trao đổi nhiệt',
      'Sản xuất tại': 'Nhà máy Homihub (Hưng Yên, Việt Nam)',
      'Bảo hành': 'Máy 3 năm, Máy nén Inverter 5 năm 1 đổi 1'
    },
    powerWatt: 780,
    energyRating: 5,
    warrantyMonths: 36,
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    videoTitle: 'Quy trình giao & lắp đặt điều hòa Chillami Eco-Inverter tận nhà miễn phí',
    videoDuration: '06:12',
    variants: [
      { name: 'Công suất', value: '9000 BTU / 1.0 HP (Phòng < 15m²)', price: 6890000, sku: 'CAC-09ECO-9K', badge: 'Phòng ngủ nhỏ' },
      { name: 'Công suất', value: '12000 BTU / 1.5 HP (Phòng 15-22m²)', price: 7990000, sku: 'CAC-12ECO-12K', badge: 'Phổ biến nhất' },
      { name: 'Công suất', value: '18000 BTU / 2.0 HP (Phòng 22-30m²)', price: 11490000, sku: 'CAC-18ECO-18K', badge: 'Phòng khách lớn' }
    ],
    energyLabel: {
      stars: 5,
      standard: 'TCVN 7830:2015 (Bộ Công Thương)',
      efficiencyRatio: 'CSPF 5.25 (Cấp 5 sao tiết kiệm năng lượng vượt trội)',
      monthlyEstCost: '~280.000đ - 360.000đ/tháng (Chạy 8h/đêm)',
      savingPercent: 65,
      certifications: ['TCVN 7830:2015', 'Quacert', 'ISO 9001:2015', 'RoHS', 'CE']
    }
  },
  {
    id: 'cac-09slim',
    name: 'Điều Hòa Chillami Slim Series v3 Siêu Mỏng',
    model: 'CAC-09SLIM',
    category: 'ac',
    subCategory: 'dieu-hoa-slim',
    price: 8990000,
    originalPrice: 1090000,
    discountPercent: 17,
    rating: 5.0,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80'
    ],
    inStock: true,
    isNew: true,
    tagline: 'Thiết kế tối giản Scandinavian độ dày chỉ 16.8cm, luồng gió trần tránh thổi trực tiếp',
    features: [
      'Thiết kế Slim vát cong thanh lịch, tôn vinh kiến trúc căn hộ cao cấp',
      'Cánh gió kép thông minh đẩy luồng gió lên trần (Coanda Airflow) không buốt đầu',
      'Cảm biến con người SmartEye tự tăng nhiệt độ khi rời phòng để tiết kiệm điện',
      'Màn hình LED ẩn dưới mặt nạ sang trọng hiển thị nhiệt độ tinh tế'
    ],
    specs: {
      'Công suất': '9000 BTU Inverter Dual',
      'Độ dày mặt lạnh': '16.8 cm (mỏng nhất phân khúc)',
      'Công nghệ gió': 'Coanda thổi trần chống cảm lạnh',
      'Lọc không khí': 'Bộ tạo ion âm Plasma AirPurifier',
      'Bảo hành': '36 tháng chính hãng'
    },
    powerWatt: 720,
    energyRating: 5,
    warrantyMonths: 36
  },

  // --- 3. BẾP TỪ ---
  {
    id: 'cic-2200d',
    name: 'Bếp Từ Đôi Chillami MasterChef Dual-IGBT',
    model: 'CIC-2200D',
    category: 'induction',
    subCategory: 'bep-tu-doi',
    price: 4990000,
    originalPrice: 6500000,
    discountPercent: 23,
    rating: 4.9,
    reviewsCount: 187,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80'
    ],
    inStock: true,
    isBestSeller: true,
    tagline: 'Mạch công suất IGBT Infineon Đức, đun liu riu mức 1-3 không ngắt quãng, kính Kanger vát cạnh',
    features: [
      'Công nghệ Inverter sôi liên tục ở mức nhiệt thấp - kho hầm không cháy khét',
      'Mặt kính Kanger Ceramic chịu sốc nhiệt lên tới 750°C, vát kim cương 4 cạnh chống trầy',
      'Booster siêu tốc nấu nhanh 2400W mỗi vùng nấu',
      'Khóa trẻ em ChildLock an toàn, cảm biến tràn nước tự ngắt trong 3 giây'
    ],
    specs: {
      'Số vùng nấu': '2 vùng từ độc lập',
      'Tổng công suất': '4000W (Booster 2400W/vùng)',
      'Mạch công suất': 'IGBT Infineon (Cộng hòa Liên bang Đức)',
      'Bảng điều khiển': 'Slider trượt cảm ứng độc lập 9 mức nhiệt',
      'Kích thước mặt kính': '730 x 430 mm',
      'Kích thước khoét đá': '680 x 390 mm',
      'Tính năng an toàn': 'Tự ngắt khi quá nhiệt, khóa phím, cảm ứng chống tràn'
    },
    powerWatt: 4000,
    energyRating: 5,
    warrantyMonths: 36
  },
  {
    id: 'cic-1000s',
    name: 'Bếp Từ Đơn Siêu Mỏng Chillami Solo-Pro',
    model: 'CIC-1000S',
    category: 'induction',
    subCategory: 'bep-tu-don',
    price: 890000,
    originalPrice: 1250000,
    discountPercent: 28,
    rating: 4.8,
    reviewsCount: 230,
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=900&q=80'
    ],
    inStock: true,
    isPromotion: true,
    tagline: 'Mỏng chỉ 3.5cm, công suất khỏe 2200W, tặng kèm nồi lẩu inox 304 đáy từ cao cấp',
    features: [
      'Thiết kế mỏng nhẹ hiện đại, cất gọn tiện lợi hoặc mang đi tiệc lẩu',
      'Mâm từ đồng kép truyền nhiệt nhanh, tiết kiệm điện',
      'Mặt kính pha lê cường lực lau chùi dầu mỡ dễ dàng chỉ với 1 khăn ẩm'
    ],
    specs: {
      'Công suất': '2200W',
      'Độ dày': '3.5 cm',
      'Điều khiển': 'Cảm ứng Touch & Slide',
      'Khối lượng': '2.2 kg',
      'Quà tặng': 'Nồi lẩu inox 304 chính hãng'
    },
    powerWatt: 2200,
    energyRating: 5,
    warrantyMonths: 18
  },

  // --- 4. MÁY HÚT MÙI ---
  {
    id: 'chh-90t',
    name: 'Máy Hút Mùi Chữ T Chillami AirPure T-90 WaveSensor',
    model: 'CHH-90T',
    category: 'hood',
    subCategory: 'may-hut-mui-t',
    price: 4350000,
    originalPrice: 5600000,
    discountPercent: 22,
    rating: 4.9,
    reviewsCount: 112,
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80'
    ],
    inStock: true,
    isBestSeller: true,
    tagline: 'Cảm biến cử chỉ vẫy tay WaveSensor không cần chạm, lực hút bão 1200m³/h, động cơ kín chống dầu mỡ',
    features: [
      'Công nghệ vẫy tay WaveSensor: vẫy tay trái-phải để bật tắt và chỉnh 3 cấp độ hút khi tay dính dầu mỡ',
      'Công suất hút mạnh mẽ 1200 m³/h đánh bay mùi cá tanh, khói rán chỉ trong 60 giây',
      'Động cơ tuabin kín BLDC chống bám cặn dầu mỡ, kéo dài tuổi thọ trên 10 năm',
      'Lưới lọc inox 304 tháo lắp vệ sinh bằng máy rửa bát tiện dụng'
    ],
    specs: {
      'Kiểu dáng': 'Chữ T hiện đại chuẩn châu Âu (900mm)',
      'Công suất hút': '1200 m³/h',
      'Động cơ': 'Tuabin đôi kín BLDC giảm ồn',
      'Độ ồn tối đa': '< 52 dB (rất êm so với máy thường)',
      'Điều khiển': 'Cảm biến cử chỉ vẫy tay + Phím cảm ứng chạm',
      'Hệ thống chiếu sáng': 'Thanh đèn LED ấm chống lóa 2 x 1.5W'
    },
    powerWatt: 190,
    energyRating: 5,
    warrantyMonths: 36
  },
  {
    id: 'chh-75k',
    name: 'Máy Hút Mùi Kính Vát Chillami SlopeCurved K-75',
    model: 'CHH-75K',
    category: 'hood',
    subCategory: 'may-hut-mui-kinh-vat',
    price: 5290000,
    originalPrice: 6800000,
    discountPercent: 22,
    rating: 5.0,
    reviewsCount: 65,
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=900&q=80'
    ],
    inStock: true,
    isNew: true,
    tagline: 'Kính đen vát nghiêng chống chạm đầu khi nấu, tự động mở cửa đón khói thông minh',
    features: [
      'Thiết kế kính vát góc 45 độ tạo không gian thoáng đãng cho người đứng nấu',
      'Cánh kính tự động nâng mở góc đón khói ngay khi bật máy',
      'Lọc than hoạt tính kết hợp đường ống thoát khí ra ngoài linh hoạt'
    ],
    specs: {
      'Kiểu dáng': 'Kính vát nghiêng sang trọng (750mm)',
      'Công suất hút': '1350 m³/h',
      'Độ ồn': '49 dB',
      'Cửa đón khói': 'Tự động mở nâng hạ điện tử',
      'Bảo hành': '36 tháng chính hãng'
    },
    powerWatt: 210,
    energyRating: 5,
    warrantyMonths: 36
  },

  // --- 5. BÌNH NƯỚC NÓNG ---
  {
    id: 'cwh-20sq',
    name: 'Bình Nước Nóng Chillami Titanium-Shield 20L Vuông',
    model: 'CWH-20SQ',
    category: 'water_heater',
    subCategory: 'binh-nuoc-nong-gian-tiep',
    price: 2690000,
    originalPrice: 3400000,
    discountPercent: 21,
    rating: 4.9,
    reviewsCount: 153,
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=80'
    ],
    inStock: true,
    isBestSeller: true,
    tagline: 'Tráng men Titanium siêu bền bảo hành bình chứa 10 năm, chống giật kép ELCB thế hệ mới, giữ nhiệt 72h',
    features: [
      'Lòng bình tráng men vi tinh thể Titanium chịu áp lực nước 8 Bar, chống cặn vôi tuyệt đối',
      'Cọc đốt nguyên chất hợp kim Incoloy 840 siêu bền dẫn nhiệt nhanh, không bám cặn',
      'Hệ thống an toàn kép TSS gồm chống giật ELCB điện tử và rơ le nhiệt lưỡng cực tự ngắt',
      'Lớp cách nhiệt mật độ cao SuperFoam giữ nóng nước liên tục suốt 72 giờ'
    ],
    specs: {
      'Dung tích': '20 Lít (phù hợp gia đình 2-3 người)',
      'Công suất': '2500W',
      'Kiểu dáng': 'Vuông nhỏ gọn cho trần thạch cao phòng tắm hiện đại',
      'Màn hình': 'Đèn LED báo nước sẵn sàng tắm',
      'Chống giật': 'ELCB siêu nhạy (ngắt trong 0.01 giây)',
      'Bảo hành': 'Bình chứa 10 năm, linh kiện 3 năm'
    },
    powerWatt: 2500,
    energyRating: 5,
    warrantyMonths: 36,
    variants: [
      { name: 'Dung tích', value: '15L (Phù hợp 1-2 người)', price: 2390000, sku: 'CWH-15SQ' },
      { name: 'Dung tích', value: '20L (Phù hợp 2-3 người)', price: 2690000, sku: 'CWH-20SQ' },
      { name: 'Dung tích', value: '30L (Phù hợp 3-5 người)', price: 3190000, sku: 'CWH-30SL' }
    ]
  },
  {
    id: 'cwh-45dir',
    name: 'Bình Nước Nóng Trực Tiếp Chillami Instant-Hot Turbo',
    model: 'CWH-45DIR',
    category: 'water_heater',
    subCategory: 'binh-nuoc-nong-truc-tiep',
    price: 3250000,
    originalPrice: 4100000,
    discountPercent: 20,
    rating: 4.8,
    reviewsCount: 89,
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=80'
    ],
    inStock: true,
    isNew: true,
    tagline: 'Làm nóng tức thì trong 2 giây, bơm trợ lực DC cực êm cho nơi nước yếu, vòi sen 5 chế độ massage',
    features: [
      'Bơm trợ lực biến tần DC siêu êm, tăng áp lực nước lên gấp 3 lần cho nhà cao tầng hoặc nơi nước yếu',
      'Làm nóng tức thời không cần chờ đợi với thanh gia nhiệt đồng công suất 4500W',
      'Cảm biến lưu lượng nước tự ngắt khi nguồn nước bị ngắt, chống cháy nổ',
      'Kèm cây sen tắm mạ chrome sang trọng có 5 chế độ phun massage ion'
    ],
    specs: {
      'Loại bình': 'Làm nóng trực tiếp',
      'Công suất': '4500W',
      'Bơm trợ lực': 'Có (Bơm biến tần DC êm ái)',
      'Vòi sen': 'Vòi sen 5 tia kháng khuẩn Ag+',
      'Bảo hành': '24 tháng'
    },
    powerWatt: 4500,
    energyRating: 5,
    warrantyMonths: 24
  },

  // --- 6. PHỤ KIỆN & LINH KIỆN ---
  {
    id: 'crf-01',
    name: 'Điều Khiển Thông Minh Chillami Magic-Remote',
    model: 'CRF-01',
    category: 'accessory',
    subCategory: 'phu-kien',
    price: 199000,
    originalPrice: 290000,
    discountPercent: 31,
    rating: 4.9,
    reviewsCount: 312,
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80'
    ],
    inStock: true,
    tagline: 'Tương thích mọi model quạt và điều hòa Chillami, sóng hồng ngoại góc rộng',
    features: [
      'Phím bấm cao su êm ái, phủ lớp kháng khuẩn',
      'Sóng hồng ngoại đa hướng không cần chĩa thẳng vào thiết bị',
      'Tích hợp màn hình mini hiển thị trạng thái'
    ],
    specs: {
      'Tương thích': 'Các dòng Quạt & Điều hòa Chillami',
      'Pin': '2 viên pin AAA (tặng kèm)',
      'Khoảng cách': '8 - 10 mét'
    },
    warrantyMonths: 12
  },
  {
    id: 'cff-02',
    name: 'Bộ Lõi Lọc Than Hoạt Tính Khử Mùi & Bụi Mịn',
    model: 'CFF-02',
    category: 'accessory',
    subCategory: 'phu-kien',
    price: 250000,
    originalPrice: 350000,
    discountPercent: 28,
    rating: 4.8,
    reviewsCount: 145,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80'
    ],
    inStock: true,
    tagline: 'Lọc 99.9% mùi dầu mỡ máy hút mùi và khí độc hại',
    features: [
      'Cấu tạo từ than hoạt tính gáo dừa mật độ cao',
      'Định kỳ thay 6-9 tháng để duy trì hiệu suất hút mùi tốt nhất'
    ],
    specs: {
      'Đóng gói': 'Hộp 2 màng lọc tròn',
      'Hạn sử dụng': '3 năm chưa bóc màng seal'
    },
    warrantyMonths: 6
  }
];

export const CATEGORIES_CONFIG = [
  {
    id: 'fan',
    name: 'Quạt điện',
    subtitle: 'Động cơ BLDC & SoftAir siêu êm',
    count: '6 models',
    image: 'https://images.unsplash.com/photo-1594910069352-7010f3c55c70?auto=format&fit=crop&w=600&q=80',
    subcategories: ['Tất cả quạt', 'Quạt cây', 'Quạt treo tường', 'Quạt sàn FB-180', 'Quạt BLDC tiết kiệm điện', 'Quạt thông minh IoT', 'Quạt tích điện']
  },
  {
    id: 'ac',
    name: 'Điều hòa',
    subtitle: 'Inverter Eco & Coanda thổi trần',
    count: '4 models',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80',
    subcategories: ['Tất cả điều hòa', '9000 BTU', '12000 BTU', 'Series Slim v3', 'Series v5']
  },
  {
    id: 'induction',
    name: 'Bếp từ',
    subtitle: 'Mạch IGBT Đức đun liu riu',
    count: '3 models',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    subcategories: ['Tất cả bếp từ', 'Bếp từ đôi âm', 'Bếp từ đơn']
  },
  {
    id: 'hood',
    name: 'Máy hút mùi',
    subtitle: 'Cảm biến vẫy tay WaveSensor',
    count: '2 models',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=600&q=80',
    subcategories: ['Tất cả hút mùi', 'Chữ T hiện đại', 'Kính vát sang trọng']
  },
  {
    id: 'water_heater',
    name: 'Bình nước nóng',
    subtitle: 'Men Titanium chống ăn mòn & ELCB',
    count: '3 models',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=600&q=80',
    subcategories: ['Tất cả bình nóng lạnh', 'Bình gián tiếp 15L/20L/30L', 'Bình trực tiếp Turbo']
  },
  {
    id: 'accessory',
    name: 'Phụ kiện & linh kiện',
    subtitle: 'Phụ tùng chính hãng Chillami',
    count: '2 models',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    subcategories: ['Tất cả linh kiện', 'Remote thông minh', 'Lõi than hoạt tính']
  }
];

export interface FaqItem {
  id: string;
  category: 'mua-hang' | 'lap-dat' | 'bao-hanh' | 'cong-nghe';
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: 'f1',
    category: 'mua-hang',
    question: 'Chillami có những hình thức thanh toán nào?',
    answer: 'Chillami hỗ trợ đa dạng phương thức: 1) Thanh toán khi nhận hàng (COD) sau khi kiểm tra thiết bị; 2) Chuyển khoản tức thì qua mã VietQR miễn phí; 3) Thẻ tín dụng/ATM qua cổng bảo mật VNPAY; 4) Trả góp 0% lãi suất kỳ hạn 3, 6, 12 tháng qua thẻ tín dụng.'
  },
  {
    id: 'f2',
    category: 'lap-dat',
    question: 'Mua điều hòa hoặc bình nóng lạnh có được miễn phí công lắp đặt không?',
    answer: 'Có! Chillami áp dụng chính sách độc quyền: Miễn phí 100% công lắp đặt tiêu chuẩn tại nhà cho các sản phẩm Điều hòa, Máy hút mùi và Bình nước nóng tại Hà Nội, TP.HCM, Đà Nẵng, Hải Phòng và Cần Thơ. Kỹ thuật viên chính hãng được đào tạo chuyên sâu sẽ liên hệ hẹn giờ thuận tiện nhất cho quý khách.'
  },
  {
    id: 'f3',
    category: 'bao-hanh',
    question: 'Chính sách bảo hành 1 đổi 1 trong 30 ngày hoạt động ra sao?',
    answer: 'Nếu sản phẩm gặp bất kỳ lỗi kỹ thuật nào từ nhà sản xuất trong vòng 30 ngày kể từ ngày kích hoạt hoặc nhận hàng, Chillami cam kết đổi ngay máy mới nguyên seal tại nhà mà không phát sinh thêm bất cứ chi phí nào.'
  },
  {
    id: 'f4',
    category: 'bao-hanh',
    question: 'Kích hoạt bảo hành điện tử (E-Warranty) như thế nào?',
    answer: 'Rất đơn giản, quý khách chỉ cần vào mục "Kích hoạt bảo hành" trên website Chillami, nhập mã Serial Number in trên thân máy hoặc quét mã QR trên phiếu bảo hành và điền số điện thoại. Hệ thống sẽ gửi tin nhắn SMS xác nhận ngay lập tức mà không cần giữ lại giấy tờ.'
  },
  {
    id: 'f5',
    category: 'cong-nghe',
    question: 'Động cơ BLDC trên quạt Chillami có gì khác biệt so với quạt thường?',
    answer: 'Động cơ BLDC (Brushless DC - một chiều không chổi than) sử dụng nam châm vĩnh cửu và từ trường điện tử. Ưu điểm vượt trội: Tiết kiệm đến 70% điện năng tiêu thụ, vận hành siêu tĩnh lặng chỉ từ 13dB (không tiếng ro ro), không bị phát nhiệt khi chạy cả ngày lẫn đêm, và tuổi thọ gấp 3-4 lần động cơ AC truyền thống.'
  },
  {
    id: 'f6',
    category: 'cong-nghe',
    question: 'Mạch IGBT kép trên bếp từ Chillami giúp nấu ăn ngon hơn như thế nào?',
    answer: 'Bếp từ thông thường dùng mạch ngắt relay gián đoạn (on/off) ở mức nhiệt thấp khiến nước sôi bùng lên rồi tắt, dễ cháy khét hoặc làm trào canh. Mạch IGBT Infineon của Chillami điều xung biến tần liên tục (Continuous Inverter), giúp bếp duy trì mức nhiệt đun liu riu ổn định ngay cả ở nấc công suất nhỏ nhất (mức 1-3), chuẩn vị các món ninh, hầm, kho của người Việt.'
  }
];

export const ROOM_SOLUTIONS = [
  {
    id: 'bedroom',
    title: 'Giải Pháp Phòng Ngủ',
    tagline: 'Giấc ngủ sâu tĩnh lặng, nhiệt độ êm dịu, không khô họng',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    recommendedProducts: ['cf-100b', 'cac-09slim'],
    tips: [
      'Nên chọn quạt động cơ BLDC với độ ồn dưới 20dB để tránh ảnh hưởng giấc ngủ REM.',
      'Điều hòa nên dùng dòng Slim Coanda thổi gió trần, tránh thổi trực tiếp vào vùng đầu và ngực.',
      'Cài đặt chế độ Sleep Curve tự tăng 1°C sau mỗi 2 tiếng để chống lạnh lúc rạng sáng.'
    ]
  },
  {
    id: 'living',
    title: 'Giải Pháp Phòng Khách',
    tagline: 'Không gian mở thanh lịch, luồng khí tươi tuần hoàn mát mẻ',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    recommendedProducts: ['cac-09eco', 'fb-180', 'csa-200x'],
    tips: [
      'Kết hợp quạt tuần hoàn lốc xoáy FB-180 cùng điều hòa phòng khách giúp nhiệt độ mát đều khắp phòng chỉ trong 3 phút.',
      'Sử dụng quạt thông minh IoT kết nối WiFi điều khiển từ xa trước khi về nhà.'
    ]
  },
  {
    id: 'kitchen',
    title: 'Giải Pháp Nhà Bếp',
    tagline: 'Bếp sạch thoáng không mùi dầu mỡ, nấu ăn thảnh thơi',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    recommendedProducts: ['cic-2200d', 'chh-90t'],
    tips: [
      'Máy hút mùi cảm biến vẫy tay WaveSensor giúp bật máy mà không lo dính dầu mỡ lên phím.',
      'Bếp từ đôi công nghệ sôi lăn tăn mức nhỏ giúp món kho đậm vị truyền thống.'
    ]
  },
  {
    id: 'bathroom',
    title: 'Giải Pháp Phòng Tắm',
    tagline: 'Nước nóng ấm áp an toàn tuyệt đối, thư giãn sảng khoái',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    recommendedProducts: ['cwh-20sq', 'cwh-45dir'],
    tips: [
      'Bình chứa tráng men Titanium bảo hành 10 năm thích hợp nguồn nước nhiễm phèn hoặc vôi.',
      'Hệ thống an toàn kép TSS và chống giật ELCB điện tử ngắt điện ngay khi có rò rỉ dưới 0.01s.'
    ]
  }
];

export const INITIAL_WARRANTIES = [
  {
    serialNumber: 'CLM-FAN-2026-8899',
    productName: 'Quạt Cây Chillami Flow-100 BLDC',
    model: 'CF-100B',
    customerName: 'Nguyễn Văn Minh',
    customerPhone: '0912345678',
    customerEmail: 'minh.nguyen@example.com',
    purchaseDate: '2026-03-15',
    warrantyExpiry: '2028-03-15',
    status: 'active' as const,
    dealerName: 'Chillami Flagship Store Hà Nội'
  },
  {
    serialNumber: 'CLM-AC-2026-1234',
    productName: 'Điều Hòa Chillami Eco-Inverter 9000 BTU',
    model: 'CAC-09ECO',
    customerName: 'Trần Thị Thu Hà',
    customerPhone: '0987654321',
    customerEmail: 'ha.tran@example.com',
    purchaseDate: '2026-02-10',
    warrantyExpiry: '2029-02-10',
    status: 'active' as const,
    dealerName: 'Chillami Experience Center Cầu Giấy'
  }
];

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
    image: '/images/products/dhv09i.webp',
    recommendedProducts: ['dhv09i', 's-400', 'lhd-18iu'],
    tips: [
      'Phòng dưới 15m² thường phù hợp điều hòa 9.000 BTU; phòng 15–20m² nên chọn 12.000 BTU.',
      'Đặt quạt cây cách giường khoảng 1,5–2m và dùng mức gió nhẹ khi ngủ.',
      'Mùa nồm, dùng máy hút ẩm giữ độ ẩm phòng khoảng 50–60% để hạn chế nấm mốc.'
    ]
  },
  {
    id: 'living',
    title: 'Giải Pháp Phòng Khách',
    tagline: 'Không gian mở thanh lịch, luồng khí tươi tuần hoàn mát mẻ',
    image: '/images/products/lac-g62.webp',
    recommendedProducts: ['dhv12i', 'lac-g62', 's-300'],
    tips: [
      'Kết hợp quạt cây hoặc quạt điều hòa với điều hòa giúp không khí lưu thông đều khắp phòng.',
      'Quạt điều hòa làm mát hiệu quả nhất khi phòng thông thoáng, có cửa sổ mở.'
    ]
  },
  {
    id: 'kitchen',
    title: 'Giải Pháp Nhà Bếp',
    tagline: 'Nấu ăn nhanh gọn, căn bếp luôn sạch sẽ',
    image: '/images/products/lio-666v.webp',
    recommendedProducts: ['lio-666v', 'lid-888', 'lv-99'],
    tips: [
      'Bếp từ đôi nấu được hai món cùng lúc; cần dùng nồi chảo có đáy nhiễm từ.',
      'Bếp điện từ có vùng hồng ngoại dùng được cả nồi không nhiễm từ.',
      'Máy hút bụi không dây giúp dọn nhanh khu vực bếp và bàn ăn.'
    ]
  },
  {
    id: 'bathroom',
    title: 'Giải Pháp Phòng Tắm',
    tagline: 'Nước nóng ấm áp an toàn tuyệt đối, thư giãn sảng khoái',
    image: '/images/products/lwh-v15a26s.webp',
    recommendedProducts: ['lwh-v15a26s', 'lwh-i30a26s', 'lch-1597d'],
    tips: [
      'Gia đình 1–2 người phù hợp bình 15L; 2–3 người chọn 20L; 3–5 người chọn 30L.',
      'Mùa đông, máy sưởi gốm giúp phòng tắm ấm hơn; đặt máy xa khu vực có nước.'
    ]
  }
];

export const INITIAL_WARRANTIES = [
  {
    serialNumber: 'CLM-FAN-2026-8899',
    productName: 'Quạt cây Livotec S-400',
    model: 'S-400',
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
    productName: 'Điều hòa một chiều Livotec DHV09I Inverter',
    model: 'DHV09I',
    customerName: 'Trần Thị Thu Hà',
    customerPhone: '0987654321',
    customerEmail: 'ha.tran@example.com',
    purchaseDate: '2026-02-10',
    warrantyExpiry: '2029-02-10',
    status: 'active' as const,
    dealerName: 'Chillami Experience Center Cầu Giấy'
  }
];

import { CompetitorBenchmark } from '../types';

export const COMPETITOR_BENCHMARKS: CompetitorBenchmark[] = [
  {
    brand: 'Sunhouse',
    marketShare: 'Top 1 Phổ thông gia dụng (Bắc & Trung Bộ)',
    positioning: 'Thiết bị gia dụng quốc dân, giá rẻ, bình dân, mạng lưới đại lý dày đặc.',
    strengths: [
      'Độ phủ phân phối sâu rộng tới cấp huyện/xã',
      'Đa dạng ngành hàng (bếp, quạt, gia dụng nhỏ, nồi cơm)',
      'Giá thành tiếp cận số đông người tiêu dùng'
    ],
    weaknesses: [
      'Giao diện website rườm rà phong cách thương mại truyền thống, nhồi nhét banner',
      'Trải nghiệm tìm kiếm sản phẩm và bộ lọc thuộc tính kém, thiếu thông số kỹ thuật chuẩn hóa',
      'Quy trình kích hoạt bảo hành điện tử còn qua SMS/tổng đài, tra cứu web chập chờn',
      'Hình ảnh sản phẩm góc chụp đơn điệu, thiếu mô phỏng không gian sống hiện đại'
    ],
    digitalExperienceGaps: [
      'Không có công cụ chọn thiết bị theo diện tích phòng (BTU/diện tích)',
      'Không có công cụ so sánh trực quan đa sản phẩm',
      'Checkout trên web chậm, tỷ lệ rớt đơn cao do điều hướng qua quá nhiều bước'
    ],
    chillamiAdvantage: 'Chillami định vị cận cao cấp - công nghệ BLDC/Inverter êm ái, tối giản phong cách Bắc Âu, web tải tức thì, tích hợp công cụ tư vấn tính toán thông minh và mua sắm 1-click.'
  },
  {
    brand: 'Kangaroo',
    marketShare: 'Dẫn đầu máy lọc nước & mở rộng điện gia dụng',
    positioning: 'Thương hiệu sức khỏe gia đình, dải sản phẩm rộng, truyền thông mạnh mẽ.',
    strengths: [
      'Nhận diện thương hiệu mạnh mẽ từ TVC',
      'Kênh đại lý truyền thống và siêu thị điện máy bao phủ tốt',
      'Có nhiều chương trình khuyến mại, trade-in thu cũ'
    ],
    weaknesses: [
      'Website nhiều pop-up khuyến mãi gây khó chịu cho người dùng cao cấp',
      'Thiếu tính liên kết giữa mua sắm online và chỉ đường đến đại lý ủy quyền gần nhất',
      'Thông tin linh kiện/phụ kiện thay thế khó tìm kiếm',
      'Trải nghiệm mobile chưa tối ưu cho thao tác một tay'
    ],
    digitalExperienceGaps: [
      'Chưa có e-Warranty tự động hóa hoàn toàn với mã QR/Serial số hóa',
      'Bộ lọc sản phẩm chỉ dừng lại ở mức giá, chưa lọc sâu theo tính năng thông minh/động cơ/độ ồn'
    ],
    chillamiAdvantage: 'Giao diện Chillami sang trọng, không quảng cáo rác, tra cứu serial bảo hành điện tử trong 1 giây, tra cứu tồn kho theo showroom thời gian thực.'
  },
  {
    brand: 'Casper Việt Nam',
    marketShare: 'Top 3 Điều hòa & Tivi tại Việt Nam (Phân khúc trung cấp)',
    positioning: 'Sản phẩm chuẩn Thái Lan, bảo hành 1 đổi 1 ấn tượng, giá cạnh tranh.',
    strengths: [
      'Chính sách bảo hành đột phá tạo niềm tin khách hàng',
      'Thiết kế sản phẩm tương đối hiện đại, tối giản',
      'Truyền thông năng động hướng tới gia đình trẻ'
    ],
    weaknesses: [
      'Website thuần về Brand Catalogue / B2B cho thợ và đại lý tải tài liệu hơn là D2C',
      'Không hỗ trợ thanh toán trực tuyến hoặc mua sắm trực tiếp nhanh chóng',
      'Người dùng muốn mua phải tự đi tìm đại lý ngoài hoặc gọi hotline'
    ],
    digitalExperienceGaps: [
      'Không có giỏ hàng thương mại điện tử tích hợp thanh toán QR / Thẻ / Trả góp 0%',
      'Thiếu công cụ tương tác đo đạc công suất theo đặc thù nhà phố/chung cư Việt Nam'
    ],
    chillamiAdvantage: 'Chillami hoàn thiện cả 2 mũi nhọn: Kênh bán lẻ D2C giao lắp tận nơi trong 2h & Kênh đại lý ủy quyền B2B với chiết khấu rõ ràng.'
  },
  {
    brand: 'Panasonic / Daikin Việt Nam',
    marketShare: 'Thống lĩnh phân khúc Cao cấp & Dự án',
    positioning: 'Thương hiệu Nhật Bản, độ bền cao, công nghệ lọc khí & tiết kiệm điện đầu ngành.',
    strengths: [
      'Uy tín thương hiệu và chất lượng vượt trội',
      'Công nghệ Nanoe-X, Inverter, Swing Compressor hàng đầu thế giới',
      'Được ưa chuộng trong các dự án căn hộ cao cấp'
    ],
    weaknesses: [
      'Giá thành đắt đỏ, phụ tùng thay thế giá cao',
      'Website nặng nề kiểu tập đoàn đa quốc gia, cấu trúc menu phức tạp, khó thao tác trên di động',
      'Không niêm yết giá bán lẻ chính xác (buộc khách hàng phải dò giá qua thợ điện lạnh)'
    ],
    digitalExperienceGaps: [
      'Trải nghiệm mua sắm mập mờ về giá và chi phí vật tư lắp đặt',
      'Hỗ trợ khách hàng qua form tĩnh truyền thống phản hồi chậm'
    ],
    chillamiAdvantage: 'Chillami mang công nghệ cao cấp (BLDC SoftAir, IGBT Đức, Titanium Shield) với mức giá hợp lý cho người Việt, minh bạch giá bán & miễn phí lắp đặt trọn gói.'
  }
];

export interface UxStrategyPillar {
  pillar: string;
  vietnamConsumerPainPoint: string;
  chillamiSolution: string;
  keyFeatureInWebsite: string;
}

export const UX_STRATEGY_PILLARS: UxStrategyPillar[] = [
  {
    pillar: '1. Minh bạch chi phí & Lắp đặt',
    vietnamConsumerPainPoint: 'Khách hàng sợ phát sinh chi phí thợ lắp đặt vật tư (ống đồng, dây điện, công đục tường) khi mua điều hòa, bình nóng lạnh online.',
    chillamiSolution: 'Cam kết gói "Trọn gói miễn phí giao & lắp đặt" hiển thị minh bạch tại PDP và Checkout.',
    keyFeatureInWebsite: 'Huy hiệu "Free Installation & Giao 2h" và bảng tính vật tư rõ ràng trên trang chi tiết sản phẩm.'
  },
  {
    pillar: '2. Kích hoạt Bảo hành Điện tử (E-Warranty) 1 chạm',
    vietnamConsumerPainPoint: 'Thất lạc hóa đơn giấy, tem cào bị rách, không biết thời hạn bảo hành còn bao lâu.',
    chillamiSolution: 'Hệ thống E-Warranty tự động hóa qua Serial number hoặc SĐT, lưu lịch sử sửa chữa trực tuyến.',
    keyFeatureInWebsite: 'Tab "Bảo hành & Sửa chữa": Kích hoạt trong 30 giây, tra cứu hạn bảo hành tức thì, đặt lịch thợ tận nhà.'
  },
  {
    pillar: '3. Công cụ tư vấn chuẩn xác (Smart Room Advisor)',
    vietnamConsumerPainPoint: 'Người mua không rành kỹ thuật, chọn sai công suất điều hòa (thiếu lạnh hoặc tốn điện), chọn sai quạt gây ồn.',
    chillamiSolution: 'Công cụ tính BTU thông minh tính toán cả diện tích m², độ cao trần, hướng nắng Tây và số người.',
    keyFeatureInWebsite: 'Widget "Tính công suất Điều hòa theo phòng" & "Trắc nghiệm quạt BLDC SoftAir" dẫn thẳng đến model phù hợp.'
  },
  {
    pillar: '4. Bộ so sánh thông số chuẩn kỹ thuật',
    vietnamConsumerPainPoint: 'Khó phân biệt giữa các model cùng series, phân vân giữa các công nghệ BLDC vs AC, Inverter vs Thường.',
    chillamiSolution: 'Ma trận so sánh thông số trực quan đa thiết bị với các chỉ số làm nổi bật sự khác biệt.',
    keyFeatureInWebsite: 'Nút "So sánh" nổi ở mọi sản phẩm, mở bảng ma trận side-by-side chi tiết.'
  },
  {
    pillar: '5. Thanh toán tối ưu hành vi người Việt',
    vietnamConsumerPainPoint: 'Lo ngại bảo mật thẻ, thích quét mã QR ngân hàng VietQR hoặc nhận hàng kiểm tra mới thanh toán COD.',
    chillamiSolution: 'Tích hợp đầy đủ VietQR tự sinh mã động, COD kiểm hàng trước khi thanh toán, và Trả góp 0%.',
    keyFeatureInWebsite: 'Quy trình Checkout 3 bước đơn giản, tự động sinh mã VietQR có mã đơn hàng để đối soát tức thì.'
  }
];

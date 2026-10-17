import React from 'react';
import { Logo } from '../common/Logo';
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  CreditCard,
  Award
} from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string, payload?: any) => void;
  onOpenWarranty: () => void;
  onOpenOrderTracking: () => void;
  onOpenBenchmark?: () => void;
  onOpenBtuCalc: () => void;
  onOpenPolicy: (policyKey: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenWarranty,
  onOpenOrderTracking,
  onOpenBenchmark,
  onOpenBtuCalc,
  onOpenPolicy,
}) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      {/* 1. TOP TRUST & REASSURANCE BANNER (KHÔNG TRÙNG LẶP VỚI CHILLAMI CARE) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-slate-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Chuẩn Châu Âu & ISO 9001</h4>
              <p className="text-xs text-slate-400 mt-0.5">Chip IGBT Infineon Đức, 100% động cơ đồng nguyên chất</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Mạng lưới 250+ điểm bán</h4>
              <p className="text-xs text-slate-400 mt-0.5">Trải nghiệm thực tế tại Showroom & đại lý trên toàn quốc</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Thanh toán & Trả góp 0%</h4>
              <p className="text-xs text-slate-400 mt-0.5">Quét VietQR tức thì, COD, thẻ quốc tế và trả góp 0% lãi suất</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Tổng đài kỹ thuật 1900 8899</h4>
              <p className="text-xs text-slate-400 mt-0.5">Chuyên gia tư vấn 24/7, tiếp nhận và hỗ trợ tức thì</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SITEMAP COLUMNS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand info (spans 2 cols on wide screen) */}
          <div className="col-span-2 space-y-4">
            <Logo iconSize={36} color="#2dd4bf" textColor="#ffffff" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Chillami - Thương hiệu thiết bị điện gia dụng thế hệ mới tiên phong ứng dụng công nghệ động cơ BLDC không chổi than, Inverter tiết kiệm điện và chuẩn hóa độ ồn tĩnh lặng cho gia đình Việt.
            </p>

            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Trụ sở chính: Tầng 12, Tòa nhà Chillami Tower, Cầu Giấy, Hà Nội</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Tổng đài CSKH & Bảo hành: <strong>1900 8899</strong> (24/7)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Email hỗ trợ: cskh@chillami.vn</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Giờ làm việc showroom: 08:00 - 21:30 hàng ngày</span>
              </div>
            </div>
          </div>

          {/* Col 1: Sản phẩm */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Sản Phẩm
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('products', { category: 'fan' })}
                  className="hover:text-teal-400 transition-colors"
                >
                  Quạt điện BLDC
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products', { category: 'ac' })}
                  className="hover:text-teal-400 transition-colors"
                >
                  Điều hòa Eco-Inverter
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products', { category: 'induction' })}
                  className="hover:text-teal-400 transition-colors"
                >
                  Bếp từ đôi MasterChef
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products', { category: 'hood' })}
                  className="hover:text-teal-400 transition-colors"
                >
                  Máy hút mùi cảm ứng
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products', { category: 'water_heater' })}
                  className="hover:text-teal-400 transition-colors"
                >
                  Bình nước nóng Titanium
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products', { category: 'accessory' })}
                  className="hover:text-teal-400 transition-colors"
                >
                  Phụ kiện & Linh kiện
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Tư vấn & Công cụ */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Tư Vấn & Công Cụ
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onOpenBtuCalc} className="hover:text-teal-400 transition-colors text-left">
                  Tính BTU Điều Hòa Chuẩn
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('smart-connect')} className="hover:text-teal-400 transition-colors text-left text-teal-300 font-medium flex items-center gap-1">
                  <span>📱 Kết nối thiết bị & Tải App</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('solutions')} className="hover:text-teal-400 transition-colors text-left">
                  Giải pháp theo không gian
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faqs')} className="hover:text-teal-400 transition-colors text-left">
                  Mẹo sử dụng & Bảo quản
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('technology')} className="hover:text-teal-400 transition-colors text-left">
                  Công nghệ BLDC & Inverter
                </button>
              </li>
              <li>
                <button onClick={onOpenOrderTracking} className="hover:text-teal-400 transition-colors text-left text-teal-300 font-medium">
                  Tra cứu tiến độ đơn hàng
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Hậu mãi & Bảo hành */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Hỗ Trợ & Hậu Mãi
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onOpenWarranty} className="hover:text-teal-400 transition-colors text-left">
                  Kích hoạt bảo hành điện tử
                </button>
              </li>
              <li>
                <button onClick={onOpenWarranty} className="hover:text-teal-400 transition-colors text-left">
                  Tra cứu hạn bảo hành
                </button>
              </li>
              <li>
                <button onClick={onOpenWarranty} className="hover:text-teal-400 transition-colors text-left">
                  Đặt lịch kỹ thuật viên tại nhà
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('dealers')} className="hover:text-teal-400 transition-colors text-left">
                  Hệ thống showroom & đại lý
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faqs')} className="hover:text-teal-400 transition-colors text-left">
                  Câu hỏi thường gặp (FAQ)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Hợp tác B2B & Chính sách */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Chính Sách & B2B
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('b2b')} className="hover:text-teal-400 transition-colors text-left">
                  Trở thành đại lý cấp 1
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('b2b')} className="hover:text-teal-400 transition-colors text-left">
                  Khách hàng dự án công trình
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('delivery')} className="hover:text-teal-400 transition-colors text-left">
                  Chính sách giao & lắp đặt
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('returns')} className="hover:text-teal-400 transition-colors text-left">
                  Chính sách đổi trả 30 ngày
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('privacy')} className="hover:text-teal-400 transition-colors text-left">
                  Chính sách bảo mật
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. CERTIFICATIONS & PAYMENT BADGES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1.5 font-medium text-slate-300">
            <Award className="w-4 h-4 text-amber-400" />
            Chứng nhận chất lượng:
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px]">TCVN 7830:2021</span>
          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px]">ISO 9001:2015</span>
          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px]">CE Conformity</span>
          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px]">RoHS Eco Friendly</span>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span>Đối tác thanh toán:</span>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-white text-slate-900 rounded font-bold text-[10px]">VietQR</span>
            <span className="px-2 py-1 bg-blue-700 text-white rounded font-bold text-[10px]">VNPAY</span>
            <span className="px-2 py-1 bg-slate-800 text-slate-200 rounded font-medium text-[10px]">Visa / Master</span>
            <span className="px-2 py-1 bg-emerald-700 text-white rounded font-medium text-[10px]">COD</span>
          </div>
        </div>
      </div>

      {/* 4. COPYRIGHT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-slate-800/60 text-center text-xs text-slate-500">
        <p>© 2026 Chillami Home Appliances Vietnam. All rights reserved.</p>
      </div>
    </footer>
  );
};

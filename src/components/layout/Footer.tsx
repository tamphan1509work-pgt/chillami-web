import React from 'react';
import { Logo } from '../common/Logo';
import { CATEGORIES_CONFIG } from '../../data/products';
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
import { useLanguage } from '../../context/LanguageContext';

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
  const { l, translateCategory } = useLanguage();
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
              <h4 className="text-sm font-semibold text-white">{l('Chuẩn Châu Âu & ISO 9001', 'European Standards & ISO 9001')}</h4>
              <p className="text-xs text-slate-400 mt-0.5">{l('Chip IGBT Infineon Đức, 100% động cơ đồng nguyên chất', 'German Infineon IGBT chips, 100% pure copper motors')}</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">{l('Mạng lưới 250+ điểm bán', '250+ points of sale')}</h4>
              <p className="text-xs text-slate-400 mt-0.5">{l('Trải nghiệm thực tế tại Showroom & đại lý trên toàn quốc', 'Hands-on experience at showrooms & dealers nationwide')}</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">{l('Thanh toán & Trả góp 0%', 'Payment & 0% Installments')}</h4>
              <p className="text-xs text-slate-400 mt-0.5">{l('Quét VietQR tức thì, COD, thẻ quốc tế và trả góp 0% lãi suất', 'Instant VietQR, COD, international cards and 0% interest installments')}</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">{l('Tổng đài kỹ thuật 1900 8899', 'Technical hotline 1900 8899')}</h4>
              <p className="text-xs text-slate-400 mt-0.5">{l('Chuyên gia tư vấn 24/7, tiếp nhận và hỗ trợ tức thì', '24/7 expert advisors with instant support')}</p>
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
              {l('Chillami - Thương hiệu thiết bị điện gia dụng thế hệ mới tiên phong ứng dụng công nghệ động cơ BLDC không chổi than, Inverter tiết kiệm điện và chuẩn hóa độ ồn tĩnh lặng cho gia đình Việt.', 'Chillami – a new-generation home appliance brand pioneering brushless BLDC motors, energy-saving Inverter technology and whisper-quiet noise standards for Vietnamese families.')}
            </p>

            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{l('Trụ sở chính: Tầng 12, Tòa nhà Chillami Tower, Cầu Giấy, Hà Nội', 'Head office: 12th Floor, Chillami Tower, Cau Giay, Hanoi')}</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{l('Tổng đài CSKH & Bảo hành:', 'Customer care & warranty hotline:')} <strong>1900 8899</strong> (24/7)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{l('Email hỗ trợ: cskh@chillami.vn', 'Support email: cskh@chillami.vn')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{l('Giờ làm việc showroom: 08:00 - 21:30 hàng ngày', 'Showroom hours: 08:00 - 21:30 daily')}</span>
              </div>
            </div>
          </div>

          {/* Col 1: Sản phẩm */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {l('Sản Phẩm', 'Products')}
            </h5>
            <ul className="space-y-2 text-xs">
              {CATEGORIES_CONFIG.map(translateCategory).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onNavigate('products', { category: cat.id })}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Tư vấn & Công cụ */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {l('Tư Vấn & Công Cụ', 'Advice & Tools')}
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onOpenBtuCalc} className="hover:text-teal-400 transition-colors text-left">
                  {l('Tính BTU Điều Hòa Chuẩn', 'Accurate AC BTU calculator')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('smart-connect')} className="hover:text-teal-400 transition-colors text-left text-teal-300 font-medium flex items-center gap-1">
                  <span>{l('📱 Kết nối thiết bị & Tải App', '📱 Pair devices & Download app')}</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('solutions')} className="hover:text-teal-400 transition-colors text-left">
                  {l('Giải pháp theo không gian', 'Solutions by space')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faqs')} className="hover:text-teal-400 transition-colors text-left">
                  {l('Mẹo sử dụng & Bảo quản', 'Usage & care tips')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('technology')} className="hover:text-teal-400 transition-colors text-left">
                  {l('Công nghệ BLDC & Inverter', 'BLDC & Inverter technology')}
                </button>
              </li>
              <li>
                <button onClick={onOpenOrderTracking} className="hover:text-teal-400 transition-colors text-left text-teal-300 font-medium">
                  {l('Tra cứu tiến độ đơn hàng', 'Track order progress')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Hậu mãi & Bảo hành */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {l('Hỗ Trợ & Hậu Mãi', 'Support & After-Sales')}
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onOpenWarranty} className="hover:text-teal-400 transition-colors text-left">
                  {l('Kích hoạt bảo hành điện tử', 'Activate e-warranty')}
                </button>
              </li>
              <li>
                <button onClick={onOpenWarranty} className="hover:text-teal-400 transition-colors text-left">
                  {l('Tra cứu hạn bảo hành', 'Check warranty period')}
                </button>
              </li>
              <li>
                <button onClick={onOpenWarranty} className="hover:text-teal-400 transition-colors text-left">
                  {l('Đặt lịch kỹ thuật viên tại nhà', 'Book a home technician')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('dealers')} className="hover:text-teal-400 transition-colors text-left">
                  {l('Hệ thống showroom & đại lý', 'Showrooms & dealers')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faqs')} className="hover:text-teal-400 transition-colors text-left">
                  {l('Câu hỏi thường gặp (FAQ)', 'Frequently asked questions (FAQ)')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Hợp tác B2B & Chính sách */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {l('Chính Sách & B2B', 'Policies & B2B')}
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('b2b')} className="hover:text-teal-400 transition-colors text-left">
                  {l('Trở thành đại lý cấp 1', 'Become a tier-1 dealer')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('b2b')} className="hover:text-teal-400 transition-colors text-left">
                  {l('Khách hàng dự án công trình', 'Project & construction clients')}
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('delivery')} className="hover:text-teal-400 transition-colors text-left">
                  {l('Chính sách giao & lắp đặt', 'Delivery & installation policy')}
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('returns')} className="hover:text-teal-400 transition-colors text-left">
                  {l('Chính sách đổi trả 30 ngày', '30-day return policy')}
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('privacy')} className="hover:text-teal-400 transition-colors text-left">
                  {l('Chính sách bảo mật', 'Privacy policy')}
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
            {l('Chứng nhận chất lượng:', 'Quality certifications:')}
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px]">TCVN 7830:2021</span>
          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px]">ISO 9001:2015</span>
          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px]">CE Conformity</span>
          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px]">RoHS Eco Friendly</span>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span>{l('Đối tác thanh toán:', 'Payment partners:')}</span>
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

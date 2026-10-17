import React, { useState } from 'react';
import { COMPETITOR_BENCHMARKS, UX_STRATEGY_PILLARS } from '../../data/benchmark';
import { COMPETITOR_BENCHMARKS_EN, UX_STRATEGY_PILLARS_EN } from '../../data/benchmark.en';
import {
  X,
  Sparkles,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Layers,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface BenchmarkModalProps {
  onClose: () => void;
  onExploreProducts: () => void;
}

export const BenchmarkModal: React.FC<BenchmarkModalProps> = ({
  onClose,
  onExploreProducts,
}) => {
  const { l, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'benchmark' | 'ux-pillars' | 'sitemap-stats'>('benchmark');

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-900 text-white">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-teal-500/20 text-teal-400 rounded-xl border border-teal-500/30">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">
                  {l('Báo Cáo Benchmark Đối Thủ & Chiến Lược Trải Nghiệm Chillami', 'Competitor Benchmark & Chillami Experience Strategy Report')}
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-teal-400 text-slate-950">
                  {l('Thị trường Việt Nam 2026', 'Vietnam market 2026')}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {l('Phân tích chuyên sâu đối thủ Sunhouse, Kangaroo, Casper, Panasonic/Daikin và giải pháp tối ưu UX cho Chillami', 'In-depth analysis of Sunhouse, Kangaroo, Casper and Panasonic/Daikin, plus UX optimization solutions for Chillami')}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-4 px-6 pt-4 border-b border-slate-200 bg-slate-50 text-xs font-bold">
          <button
            onClick={() => setActiveTab('benchmark')}
            className={`pb-3 border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'benchmark'
                ? 'border-teal-700 text-teal-800'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>{l('1. Benchmark Đối Thủ Cạnh Tranh', '1. Competitor Benchmark')}</span>
          </button>

          <button
            onClick={() => setActiveTab('ux-pillars')}
            className={`pb-3 border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'ux-pillars'
                ? 'border-teal-700 text-teal-800'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Lightbulb className="w-4 h-4" />
            <span>{l('2. 5 Trụ Cột Tối Ưu UX Cho Chillami', '2. 5 UX Pillars for Chillami')}</span>
          </button>

          <button
            onClick={() => setActiveTab('sitemap-stats')}
            className={`pb-3 border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'sitemap-stats'
                ? 'border-teal-700 text-teal-800'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{l('3. Cấu Trúc Sitemap 59 Trang & Roadmap', '3. 59-Page Sitemap & Roadmap')}</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* TAB 1: BENCHMARK ĐỐI THỦ */}
          {activeTab === 'benchmark' && (
            <div className="space-y-6">
              <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 text-xs text-teal-900 leading-relaxed flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <strong>{l('Kết luận nghiên cứu thị trường điện gia dụng Việt Nam:', 'Vietnam home appliance market research conclusion:')}</strong> {l('Các đối thủ hiện tại chủ yếu phụ thuộc vào kênh phân phối đại lý truyền thống hoặc có website nặng nề, thiếu tính công cụ số (Digital Advisory Tools). Chillami chiếm lĩnh lợi thế nhờ kết hợp trải nghiệm mua lẻ D2C hiện đại, chính sách trọn gói miễn phí lắp đặt, và hệ sinh thái bảo hành điện tử 1-chạm.', 'Current competitors rely mainly on traditional dealer channels or heavy websites lacking digital advisory tools. Chillami gains the edge by combining a modern D2C retail experience, an all-inclusive free installation policy and a one-tap e-warranty ecosystem.')}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(language === 'en' ? COMPETITOR_BENCHMARKS_EN : COMPETITOR_BENCHMARKS).map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-base font-extrabold text-slate-900">{item.brand}</h4>
                        <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                          {item.marketShare}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mb-3 italic">"{item.positioning}"</p>

                      <div className="space-y-3 text-xs">
                        <div>
                          <div className="font-bold text-emerald-800 mb-1 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            {l('Ưu điểm hiện tại:', 'Current strengths:')}
                          </div>
                          <ul className="list-disc pl-4 text-slate-600 space-y-0.5">
                            {item.strengths.map((s, i) => (
                              <li key={i}>{s}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="font-bold text-rose-800 mb-1 flex items-center gap-1">
                            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                            {l('Điểm yếu & Hạn chế trải nghiệm:', 'Weaknesses & experience limitations:')}
                          </div>
                          <ul className="list-disc pl-4 text-slate-600 space-y-0.5">
                            {item.weaknesses.map((w, i) => (
                              <li key={i}>{w}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="font-bold text-amber-800 mb-1">{l('Khoảng trống số hóa (Digital Gaps):', 'Digital gaps:')}</div>
                          <ul className="list-disc pl-4 text-slate-600 space-y-0.5">
                            {item.digitalExperienceGaps.map((g, i) => (
                              <li key={i}>{g}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 mt-4 border-t border-slate-100 bg-teal-50/60 p-3 rounded-xl border border-teal-100/60">
                      <div className="text-[10px] font-bold text-teal-800 uppercase tracking-wide">
                        {l('Lợi thế khác biệt của Chillami:', 'Chillami\'s differentiating advantage:')}
                      </div>
                      <p className="text-xs text-teal-950 font-medium mt-1 leading-relaxed">
                        {item.chillamiAdvantage}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: UX PILLARS */}
          {activeTab === 'ux-pillars' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500">
                {l('5 giải pháp thiết kế tương tác được Chillami triển khai trực tiếp trên website nhằm tháo gỡ triệt để các rào cản tâm lý mua hàng của người tiêu dùng Việt Nam:', '5 interactive design solutions Chillami built into the website to remove Vietnamese consumers\' psychological barriers to buying:')}
              </p>

              <div className="space-y-4">
                {(language === 'en' ? UX_STRATEGY_PILLARS_EN : UX_STRATEGY_PILLARS).map((p, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col md:flex-row gap-4 items-start"
                  >
                    <div className="w-full md:w-1/3">
                      <h4 className="text-sm font-extrabold text-slate-900 mb-1">{p.pillar}</h4>
                      <div className="text-xs text-rose-700 bg-rose-50 p-2.5 rounded-xl border border-rose-100">
                        <strong>{l('Nỗi sợ của khách hàng VN:', 'Vietnamese customer concern:')}</strong> {p.vietnamConsumerPainPoint}
                      </div>
                    </div>

                    <div className="w-full md:w-2/3 space-y-2">
                      <div className="text-xs text-teal-950 bg-teal-50/80 p-3 rounded-xl border border-teal-100">
                        <strong>{l('Giải pháp Chillami:', 'Chillami solution:')}</strong> {p.chillamiSolution}
                      </div>
                      <div className="text-xs text-slate-600 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span><strong>{l('Tính năng hiện diện trên web:', 'Website feature:')}</strong> {p.keyFeatureInWebsite}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SITEMAP IMPLEMENTATION */}
          {activeTab === 'sitemap-stats' && (
            <div className="space-y-6 text-xs text-slate-700">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-teal-50 rounded-2xl border border-teal-200 text-center">
                  <div className="text-3xl font-extrabold text-teal-800">34</div>
                  <div className="text-xs font-bold text-teal-900 mt-1">{l('Giai đoạn 1: Launch', 'Phase 1: Launch')}</div>
                  <div className="text-[11px] text-teal-700 mt-0.5">{l('Sản phẩm cốt lõi, D2C checkout, bảo hành e-Warranty', 'Core products, D2C checkout, e-Warranty')}</div>
                </div>

                <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-200 text-center">
                  <div className="text-3xl font-extrabold text-indigo-800">23</div>
                  <div className="text-xs font-bold text-indigo-900 mt-1">{l('Giai đoạn 2: Growth', 'Phase 2: Growth')}</div>
                  <div className="text-[11px] text-indigo-700 mt-0.5">{l('Công cụ so sánh, tính BTU, B2B đại lý, cẩm nang phòng', 'Comparison tool, BTU calculator, B2B dealers, room guides')}</div>
                </div>

                <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-center">
                  <div className="text-3xl font-extrabold text-amber-800">2</div>
                  <div className="text-xs font-bold text-amber-900 mt-1">{l('Giai đoạn 3: Expansion', 'Phase 3: Expansion')}</div>
                  <div className="text-[11px] text-amber-700 mt-0.5">{l('Mở rộng dải sản phẩm bếp từ & bình trực tiếp', 'Expand induction hob & direct water heater ranges')}</div>
                </div>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="font-bold text-sm text-slate-900">
                  {l('Tóm Tắt 7 Khối Chức Năng Chính Của Website Chillami:', 'Summary of the 7 Main Functional Blocks of the Chillami Website:')}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <strong>{l('1. Sản Phẩm (33 trang):', '1. Products (33 pages):')}</strong> {l('Quạt BLDC, Điều hòa Inverter, Bếp từ IGBT, Máy hút mùi chữ T & vát, Bình nước nóng Titanium, Phụ kiện.', 'BLDC fans, Inverter ACs, IGBT induction hobs, T-shape & angled range hoods, Titanium water heaters, accessories.')}
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <strong>{l('2. Ưu Đãi (3 trang):', '2. Promotions (3 pages):')}</strong> {l('Hub khuyến mại, Landing campaign ra mắt, Voucher tân gia.', 'Promotions hub, launch campaign landing page, housewarming vouchers.')}
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <strong>{l('3. Tư Vấn & Hỗ Trợ (6 trang):', '3. Advice & Support (6 pages):')}</strong> {l('Công cụ tính BTU theo diện tích, Hướng dẫn sử dụng PDF, Đặt lịch thợ tận nhà, Kích hoạt bảo hành điện tử.', 'BTU calculator by room size, PDF user manuals, home technician booking, e-warranty activation.')}
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <strong>{l('4. Về Chillami (3 trang):', '4. About Chillami (3 pages):')}</strong> {l('Câu chuyện thương hiệu, R&D nhà máy chuẩn ISO, Công nghệ BLDC & Inverter.', 'Brand story, ISO-standard factory R&D, BLDC & Inverter technology.')}
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <strong>{l('5. Liên Hệ & Đối Tác (3 trang):', '5. Contact & Partners (3 pages):')}</strong> {l('Hệ thống showroom 63 tỉnh, Form đăng ký đại lý B2B, Dự án công trình.', 'Showrooms in 63 provinces, B2B dealer registration form, construction projects.')}
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <strong>{l('6. Chính Sách & Pháp Lý (6 trang):', '6. Policies & Legal (6 pages):')}</strong> {l('Miễn phí giao lắp, Đổi trả 30 ngày, Thanh toán an toàn, Bảo mật dữ liệu.', 'Free delivery & installation, 30-day returns, secure payment, data privacy.')}
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 md:col-span-2">
                    <strong>{l('7. Tiện Ích Mua Sắm:', '7. Shopping Utilities:')}</strong> {l('Tìm kiếm tức thì, Giỏ hàng sliding drawer, Checkout VietQR động, Tra cứu đơn hàng theo mã đơn/SĐT.', 'Instant search, sliding cart drawer, dynamic VietQR checkout, order tracking by order ID/phone.')}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 px-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Chillami Digital Strategy & CX Excellence
          </span>
          <button
            onClick={() => {
              onClose();
              onExploreProducts();
            }}
            className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
          >
            <span>{l('Trải nghiệm mua hàng Chillami', 'Try the Chillami shopping experience')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import {
  Flame,
  Clock,
  Tag,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Truck,
  RotateCcw
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface PromotionalBannerProps {
  onExploreProducts: () => void;
  onExplorePromotions?: () => void;
}

export const PromotionalBanner: React.FC<PromotionalBannerProps> = ({
  onExploreProducts,
  onExplorePromotions,
}) => {
  const { l } = useLanguage();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Live Countdown Timer (e.g. ends in 2 days, 14 hours, 32 mins, 40 secs)
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 40,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-teal-950 via-slate-900 to-teal-900 border border-teal-500/30 shadow-2xl p-6 sm:p-10 lg:p-12 text-white">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left 7 cols: Campaign Title & Countdown */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold">
              <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>{l('SIÊU ĐẠI TIỆC MÙA HÈ 2026 · MÃ GIẢM ĐẾN 500.000Đ', 'SUMMER MEGA SALE 2026 · CODES UP TO 500,000đ OFF')}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display tracking-tight text-white leading-tight">
              {l('Mùa Hè Mát Lành Cùng Livotec', 'Stay Cool This Summer with Livotec')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-amber-200">
                {l('Quạt Cây · Quạt Điều Hòa · Điều Hòa Inverter', 'Standing Fans · Air Coolers · Inverter ACs')}
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              {l('Nâng cấp không gian sống với thiết bị Livotec chính hãng. Đổi quạt cũ lấy quạt mới trợ giá ngay 300.000đ, miễn phí công lắp đặt tại nhà.', 'Upgrade your living space with genuine Livotec appliances. Trade in your old fan for a new one with an instant 300,000đ subsidy and free home installation.')}
            </p>

            {/* Countdown Clock */}
            <div className="space-y-2 pt-1">
              <div className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                <span>{l('Ưu đãi chớp nhoáng kết thúc sau:', 'Flash deal ends in:')}</span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 text-center">
                <div className="p-2 sm:p-2.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/20 min-w-[54px]">
                  <div className="text-lg sm:text-2xl font-black text-amber-300 font-mono">
                    {String(timeLeft.days).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">{l('Ngày', 'Days')}</div>
                </div>

                <span className="text-lg font-bold text-slate-500">:</span>

                <div className="p-2 sm:p-2.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/20 min-w-[54px]">
                  <div className="text-lg sm:text-2xl font-black text-amber-300 font-mono">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">{l('Giờ', 'Hours')}</div>
                </div>

                <span className="text-lg font-bold text-slate-500">:</span>

                <div className="p-2 sm:p-2.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/20 min-w-[54px]">
                  <div className="text-lg sm:text-2xl font-black text-amber-300 font-mono">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">{l('Phút', 'Mins')}</div>
                </div>

                <span className="text-lg font-bold text-slate-500">:</span>

                <div className="p-2 sm:p-2.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/20 min-w-[54px]">
                  <div className="text-lg sm:text-2xl font-black text-teal-300 font-mono">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">{l('Giây', 'Secs')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right 5 cols: Exclusive Vouchers Card & CTA */}
          <div className="lg:col-span-5 space-y-4">
            {/* Voucher 1 */}
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-between gap-3 group">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold tracking-wide tabular-nums text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-md border border-amber-400/30">
                    {l('GIẢM 300.000đ', '300,000đ OFF')}
                  </span>
                  <span className="text-xs text-slate-300 tabular-nums">{l('Đơn từ 1.800.000đ', 'Orders from 1,800,000đ')}</span>
                </div>
                <div className="text-xs text-slate-300">
                  {l('Mã:', 'Code:')} <strong className="ml-0.5 text-white text-sm font-semibold tracking-wider">CHILLAMI2026</strong>
                </div>
              </div>

              <button
                onClick={() => handleCopy('CHILLAMI2026')}
                className="px-3.5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-xs transition-colors cursor-pointer shrink-0 flex items-center gap-1.5"
              >
                {copiedCode === 'CHILLAMI2026' ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>{l('Đã lưu!', 'Saved!')}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{l('Sao chép', 'Copy')}</span>
                  </>
                )}
              </button>
            </div>

            {/* Voucher 2 */}
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-between gap-3 group">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold tracking-wide tabular-nums text-teal-300 bg-teal-500/20 px-2 py-0.5 rounded-md border border-teal-400/30">
                    {l('GIẢM 500.000đ', '500,000đ OFF')}
                  </span>
                  <span className="text-xs text-slate-300 tabular-nums">{l('Đơn Điều Hòa / Bếp từ', 'AC / induction hob orders')}</span>
                </div>
                <div className="text-xs text-slate-300">
                  {l('Mã:', 'Code:')} <strong className="ml-0.5 text-white text-sm font-semibold tracking-wider">COOLSUMMER</strong>
                </div>
              </div>

              <button
                onClick={() => handleCopy('COOLSUMMER')}
                className="px-3.5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-xs transition-colors cursor-pointer shrink-0 flex items-center gap-1.5"
              >
                {copiedCode === 'COOLSUMMER' ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>{l('Đã lưu!', 'Saved!')}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{l('Sao chép', 'Copy')}</span>
                  </>
                )}
              </button>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={onExploreProducts}
                className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-2xl bg-white text-slate-950 hover:bg-slate-100 font-semibold text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{l('Khám phá sản phẩm Livotec', 'Explore Livotec products')}</span>
                <ArrowRight className="w-4 h-4 text-teal-700" />
              </button>

              {onExplorePromotions && (
                <button
                  onClick={onExplorePromotions}
                  className="w-full sm:w-auto py-3.5 px-5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/20 transition-all cursor-pointer"
                >
                  {l('Xem thêm ưu đãi', 'See more deals')}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

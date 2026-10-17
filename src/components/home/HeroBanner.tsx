import React, { useState } from 'react';
import {
  Wind,
  ShieldCheck,
  Zap,
  ArrowRight,
  Calculator,
  Sparkles,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PRODUCTS, CATEGORIES_CONFIG } from '../../data/products';

type HeroCategory = 'fan' | 'ac' | 'water_heater' | 'air_cooler';

const HERO_FEATURED: Record<HeroCategory, string> = {
  fan: 's-400',
  ac: 'dhv12i',
  water_heater: 'lwh-i30a26s',
  air_cooler: 'lac-g62',
};

interface HeroBannerProps {
  onExploreProducts: (category?: string) => void;
  onOpenBtuCalc: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onExploreProducts,
  onOpenBtuCalc,
}) => {
  const { language, t, l, translateProduct, translateCategory, formatCurrency } = useLanguage();
  const [activeTab, setActiveTab] = useState<HeroCategory>('fan');

  // Showcase built from the real catalog: featured product image and lowest listed price per category
  const featured = translateProduct(PRODUCTS.find((p) => p.id === HERO_FEATURED[activeTab])!);
  const category = translateCategory(CATEGORIES_CONFIG.find((c) => c.id === activeTab)!);
  const prices = PRODUCTS.filter((p) => p.category === activeTab && !p.contactForPrice).map((p) => p.price);
  const current = {
    badge: `${category.count} ${l('sản phẩm', 'products')}`,
    title: category.name,
    desc: featured.name,
    stat: prices.length ? formatCurrency(Math.min(...prices)) : l('Liên hệ', 'Contact us'),
    statLabel: prices.length ? l('Giá chỉ từ', 'Starting from') : l('Báo giá theo yêu cầu', 'Quote on request'),
    image: featured.gallery[0] ?? featured.image,
    fallbackImage: featured.image,
    actionLabel: l(`Xem ${category.name.toLowerCase()}`, `View ${category.name.toLowerCase()}`),
  };

  return (
    <section className="relative bg-gradient-to-b from-teal-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-14 lg:pb-20">
        {/* Top Tagline & Benchmark CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800/80">
          <div className="flex items-center gap-2 text-xs text-teal-400 font-semibold tracking-wider uppercase">
            <Sparkles className="w-4 h-4 text-teal-300" />
            <span>{language === 'vi' ? 'Thế hệ thiết bị điện gia dụng thông minh Chillami' : 'Next-Gen Chillami Smart Home Appliances'}</span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1.5 text-teal-300 font-medium">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              {language === 'vi' ? '1 Đổi 1 trong 30 ngày' : '30-Day 1-to-1 Replacement'}
            </span>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              {language === 'vi' ? 'Bảo hành chính hãng tới 10 năm' : 'Up to 10-Year Warranty'}
            </span>
          </div>
        </div>

        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Hero Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-display">
              {language === 'vi' ? (
                <>
                  Nâng tầm không gian sống với thiết bị{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-200">
                    siêu êm & tiết kiệm điện
                  </span>
                </>
              ) : (
                <>
                  Elevate your living space with{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-200">
                    ultra-quiet & energy-saving
                  </span>{' '}
                  appliances
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              {l(
                'Thiết bị điện gia dụng Livotec chính hãng: quạt cây, điều hòa Inverter, quạt điều hòa, bình nước nóng, bếp từ, máy hút ẩm, máy sưởi và máy hút bụi.',
                'Genuine Livotec home appliances: standing fans, Inverter air conditioners, air coolers, water heaters, induction hobs, dehumidifiers, heaters and vacuum cleaners.'
              )}
            </p>

            {/* Quick Metrics / USPs */}
            <div className="grid grid-cols-3 gap-4 py-3 max-w-lg">
              <div className="border-l-2 border-teal-500 pl-3">
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">{PRODUCTS.length}</div>
                <div className="text-xs text-slate-400">{l('Sản phẩm chính hãng', 'Genuine products')}</div>
              </div>
              <div className="border-l-2 border-teal-500 pl-3">
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">{CATEGORIES_CONFIG.length}</div>
                <div className="text-xs text-slate-400">{l('Danh mục thiết bị', 'Product categories')}</div>
              </div>
              <div className="border-l-2 border-teal-500 pl-3">
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">{language === 'vi' ? '1 Đổi 1' : '1 to 1'}</div>
                <div className="text-xs text-slate-400">{language === 'vi' ? '30 ngày tại nhà' : '30-day swap'}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onExploreProducts()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-teal-500/20 transition-all cursor-pointer"
              >
                <span>{language === 'vi' ? 'Khám phá sản phẩm' : 'Explore Products'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenBtuCalc}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-teal-400" />
                <span>{language === 'vi' ? 'Tính BTU Điều Hòa' : 'Calculate AC BTU'}</span>
              </button>
            </div>

            {/* Trust commitments */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                {language === 'vi' ? 'Miễn phí vận chuyển & lắp đặt' : 'Free delivery & installation'}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                {language === 'vi' ? 'Bảo hành điện tử E-Warranty' : 'E-Warranty protection'}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                {language === 'vi' ? 'Hỗ trợ 24/7 toàn quốc' : '24/7 nationwide support'}
              </span>
            </div>
          </div>

          {/* Right Interactive Tech Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/80 backdrop-blur-md rounded-3xl border border-slate-700/80 p-5 shadow-2xl overflow-hidden flex flex-col">
              {/* Category tabs */}
              <div className="grid grid-cols-4 gap-1 p-1 bg-slate-900/80 rounded-xl mb-4 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setActiveTab('fan')}
                  className={`py-2 px-1 text-center rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'fan' ? 'bg-teal-700 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {language === 'vi' ? 'Quạt Cây' : 'Fans'}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('ac')}
                  className={`py-2 px-1 text-center rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'ac' ? 'bg-teal-700 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {language === 'vi' ? 'Điều Hòa' : 'Air Con'}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('water_heater')}
                  className={`py-2 px-1 text-center rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'water_heater' ? 'bg-teal-700 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {language === 'vi' ? 'Bình Nước' : 'Water Heat'}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('air_cooler')}
                  className={`py-2 px-1 text-center rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'air_cooler' ? 'bg-teal-700 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {language === 'vi' ? 'Quạt ĐH' : 'Air Cooler'}
                </button>
              </div>

              {/* Showcase Image with Stat Overlay */}
              <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden bg-white mb-4 group">
                <img
                  key={current.image}
                  src={current.image}
                  alt={current.desc}
                  onError={(e) => {
                    if (e.currentTarget.src !== current.fallbackImage) e.currentTarget.src = current.fallbackImage;
                  }}
                  className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <div className="bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700">
                    <div className="text-base font-extrabold text-teal-400 tracking-tight">{current.stat}</div>
                    <div className="text-[10px] text-slate-300">{current.statLabel}</div>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-300 bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-700">
                    {current.badge}
                  </span>
                </div>
              </div>

              {/* Content description */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white tracking-tight">{current.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{current.desc}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-700/60 flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                  {l('Chính hãng Livotec', 'Genuine Livotec')}
                </span>
                <button
                  onClick={() => onExploreProducts(activeTab)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-teal-400 hover:text-teal-300 transition-colors"
                >
                  <span>{current.actionLabel}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

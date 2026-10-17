import React, { useState, useRef, useEffect } from 'react';
import { Logo } from '../common/Logo';
import { Product } from '../../types';
import {
  Search,
  ShoppingBag,
  GitCompare,
  PackageCheck,
  ShieldCheck,
  ChevronDown,
  Menu,
  X,
  Calculator,
  Compass,
  Sparkles,
  PhoneCall,
  MapPin,
  ExternalLink,
  Flame,
  Wifi,
  Globe
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface HeaderProps {
  onNavigate: (view: string, payload?: any) => void;
  currentView: string;
  cartCount: number;
  compareCount: number;
  onOpenCart: () => void;
  onOpenCompare: () => void;
  onOpenOrderTracking: () => void;
  onOpenWarranty: () => void;
  onOpenBenchmark?: () => void;
  onOpenBtuCalc: () => void;
  onSelectProduct: (product: Product) => void;
  allProducts: Product[];
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  currentView,
  cartCount,
  compareCount,
  onOpenCart,
  onOpenCompare,
  onOpenOrderTracking,
  onOpenWarranty,
  onOpenBenchmark,
  onOpenBtuCalc,
  onSelectProduct,
  allProducts,
}) => {
  const { language, setLanguage, t, l } = useLanguage();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isSupportMenuOpen, setIsSupportMenuOpen] = useState(false);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  // Close search popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchResults = searchQuery.trim()
    ? allProducts.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 transition-all">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-slate-900 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold shrink-0">
              <Flame className="w-3.5 h-3.5" />
              {t('top.promo', 'Ưu đãi ra mắt:')}
            </span>
            <span className="text-slate-300 text-[11px] sm:text-xs">
              {t('top.promo_detail', 'Miễn phí giao hàng & lắp đặt tận nhà · 1 đổi 1 trong 30 ngày · Động cơ bảo hành tới 10 năm')}
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 shrink-0 text-[11px]">
            <span className="hidden md:inline-flex items-center gap-1.5 text-teal-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-300" />
              <span>{t('top.warranty', 'Bảo hành chính hãng 1 đổi 1 trong 30 ngày')}</span>
            </span>

            <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
              <PhoneCall className="w-3.5 h-3.5 text-teal-400" />
              {t('top.hotline', 'Hotline:')} <strong className="text-white">1900 8899</strong>
            </span>

            {/* COMPACT TOP BAR LANGUAGE SWITCHER VI/EN */}
            <div className="flex items-center text-[11px] font-bold tracking-wide text-slate-400">
              <button
                type="button"
                onClick={() => setLanguage('vi')}
                className={`transition-colors cursor-pointer px-1 py-0.5 rounded ${
                  language === 'vi'
                    ? 'text-teal-400 font-extrabold'
                    : 'text-slate-400 hover:text-white'
                }`}
                title={l('Tiếng Việt (Mặc định)', 'Vietnamese (Default)')}
              >
                VI
              </button>
              <span className="text-slate-600 font-normal">/</span>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`transition-colors cursor-pointer px-1 py-0.5 rounded ${
                  language === 'en'
                    ? 'text-teal-400 font-extrabold'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="English"
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER BAR (LOGO, SEARCH, UTILITY ACTIONS) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4 lg:gap-8">
          {/* LOGO */}
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="shrink-0 flex items-center text-left cursor-pointer focus-visible:outline-teal-600 rounded-lg p-1"
          >
            <Logo iconSize={36} color="#00828a" textColor="#00828a" />
          </button>

          {/* EXPANDED DESKTOP SEARCH BAR */}
          <div className="relative hidden md:block flex-1 max-w-xl mx-2" ref={searchRef}>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                placeholder={t('search.placeholder', 'Tìm kiếm quạt BLDC, điều hòa Inverter, bếp từ, máy hút mùi...')}
                className="w-full pl-10 pr-9 py-2.5 bg-slate-100/90 hover:bg-slate-100 focus:bg-white text-xs sm:text-sm rounded-xl border border-slate-200/60 focus:border-teal-500 focus:outline-hidden transition-all placeholder:text-slate-400 shadow-2xs"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* SEARCH RESULTS DROPDOWN */}
            {isSearchFocused && searchQuery.trim() && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 p-2 max-h-96 overflow-y-auto z-50">
                <div className="text-[11px] font-semibold text-slate-400 px-3 py-1.5 uppercase">
                  {l('Kết quả tìm kiếm', 'Search results')} ({searchResults.length})
                </div>
                {searchResults.length === 0 ? (
                  <div className="p-4 text-center text-xs text-slate-500">
                    {l('Không tìm thấy sản phẩm phù hợp với', 'No products found matching')} "{searchQuery}"
                  </div>
                ) : (
                  searchResults.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        onSelectProduct(item);
                        setIsSearchFocused(false);
                        setSearchQuery('');
                      }}
                      className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 object-cover rounded-md bg-slate-100 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-slate-900 truncate">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-teal-700 font-bold">
                          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          {/* UTILITY ACTIONS */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* TRA CỨU BẢO HÀNH BUTTON */}
            <button
              onClick={onOpenWarranty}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-2 rounded-xl text-slate-600 hover:text-teal-700 hover:bg-slate-100 transition-colors cursor-pointer text-xs font-medium"
              title={l('Kích hoạt & tra cứu bảo hành điện tử', 'Activate & look up e-warranty')}
            >
              <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0" />
              <span>{t('header.warranty', 'Bảo hành')}</span>
            </button>

            {/* TRA CỨU ĐƠN HÀNG BUTTON */}
            <button
              onClick={onOpenOrderTracking}
              className="p-2 sm:px-2.5 sm:py-2 rounded-xl text-slate-600 hover:text-teal-700 hover:bg-slate-100 transition-colors flex items-center gap-1.5 cursor-pointer text-xs font-medium"
              title={l('Tra cứu tiến độ đơn hàng', 'Track order progress')}
            >
              <PackageCheck className="w-4 h-4 text-teal-700 shrink-0" />
              <span className="hidden xl:inline">{t('header.orders', 'Tra cứu đơn')}</span>
            </button>

            {/* SO SÁNH SẢN PHẨM BUTTON */}
            <button
              onClick={onOpenCompare}
              className="relative p-2 sm:px-2.5 sm:py-2 rounded-xl text-slate-600 hover:text-teal-700 hover:bg-slate-100 transition-colors flex items-center gap-1.5 cursor-pointer text-xs font-medium"
              title={l('So sánh thông số kỹ thuật', 'Compare specifications')}
            >
              <GitCompare className="w-4 h-4 text-teal-700 shrink-0" />
              <span className="hidden xl:inline">{t('header.compare', 'So sánh')}</span>
              {compareCount > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-teal-700 rounded-full">
                  {compareCount}
                </span>
              )}
            </button>


            {/* GIỎ HÀNG BUTTON */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 p-2 sm:px-3.5 sm:py-2 bg-slate-900 hover:bg-teal-800 text-white rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer text-xs font-semibold"
            >
              <ShoppingBag className="w-4 h-4 text-teal-400" />
              <span className="hidden sm:inline">{t('header.cart', 'Giỏ hàng')}</span>
              {cartCount > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 text-[10px] font-extrabold text-slate-900 bg-teal-400 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-teal-700 rounded-lg cursor-pointer"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. DEDICATED NAVIGATION BAR (DÒNG DƯỚI: SẢN PHẨM, ƯU ĐÃI, TƯ VẤN & HỖ TRỢ, VỀ CHILLAMI) */}
      <div className="hidden lg:block border-t border-slate-200/80 bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* 4 MENU CHÍNH: SẢN PHẨM, ƯU ĐÃI, TƯ VẤN & HỖ TRỢ, VỀ CHILLAMI */}
            <nav className="flex items-center gap-2 xl:gap-3">
              {/* 1. SẢN PHẨM (MEGA MENU) */}
              <div
                className="relative"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
                ref={megaMenuRef}
              >
                <button
                  type="button"
                  onClick={() => onNavigate('products')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                    currentView === 'products' ? 'text-teal-700 bg-teal-50' : 'text-slate-700 hover:text-teal-700 hover:bg-slate-50'
                  }`}
                >
                  <Menu className="w-4 h-4 text-teal-700" />
                  <span>{t('nav.products', 'Sản Phẩm')}</span>
                  <ChevronDown className="w-4 h-4 text-slate-400 transition-transform duration-200" />
                </button>

                {/* MEGA MENU DROPDOWN */}
                {isMegaMenuOpen && (
                  <div className="absolute top-full left-0 w-[840px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 grid grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                    {/* Column 1: Quạt điện & Điều hòa */}
                    <div className="space-y-4">
                      <div>
                        <div
                          onClick={() => {
                            onNavigate('products', { category: 'fan' });
                            setIsMegaMenuOpen(false);
                          }}
                          className="font-bold text-slate-900 hover:text-teal-700 cursor-pointer text-sm flex items-center justify-between mb-2 group"
                        >
                          <span>{l('Quạt Điện Thông Minh', 'Smart Electric Fans')}</span>
                          <span className="text-[11px] text-teal-600 font-normal group-hover:underline">{l('Xem tất cả', 'View all')}</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          <li>
                            <button
                              onClick={() => {
                                onNavigate('products', { category: 'fan', subCategory: 'quat-cay' });
                                setIsMegaMenuOpen(false);
                              }}
                              className="hover:text-teal-700 transition-colors w-full text-left py-0.5"
                            >
                              {l('Quạt cây BLDC SoftAir (CF-100B)', 'BLDC SoftAir standing fan (CF-100B)')}
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => {
                                onNavigate('products', { category: 'fan', subCategory: 'quat-treo-tuong' });
                                setIsMegaMenuOpen(false);
                              }}
                              className="hover:text-teal-700 transition-colors w-full text-left py-0.5"
                            >
                              {l('Quạt treo tường Silent-Wall', 'Silent-Wall wall fan')}
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => {
                                onNavigate('products', { category: 'fan', subCategory: 'quat-san' });
                                setIsMegaMenuOpen(false);
                              }}
                              className="hover:text-teal-700 transition-colors w-full text-left py-0.5"
                            >
                              {l('Quạt sàn tuần hoàn FB-180 Turbo', 'FB-180 Turbo floor air circulator')}
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => {
                                onNavigate('products', { category: 'fan', subCategory: 'quat-thong-minh' });
                                setIsMegaMenuOpen(false);
                              }}
                              className="hover:text-teal-700 transition-colors w-full text-left py-0.5"
                            >
                              {l('Quạt thông minh IoT WiFi', 'IoT WiFi smart fan')}
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => {
                                onNavigate('products', { category: 'fan', subCategory: 'quat-tich-dien' });
                                setIsMegaMenuOpen(false);
                              }}
                              className="hover:text-teal-700 transition-colors w-full text-left py-0.5"
                            >
                              {l('Quạt tích điện dã ngoại 15000mAh', '15000mAh rechargeable outdoor fan')}
                            </button>
                          </li>
                        </ul>
                      </div>

                      <div className="pt-3 border-t border-slate-100">
                        <div
                          onClick={() => {
                            onNavigate('products', { category: 'ac' });
                            setIsMegaMenuOpen(false);
                          }}
                          className="font-bold text-slate-900 hover:text-teal-700 cursor-pointer text-sm flex items-center justify-between mb-2 group"
                        >
                          <span>{l('Điều Hòa Inverter', 'Inverter Air Conditioners')}</span>
                          <span className="text-[11px] text-teal-600 font-normal group-hover:underline">{l('Xem tất cả', 'View all')}</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          <li>
                            <button
                              onClick={() => {
                                onNavigate('products', { category: 'ac', subCategory: 'dieu-hoa-9k' });
                                setIsMegaMenuOpen(false);
                              }}
                              className="hover:text-teal-700 transition-colors w-full text-left py-0.5"
                            >
                              {l('Điều hòa 9000 BTU Inverter (Phòng <15m²)', '9000 BTU Inverter AC (rooms <15m²)')}
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => {
                                onNavigate('products', { category: 'ac', subCategory: 'dieu-hoa-slim' });
                                setIsMegaMenuOpen(false);
                              }}
                              className="hover:text-teal-700 transition-colors w-full text-left py-0.5"
                            >
                              {l('Điều hòa Slim v3 Siêu Mỏng 16.8cm', 'Slim v3 ultra-thin 16.8cm AC')}
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Column 2: Bếp & Hút mùi & Nước nóng */}
                    <div className="space-y-4">
                      <div>
                        <div
                          onClick={() => {
                            onNavigate('products', { category: 'induction' });
                            setIsMegaMenuOpen(false);
                          }}
                          className="font-bold text-slate-900 hover:text-teal-700 cursor-pointer text-sm flex items-center justify-between mb-2 group"
                        >
                          <span>{l('Bếp Từ Đôi & Đơn', 'Double & Single Induction Hobs')}</span>
                          <span className="text-[11px] text-teal-600 font-normal group-hover:underline">{l('Xem tất cả', 'View all')}</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          <li>
                            <button
                              onClick={() => {
                                onNavigate('products', { category: 'induction', subCategory: 'bep-tu-doi' });
                                setIsMegaMenuOpen(false);
                              }}
                              className="hover:text-teal-700 transition-colors w-full text-left py-0.5"
                            >
                              {l('Bếp từ đôi MasterChef IGBT Infineon Đức', 'MasterChef double hob, German Infineon IGBT')}
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => {
                                onNavigate('products', { category: 'induction', subCategory: 'bep-tu-don' });
                                setIsMegaMenuOpen(false);
                              }}
                              className="hover:text-teal-700 transition-colors w-full text-left py-0.5"
                            >
                              {l('Bếp từ đơn siêu mỏng Solo-Pro', 'Solo-Pro ultra-slim single hob')}
                            </button>
                          </li>
                        </ul>
                      </div>

                      <div className="pt-3 border-t border-slate-100">
                        <div
                          onClick={() => {
                            onNavigate('products', { category: 'hood' });
                            setIsMegaMenuOpen(false);
                          }}
                          className="font-bold text-slate-900 hover:text-teal-700 cursor-pointer text-sm flex items-center justify-between mb-2 group"
                        >
                          <span>{l('Máy Hút Mùi Cảm Ứng', 'Touch-Control Range Hoods')}</span>
                          <span className="text-[11px] text-teal-600 font-normal group-hover:underline">{l('Xem tất cả', 'View all')}</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          <li>
                            <button
                              onClick={() => {
                                onNavigate('products', { category: 'hood', subCategory: 'may-hut-mui-t' });
                                setIsMegaMenuOpen(false);
                              }}
                              className="hover:text-teal-700 transition-colors w-full text-left py-0.5"
                            >
                              {l('Máy chữ T cảm biến vẫy tay WaveSensor', 'T-shape hood with WaveSensor gesture control')}
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => {
                                onNavigate('products', { category: 'hood', subCategory: 'may-hut-mui-kinh-vat' });
                                setIsMegaMenuOpen(false);
                              }}
                              className="hover:text-teal-700 transition-colors w-full text-left py-0.5"
                            >
                              {l('Máy kính vát SlopeCurved 1350m³/h', 'SlopeCurved angled glass hood 1350m³/h')}
                            </button>
                          </li>
                        </ul>
                      </div>

                      <div className="pt-3 border-t border-slate-100">
                        <div
                          onClick={() => {
                            onNavigate('products', { category: 'water_heater' });
                            setIsMegaMenuOpen(false);
                          }}
                          className="font-bold text-slate-900 hover:text-teal-700 cursor-pointer text-sm flex items-center justify-between mb-2 group"
                        >
                          <span>{l('Bình Nước Nóng Titanium', 'Titanium Water Heaters')}</span>
                          <span className="text-[11px] text-teal-600 font-normal group-hover:underline">{l('Xem tất cả', 'View all')}</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          <li>
                            <button
                              onClick={() => {
                                onNavigate('products', { category: 'water_heater', subCategory: 'binh-nuoc-nong-gian-tiep' });
                                setIsMegaMenuOpen(false);
                              }}
                              className="hover:text-teal-700 transition-colors w-full text-left py-0.5"
                            >
                              {l('Bình gián tiếp 15L / 20L / 30L chống giật TSS', '15L / 20L / 30L storage heaters with TSS anti-shock')}
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => {
                                onNavigate('products', { category: 'water_heater', subCategory: 'binh-nuoc-nong-truc-tiep' });
                                setIsMegaMenuOpen(false);
                              }}
                              className="hover:text-teal-700 transition-colors w-full text-left py-0.5"
                            >
                              {l('Bình trực tiếp Turbo bơm trợ lực DC', 'Turbo direct heater with DC booster pump')}
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Column 3: Quick Tools & Featured Showcase */}
                    <div className="bg-slate-50 p-4 rounded-xl flex flex-col justify-between">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800">
                          {l('Công cụ tiện ích', 'Handy tools')}
                        </span>
                        <div className="mt-3 space-y-2">
                          <button
                            onClick={() => {
                              onOpenBtuCalc();
                              setIsMegaMenuOpen(false);
                            }}
                            className="flex items-start gap-2.5 p-2 rounded-lg bg-white border border-slate-200 hover:border-teal-500 text-left transition-all group w-full"
                          >
                            <Calculator className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
                            <div>
                              <div className="text-xs font-semibold text-slate-900 group-hover:text-teal-700">
                                {l('Tính công suất điều hòa (BTU)', 'AC capacity calculator (BTU)')}
                              </div>
                              <div className="text-[11px] text-slate-500">
                                {l('Chọn máy chuẩn theo diện tích & hướng nắng', 'Pick the right unit by room size & sun exposure')}
                              </div>
                            </div>
                          </button>

                          <button
                            onClick={() => {
                              onNavigate('solutions');
                              setIsMegaMenuOpen(false);
                            }}
                            className="flex items-start gap-2.5 p-2 rounded-lg bg-white border border-slate-200 hover:border-teal-500 text-left transition-all group w-full"
                          >
                            <Compass className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
                            <div>
                              <div className="text-xs font-semibold text-slate-900 group-hover:text-teal-700">
                                {l('Giải pháp theo không gian', 'Solutions by space')}
                              </div>
                              <div className="text-[11px] text-slate-500">
                                {l('Phòng ngủ, Bếp, Khách, Tắm', 'Bedroom, Kitchen, Living room, Bathroom')}
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <button
                          onClick={() => {
                            onNavigate('products');
                            setIsMegaMenuOpen(false);
                          }}
                          className="w-full py-2 px-3 text-xs font-bold text-center text-teal-800 bg-teal-100 hover:bg-teal-200 rounded-lg transition-colors flex items-center justify-center gap-1"
                        >
                          <span>{l('Khám phá sản phẩm', 'Explore products')}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 2. ƯU ĐÃI */}
              <button
                onClick={() => onNavigate('promotions')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                  currentView === 'promotions' ? 'text-teal-700 bg-teal-50' : 'text-slate-700 hover:text-teal-700 hover:bg-slate-50'
                }`}
              >
                <span>{t('nav.promotions', 'Ưu Đãi')}</span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-800 rounded-full leading-none">
                  {language === 'vi' ? 'Hot' : 'Deals'}
                </span>
              </button>

              {/* 3. TƯ VẤN & HỖ TRỢ */}
              <div
                className="relative"
                onMouseEnter={() => setIsSupportMenuOpen(true)}
                onMouseLeave={() => setIsSupportMenuOpen(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-teal-700 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                >
                  <span>{t('nav.support', 'Tư Vấn & Hỗ Trợ')}</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </button>

                {isSupportMenuOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-200 p-2 space-y-1 animate-in fade-in duration-100 z-50">
                    <button
                      onClick={() => {
                        onNavigate('smart-connect');
                        setIsSupportMenuOpen(false);
                      }}
                      className="flex items-center gap-2.5 w-full p-2 text-xs font-medium text-teal-800 hover:text-teal-900 bg-teal-50/70 hover:bg-teal-100/70 rounded-lg text-left"
                    >
                      <Wifi className="w-4 h-4 text-teal-700" />
                      <div>
                        <div className="font-bold">{l('Hướng dẫn kết nối App WiFi', 'WiFi app pairing guide')}</div>
                        <div className="text-[10px] text-teal-600">{l('Tải App Chillami iOS & Android', 'Download the Chillami app for iOS & Android')}</div>
                      </div>
                    </button>
                    <button
                      onClick={() => {
                        onOpenWarranty();
                        setIsSupportMenuOpen(false);
                      }}
                      className="flex items-center gap-2.5 w-full p-2 text-xs font-medium text-slate-700 hover:text-teal-700 hover:bg-slate-50 rounded-lg text-left"
                    >
                      <ShieldCheck className="w-4 h-4 text-teal-600" />
                      <span>{l('Kích hoạt & Tra cứu bảo hành', 'Activate & look up warranty')}</span>
                    </button>
                    <button
                      onClick={() => {
                        onOpenBtuCalc();
                        setIsSupportMenuOpen(false);
                      }}
                      className="flex items-center gap-2.5 w-full p-2 text-xs font-medium text-slate-700 hover:text-teal-700 hover:bg-slate-50 rounded-lg text-left"
                    >
                      <Calculator className="w-4 h-4 text-teal-600" />
                      <span>{l('Công cụ tính BTU điều hòa', 'AC BTU calculator')}</span>
                    </button>
                    <button
                      onClick={() => {
                        onNavigate('solutions');
                        setIsSupportMenuOpen(false);
                      }}
                      className="flex items-center gap-2.5 w-full p-2 text-xs font-medium text-slate-700 hover:text-teal-700 hover:bg-slate-50 rounded-lg text-left"
                    >
                      <Compass className="w-4 h-4 text-teal-600" />
                      <span>{l('Tư vấn theo không gian', 'Advice by living space')}</span>
                    </button>
                    <button
                      onClick={() => {
                        onNavigate('faqs');
                        setIsSupportMenuOpen(false);
                      }}
                      className="flex items-center gap-2.5 w-full p-2 text-xs font-medium text-slate-700 hover:text-teal-700 hover:bg-slate-50 rounded-lg text-left"
                    >
                      <PhoneCall className="w-4 h-4 text-teal-600" />
                      <span>{l('Câu hỏi thường gặp (FAQ)', 'Frequently asked questions (FAQ)')}</span>
                    </button>
                  </div>
                )}
              </div>

              {/* 4. VỀ CHILLAMI */}
              <div
                className="relative"
                onMouseEnter={() => setIsAboutMenuOpen(true)}
                onMouseLeave={() => setIsAboutMenuOpen(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-teal-700 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                >
                  <span>{t('nav.about', 'Về Chillami')}</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </button>

                {isAboutMenuOpen && (
                  <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-slate-200 p-2 space-y-1 animate-in fade-in duration-100 z-50">
                    <button
                      onClick={() => {
                        onNavigate('about');
                        setIsAboutMenuOpen(false);
                      }}
                      className="w-full p-2 text-xs font-medium text-slate-700 hover:text-teal-700 hover:bg-slate-50 rounded-lg text-left"
                    >
                      {language === 'vi' ? 'Giới thiệu thương hiệu' : 'Brand Story'}
                    </button>
                    <button
                      onClick={() => {
                        onNavigate('technology');
                        setIsAboutMenuOpen(false);
                      }}
                      className="w-full p-2 text-xs font-medium text-slate-700 hover:text-teal-700 hover:bg-slate-50 rounded-lg text-left"
                    >
                      {language === 'vi' ? 'Công nghệ BLDC & Inverter' : 'BLDC & Inverter Tech'}
                    </button>
                    <button
                      onClick={() => {
                        onNavigate('b2b');
                        setIsAboutMenuOpen(false);
                      }}
                      className="w-full p-2 text-xs font-medium text-slate-700 hover:text-teal-700 hover:bg-slate-50 rounded-lg text-left"
                    >
                      {language === 'vi' ? 'Trở thành đại lý & B2B' : 'Become Dealer & B2B'}
                    </button>
                    <button
                      onClick={() => {
                        onOpenWarranty();
                        setIsAboutMenuOpen(false);
                      }}
                      className="w-full p-2 text-xs font-medium text-slate-700 hover:text-teal-700 hover:bg-slate-50 rounded-lg text-left flex items-center justify-between"
                    >
                      <span>{language === 'vi' ? 'Chính sách chất lượng & Bảo hành' : 'Warranty & Quality Policies'}</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                    </button>
                  </div>
                )}
              </div>
            </nav>

            {/* PHẦN BÊN PHẢI CỦA DÒNG SUB-NAV: NƠI MUA HÀNG & TIỆN ÍCH */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('dealers')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  currentView === 'dealers'
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'bg-teal-50 text-teal-800 hover:bg-teal-100 border border-teal-200/80'
                }`}
              >
                <MapPin className="w-3.5 h-3.5 text-teal-600" />
                <span>{language === 'vi' ? 'Nơi Mua Hàng & Showroom' : 'Showrooms & Stores'}</span>
              </button>

              <button
                onClick={() => onNavigate('smart-connect')}
                className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  currentView === 'smart-connect'
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'text-slate-700 hover:text-teal-700 hover:bg-teal-50/60'
                }`}
              >
                <Wifi className="w-3.5 h-3.5 text-teal-600" />
                <span>{t('nav.smart_connect', 'Kết Nối App')}</span>
                <span className="px-1.5 py-0.5 text-[9px] font-extrabold bg-teal-100 text-teal-800 rounded-md">
                  {language === 'vi' ? 'Mới' : 'New'}
                </span>
              </button>

              <button
                onClick={onOpenBtuCalc}
                className="hidden xl:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:text-teal-700 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <Calculator className="w-3.5 h-3.5 text-teal-600" />
                <span>{l('Tính công suất BTU', 'BTU capacity calculator')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. MOBILE MENU SLIDEDOWN */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 animate-in slide-in-from-top-4 duration-200">
          {/* Mobile search bar */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={l('Tìm kiếm thiết bị Chillami...', 'Search Chillami appliances...')}
              className="w-full pl-9 pr-4 py-2.5 bg-slate-100 rounded-xl text-xs border border-transparent focus:border-teal-500 focus:bg-white"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              onClick={() => {
                onNavigate('products');
                setIsMobileMenuOpen(false);
              }}
              className="p-3 text-left font-semibold text-xs text-slate-800 bg-slate-50 hover:bg-teal-50 rounded-xl"
            >
              {l('📦 Tất Cả Sản Phẩm', '📦 All Products')}
            </button>
            <button
              onClick={() => {
                onNavigate('promotions');
                setIsMobileMenuOpen(false);
              }}
              className="p-3 text-left font-semibold text-xs text-slate-800 bg-slate-50 hover:bg-teal-50 rounded-xl"
            >
              {l('🔥 Ưu Đãi Mới', '🔥 New Deals')}
            </button>
            <button
              onClick={() => {
                onOpenBtuCalc();
                setIsMobileMenuOpen(false);
              }}
              className="p-3 text-left font-semibold text-xs text-slate-800 bg-slate-50 hover:bg-teal-50 rounded-xl"
            >
              {l('🧮 Tính BTU Điều Hòa', '🧮 AC BTU Calculator')}
            </button>
            <button
              onClick={() => {
                onOpenWarranty();
                setIsMobileMenuOpen(false);
              }}
              className="p-3 text-left font-semibold text-xs text-slate-800 bg-slate-50 hover:bg-teal-50 rounded-xl"
            >
              {l('🛡️ Kích Hoạt Bảo Hành', '🛡️ Activate Warranty')}
            </button>
            <button
              onClick={() => {
                onNavigate('dealers');
                setIsMobileMenuOpen(false);
              }}
              className="p-3 text-left font-semibold text-xs text-slate-800 bg-slate-50 hover:bg-teal-50 rounded-xl"
            >
              {l('📍 Nơi Mua Hàng', '📍 Where to Buy')}
            </button>
            <button
              onClick={() => {
                onNavigate('solutions');
                setIsMobileMenuOpen(false);
              }}
              className="p-3 text-left font-semibold text-xs text-slate-800 bg-slate-50 hover:bg-teal-50 rounded-xl"
            >
              {l('⭐ Giải Pháp Không Gian', '⭐ Space Solutions')}
            </button>
            <button
              onClick={() => {
                onNavigate('smart-connect');
                setIsMobileMenuOpen(false);
              }}
              className="col-span-2 p-3 text-left font-bold text-xs text-teal-900 bg-teal-50 hover:bg-teal-100 rounded-xl flex items-center justify-between border border-teal-200"
            >
              <span className="flex items-center gap-2">
                <Wifi className="w-4 h-4 text-teal-700" />
                <span>{language === 'vi' ? '📱 Hướng Dẫn Kết Nối Thiết Bị & Tải App' : '📱 Smart Device Pairing & Download App'}</span>
              </span>
              <span className="text-[10px] font-extrabold bg-teal-600 text-white px-2 py-0.5 rounded-full">
                {language === 'vi' ? 'Mới' : 'New'}
              </span>
            </button>

            {/* MOBILE LANGUAGE SWITCHER ROW */}
            <div className="col-span-2 p-3 bg-slate-100/90 rounded-xl flex items-center justify-between mt-1">
              <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-teal-700" />
                <span>{language === 'vi' ? 'Ngôn ngữ' : 'Language'}:</span>
              </span>
              <div className="flex items-center text-xs font-bold tracking-wider text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                <button
                  type="button"
                  onClick={() => setLanguage('vi')}
                  className={`transition-colors cursor-pointer ${
                    language === 'vi' ? 'text-teal-700 font-extrabold' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  VI
                </button>
                <span className="mx-1.5 text-slate-300">/</span>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`transition-colors cursor-pointer ${
                    language === 'en' ? 'text-teal-700 font-extrabold' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

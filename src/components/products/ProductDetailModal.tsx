import React, { useState, useEffect } from 'react';
import { Product } from '../../types';
import {
  X,
  Star,
  Check,
  ShieldCheck,
  Truck,
  RotateCcw,
  ShoppingBag,
  GitCompare,
  FileDown,
  Zap,
  Volume2,
  ChevronRight,
  Play,
  Pause,
  Award,
  Sparkles,
  Info,
  CheckCircle2,
  Palette,
  Maximize2
} from 'lucide-react';
import { CATEGORIES_CONFIG } from '../../data/products';
import { useLanguage } from '../../context/LanguageContext';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, variant?: string) => void;
  onToggleCompare: (product: Product) => void;
  isCompared: boolean;
  onOpenOrderNow: (product: Product, quantity: number, variant?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleCompare,
  isCompared,
  onOpenOrderNow,
}) => {
  const { l, language, translateCategory, formatCurrency } = useLanguage();
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.gallery[0] ?? product.image);
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants && product.variants.length > 0 ? product.variants[0].value : ''
  );
  const [selectedColor, setSelectedColor] = useState(
    product.colorOptions && product.colorOptions.length > 0 ? product.colorOptions[0].name : ''
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'specs' | 'features' | 'energy' | 'video' | 'reviews'>('specs');
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [activeVideoDemo, setActiveVideoDemo] = useState<'noise' | 'unboxing' | 'iot'>('noise');

  // Reset when product changes
  useEffect(() => {
    setActiveImage(product.gallery[0] ?? product.image);
    setSelectedVariant(product.variants && product.variants.length > 0 ? product.variants[0].value : '');
    setSelectedColor(product.colorOptions && product.colorOptions.length > 0 ? product.colorOptions[0].name : '');
    setQuantity(1);
    setActiveTab('specs');
    setIsPlayingVideo(false);
  }, [product.id, language]);

  // If a variant is selected, adjust price
  const currentPrice = React.useMemo(() => {
    if (product.variants && selectedVariant) {
      const v = product.variants.find((item) => item.value === selectedVariant);
      if (v) return v.price;
    }
    return product.price;
  }, [product, selectedVariant]);

  const formatPrice = formatCurrency;

  const handleDownloadManual = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const handleColorSelect = (colorName: string, imgUrl?: string) => {
    setSelectedColor(colorName);
    if (imgUrl) {
      setActiveImage(imgUrl);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[94vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2 text-xs text-slate-500 overflow-hidden">
            <span className="font-bold text-teal-800 uppercase tracking-wider">CHILLAMI</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="capitalize">{translateCategory(CATEGORIES_CONFIG.find((c) => c.id === product.category) ?? CATEGORIES_CONFIG[0]).name}</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-semibold text-slate-800 truncate">{product.model}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label={l('Đóng', 'Close')}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-6 md:p-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Left 6 cols: Gallery & Energy Badges */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative w-full aspect-4/3 rounded-2xl bg-slate-50 border border-slate-200/80 overflow-hidden flex items-center justify-center p-3 sm:p-4 group">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-contain rounded-xl transition-all duration-300"
                />

                {/* Badges container */}
                <div className="absolute top-3 left-3 flex items-center gap-2 pointer-events-none">
                  {product.discountPercent && (
                    <span className="px-2.5 py-1 text-xs font-bold text-white bg-rose-600 rounded-lg shadow-sm">
                      {l('Tiết kiệm', 'Save')} {product.discountPercent}%
                    </span>
                  )}
                  {product.isNew && (
                    <span className="px-2.5 py-1 text-xs font-bold text-white bg-teal-700 rounded-lg shadow-sm">
                      {l('Mới', 'New')}
                    </span>
                  )}
                </div>

                {/* Quick Video Play Overlay Button */}
                {product.videoUrl && (
                  <button
                    onClick={() => setActiveTab('video')}
                    className="absolute bottom-3 right-3 px-3 py-1.5 bg-slate-900/90 hover:bg-teal-700 text-white rounded-xl shadow-lg backdrop-blur-xs text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>{l('Xem video review', 'Watch video review')} {product.videoDuration && `(${product.videoDuration})`}</span>
                  </button>
                )}
              </div>

              {/* Gallery Thumbnails */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`relative w-16 sm:w-20 h-14 sm:h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                        activeImage === img ? 'border-teal-700 ring-2 ring-teal-600/30' : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}

              {/* Energy Label & Quality Seals Box */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-50/70 via-teal-50/50 to-blue-50/70 border border-emerald-100 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-700" />
                    <span className="text-xs font-bold text-slate-900">
                      {l('Chứng nhận tiêu chuẩn năng lượng & an toàn', 'Energy & safety certification')}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                    {l('Cấp 5 Sao', '5-Star Rating')}
                  </span>
                </div>

                <div className="text-[11px] text-slate-600 leading-relaxed">
                  {l('Đạt chuẩn', 'Meets')} <strong>TCVN 7826:2015</strong> {l('và kiểm định chất lượng', 'and certified by')} <strong>Quacert</strong>{l('. Động cơ DC Inverter tiết kiệm đến', '. The DC Inverter motor saves up to')} <strong>75%</strong> {l('điện năng so với quạt cơ thông thường.', 'electricity compared to conventional fans.')}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="text-[10px] font-semibold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                    TCVN 7826:2015
                  </span>
                  <span className="text-[10px] font-semibold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {l('Quacert An Toàn', 'Quacert Safety')}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                    ISO 9001:2015
                  </span>
                  <span className="text-[10px] font-semibold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {l('RoHS Chuẩn EU', 'EU RoHS')}
                  </span>
                </div>
              </div>

              {/* Tech Commitment Badges */}
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
                  <Truck className="w-4 h-4 text-teal-700 mb-1" />
                  <span className="text-[11px] font-bold text-slate-900">{l('Giao & Lắp 2H', '2H Delivery & Install')}</span>
                  <span className="text-[10px] text-slate-500">{l('Miễn phí tại nhà', 'Free at home')}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
                  <RotateCcw className="w-4 h-4 text-teal-700 mb-1" />
                  <span className="text-[11px] font-bold text-slate-900">{l('1 Đổi 1 Trong 30N', '1-for-1 within 30 days')}</span>
                  <span className="text-[10px] text-slate-500">{l('Máy mới nguyên seal', 'Brand-new sealed unit')}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
                  <ShieldCheck className="w-4 h-4 text-teal-700 mb-1" />
                  <span className="text-[11px] font-bold text-slate-900">{product.warrantyMonths ? `${l('Bảo Hành', 'Warranty')} ${product.warrantyMonths}${l('T', 'M')}` : l('Bảo Hành Chính Hãng', 'Official Warranty')}</span>
                  <span className="text-[10px] text-slate-500">{l('E-Warranty số hóa', 'Digital E-Warranty')}</span>
                </div>
              </div>
            </div>

            {/* Right 6 cols: Info, Variants & Buy Actions */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
              <div>
                {/* Model Metadata */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                  <span className="font-bold text-teal-700 tracking-wider">MODEL: {product.model}</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span>{l('Chính Hãng', 'Genuine')} {product.brand ?? 'Chillami'}</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="text-emerald-700 font-medium">{l('Sẵn hàng', 'In stock')}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight font-display mb-2">
                  {product.name}
                </h2>

                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>{product.rating}</span>
                    <span className="text-slate-400 font-normal">({product.reviewsCount} {l('đánh giá xác thực', 'verified reviews')})</span>
                  </div>
                  <span className="text-slate-300">|</span>
                  <span className="text-xs text-teal-700 font-medium flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5" />
                    {l('Động cơ BLDC êm 13dB', 'Quiet 13dB BLDC motor')}
                  </span>
                </div>

                {/* Price Box */}
                <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-100 mb-5 flex items-baseline justify-between">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums">
                      {product.contactForPrice ? l('Liên hệ', 'Contact us') : formatPrice(currentPrice)}
                    </div>
                    {product.originalPrice > product.price && (
                      <div className="text-xs text-slate-500 line-through mt-0.5">
                        {l('Giá niêm yết:', 'List price:')} {formatPrice(product.originalPrice)}
                      </div>
                    )}
                  </div>

                  <span className="text-xs font-bold text-teal-900 bg-teal-100/90 px-3 py-1 rounded-lg">
                    {l('Đã gồm VAT & Công lắp 0đ', 'VAT included & free installation')}
                  </span>
                </div>

                {/* PRODUCT VARIANTS SECTION: COLOR & VERSIONS */}
                {/* 1. Color Selector */}
                {product.colorOptions && product.colorOptions.length > 0 && (
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-900 flex items-center gap-1">
                        <Palette className="w-3.5 h-3.5 text-teal-700" />
                        {l('Màu sắc:', 'Color:')} <strong className="text-teal-800">{selectedColor}</strong>
                      </span>
                      <span className="text-[11px] text-slate-500">{product.colorOptions.length} {l('màu', 'colors')}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      {product.colorOptions.map((c) => (
                        <button
                          key={c.name}
                          onClick={() => handleColorSelect(c.name, c.image)}
                          className={`group flex items-center gap-2 p-1.5 pr-3 rounded-xl border transition-all cursor-pointer ${
                            selectedColor === c.name
                              ? 'border-teal-700 bg-teal-50/70 text-slate-900 shadow-2xs'
                              : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          <span
                            className="w-5 h-5 rounded-full border border-slate-300 shadow-inner block"
                            style={{ backgroundColor: c.hex }}
                          />
                          <span className="text-xs font-medium">{c.name.split(' ')[0]}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. Version / Configuration Variants */}
                {product.variants && product.variants.length > 0 && (
                  <div className="mb-5 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-900">
                        {l('Chọn phiên bản & cấu hình:', 'Choose version & configuration:')}
                      </span>
                      <span className="text-[11px] text-teal-700 font-semibold">{l('Bảo hành chính hãng 100%', '100% official warranty')}</span>
                    </div>

                    <div className="space-y-2">
                      {product.variants.map((v) => (
                        <button
                          key={v.sku}
                          onClick={() => setSelectedVariant(v.value)}
                          className={`w-full p-3 rounded-xl border text-left text-xs transition-all cursor-pointer flex items-center justify-between ${
                            selectedVariant === v.value
                              ? 'border-teal-700 bg-teal-50/80 text-teal-950 shadow-xs ring-1 ring-teal-600/30'
                              : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50/50'
                          }`}
                        >
                          <div className="space-y-0.5">
                            <div className="font-bold flex items-center gap-2">
                              <span>{v.value}</span>
                              {v.badge && (
                                <span className="text-[10px] font-bold px-2 py-0.5 bg-amber-100 text-amber-800 rounded-md">
                                  {v.badge}
                                </span>
                              )}
                            </div>
                            <div className="text-[11px] text-slate-500">{l('Mã SKU:', 'SKU:')} {v.sku}</div>
                          </div>

                          <div className="text-right">
                            <div className="text-teal-700 font-bold text-sm">{formatPrice(v.price)}</div>
                            {selectedVariant === v.value && (
                              <div className="text-[10px] text-teal-600 font-semibold flex items-center justify-end gap-1">
                                <Check className="w-3 h-3" /> {l('Đang chọn', 'Selected')}
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tagline summary */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {product.tagline}
                </p>

                {/* Key features bullets */}
                <div className="space-y-1.5 mb-5">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity & CTA buttons */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                {product.contactForPrice ? (
                  <a
                    href={product.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {l('Liên hệ để nhận báo giá', 'Contact us for a quote')}
                  </a>
                ) : (
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-slate-200 rounded-xl bg-white p-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded-lg text-sm font-bold cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-10 text-center text-xs font-bold text-slate-900">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded-lg text-sm font-bold cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => onAddToCart(product, quantity, selectedVariant)}
                    className="flex-1 py-3 px-4 rounded-xl border border-teal-700 text-teal-800 hover:bg-teal-50 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4 text-teal-700" />
                    <span>{l('Thêm vào giỏ', 'Add to cart')}</span>
                  </button>

                  <button
                    onClick={() => onOpenOrderNow(product, quantity, selectedVariant)}
                    className="flex-1 py-3 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 active:bg-teal-900 text-white text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{l('Mua ngay', 'Buy now')}</span>
                  </button>
                </div>
                )}

                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => onToggleCompare(product)}
                    className={`inline-flex items-center gap-1.5 text-xs font-medium cursor-pointer ${
                      isCompared ? 'text-teal-700 font-bold' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <GitCompare className="w-4 h-4 text-teal-700" />
                    <span>{isCompared ? l('Đã thêm vào so sánh', 'Added to comparison') : l('So sánh với sản phẩm khác', 'Compare with other products')}</span>
                  </button>

                  {product.sourceUrl && (
                    <a
                      href={product.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-teal-700"
                    >
                      <ChevronRight className="w-4 h-4" />
                      <span>{l('Xem trên Homichi.com', 'View on Homichi.com')}</span>
                    </a>
                  )}

                  <button
                    onClick={handleDownloadManual}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-teal-700 cursor-pointer"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>{downloadSuccess ? l('✓ Đã tải HDSD (PDF)', '✓ Manual downloaded (PDF)') : l('Tải tài liệu HDSD (PDF)', 'Download user manual (PDF)')}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Tabs: Specs vs Features vs Energy vs Video vs Reviews */}
          <div className="pt-6 border-t border-slate-200">
            <div className="flex items-center gap-3 sm:gap-6 border-b border-slate-200 pb-2 mb-6 overflow-x-auto">
              <button
                onClick={() => setActiveTab('specs')}
                className={`text-xs sm:text-sm font-bold pb-2 transition-colors relative cursor-pointer whitespace-nowrap ${
                  activeTab === 'specs' ? 'text-teal-800' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {l('Thông Số Kỹ Thuật', 'Specifications')}
                {activeTab === 'specs' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-700 rounded-full" />
                )}
              </button>

              <button
                onClick={() => setActiveTab('features')}
                className={`text-xs sm:text-sm font-bold pb-2 transition-colors relative cursor-pointer whitespace-nowrap ${
                  activeTab === 'features' ? 'text-teal-800' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {l('Đặc Điểm Nổi Bật', 'Key Features')}
                {activeTab === 'features' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-700 rounded-full" />
                )}
              </button>

              {/* Energy Label Tab */}
              <button
                onClick={() => setActiveTab('energy')}
                className={`text-xs sm:text-sm font-bold pb-2 transition-colors relative cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === 'energy' ? 'text-emerald-800' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <Award className="w-4 h-4 text-emerald-600" />
                <span>{l('Nhãn Năng Lượng & Chứng Nhận', 'Energy Label & Certificates')}</span>
                {activeTab === 'energy' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full" />
                )}
              </button>

              {/* Video Tab */}
              <button
                onClick={() => setActiveTab('video')}
                className={`text-xs sm:text-sm font-bold pb-2 transition-colors relative cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === 'video' ? 'text-rose-700' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <Play className="w-3.5 h-3.5 fill-current text-rose-600" />
                <span>{l('Video Trải Nghiệm', 'Hands-on Video')}</span>
                {activeTab === 'video' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-600 rounded-full" />
                )}
              </button>

              <button
                onClick={() => setActiveTab('reviews')}
                className={`text-xs sm:text-sm font-bold pb-2 transition-colors relative cursor-pointer whitespace-nowrap ${
                  activeTab === 'reviews' ? 'text-teal-800' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {l('Đánh Giá', 'Reviews')} ({product.reviewsCount})
                {activeTab === 'reviews' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-700 rounded-full" />
                )}
              </button>
            </div>

            {/* TAB 1: SPECS TABLE */}
            {activeTab === 'specs' && (
              <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-200/80">
                <table className="w-full text-xs">
                  <tbody>
                    {Object.entries(product.specs).map(([key, val], idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/80'}
                      >
                        <td className="py-2.5 px-4 font-semibold text-slate-700 w-1/3 border-b border-slate-100">
                          {key}
                        </td>
                        <td className="py-2.5 px-4 text-slate-900 font-medium border-b border-slate-100">
                          {val}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* TAB 2: DETAILED FEATURES */}
            {activeTab === 'features' && (
              <div className="space-y-4 text-xs text-slate-700 leading-relaxed bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
                <h4 className="font-bold text-sm text-slate-900">
                  {l('Tại sao nên chọn', 'Why choose')} {product.name}?
                </h4>
                <p>
                  {l('Thiết bị được thiết kế dựa trên thói quen sinh hoạt và không gian sống của gia đình Việt hiện đại. Động cơ tối ưu điện năng, hệ thống an toàn đa tầng và vật liệu tuyển chọn giúp thiết bị hoạt động êm ái, bền bỉ qua nhiều năm.', 'Designed around the daily habits and living spaces of modern Vietnamese families. An energy-optimized motor, multi-layer safety system and carefully selected materials keep it running quietly and reliably for years.')}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {product.features.map((feat, i) => (
                    <div key={i} className="p-3 bg-white rounded-xl border border-slate-200/60 flex items-start gap-2">
                      <Check className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: ENERGY LABEL & CERTIFICATIONS */}
            {activeTab === 'energy' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Energy Star Official Card */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white relative overflow-hidden shadow-lg flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-200">
                        {l('NHÃN NĂNG LƯỢNG BỘ CÔNG THƯƠNG', 'MINISTRY OF INDUSTRY AND TRADE ENERGY LABEL')}
                      </div>

                      <div className="flex items-center gap-1 text-amber-300">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="w-6 h-6 fill-amber-300 text-amber-300" />
                        ))}
                      </div>

                      <div className="text-2xl font-black tracking-tight">
                        {l('CẤP 5 SAO CAO NHẤT', 'TOP 5-STAR RATING')}
                      </div>

                      <p className="text-xs text-emerald-100 leading-relaxed">
                        {l('Đạt tiêu chuẩn quốc gia TCVN 7826:2015 về hiệu suất năng lượng của thiết bị gia dụng tại Việt Nam.', 'Meets Vietnam\'s national standard TCVN 7826:2015 for household appliance energy efficiency.')}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-emerald-500/60 flex items-center justify-between text-xs">
                      <span>{l('Hiệu suất tối đa:', 'Maximum efficiency:')}</span>
                      <strong className="text-amber-200 text-sm">
                        {product.energyLabel?.efficiencyRatio || '2.95 m³/min.W'}
                      </strong>
                    </div>
                  </div>

                  {/* Monthly Power Cost Comparison */}
                  <div className="md:col-span-2 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-amber-500" />
                        {l('Bảng Tính Tiền Điện & Tiết Kiệm Năng Lượng', 'Electricity Cost & Energy Savings Calculator')}
                      </h4>
                      <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-lg">
                        {l('Tiết kiệm ~75% điện năng', 'Save ~75% electricity')}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <div className="text-xs text-slate-500 mb-1">{l('Quạt điện thường (AC Motor 65W)', 'Conventional fan (AC Motor 65W)')}</div>
                        <div className="text-lg font-bold text-slate-700">{l('~68.000đ - 85.000đ', '~68,000đ - 85,000đ')}</div>
                        <div className="text-[11px] text-slate-400 mt-1">{l('Chi phí ước tính / tháng (12h/ngày)', 'Estimated cost / month (12h/day)')}</div>
                      </div>

                      <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                        <div className="text-xs text-emerald-800 font-semibold mb-1">Chillami BLDC DC Inverter (28W)</div>
                        <div className="text-lg font-bold text-emerald-900">{l('~18.000đ - 25.000đ', '~18,000đ - 25,000đ')}</div>
                        <div className="text-[11px] text-emerald-700 font-medium mt-1">{l('Chỉ tốn ~600đ mỗi ngày!', 'Only ~600đ per day!')}</div>
                      </div>
                    </div>

                    {/* Official Certifications Badges */}
                    <div className="pt-3 border-t border-slate-100">
                      <div className="text-xs font-bold text-slate-800 mb-2">{l('Chứng chỉ chất lượng đã được cấp:', 'Quality certificates awarded:')}</div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <div>
                            <div className="font-bold text-slate-800 text-[11px]">TCVN 7826</div>
                            <div className="text-[10px] text-slate-500">{l('Hiệu suất 5 sao', '5-star efficiency')}</div>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <div>
                            <div className="font-bold text-slate-800 text-[11px]">Quacert</div>
                            <div className="text-[10px] text-slate-500">{l('An toàn điện lực', 'Electrical safety')}</div>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <div>
                            <div className="font-bold text-slate-800 text-[11px]">ISO 9001:2015</div>
                            <div className="text-[10px] text-slate-500">{l('Hệ thống chất lượng', 'Quality management')}</div>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <div>
                            <div className="font-bold text-slate-800 text-[11px]">CE & RoHS</div>
                            <div className="text-[10px] text-slate-500">{l('Chuẩn châu Âu', 'European standard')}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: PRODUCT VIDEO PLAYER */}
            {activeTab === 'video' && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {product.videoTitle || l(`Video đánh giá thực tế & thử nghiệm ${product.name}`, `Hands-on review & test video: ${product.name}`)}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {l('Xem thực tế góc quay 360°, test độ ồn 13dB và hướng dẫn kết nối thông minh', 'See it in 360°, a 13dB noise test and the smart pairing guide')}
                    </p>
                  </div>

                  {/* Video playlists tabs */}
                  <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
                    <button
                      onClick={() => setActiveVideoDemo('noise')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                        activeVideoDemo === 'noise' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                      }`}
                    >
                      {l('Độ ồn 13dB', '13dB noise')}
                    </button>
                    <button
                      onClick={() => setActiveVideoDemo('unboxing')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                        activeVideoDemo === 'unboxing' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                      }`}
                    >
                      {l('Mở hộp & Lắp ráp', 'Unboxing & Assembly')}
                    </button>
                    <button
                      onClick={() => setActiveVideoDemo('iot')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                        activeVideoDemo === 'iot' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                      }`}
                    >
                      {l('Điều khiển App', 'App control')}
                    </button>
                  </div>
                </div>

                {/* Interactive Video Player Canvas */}
                <div className="relative w-full aspect-16/9 rounded-2xl bg-slate-900 overflow-hidden shadow-xl border border-slate-800 flex items-center justify-center">
                  {/* Video simulation backdrop */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      isPlayingVideo ? 'opacity-40 scale-105' : 'opacity-70'
                    }`}
                  />

                  {/* Noise meter HUD simulation */}
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-700/70 text-white space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono text-teal-300">
                      <Volume2 className="w-4 h-4 text-teal-400 animate-pulse" />
                      <span>{l('ĐO ĐỘ ỒN PHÒNG THỬ NGHIỆM', 'LAB NOISE MEASUREMENT')}</span>
                    </div>
                    <div className="text-xl font-mono font-bold text-white flex items-baseline gap-1">
                      {isPlayingVideo ? '13.2' : '12.8'} <span className="text-xs text-slate-400">dB(A)</span>
                    </div>
                    <div className="text-[10px] text-emerald-400 font-sans">
                      {l('Êm hơn tiếng lá rơi (20dB) · Tuyệt đối không rung lắc', 'Quieter than falling leaves (20dB) · Absolutely no wobble')}
                    </div>
                  </div>

                  {/* Overlay Video Controls */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {!isPlayingVideo ? (
                      <button
                        onClick={() => setIsPlayingVideo(true)}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-teal-500/90 hover:bg-teal-400 text-slate-950 flex items-center justify-center shadow-2xl transition-transform hover:scale-110 cursor-pointer pl-1 group"
                        aria-label={l('Phát video', 'Play video')}
                      >
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-slate-950 group-hover:scale-105 transition-transform" />
                      </button>
                    ) : (
                      <button
                        onClick={() => setIsPlayingVideo(false)}
                        className="w-14 h-14 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
                        aria-label={l('Tạm dừng', 'Pause')}
                      >
                        <Pause className="w-6 h-6 fill-white" />
                      </button>
                    )}
                  </div>

                  {/* Video Player Bottom Control Bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-4 text-white">
                    <div className="w-full bg-slate-700/60 h-1 rounded-full mb-3 overflow-hidden cursor-pointer">
                      <div
                        className={`h-full bg-teal-400 transition-all ${
                          isPlayingVideo ? 'w-2/3 animate-pulse' : 'w-1/4'
                        }`}
                      />
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                          className="hover:text-teal-400 cursor-pointer font-bold"
                        >
                          {isPlayingVideo ? l('Tạm dừng', 'Pause') : l('Phát', 'Play')}
                        </button>
                        <span className="text-slate-400 font-mono">
                          {isPlayingVideo ? '02:40 / 04:15' : '00:00 / 04:15'}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-slate-400 text-[11px]">
                        <span className="text-teal-400 font-semibold">HD 1080p 60fps</span>
                        <span>{l('Âm thanh trường thực', 'Real ambient sound')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="font-bold text-slate-900 mb-0.5">{l('1. Khẩu độ gió khí động học', '1. Aerodynamic air aperture')}</div>
                    <div className="text-slate-600 text-[11px]">{l('Cánh 7 lá vát nghiêng 23 độ tạo gió xoắn mềm không bạt mặt.', '7 blades angled at 23 degrees create a soft swirling breeze that never blasts your face.')}</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="font-bold text-slate-900 mb-0.5">{l('2. Bạc đạn Bearing cao cấp', '2. Premium ball bearings')}</div>
                    <div className="text-slate-600 text-[11px]">{l('Triệt tiêu ma sát, hoạt động liên tục 10.000 giờ không phát nóng.', 'Eliminates friction, runs 10,000 hours continuously without overheating.')}</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="font-bold text-slate-900 mb-0.5">{l('3. Thao tác lắp ráp 3 phút', '3. 3-minute assembly')}</div>
                    <div className="text-slate-600 text-[11px]">{l('Khóa cài thông minh tháo lắp vệ sinh bằng tay không cần kìm vít.', 'Smart clips let you take it apart for cleaning by hand – no tools needed.')}</div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: REVIEWS */}
            {activeTab === 'reviews' && (
              <div className="space-y-4">
                <div className="p-4 bg-teal-50/50 rounded-2xl border border-teal-100 flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-extrabold text-slate-900">{product.rating} / 5.0</div>
                    <div className="text-xs text-slate-500">{l('Dựa trên', 'Based on')} {product.reviewsCount} {l('khách hàng đã mua và kích hoạt bảo hành', 'customers who bought and activated their warranty')}</div>
                  </div>
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-900">{l('Anh Tuấn (Hà Nội)', 'Mr. Tuan (Hanoi)')}</span>
                      <span className="text-slate-400">{l('2 ngày trước · Đã mua hàng', '2 days ago · Verified purchase')}</span>
                    </div>
                    <div className="flex text-amber-400">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-600">
                      {l('Giao hàng rất nhanh, thợ đến lắp đặt cẩn thận và hướng dẫn kích hoạt bảo hành điện tử ngay trên điện thoại. Quạt chạy cực êm ban đêm không nghe thấy tiếng gió rít.', 'Very fast delivery; the technician installed it carefully and showed me how to activate the e-warranty on my phone. The fan is extremely quiet at night – no whistling at all.')}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-900">{l('Chị Hoàng Lan (TP.HCM)', 'Ms. Hoang Lan (HCMC)')}</span>
                      <span className="text-slate-400">{l('1 tuần trước · Đã mua hàng', '1 week ago · Verified purchase')}</span>
                    </div>
                    <div className="flex text-amber-400">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-600">
                      {l('Thiết kế tối giản rất hợp với căn hộ chung cư mới của nhà mình. Cảm biến rất nhạy, tiết kiệm điện rõ rệt.', 'The minimalist design suits our new apartment perfectly. The sensor is very responsive and the power savings are obvious.')}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

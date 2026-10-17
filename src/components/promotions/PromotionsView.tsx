import React, { useState } from 'react';
import { Product } from '../../types';
import { ProductCard } from '../products/ProductCard';
import {
  Flame,
  Tag,
  Gift,
  RotateCcw,
  Percent,
  Copy,
  Check,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface PromotionsViewProps {
  products: Product[];
  onOpenDetail: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  comparedProductIds: string[];
}

export const PromotionsView: React.FC<PromotionsViewProps> = ({
  products,
  onOpenDetail,
  onAddToCart,
  onToggleCompare,
  comparedProductIds,
}) => {
  const { l } = useLanguage();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const discounted = products.filter(
    (p) => p.isPromotion || (p.discountPercent && p.discountPercent > 0)
  );
  // Without discounted items, show priced products that the vouchers above apply to
  const hasDiscounts = discounted.length > 0;
  const promoProducts = hasDiscounts ? discounted : products.filter((p) => !p.contactForPrice).slice(0, 8);

  const vouchers = [
    {
      code: 'CHILLAMI2026',
      discount: l('Giảm 200.000 đ', '200,000đ off'),
      condition: l('Cho đơn hàng từ 2.000.000 đ', 'For orders from 2,000,000đ'),
      expiry: l('Hạn dùng: 31/12/2026', 'Valid until: 31/12/2026'),
    },
    {
      code: 'COMBOVIP',
      discount: l('Giảm 500.000 đ', '500,000đ off'),
      condition: l('Khi mua combo Điều hòa + Quạt cây', 'With an AC + standing fan combo'),
      expiry: l('Hạn dùng: 31/12/2026', 'Valid until: 31/12/2026'),
    },
    {
      code: 'FREESHIP2H',
      discount: l('Miễn phí lắp đặt', 'Free installation'),
      condition: l('Bao trọn vật tư tiêu chuẩn', 'All standard materials included'),
      expiry: l('Áp dụng tự động', 'Applied automatically'),
    },
  ];

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Hero Campaign Header */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 text-white p-8 sm:p-12 shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 font-bold text-xs border border-rose-500/30">
              <Flame className="w-4 h-4 text-rose-400" />
              {l('Chương trình ưu đãi độc quyền 2026', 'Exclusive 2026 promotions')}
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              {l('Đại Tiệc Mùa Hè: Sống Mát Lành, Không Lo Hóa Đơn Điện', 'Summer Sale: Stay Cool Without Worrying About Power Bills')}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {l('Ưu đãi mùa hè cho quạt cây, quạt điều hòa và điều hòa Inverter Livotec. Miễn phí công lắp đặt tiêu chuẩn trị giá 500.000 đ.', 'Summer offers on Livotec standing fans, air coolers and Inverter air conditioners. Free standard installation worth 500,000đ.')}
            </p>
          </div>
        </div>

        {/* Voucher Cards */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Tag className="w-5 h-5 text-teal-700" />
            <h3 className="text-base font-bold text-slate-900">
              {l('Mã Giảm Giá Độc Quyền Khi Mua Online', 'Exclusive Online Discount Codes')}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {vouchers.map((v) => (
              <div
                key={v.code}
                className="bg-white rounded-2xl border border-dashed border-teal-300 p-5 shadow-xs flex items-center justify-between gap-4"
              >
                <div className="space-y-1 min-w-0">
                  <div className="text-base font-extrabold text-teal-800">{v.discount}</div>
                  <div className="text-xs text-slate-600">{v.condition}</div>
                  <div className="text-[10px] text-slate-400">{v.expiry}</div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(v.code)}
                  className="px-3.5 py-2 bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-bold rounded-xl border border-teal-200 transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                >
                  {copiedCode === v.code ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-teal-700" />
                      <span>{l('Đã chép', 'Copied')}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{v.code}</span>
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Trade-in & Combo Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex gap-5 items-center">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
              <RotateCcw className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-amber-700 uppercase">
                {l('Chính sách Trade-in', 'Trade-in policy')}
              </span>
              <h4 className="text-base font-bold text-slate-900 mt-0.5">
                {l('Thu Cũ Đổi Mới Thiết Bị Gia Dụng', 'Trade In Your Old Appliances')}
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                {l('Chillami thu mua quạt cũ, điều hòa cũ mọi thương hiệu với mức trợ giá lên đến 1.500.000 đ khi mua sản phẩm mới.', 'Chillami buys back old fans and air conditioners of any brand with a subsidy of up to 1,500,000đ when you buy a new product.')}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex gap-5 items-center">
            <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
              <Gift className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-teal-700 uppercase">
                {l('Gói Combo Tân Gia', 'Housewarming Combo')}
              </span>
              <h4 className="text-base font-bold text-slate-900 mt-0.5">
                {l('Trọn Bộ Bếp & Hút Mùi & Bình Nóng Lạnh', 'Complete Hob, Range Hood & Water Heater Set')}
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                {l('Giảm thêm 10% trên tổng hóa đơn khi mua trọn bộ thiết bị nhà mới kèm quà tặng bộ nồi lẩu inox 304 cao cấp.', 'Get an extra 10% off the total when you buy the full new-home set, plus a free premium 304 stainless steel hot pot.')}
              </p>
            </div>
          </div>
        </div>

        {/* Promotional Products Showcase */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {hasDiscounts
                  ? l('Sản Phẩm Đang Khuyến Mại Nổi Bật', 'Featured Products on Sale')
                  : l('Sản Phẩm Áp Dụng Mã Giảm Giá', 'Products Eligible for Discount Codes')}{' '}
                ({promoProducts.length})
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {hasDiscounts
                  ? l('Áp dụng số lượng có hạn trong tháng ra mắt', 'Limited quantities during launch month')
                  : l('Nhập mã giảm giá ở bước thanh toán', 'Enter a discount code at checkout')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {promoProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onOpenDetail={onOpenDetail}
                onAddToCart={onAddToCart}
                onToggleCompare={onToggleCompare}
                isCompared={comparedProductIds.includes(p.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

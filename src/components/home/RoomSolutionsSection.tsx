import React, { useState } from 'react';
import { ROOM_SOLUTIONS } from '../../data/faqs';
import { Product } from '../../types';
import { Check, ArrowRight, Sparkles, Bed, Sofa, Utensils, Bath } from 'lucide-react';
import { ScrollFadeIn } from '../common/ScrollFadeIn';

interface RoomSolutionsSectionProps {
  allProducts: Product[];
  onOpenDetail: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const RoomSolutionsSection: React.FC<RoomSolutionsSectionProps> = ({
  allProducts,
  onOpenDetail,
  onAddToCart,
}) => {
  const [activeSpaceId, setActiveSpaceId] = useState<'bedroom' | 'living' | 'kitchen' | 'bathroom'>('bedroom');

  const icons = {
    bedroom: Bed,
    living: Sofa,
    kitchen: Utensils,
    bathroom: Bath,
  };

  const currentSpace = ROOM_SOLUTIONS.find((s) => s.id === activeSpaceId) || ROOM_SOLUTIONS[0];
  const Icon = icons[activeSpaceId];

  // Resolve matching products
  const matchingProducts = currentSpace.recommendedProducts
    .map((id) => allProducts.find((p) => p.id === id))
    .filter(Boolean) as Product[];

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn direction="up" distance={20} duration={600}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Tư vấn thiết kế & giải pháp chuyên sâu
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1 font-display">
                Giải Pháp Thiết Bị Theo Từng Không Gian Sống
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Mỗi căn phòng có đặc thù nhiệt học và yêu cầu tiếng ồn riêng biệt. Chillami thiết kế combo tối ưu cho từng khu vực trong ngôi nhà.
            </p>
          </div>
        </ScrollFadeIn>

        {/* Space Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8">
          {ROOM_SOLUTIONS.map((space) => {
            const SpaceIcon = icons[space.id as keyof typeof icons];
            const isActive = activeSpaceId === space.id;
            return (
              <button
                key={space.id}
                onClick={() => setActiveSpaceId(space.id as any)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-teal-700 text-white shadow-md'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                <SpaceIcon className="w-4 h-4" />
                <span>{space.title}</span>
              </button>
            );
          })}
        </div>

        {/* Space Showcase Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80">
          {/* Left Column: Space Photo & Tips (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-md">
              <img
                src={currentSpace.image}
                alt={currentSpace.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-bold text-teal-300 uppercase">
                  Không gian tiêu chuẩn
                </span>
                <h3 className="text-xl font-bold font-display">{currentSpace.title}</h3>
                <p className="text-xs text-slate-200 mt-0.5">{currentSpace.tagline}</p>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-600 bg-white p-4 rounded-2xl border border-slate-200/60">
              <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                <Sparkles className="w-4 h-4 text-teal-700" />
                <span>Lời khuyên từ chuyên gia Chillami:</span>
              </div>
              {currentSpace.tips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Matching Products List (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-800">
              Thiết bị Chillami lý tưởng cho {currentSpace.title.toLowerCase()}:
            </div>

            <div className="space-y-3">
              {matchingProducts.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs hover:border-teal-500 hover:shadow-md transition-all flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                  <div
                    onClick={() => onOpenDetail(p)}
                    className="flex items-center gap-3.5 cursor-pointer w-full sm:w-auto"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-16 h-16 rounded-xl object-cover bg-slate-50 shrink-0"
                    />
                    <div>
                      <span className="text-[10px] font-bold text-teal-700 uppercase">
                        {p.model} · {p.powerWatt ? `${p.powerWatt}W` : 'Inverter'}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1 hover:text-teal-700">
                        {p.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {p.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    <div className="text-right">
                      <div className="text-sm font-extrabold text-slate-900">
                        {formatPrice(p.price)}
                      </div>
                      {p.originalPrice > p.price && (
                        <div className="text-[11px] text-slate-400 line-through">
                          {formatPrice(p.originalPrice)}
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => onAddToCart(p)}
                      className="py-2 px-3.5 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-xs whitespace-nowrap"
                    >
                      Thêm vào giỏ
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

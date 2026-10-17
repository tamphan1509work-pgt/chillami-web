import React from 'react';
import { Product } from '../../types';
import { Star, Eye, ShoppingBag, GitCompare, Check, Zap } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenDetail: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  isCompared: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenDetail,
  onAddToCart,
  onToggleCompare,
  isCompared,
}) => {
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-2xl hover:border-teal-500/50 hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-300 ease-out cursor-default will-change-transform">
      {/* Badges container */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 pointer-events-none">
        {product.discountPercent && (
          <span className="inline-flex items-center px-2 py-0.5 text-[11px] font-bold text-white bg-rose-600 rounded-md shadow-xs">
            -{product.discountPercent}%
          </span>
        )}
        {product.isNew && (
          <span className="inline-flex items-center px-2 py-0.5 text-[11px] font-bold text-white bg-teal-700 rounded-md shadow-xs">
            Mới
          </span>
        )}
      </div>

      {/* Compare button quick toggle */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggleCompare(product);
        }}
        className={`absolute top-3 right-3 z-10 p-2 rounded-xl transition-all duration-200 ${
          isCompared
            ? 'bg-teal-700 text-white shadow-md ring-2 ring-teal-600'
            : 'bg-white/90 backdrop-blur-xs text-slate-600 hover:text-teal-700 hover:bg-white shadow-xs border border-slate-200/60'
        }`}
        title={isCompared ? 'Bỏ khỏi so sánh' : 'Thêm vào so sánh'}
        aria-label="So sánh sản phẩm"
      >
        <GitCompare className="w-4 h-4" />
      </button>

      {/* Image container */}
      <div
        onClick={() => onOpenDetail(product)}
        className="relative w-full aspect-4/3 bg-slate-50 overflow-hidden cursor-pointer flex items-center justify-center p-4"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center rounded-xl group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Subtle quick view overlay */}
        <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 text-xs font-semibold text-slate-800 shadow-md">
            <Eye className="w-3.5 h-3.5 text-teal-700" />
            Xem nhanh
          </span>
        </div>
      </div>

      {/* Body content */}
      <div className="flex-1 flex flex-col p-4 sm:p-5">
        {/* Quiet unboxed metadata - following Frontend Design Constitution */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5">
          <span className="font-medium text-teal-700 uppercase tracking-wide text-[10px]">
            {product.model}
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Bảo hành {product.warrantyMonths}T</span>
          {product.powerWatt && (
            <>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>{product.powerWatt}W</span>
            </>
          )}
        </div>

        {/* Product Title */}
        <h3
          onClick={() => onOpenDetail(product)}
          className="text-sm sm:text-base font-semibold text-slate-900 hover:text-teal-700 transition-colors line-clamp-2 cursor-pointer mb-1.5 leading-snug"
          title={product.name}
        >
          {product.name}
        </h3>

        {/* Short tagline */}
        <p className="text-xs text-slate-500 line-clamp-2 mb-3 leading-relaxed flex-1">
          {product.tagline}
        </p>

        {/* Tech highlights */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {product.features.slice(0, 2).map((feat, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 text-[11px] text-slate-600 bg-slate-100/80 px-2 py-0.5 rounded-md"
            >
              <Check className="w-3 h-3 text-teal-600 shrink-0" />
              <span className="truncate max-w-[170px]">{feat}</span>
            </span>
          ))}
        </div>

        {/* Rating and price row */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between mb-3">
          <div className="flex items-center gap-1 text-xs text-amber-500 font-medium">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{product.rating}</span>
            <span className="text-slate-400 text-[11px]">({product.reviewsCount})</span>
          </div>
          <span className="text-[11px] text-emerald-700 font-medium flex items-center gap-0.5">
            <Zap className="w-3 h-3" />
            Free lắp đặt
          </span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-end justify-between gap-2 mt-auto">
          <div>
            <div className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              {formatPrice(product.price)}
            </div>
            {product.originalPrice > product.price && (
              <div className="text-xs text-slate-400 line-through">
                {formatPrice(product.originalPrice)}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="inline-flex items-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2 bg-teal-700 hover:bg-teal-800 active:bg-teal-900 text-white text-xs font-semibold rounded-xl shadow-xs hover:shadow-md transition-all shrink-0 cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Mua ngay</span>
          </button>
        </div>
      </div>
    </div>
  );
};

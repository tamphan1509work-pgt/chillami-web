import React from 'react';
import { Product } from '../../types';
import { X, GitCompare, Trash2, ShoppingBag, Check, Zap, Star } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface ProductComparisonModalProps {
  comparedProducts: Product[];
  onClose: () => void;
  onRemoveProduct: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  onClearAll: () => void;
}

export const ProductComparisonModal: React.FC<ProductComparisonModalProps> = ({
  comparedProducts,
  onClose,
  onRemoveProduct,
  onAddToCart,
  onClearAll,
}) => {
  const { l } = useLanguage();
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  // Collect all unique spec keys across compared products
  const allSpecKeys = React.useMemo(() => {
    const keys = new Set<string>();
    comparedProducts.forEach((p) => {
      Object.keys(p.specs).forEach((k) => keys.add(k));
    });
    return Array.from(keys);
  }, [comparedProducts]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/60">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-teal-100 text-teal-800 rounded-xl">
              <GitCompare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                {l('So Sánh Thông Số Kỹ Thuật Chi Tiết', 'Detailed Specification Comparison')}
              </h3>
              <p className="text-xs text-slate-500">
                {l('Đối chiếu thông số kỹ thuật, công nghệ động cơ và giá bán giữa các model Chillami', 'Compare specifications, motor technology and prices across Chillami models')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {comparedProducts.length > 0 && (
              <button
                onClick={onClearAll}
                className="text-xs font-semibold text-rose-600 hover:text-rose-700 cursor-pointer"
              >
                {l('Xóa tất cả', 'Clear all')}
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Comparison Content */}
        <div className="overflow-y-auto p-6">
          {comparedProducts.length === 0 ? (
            <div className="py-16 text-center">
              <GitCompare className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h4 className="text-sm font-bold text-slate-800">{l('Chưa có sản phẩm nào trong danh sách so sánh', 'No products in the comparison list yet')}</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                {l('Hãy nhấn vào biểu tượng so sánh (icon hai mũi tên) ở bất kỳ sản phẩm nào trong danh mục để đối chiếu thông số.', 'Tap the compare icon (two arrows) on any product in the catalog to compare specifications.')}
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                {l('Quay lại xem sản phẩm', 'Back to products')}
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                {/* Header row: Product Cards */}
                <thead>
                  <tr>
                    <th className="p-3 w-48 text-left bg-slate-50/50 font-bold text-slate-500 uppercase tracking-wider text-[11px] align-top">
                      {l('Sản phẩm', 'Products')} ({comparedProducts.length})
                    </th>
                    {comparedProducts.map((p) => (
                      <th key={p.id} className="p-3 w-64 text-left font-normal align-top border-l border-slate-100">
                        <div className="relative flex flex-col h-full bg-slate-50/60 p-3 rounded-2xl border border-slate-200/80">
                          <button
                            onClick={() => onRemoveProduct(p.id)}
                            className="absolute top-2 right-2 p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-white transition-colors cursor-pointer"
                            title={l('Xóa khỏi so sánh', 'Remove from comparison')}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>

                          <div className="w-full aspect-4/3 rounded-xl overflow-hidden bg-white mb-2 p-2">
                            <img src={p.image} alt={p.name} className="w-full h-full object-cover rounded-lg" />
                          </div>

                          <div className="text-[10px] font-bold text-teal-700 uppercase mb-1">
                            {p.model}
                          </div>
                          <h4 className="text-xs font-bold text-slate-900 line-clamp-2 mb-2">
                            {p.name}
                          </h4>

                          <div className="text-sm font-extrabold text-slate-900 mb-3">
                            {formatPrice(p.price)}
                          </div>

                          <button
                            onClick={() => onAddToCart(p)}
                            className="mt-auto py-2 px-3 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>{l('Mua ngay', 'Buy now')}</span>
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Body Rows */}
                <tbody className="divide-y divide-slate-100">
                  {/* General Row: Rating */}
                  <tr className="bg-white">
                    <td className="p-3 font-semibold text-slate-700 bg-slate-50/50">{l('Đánh giá thực tế', 'Customer rating')}</td>
                    {comparedProducts.map((p) => (
                      <td key={p.id} className="p-3 border-l border-slate-100">
                        <div className="flex items-center gap-1 font-semibold text-amber-500">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span>{p.rating} / 5.0</span>
                          <span className="text-slate-400 text-[10px]">({p.reviewsCount})</span>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* General Row: Warranty */}
                  <tr className="bg-slate-50/30">
                    <td className="p-3 font-semibold text-slate-700 bg-slate-50/50">{l('Thời hạn bảo hành', 'Warranty period')}</td>
                    {comparedProducts.map((p) => (
                      <td key={p.id} className="p-3 font-bold text-teal-800 border-l border-slate-100">
                        {p.warrantyMonths} {l('Tháng (1 Đổi 1 trong 30 ngày)', 'months (1-for-1 within 30 days)')}
                      </td>
                    ))}
                  </tr>

                  {/* General Row: Energy Rating */}
                  <tr className="bg-white">
                    <td className="p-3 font-semibold text-slate-700 bg-slate-50/50">{l('Sao năng lượng', 'Energy stars')}</td>
                    {comparedProducts.map((p) => (
                      <td key={p.id} className="p-3 border-l border-slate-100">
                        <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                          <Zap className="w-3.5 h-3.5" />
                          {l('5 Sao (Tiết kiệm năng lượng)', '5 Stars (Energy saving)')}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* All Spec Rows */}
                  {allSpecKeys.map((key) => (
                    <tr key={key} className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 font-semibold text-slate-700 bg-slate-50/50">{key}</td>
                      {comparedProducts.map((p) => (
                        <td key={p.id} className="p-3 border-l border-slate-100 text-slate-800">
                          {p.specs[key] || '—'}
                        </td>
                      ))}
                    </tr>
                  ))}

                  {/* Features Bullets */}
                  <tr className="bg-white">
                    <td className="p-3 font-semibold text-slate-700 bg-slate-50/50 align-top">
                      {l('Tính năng nổi bật', 'Key features')}
                    </td>
                    {comparedProducts.map((p) => (
                      <td key={p.id} className="p-3 border-l border-slate-100 align-top">
                        <ul className="space-y-1">
                          {p.features.map((feat, i) => (
                            <li key={i} className="flex items-start gap-1.5 text-slate-600">
                              <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

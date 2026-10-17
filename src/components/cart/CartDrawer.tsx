import React from 'react';
import { CartItem, Product } from '../../types';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number, variant?: string) => void;
  onRemoveItem: (productId: string, variant?: string) => void;
  onProceedToCheckout: () => void;
  onAddUpsell: (product: Product) => void;
  upsellProducts: Product[];
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  onAddUpsell,
  upsellProducts,
}) => {
  const { l, translateProduct, translateVariant } = useLanguage();
  if (!isOpen) return null;

  const totalAmount = items.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-teal-700" />
            <h3 className="text-base font-bold text-slate-900">
              {l('Giỏ Hàng Của Bạn', 'Your Cart')} ({items.reduce((s, i) => s + i.quantity, 0)})
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Alert */}
        <div className="bg-teal-50 px-6 py-2.5 border-b border-teal-100 flex items-center gap-2 text-xs text-teal-900">
          <Truck className="w-4 h-4 text-teal-700 shrink-0" />
          <span>
            {l('Đơn hàng của bạn', 'Your order')} <strong>{l('được miễn phí giao & lắp đặt tiêu chuẩn', 'qualifies for free standard delivery & installation')}</strong>!
          </span>
        </div>

        {/* Scrollable Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="py-20 text-center">
              <ShoppingBag className="w-16 h-16 text-slate-200 mx-auto mb-3" />
              <h4 className="text-sm font-bold text-slate-800">{l('Giỏ hàng đang trống', 'Your cart is empty')}</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                {l('Hãy khám phá các thiết bị điện gia dụng thông minh của Chillami và thêm vào giỏ.', 'Explore Chillami\'s smart home appliances and add them to your cart.')}
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                {l('Tiếp tục mua sắm', 'Continue shopping')}
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item, idx) => (
                <div
                  key={`${item.product.id}-${item.selectedVariant || ''}-${idx}`}
                  className="flex gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200/80 items-center"
                >
                  <img
                    src={item.product.image}
                    alt={translateProduct(item.product).name}
                    className="w-16 h-16 rounded-xl object-contain bg-white shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-slate-900 truncate">
                      {translateProduct(item.product).name}
                    </h4>
                    {item.selectedVariant && (
                      <div className="text-[11px] text-teal-700 font-medium">
                        {l('Phân loại:', 'Option:')} {translateVariant(item.product, item.selectedVariant)}
                      </div>
                    )}
                    <div className="text-xs font-bold text-slate-900 mt-0.5">
                      {formatPrice(item.unitPrice)}
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-slate-200 rounded-lg bg-white">
                        <button
                          onClick={() =>
                            onUpdateQuantity(
                              item.product.id,
                              Math.max(1, item.quantity - 1),
                              item.selectedVariant
                            )
                          }
                          className="w-6 h-6 flex items-center justify-center text-slate-500 hover:text-slate-800"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center text-xs font-bold text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(
                              item.product.id,
                              item.quantity + 1,
                              item.selectedVariant
                            )
                          }
                          className="w-6 h-6 flex items-center justify-center text-slate-500 hover:text-slate-800"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id, item.selectedVariant)}
                        className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                        title={l('Xóa', 'Remove')}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Upsell Accessories */}
              {upsellProducts.length > 0 && (
                <div className="pt-4 border-t border-slate-200 mt-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-teal-700" />
                    <span>{l('Thường được mua kèm cùng thiết bị:', 'Frequently bought together:')}</span>
                  </div>
                  <div className="space-y-2">
                    {upsellProducts.slice(0, 2).map((up) => (
                      <div
                        key={up.id}
                        className="flex items-center justify-between p-2.5 rounded-xl border border-dashed border-slate-300 bg-white"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <img
                            src={up.image}
                            alt={up.name}
                            className="w-9 h-9 rounded-lg object-contain bg-slate-100 shrink-0"
                          />
                          <div className="min-w-0">
                            <div className="text-xs font-semibold text-slate-900 truncate">
                              {up.name}
                            </div>
                            <div className="text-[11px] font-bold text-teal-700">
                              {formatPrice(up.price)}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => onAddUpsell(up)}
                          className="px-2.5 py-1 bg-teal-50 hover:bg-teal-100 text-teal-800 text-[11px] font-bold rounded-lg transition-colors cursor-pointer shrink-0"
                        >
                          {l('+ Thêm', '+ Add')}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Checkout Summary */}
        {items.length > 0 && (
          <div className="p-6 border-t border-slate-200 bg-slate-50/80 space-y-4">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-500">
                <span>{l('Tạm tính', 'Subtotal')} ({items.length} {l('món):', 'items):')}</span>
                <span>{formatPrice(totalAmount)}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>{l('Phí vận chuyển & Lắp đặt:', 'Delivery & installation:')}</span>
                <span className="text-emerald-700 font-semibold">{l('Miễn phí 100%', '100% free')}</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-slate-900 pt-2 border-t border-slate-200">
                <span>{l('Tổng thanh toán:', 'Total:')}</span>
                <span className="text-teal-800 tracking-tight">{formatPrice(totalAmount)}</span>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onProceedToCheckout();
              }}
              className="w-full py-3.5 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 text-sm"
            >
              <span>{l('Tiến hành đặt hàng', 'Proceed to checkout')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              <span>{l('Bảo mật giao dịch SSL · Kiểm tra hàng trước khi trả tiền', 'SSL-secured checkout · Inspect before you pay')}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

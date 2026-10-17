import React, { useState, useEffect } from 'react';
import { Cookie, X, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const CookieConsentBanner: React.FC = () => {
  const { l } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('chillami_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('chillami_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('chillami_cookie_consent', 'essential_only');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label={l('Thông báo Cookie', 'Cookie notice')}
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-slate-200 animate-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start gap-3.5">
        <div className="p-2.5 bg-teal-50 text-teal-700 rounded-xl shrink-0">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="flex-1 space-y-1">
          <h4 className="text-xs font-bold text-slate-900">
            {l('Quản Lý Cookie & Quyền Riêng Tư', 'Cookie & Privacy Management')}
          </h4>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            {l('Chillami sử dụng cookie để ghi nhớ giỏ hàng, tối ưu hóa tốc độ tải trang và hỗ trợ tra cứu bảo hành thuận tiện hơn cho quý khách.', 'Chillami uses cookies to remember your cart, speed up page loading and make warranty lookups more convenient for you.')}
          </p>
          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={handleAccept}
              className="px-3.5 py-1.5 bg-teal-700 hover:bg-teal-800 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
            >
              {l('Đồng ý tất cả', 'Accept all')}
            </button>
            <button
              onClick={handleDecline}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
            >
              {l('Chỉ cookie cần thiết', 'Essential cookies only')}
            </button>
          </div>
        </div>
        <button
          onClick={handleDecline}
          className="text-slate-400 hover:text-slate-600 p-1"
          aria-label={l('Đóng', 'Close')}
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};

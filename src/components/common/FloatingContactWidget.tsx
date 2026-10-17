import React, { useState } from 'react';
import {
  PhoneCall,
  MessageCircle,
  Bot,
  Sparkles,
  X,
  ChevronUp,
  ChevronDown,
  Phone,
  Copy,
  Check,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface FloatingContactWidgetProps {
  onOpenAiChat: () => void;
  onOpenSmartGuide?: () => void;
}

export const FloatingContactWidget: React.FC<FloatingContactWidgetProps> = ({
  onOpenAiChat,
  onOpenSmartGuide,
}) => {
  const { language, t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(true);
  const [showHotlinePopup, setShowHotlinePopup] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const hotlinePrimary = '1900 8899';
  const hotlineMobile = '0988 665 544';

  const handleCopyPhone = (number: string) => {
    navigator.clipboard.writeText(number.replace(/\s+/g, ''));
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <>
      {/* Floating Buttons Stack at Bottom Right */}
      <aside 
        aria-label="Kênh liên hệ và hỗ trợ trực tuyến"
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-auto"
      >
        {/* Hotline Quick Call Popup */}
        {showHotlinePopup && (
          <div 
            role="dialog"
            aria-label="Thông tin Hotline Chillami"
            className="mb-2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 animate-in slide-in-from-bottom-3 duration-200"
          >
            <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900">Hotline Chillami</h3>
                  <div className="text-[10px] text-emerald-600 font-medium">Hoạt động 8:00 - 21:00</div>
                </div>
              </div>
              <button
                onClick={() => setShowHotlinePopup(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg cursor-pointer"
                aria-label="Đóng popup hotline"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <a
                href={`tel:${hotlinePrimary.replace(/\s+/g, '')}`}
                className="flex items-center justify-between p-2.5 rounded-xl bg-teal-50 hover:bg-teal-100/80 text-teal-900 transition-colors group"
              >
                <div>
                  <div className="text-[10px] text-teal-700 font-semibold">Tổng đài chính hãng (Miễn phí)</div>
                  <div className="font-extrabold text-sm text-teal-950">{hotlinePrimary}</div>
                </div>
                <span className="text-[11px] font-bold text-teal-700 group-hover:underline">Gọi ngay</span>
              </a>

              <a
                href={`tel:${hotlineMobile.replace(/\s+/g, '')}`}
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 transition-colors group"
              >
                <div>
                  <div className="text-[10px] text-slate-500 font-semibold">Tư vấn kỹ thuật & Zalo</div>
                  <div className="font-extrabold text-xs text-slate-900">{hotlineMobile}</div>
                </div>
                <span className="text-[11px] font-bold text-slate-600 group-hover:underline">Gọi ngay</span>
              </a>

              <button
                onClick={() => handleCopyPhone(hotlineMobile)}
                className="w-full py-1.5 px-3 text-[11px] text-slate-600 hover:text-teal-700 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Đã chép số vào bộ nhớ đệm!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Sao chép số điện thoại</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Buttons List */}
        {isExpanded && (
          <div className="flex flex-col items-end gap-2.5 animate-in slide-in-from-bottom-2 duration-150">
            {/* 1. AI CHATBOT BUTTON */}
            <button
              onClick={onOpenAiChat}
              className="group relative flex items-center gap-2.5 p-2 sm:px-3.5 sm:py-2.5 bg-gradient-to-r from-teal-700 via-teal-800 to-slate-900 hover:from-teal-600 hover:to-slate-800 text-white rounded-full sm:rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer border border-teal-400/40"
              title="Chat với AI Chillami"
            >
              <div className="relative">
                <Bot className="w-5 h-5 text-teal-200" />
                <Sparkles className="w-3 h-3 text-amber-300 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <div className="hidden sm:flex flex-col items-start text-left">
                <span className="text-xs font-bold leading-tight flex items-center gap-1">
                  Chillami AI
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping" />
                </span>
                <span className="text-[10px] text-teal-200/90 font-medium">
                  {language === 'vi' ? 'Tư vấn quạt & thiết bị' : 'Appliance Advisor'}
                </span>
              </div>
              {/* Tooltip on mobile */}
              <span className="sm:hidden absolute right-full mr-2.5 px-2 py-1 bg-slate-900 text-white text-[11px] rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {language === 'vi' ? 'Trợ lý AI Chillami' : 'Chillami AI Assistant'}
              </span>
            </button>

            {/* 2. ZALO BUTTON */}
            <a
              href="https://zalo.me/0988665544"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2.5 p-2 sm:px-3.5 sm:py-2 bg-[#0068ff] hover:bg-[#0055d4] text-white rounded-full sm:rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
              title="Chat qua Zalo OA chính thức"
            >
              <div className="w-5 h-5 rounded-md bg-white text-[#0068ff] font-black text-xs flex items-center justify-center shrink-0">
                Z
              </div>
              <div className="hidden sm:flex flex-col items-start text-left">
                <span className="text-xs font-bold leading-tight">Chat Zalo</span>
                <span className="text-[10px] text-blue-100 font-medium">
                  {language === 'vi' ? 'Hỗ trợ trực tuyến 24/7' : '24/7 Online Support'}
                </span>
              </div>
              <span className="sm:hidden absolute right-full mr-2.5 px-2 py-1 bg-slate-900 text-white text-[11px] rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Chat Zalo (0988 665 544)
              </span>
            </a>

            {/* 3. MESSENGER BUTTON */}
            <a
              href="https://m.me/chillamivietnam"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2.5 p-2 sm:px-3.5 sm:py-2 bg-gradient-to-tr from-[#0084ff] via-[#aa3fff] to-[#ff5983] hover:opacity-95 text-white rounded-full sm:rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
              title="Nhắn tin qua Facebook Messenger"
            >
              <MessageCircle className="w-5 h-5" />
              <div className="hidden sm:flex flex-col items-start text-left">
                <span className="text-xs font-bold leading-tight">Messenger</span>
                <span className="text-[10px] text-pink-100 font-medium">Facebook Chillami</span>
              </div>
              <span className="sm:hidden absolute right-full mr-2.5 px-2 py-1 bg-slate-900 text-white text-[11px] rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Facebook Messenger
              </span>
            </a>

            {/* 4. HOTLINE BUTTON */}
            <button
              onClick={() => setShowHotlinePopup(!showHotlinePopup)}
              className="group relative flex items-center gap-2.5 p-2 sm:px-3.5 sm:py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full sm:rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
              title="Gọi Hotline miễn phí cước"
            >
              <PhoneCall className="w-5 h-5 animate-bounce [animation-duration:2.5s]" />
              <div className="hidden sm:flex flex-col items-start text-left">
                <span className="text-xs font-bold leading-tight">Hotline 1900 8899</span>
                <span className="text-[10px] text-emerald-100 font-medium">
                  {language === 'vi' ? 'Gọi miễn phí' : 'Toll-free Call'}
                </span>
              </div>
              <span className="sm:hidden absolute right-full mr-2.5 px-2 py-1 bg-slate-900 text-white text-[11px] rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Hotline 1900 8899
              </span>
            </button>
          </div>
        )}

        {/* Toggle Expand/Collapse Mini Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-1.5 rounded-full bg-slate-800/80 hover:bg-slate-900 text-slate-300 hover:text-white shadow-md text-[10px] transition-colors cursor-pointer flex items-center gap-1 px-2.5 backdrop-blur-xs"
          title={isExpanded ? 'Thu gọn nút liên hệ' : 'Mở rộng nút liên hệ'}
        >
          {isExpanded ? (
            <>
              <ChevronDown className="w-3.5 h-3.5" />
              <span className="text-[10px]">Thu gọn</span>
            </>
          ) : (
            <>
              <ChevronUp className="w-3.5 h-3.5 text-teal-400" />
              <span className="text-[10px] font-bold text-white">Liên hệ (Zalo, AI, Hotline)</span>
            </>
          )}
        </button>
      </aside>
    </>
  );
};

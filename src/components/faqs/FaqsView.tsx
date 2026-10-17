import React, { useState } from 'react';
import { FAQS } from '../../data/faqs';
import {
  HelpCircle,
  Search,
  ChevronDown,
  PhoneCall,
  MessageSquare,
  Mail,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const FaqsView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqIds, setOpenFaqIds] = useState<string[]>(['f1', 'f2']);

  const toggleFaq = (id: string) => {
    if (openFaqIds.includes(id)) {
      setOpenFaqIds(openFaqIds.filter((item) => item !== id));
    } else {
      setOpenFaqIds([...openFaqIds, id]);
    }
  };

  const filteredFaqs = FAQS.filter((f) => {
    if (selectedCategory !== 'all' && f.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Title */}
        <div className="text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold mb-3">
            <HelpCircle className="w-4 h-4 text-teal-700" />
            <span>Trung tâm giải đáp thắc mắc</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
            Câu Hỏi Thường Gặp (FAQ) & Cẩm Nang Sử Dụng
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Giải đáp mọi thắc mắc về chính sách mua hàng, quy trình giao lắp, kích hoạt bảo hành điện tử và công nghệ thiết bị Chillami.
          </p>
        </div>

        {/* Search bar */}
        <div className="relative max-w-lg mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm câu hỏi (VD: lắp đặt, bảo hành, động cơ BLDC...)"
            className="w-full pl-10 pr-4 py-3 bg-white rounded-2xl border border-slate-300 focus:border-teal-600 focus:outline-hidden text-xs shadow-xs"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-1 text-xs font-semibold">
          {[
            { id: 'all', label: 'Tất cả chủ đề' },
            { id: 'mua-hang', label: 'Mua hàng & Thanh toán' },
            { id: 'lap-dat', label: 'Vận chuyển & Lắp đặt' },
            { id: 'bao-hanh', label: 'Chính sách bảo hành' },
            { id: 'cong-nghe', label: 'Công nghệ BLDC & Inverter' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion FAQ list */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 text-center text-xs text-slate-500 border border-slate-200">
              Không tìm thấy câu hỏi phù hợp. Quý khách vui lòng gọi hotline <strong>1900 8899</strong> để được hỗ trợ trực tiếp.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50"
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-teal-700' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Support Contact Box */}
        <div className="bg-teal-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold">
              Bạn vẫn còn câu hỏi chưa được giải đáp?
            </h3>
            <p className="text-xs text-teal-200">
              Đội ngũ chuyên viên kỹ thuật Chillami sẵn sàng hỗ trợ bạn 24/7.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:19008899"
              className="px-4 py-2.5 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Gọi 1900 8899</span>
            </a>

            <a
              href="https://zalo.me"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-xs flex items-center gap-2 transition-colors border border-white/20"
            >
              <MessageSquare className="w-4 h-4 text-teal-300" />
              <span>Chat Zalo OA</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useRef, useEffect } from 'react';
import { Product } from '../../types';
import {
  X,
  Send,
  Sparkles,
  Bot,
  User,
  RotateCcw,
  ShoppingBag,
  ExternalLink,
  Zap,
  ShieldCheck,
  Smartphone,
  ChevronRight,
  Wifi,
  Volume2
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestedProducts?: Product[];
  actionLink?: {
    label: string;
    view?: string;
    external?: string;
  };
}

interface AiChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
  allProducts: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onNavigate: (view: string, payload?: any) => void;
  onOpenSmartGuide?: () => void;
}

export const AiChatbotModal: React.FC<AiChatbotModalProps> = ({
  isOpen,
  onClose,
  allProducts,
  onSelectProduct,
  onAddToCart,
  onNavigate,
  onOpenSmartGuide,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: 'Xin chào! Em là Chillami AI Assistant 🤖\n\nEm có thể hỗ trợ quý khách:\n• Tư vấn chọn quạt BLDC, điều hòa Inverter phù hợp diện tích phòng\n• Hướng dẫn kết nối App Chillami Home & WiFi 2.4GHz\n• Giải đáp về nhãn năng lượng 5 sao & độ ồn siêu êm 13dB\n• Chính sách bảo hành vàng 1 đổi 1 trong 30 ngày\n\nQuý khách đang quan tâm đến thiết bị nào ạ?',
      timestamp: 'Vừa xong',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    'Quạt BLDC tiết kiệm điện hơn quạt thường thế nào?',
    'Tư vấn quạt siêu êm cho phòng ngủ có em bé',
    'Hướng dẫn kết nối WiFi quạt thông minh',
    'Chính sách bảo hành 1 đổi 1 trong 30 ngày',
    'Điều hòa nào phù hợp phòng 15m²?',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateAiReply(text, allProducts);
      setMessages((prev) => [...prev, reply]);
      setIsTyping(false);
    }, 750);
  };

  const generateAiReply = (query: string, products: Product[]): Message => {
    const q = query.toLowerCase();
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // 1. BLDC vs AC / Tiết kiệm điện / Nhãn năng lượng
    if (q.includes('bldc') || q.includes('tiết kiệm') || q.includes('năng lượng') || q.includes('bao nhiêu số điện') || q.includes('so sánh')) {
      const bldcFan = products.find((p) => p.id === 'cf-100b') || products[0];
      return {
        id: Date.now().toString(),
        sender: 'assistant',
        text: 'Quạt động cơ BLDC (DC Inverter không chổi than) của Chillami có các ưu điểm vượt trội:\n\n1. Tiết kiệm tới 75% điện năng: Công suất chỉ 28W (so với quạt AC truyền thống 65W–75W). Chạy 12 tiếng mỗi ngày chỉ tốn ~18.000đ – 25.000đ tiền điện mỗi tháng!\n2. Siêu tĩnh lặng 13dB: Không ma sát chổi than, không phát nhiệt, êm hơn tiếng lá rơi.\n3. 24 cấp độ gió: Điều chỉnh mượt mà theo ý muốn thay vì chỉ 3 số cứng nhắc.\n4. Đạt chuẩn năng lượng 5 Sao TCVN 7826:2015 của Bộ Công Thương.',
        timestamp: time,
        suggestedProducts: [bldcFan],
      };
    }

    // 2. Kết nối WiFi / App / Ghép nối thông minh
    if (q.includes('kết nối') || q.includes('wifi') || q.includes('app') || q.includes('ứng dụng') || q.includes('điện thoại') || q.includes('ios') || q.includes('android')) {
      return {
        id: Date.now().toString(),
        sender: 'assistant',
        text: 'Dạ, quy trình kết nối quạt thông minh Chillami với App rất đơn giản:\n\nBước 1: Tải App "Chillami Home" trên App Store (iOS) hoặc Google Play (Android).\nBước 2: Bật Bluetooth và kết nối điện thoại vào WiFi băng tần 2.4GHz.\nBước 3: Nhấn giữ nút WiFi trên thân quạt trong 5 giây cho đến khi đèn LED nhấp nháy nhanh.\nBước 4: Mở App, nhấn "Thêm thiết bị", App sẽ tự động phát hiện quạt và hoàn tất trong 10 giây!\n\nEm đã mở sẵn trang hướng dẫn chi tiết có mô phỏng kết nối ảo để quý khách trải nghiệm thử ngay nhé!',
        timestamp: time,
        actionLink: {
          label: 'Mở Trang Hướng Dẫn Kết Nối & Tải App',
          view: 'smart-connect',
        },
      };
    }

    // 3. Tư vấn phòng ngủ / em bé / êm ái
    if (q.includes('phòng ngủ') || q.includes('em bé') || q.includes('trẻ') || q.includes('êm') || q.includes('độ ồn')) {
      const flowFan = products.find((p) => p.id === 'cf-100b');
      const smartFan = products.find((p) => p.id === 'csa-200x');
      return {
        id: Date.now().toString(),
        sender: 'assistant',
        text: 'Đối với phòng ngủ, đặc biệt là gia đình có trẻ nhỏ hoặc người lớn tuổi, Chillami khuyến nghị 2 mẫu quạt tối ưu:\n\n• Quạt Cây Chillami Flow-100 BLDC (CF-100B): Độ ồn 13dB ở chế độ ngủ SoftAir, gió thổi mềm mại không gây khô họng, không bạt hơi.\n• Quạt Thông Minh CSA-200X: Tự động điều chỉnh cấp gió theo nhiệt độ phòng ban đêm, có chế độ hẹn giờ và điều khiển qua giọng nói.',
        timestamp: time,
        suggestedProducts: [flowFan, smartFan].filter(Boolean) as Product[],
      };
    }

    // 4. Mất điện / Tích điện / Dã ngoại
    if (q.includes('mất điện') || q.includes('tích điện') || q.includes('pin') || q.includes('dã ngoại')) {
      const batteryFan = products.find((p) => p.id === 'cpg-300');
      return {
        id: Date.now().toString(),
        sender: 'assistant',
        text: 'Chillami có dòng Quạt Tích Điện PowerGo-Pro (CPG-300) trang bị pin Lithium LiFePO4 15.000mAh:\n\n• Thời gian dùng liên tục tới 28 giờ (gió vừa) hoặc 8 giờ (gió cực mạnh).\n• Có đèn LED cứu hộ ban đêm.\n• Cổng sạc Type-C và cổng USB 18W sạc ngược cho điện thoại khi mất điện.\n• Pin thế hệ mới chống chai và an toàn chống cháy nổ tuyệt đối.',
        timestamp: time,
        suggestedProducts: batteryFan ? [batteryFan] : [],
      };
    }

    // 5. Điều hòa Inverter / Chọn công suất phòng
    if (q.includes('điều hòa') || q.includes('lạnh') || q.includes('btu') || q.includes('inverter') || q.includes('15m')) {
      const acProduct = products.find((p) => p.category === 'ac');
      return {
        id: Date.now().toString(),
        sender: 'assistant',
        text: 'Quy chuẩn chọn công suất điều hòa chuẩn kỹ thuật:\n• Phòng dưới 15m²: Chọn 9.000 BTU (1.0 HP)\n• Phòng 15m² – 22m²: Chọn 12.000 BTU (1.5 HP)\n• Phòng 22m² – 30m²: Chọn 18.000 BTU (2.0 HP)\n\nDòng Điều Hòa Chillami Eco-Inverter CAC-09ECO đạt chuẩn tiết kiệm CSPF 5.25 (5 sao), có công nghệ Health Guard diệt khuẩn nấm mốc và miễn phí 100% công lắp đặt tận nhà!',
        timestamp: time,
        suggestedProducts: acProduct ? [acProduct] : [],
      };
    }

    // 6. Bảo hành / 1 đổi 1 / Hậu mãi
    if (q.includes('bảo hành') || q.includes('đổi trả') || q.includes('sửa chữa') || q.includes('1 đổi 1')) {
      return {
        id: Date.now().toString(),
        sender: 'assistant',
        text: 'Chính sách bảo hành vàng Chillami Care:\n\n1. 1 Đổi 1 Trong 30 Ngày: Nếu có lỗi kỹ thuật từ nhà sản xuất, kỹ thuật viên sẽ mang máy mới nguyên seal đổi tận nhà.\n2. Bảo hành số hóa E-Warranty: Kích hoạt bảo hành điện tử qua số điện thoại hoặc mã Serial trên thân máy.\n3. Thời hạn bảo hành: Động cơ BLDC bảo hành 24 - 36 tháng; máy nén Inverter bảo hành 5 năm; bình chứa tráng men Titanium bảo hành 10 năm.\n4. Hotline tổng đài kỹ thuật: 1900 8899 hỗ trợ 24/7.',
        timestamp: time,
      };
    }

    // Default friendly assistant fallback
    const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 2);
    return {
      id: Date.now().toString(),
      sender: 'assistant',
      text: `Dạ, về yêu cầu "${query}", Chillami luôn có các dòng sản phẩm tối ưu công nghệ cho ngôi nhà của quý khách. Quý khách có thể xem nhanh các thiết bị bán chạy nhất bên dưới hoặc chọn các câu hỏi gợi ý để em giải đáp chi tiết hơn nhé!`,
      timestamp: time,
      suggestedProducts: bestSellers,
    };
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/50 backdrop-blur-xs flex items-end sm:items-center justify-center sm:justify-end p-2 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg h-[88vh] sm:h-[680px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-6 sm:slide-in-from-right-6 duration-300">
        {/* Header */}
        <div className="px-5 py-4 bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 text-white flex items-center justify-between shrink-0 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 relative">
              <Bot className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-900" />
            </div>
            <div>
              <div className="font-bold text-sm flex items-center gap-1.5">
                <span>Chillami Smart AI</span>
                <span className="text-[10px] font-bold px-1.5 py-0.2 bg-teal-400 text-slate-950 rounded-md">
                  Chuyên Gia Thiết Bị
                </span>
              </div>
              <div className="text-[11px] text-teal-200/80 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                <span>Trực tuyến 24/7 · Tư vấn quạt & thiết bị</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => {
                setMessages([
                  {
                    id: 'welcome',
                    sender: 'assistant',
                    text: 'Em đã đặt lại cuộc trò chuyện. Quý khách cần hỗ trợ thêm thông tin gì ạ?',
                    timestamp: 'Vừa xong',
                  },
                ]);
              }}
              title="Làm mới cuộc trò chuyện"
              className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-50">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'assistant' && (
                <div className="w-8 h-8 rounded-xl bg-teal-700 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div className={`max-w-[85%] space-y-2.5 ${m.sender === 'user' ? 'items-end' : 'items-start'}`}>
                <div
                  className={`p-3.5 rounded-2xl text-xs leading-relaxed whitespace-pre-line shadow-xs ${
                    m.sender === 'user'
                      ? 'bg-teal-700 text-white rounded-tr-xs'
                      : 'bg-white text-slate-800 border border-slate-200/80 rounded-tl-xs'
                  }`}
                >
                  {m.text}
                </div>

                {/* Suggested Action Link */}
                {m.actionLink && (
                  <button
                    onClick={() => {
                      if (m.actionLink?.view) {
                        onClose();
                        onNavigate(m.actionLink.view);
                      }
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Smartphone className="w-4 h-4 text-teal-700" />
                    <span>{m.actionLink.label}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}

                {/* Suggested Products Mini Cards */}
                {m.suggestedProducts && m.suggestedProducts.length > 0 && (
                  <div className="space-y-2 pt-1 w-full">
                    {m.suggestedProducts.map((p) => (
                      <div
                        key={p.id}
                        className="p-3 bg-white rounded-xl border border-slate-200/90 shadow-xs flex items-center gap-3 hover:border-teal-500 transition-colors"
                      >
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-14 h-14 object-cover rounded-lg bg-slate-50 shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-slate-900 truncate">{p.name}</div>
                          <div className="text-[11px] text-teal-700 font-extrabold mt-0.5">
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(p.price)}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <button
                              onClick={() => {
                                onSelectProduct(p);
                                onClose();
                              }}
                              className="text-[10px] font-bold text-slate-700 hover:text-teal-700 underline cursor-pointer"
                            >
                              Xem chi tiết
                            </button>
                            <span className="text-slate-300">·</span>
                            <button
                              onClick={() => onAddToCart(p)}
                              className="text-[10px] font-bold text-teal-700 hover:text-teal-800 flex items-center gap-0.5 cursor-pointer"
                            >
                              <ShoppingBag className="w-3 h-3" />
                              Thêm giỏ
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div
                  className={`text-[10px] text-slate-400 px-1 ${
                    m.sender === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  {m.timestamp}
                </div>
              </div>

              {m.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-2.5 items-center text-xs text-slate-500">
              <div className="w-8 h-8 rounded-xl bg-teal-700 text-white flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="p-3 bg-white rounded-2xl border border-slate-200/80 flex items-center gap-1.5 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-teal-600 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-teal-600 animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-teal-600 animate-bounce [animation-delay:0.4s]" />
                <span className="text-[11px] text-slate-400 ml-1">Chillami AI đang trả lời...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-white border-t border-slate-100 overflow-x-auto whitespace-nowrap flex items-center gap-2">
          {quickQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="text-[11px] font-medium text-slate-700 bg-slate-100 hover:bg-teal-50 hover:text-teal-800 hover:border-teal-300 border border-slate-200 px-3 py-1.5 rounded-full transition-colors cursor-pointer shrink-0"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Chat Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-slate-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Nhập câu hỏi về quạt BLDC, kết nối App, bảo hành..."
              className="flex-1 px-4 py-2.5 bg-slate-100 focus:bg-white text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-teal-600 focus:outline-hidden transition-all placeholder:text-slate-400"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="px-4 py-2.5 bg-teal-700 hover:bg-teal-800 disabled:opacity-40 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center cursor-pointer shadow-xs"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="text-[10px] text-slate-400 text-center mt-1.5">
            Chillami Smart AI trợ lý hỗ trợ trực tuyến · Cập nhật giá & chương trình khuyến mãi theo thời gian thực
          </div>
        </div>
      </div>
    </div>
  );
};

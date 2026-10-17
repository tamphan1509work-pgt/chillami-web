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
import { useLanguage } from '../../context/LanguageContext';

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

const byIds = (products: Product[], ids: string[]) =>
  ids.map((id) => products.find((p) => p.id === id)).filter(Boolean) as Product[];

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
  const { l, translateProduct, formatCurrency } = useLanguage();
  const welcomeText = l(
    'Xin chào! Em là Chillami AI Assistant 🤖\n\nEm có thể hỗ trợ quý khách:\n• Tư vấn chọn điều hòa, quạt, bình nước nóng phù hợp diện tích & nhu cầu\n• Báo giá nhanh các sản phẩm Livotec chính hãng\n• Hướng dẫn kết nối App Chillami Home & WiFi 2.4GHz\n• Chính sách bảo hành vàng 1 đổi 1 trong 30 ngày\n\nQuý khách đang quan tâm đến thiết bị nào ạ?',
    'Hello! I\'m the Chillami AI Assistant 🤖\n\nI can help you with:\n• Choosing an air conditioner, fan or water heater for your room and needs\n• Quick prices for genuine Livotec products\n• Connecting the Chillami Home app & 2.4GHz WiFi\n• Our gold 30-day 1-for-1 replacement warranty\n\nWhich appliance are you interested in?'
  );
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: welcomeText,
      timestamp: l('Vừa xong', 'Just now'),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    l('Thiết bị nào giúp tiết kiệm điện?', 'Which appliances help save power?'),
    l('Tư vấn thiết bị cho phòng ngủ', 'Recommend appliances for a bedroom'),
    l('Điều hòa nào phù hợp phòng 15m²?', 'Which air conditioner suits a 15m² room?'),
    l('Máy hút bụi không dây giá bao nhiêu?', 'How much are the cordless vacuum cleaners?'),
    l('Chính sách bảo hành 1 đổi 1 trong 30 ngày', '30-day 1-for-1 warranty policy'),
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

    // 1. Energy saving
    if (q.includes('tiết kiệm') || q.includes('năng lượng') || q.includes('số điện') || /sav|energy|power/.test(q)) {
      return {
        id: Date.now().toString(),
        sender: 'assistant',
        text: l(
          'Để tiết kiệm điện, quý khách có thể tham khảo:\n\n• Điều hòa Livotec dòng Inverter: máy nén biến tần chạy ổn định, hạn chế bật/tắt liên tục so với máy thường.\n• Quạt cây hoặc quạt điều hòa Livotec cho những ngày chỉ cần làm mát nhẹ.\n\nThông số chi tiết của từng model có trên trang sản phẩm ạ!',
          'To save electricity, consider:\n\n• Livotec Inverter air conditioners: the variable-speed compressor runs steadily instead of constantly switching on and off like non-Inverter units.\n• Livotec standing fans or air coolers for days that only need light cooling.\n\nDetailed specs for each model are on the product pages!'
        ),
        timestamp: time,
        suggestedProducts: byIds(products, ['dhv09i', 's-400']),
      };
    }

    // 2. Kết nối WiFi / App / Ghép nối thông minh
    if (q.includes('kết nối') || q.includes('wifi') || q.includes('app') || q.includes('ứng dụng') || q.includes('điện thoại') || q.includes('ios') || q.includes('android') || /connect|pair|phone/.test(q)) {
      return {
        id: Date.now().toString(),
        sender: 'assistant',
        text: l('Dạ, quy trình kết nối quạt thông minh Chillami với App rất đơn giản:\n\nBước 1: Tải App "Chillami Home" trên App Store (iOS) hoặc Google Play (Android).\nBước 2: Bật Bluetooth và kết nối điện thoại vào WiFi băng tần 2.4GHz.\nBước 3: Nhấn giữ nút WiFi trên thân quạt trong 5 giây cho đến khi đèn LED nhấp nháy nhanh.\nBước 4: Mở App, nhấn "Thêm thiết bị", App sẽ tự động phát hiện quạt và hoàn tất trong 10 giây!\n\nEm đã mở sẵn trang hướng dẫn chi tiết có mô phỏng kết nối ảo để quý khách trải nghiệm thử ngay nhé!', 'Connecting a Chillami smart fan to the app is very simple:\n\nStep 1: Download the "Chillami Home" app from the App Store (iOS) or Google Play (Android).\nStep 2: Turn on Bluetooth and connect your phone to a 2.4GHz WiFi network.\nStep 3: Press and hold the WiFi button on the fan for 5 seconds until the LED blinks rapidly.\nStep 4: Open the app and tap "Add device" – it finds the fan automatically and finishes in 10 seconds!\n\nI\'ve prepared a detailed guide page with a virtual pairing simulator so you can try it right away!'),
        timestamp: time,
        actionLink: {
          label: l('Mở Trang Hướng Dẫn Kết Nối & Tải App', 'Open the Pairing & App Download Guide'),
          view: 'smart-connect',
        },
      };
    }

    // 3. Bedroom advice
    if (q.includes('phòng ngủ') || q.includes('em bé') || q.includes('trẻ') || q.includes('êm') || /bedroom|baby|child|quiet/.test(q)) {
      return {
        id: Date.now().toString(),
        sender: 'assistant',
        text: l(
          'Cho phòng ngủ, quý khách có thể tham khảo:\n\n• Quạt cây Livotec (S-300, S-400…) cho làm mát nhẹ nhàng.\n• Điều hòa Livotec Inverter cho phòng nhỏ.\n• Máy hút ẩm Livotec giúp phòng khô thoáng mùa nồm.',
          'For a bedroom, consider:\n\n• Livotec standing fans (S-300, S-400…) for gentle cooling.\n• A Livotec Inverter air conditioner for small rooms.\n• A Livotec dehumidifier to keep the room dry in humid seasons.'
        ),
        timestamp: time,
        suggestedProducts: byIds(products, ['s-400', 'dhv09i', 'lhd-18iu']),
      };
    }

    // 4. Cordless vacuum cleaners (prices from the catalog)
    if (q.includes('hút bụi') || q.includes('dọn') || /vacuum|clean/.test(q)) {
      const vacuums = products.filter((p) => p.category === 'vacuum');
      const lines = vacuums
        .map((p) => `• ${p.name}: ${p.contactForPrice ? l('liên hệ', 'contact us') : formatCurrency(p.price)}`)
        .join('\n');
      return {
        id: Date.now().toString(),
        sender: 'assistant',
        text: l(`Máy hút bụi không dây Livotec hiện có:\n\n${lines}`, `Current Livotec cordless vacuum cleaners:\n\n${lines}`),
        timestamp: time,
        suggestedProducts: vacuums.filter((p) => !p.contactForPrice),
      };
    }

    // 5. Điều hòa Inverter / Chọn công suất phòng
    if (q.includes('điều hòa') || q.includes('lạnh') || q.includes('btu') || q.includes('inverter') || q.includes('15m') || /air con|conditioner|cooling/.test(q)) {
      const acProducts = byIds(products, ['dhv09i', 'dhv12i']);
      return {
        id: Date.now().toString(),
        sender: 'assistant',
        text: l('Quy chuẩn chọn công suất điều hòa chuẩn kỹ thuật:\n• Phòng dưới 15m²: Chọn 9.000 BTU (1.0 HP)\n• Phòng 15m² – 22m²: Chọn 12.000 BTU (1.5 HP)\n• Phòng 22m² – 30m²: Chọn 18.000 BTU (2.0 HP)\n\nĐiều hòa một chiều Livotec Inverter có nhiều model (DHV09I, DHV10.8I, DHV12I, DHV09J, DHV10.8J, DHV12J); quý khách xem giá và chi tiết từng model trên trang sản phẩm. Chillami miễn phí công lắp đặt tiêu chuẩn tại nhà!', 'Technical guide to choosing AC capacity:\n• Rooms under 15m²: 9,000 BTU (1.0 HP)\n• Rooms 15m² – 22m²: 12,000 BTU (1.5 HP)\n• Rooms 22m² – 30m²: 18,000 BTU (2.0 HP)\n\nLivotec one-way Inverter air conditioners come in several models (DHV09I, DHV10.8I, DHV12I, DHV09J, DHV10.8J, DHV12J); see prices and details on each product page. Chillami includes free standard home installation!'),
        timestamp: time,
        suggestedProducts: acProducts,
      };
    }

    // 6. Bảo hành / 1 đổi 1 / Hậu mãi
    if (q.includes('bảo hành') || q.includes('đổi trả') || q.includes('sửa chữa') || q.includes('1 đổi 1') || /warrant|return|repair|replace/.test(q)) {
      return {
        id: Date.now().toString(),
        sender: 'assistant',
        text: l('Chính sách bảo hành vàng Chillami Care:\n\n1. 1 Đổi 1 Trong 30 Ngày: Nếu có lỗi kỹ thuật từ nhà sản xuất, kỹ thuật viên sẽ mang máy mới nguyên seal đổi tận nhà.\n2. Bảo hành số hóa E-Warranty: Kích hoạt bảo hành điện tử qua số điện thoại hoặc mã Serial trên thân máy.\n3. Thời hạn bảo hành: Động cơ BLDC bảo hành 24 - 36 tháng; máy nén Inverter bảo hành 5 năm; bình chứa tráng men Titanium bảo hành 10 năm.\n4. Hotline tổng đài kỹ thuật: 1900 8899 hỗ trợ 24/7.', 'Chillami Care gold warranty policy:\n\n1. 1-for-1 within 30 days: for any manufacturing defect, a technician brings a brand-new sealed unit to swap at your home.\n2. Digital E-Warranty: activate your warranty with your phone number or the serial number on the unit.\n3. Warranty periods: 24 - 36 months on BLDC motors; 5 years on Inverter compressors; 10 years on Titanium enamel tanks.\n4. Technical hotline: 1900 8899, available 24/7.'),
        timestamp: time,
      };
    }

    // Default friendly assistant fallback
    const bestSellers = byIds(products, ['s-400', 'dhv09i']);
    return {
      id: Date.now().toString(),
      sender: 'assistant',
      text: l(
        `Dạ, về yêu cầu "${query}", Chillami luôn có các dòng sản phẩm tối ưu công nghệ cho ngôi nhà của quý khách. Quý khách có thể xem nhanh một số sản phẩm nổi bật bên dưới hoặc chọn các câu hỏi gợi ý để em giải đáp chi tiết hơn nhé!`,
        `About "${query}": Chillami has technology-optimized products for every home. Take a quick look at some featured products below, or pick one of the suggested questions for a more detailed answer!`
      ),
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
                  {l('Chuyên Gia Thiết Bị', 'Appliance Expert')}
                </span>
              </div>
              <div className="text-[11px] text-teal-200/80 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                <span>{l('Trực tuyến 24/7 · Tư vấn quạt & thiết bị', 'Online 24/7 · Fan & appliance advice')}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => {
                setMessages([
                  {
                    id: 'reset',
                    sender: 'assistant',
                    text: l('Em đã đặt lại cuộc trò chuyện. Quý khách cần hỗ trợ thêm thông tin gì ạ?', 'I\'ve reset the conversation. What else can I help you with?'),
                    timestamp: l('Vừa xong', 'Just now'),
                  },
                ]);
              }}
              title={l('Làm mới cuộc trò chuyện', 'Restart conversation')}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
              aria-label={l('Đóng', 'Close')}
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
                  {m.id === 'welcome' ? welcomeText : m.text}
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
                          className="w-14 h-14 object-contain rounded-lg bg-slate-50 shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-slate-900 truncate">{translateProduct(p).name}</div>
                          <div className="text-[11px] text-teal-700 font-bold mt-0.5">
                            {formatCurrency(p.price)}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <button
                              onClick={() => {
                                onSelectProduct(p);
                                onClose();
                              }}
                              className="text-[10px] font-bold text-slate-700 hover:text-teal-700 underline cursor-pointer"
                            >
                              {l('Xem chi tiết', 'View details')}
                            </button>
                            <span className="text-slate-300">·</span>
                            <button
                              onClick={() => onAddToCart(p)}
                              className="text-[10px] font-bold text-teal-700 hover:text-teal-800 flex items-center gap-0.5 cursor-pointer"
                            >
                              <ShoppingBag className="w-3 h-3" />
                              {l('Thêm giỏ', 'Add to cart')}
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
                <span className="text-[11px] text-slate-400 ml-1">{l('Chillami AI đang trả lời...', 'Chillami AI is typing...')}</span>
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
              placeholder={l('Nhập câu hỏi về quạt BLDC, kết nối App, bảo hành...', 'Ask about BLDC fans, app pairing, warranty...')}
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
            {l('Chillami Smart AI trợ lý hỗ trợ trực tuyến · Cập nhật giá & chương trình khuyến mãi theo thời gian thực', 'Chillami Smart AI online assistant · Real-time prices & promotions')}
          </div>
        </div>
      </div>
    </div>
  );
};

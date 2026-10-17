import React, { useState } from 'react';
import { Order } from '../../types';
import {
  X,
  Search,
  PackageCheck,
  Truck,
  CheckCircle2,
  Clock,
  PhoneCall,
  MapPin,
  AlertCircle
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

// Order timelines are stored in Vietnamese (demo order in App.tsx, new orders from CheckoutModal)
const ORDER_TEXT_EN: Record<string, string> = {
  'Hôm nay (Trong vòng 2 giờ)': 'Today (within 2 hours)',
  'Đã đặt hàng thành công': 'Order placed successfully',
  'Hệ thống đã nhận thanh toán qua VietQR.': 'Payment received via VietQR.',
  'Kho xuất hàng & Kiểm định': 'Dispatched from warehouse & inspected',
  'Kiểm tra sản phẩm và dán tem kích hoạt bảo hành điện tử.': 'Product checked and e-warranty activation sticker applied.',
  'Kỹ thuật viên đang giao & lắp đặt': 'Technician delivering & installing',
  'KTV Trần Đình Dũng đang di chuyển đến địa chỉ.': 'Technician Tran Dinh Dung is on the way to your address.',
  'Bàn giao thiết bị': 'Appliance handover',
  'Khách hàng thử quạt và nghiệm thu.': 'Customer tests the fan and signs off.',
  'Vừa xong': 'Just now',
  'Hệ thống Chillami đã tiếp nhận đơn hàng của quý khách.': 'Chillami has received your order.',
  'Đang chuẩn bị hàng tại kho': 'Preparing items at the warehouse',
  'Dự kiến 30 phút tới': 'Expected in the next 30 minutes',
  'Kiểm tra tem bảo hành điện tử và đóng gói tiêu chuẩn.': 'Checking the e-warranty sticker and standard packing.',
  'Kỹ thuật viên đang vận chuyển': 'Technician on the way',
  'Dự kiến trong 2 giờ': 'Expected within 2 hours',
  'Kỹ thuật viên mang theo dụng cụ và phụ kiện lắp đặt.': 'The technician brings installation tools and accessories.',
  'Lắp đặt & Bàn giao hoàn tất': 'Installation & handover complete',
  'Sau khi lắp đặt': 'After installation',
  'Khách hàng nghiệm thu thiết bị và kích hoạt E-Warranty.': 'Customer signs off the appliance and activates the E-Warranty.',
};

const ORDER_STATUS: Record<Order['status'], [string, string]> = {
  processing: ['ĐANG XỬ LÝ', 'PROCESSING'],
  confirmed: ['ĐÃ ĐIỀU PHỐI THỢ LẮP ĐẶT', 'TECHNICIAN ASSIGNED'],
  shipping: ['ĐANG GIAO HÀNG', 'SHIPPING'],
  delivered: ['ĐÃ GIAO HÀNG', 'DELIVERED'],
};

interface OrderTrackingModalProps {
  initialOrderId?: string;
  onClose: () => void;
  orders: Order[];
}

export const OrderTrackingModal: React.FC<OrderTrackingModalProps> = ({
  initialOrderId,
  onClose,
  orders,
}) => {
  const { l, language, formatCurrency } = useLanguage();
  const tr = (text: string) =>
    language === 'en' ? ORDER_TEXT_EN[text] ?? text.replace(/^Dự kiến /, 'Expected ') : text;
  const [searchTerm, setSearchTerm] = useState(initialOrderId || '');
  const [searchedOrder, setSearchedOrder] = useState<Order | null>(
    initialOrderId
      ? orders.find((o) => o.id === initialOrderId) || orders[0] || null
      : orders[0] || null
  );
  const [hasSearched, setHasSearched] = useState(Boolean(initialOrderId || orders.length > 0));

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    const key = searchTerm.trim().toLowerCase();
    const found = orders.find(
      (o) => o.id.toLowerCase() === key || o.customerPhone.toLowerCase() === key
    );
    setSearchedOrder(found || null);
  };

  const formatPrice = formatCurrency;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-teal-100 text-teal-800 rounded-xl">
              <PackageCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                {l('Tra Cứu Tiến Độ Đơn Hàng & Lắp Đặt', 'Order & Installation Tracking')}
              </h3>
              <p className="text-xs text-slate-500">
                {l('Theo dõi thời gian thực quy trình điều phối kỹ thuật viên của Chillami', 'Follow Chillami\'s technician dispatch process in real time')}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Search bar */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              required
              placeholder={l('Nhập mã đơn hàng (VD: CLM-89241) hoặc số điện thoại...', 'Enter order ID (e.g. CLM-89241) or phone number...')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden text-xs font-medium"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Search className="w-4 h-4" />
              <span>{l('Tra cứu', 'Search')}</span>
            </button>
          </form>

          {/* Results display */}
          {hasSearched && (
            <div>
              {searchedOrder ? (
                <div className="space-y-6 text-xs">
                  {/* Order Overview Card */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200">
                      <div>
                        <span className="text-slate-400 text-[11px]">{l('MÃ ĐƠN HÀNG:', 'ORDER ID:')}</span>
                        <div className="text-base font-mono font-extrabold text-teal-800">
                          {searchedOrder.id}
                        </div>
                      </div>

                      <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-800 font-bold text-[11px] border border-teal-200">
                        {l(...ORDER_STATUS[searchedOrder.status])}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
                      <div>{l('Người nhận:', 'Recipient:')} <strong>{searchedOrder.customerName}</strong> ({searchedOrder.customerPhone})</div>
                      <div>{l('Ngày tạo đơn:', 'Order date:')} <strong>{searchedOrder.createdAt}</strong></div>
                      <div className="sm:col-span-2">
                        {l('Địa chỉ:', 'Address:')} <strong>{searchedOrder.customerAddress}</strong>
                      </div>
                      <div>{l('Phương thức:', 'Method:')} <strong className="uppercase">{searchedOrder.paymentMethod}</strong></div>
                      <div>{l('Tổng tiền:', 'Total:')} <strong className="text-teal-800">{formatPrice(searchedOrder.totalAmount)}</strong></div>
                    </div>
                  </div>

                  {/* Tracking Timeline */}
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-4">
                      {l('Tiến Độ Xử Lý & Lắp Đặt Tại Nhà:', 'Processing & Home Installation Progress:')}
                    </h4>

                    <div className="space-y-6 relative pl-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                      {searchedOrder.trackingTimeline.map((step, idx) => (
                        <div key={idx} className="relative">
                          <div
                            className={`absolute -left-6 top-0 w-5 h-5 rounded-full flex items-center justify-center ${
                              step.done
                                ? 'bg-teal-700 text-white ring-4 ring-teal-100'
                                : 'bg-slate-200 text-slate-400'
                            }`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>

                          <div className="space-y-0.5">
                            <div className="flex items-center gap-2">
                              <span className={`font-bold ${step.done ? 'text-slate-900' : 'text-slate-400'}`}>
                                {tr(step.title)}
                              </span>
                              <span className="text-[11px] text-teal-700 font-medium">({tr(step.time)})</span>
                            </div>
                            <p className="text-slate-500 text-[11px] leading-relaxed">
                              {tr(step.description)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technician info call card */}
                  <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-teal-700 text-white flex items-center justify-center font-bold">
                        KT
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{l('Kỹ thuật viên Chillami phụ trách', 'Assigned Chillami technician')}</div>
                        <div className="text-[11px] text-slate-500">{l('Trần Đình Dũng (Đội phản ứng nhanh 2H)', 'Tran Dinh Dung (2H rapid response team)')}</div>
                      </div>
                    </div>

                    <a
                      href="tel:19008899"
                      className="px-3.5 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-xl font-bold flex items-center gap-1.5 transition-colors"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>{l('Gọi trực tiếp', 'Call directly')}</span>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center text-xs text-slate-500">
                  <AlertCircle className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  <div className="font-bold text-slate-800">{l('Không tìm thấy đơn hàng', 'Order not found')}</div>
                  <p className="mt-1">
                    {l('Vui lòng kiểm tra lại mã đơn hàng hoặc liên hệ tổng đài 1900 8899 để được hỗ trợ tra soát tức thì.', 'Please double-check the order ID or call our hotline 1900 8899 for instant assistance.')}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

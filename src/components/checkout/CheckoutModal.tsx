import React, { useState } from 'react';
import { CartItem, Order } from '../../types';
import {
  X,
  CheckCircle2,
  Truck,
  CreditCard,
  QrCode,
  ShieldCheck,
  ArrowRight,
  PackageCheck,
  ChevronRight,
  Copy,
  Clock
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderSuccess: (order: Order) => void;
  onOpenOrderTracking: (orderId: string) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderSuccess,
  onOpenOrderTracking,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'info' | 'payment' | 'success'>('info');

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [province, setProvince] = useState('Hà Nội');
  const [district, setDistrict] = useState('Đống Đa');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  // Payment method
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'vietqr' | 'credit' | 'installment'>('vietqr');
  const [createdOrder, setCreatedOrder] = useState<Order | null>(null);
  const [copiedBank, setCopiedBank] = useState(false);

  const totalAmount = items.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !address.trim()) return;
    setStep('payment');
  };

  const handleConfirmOrder = () => {
    const orderId = 'CLM-' + Math.floor(10000 + Math.random() * 90000);
    const newOrder: Order = {
      id: orderId,
      customerName: fullName,
      customerPhone: phone,
      customerAddress: `${address}, ${district}, ${province}`,
      items: [...items],
      totalAmount,
      paymentMethod,
      status: 'confirmed',
      createdAt: new Date().toLocaleDateString('vi-VN') + ' ' + new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      estimatedDelivery: 'Hôm nay (Trong vòng 2 giờ)',
      trackingTimeline: [
        {
          title: 'Đã đặt hàng thành công',
          time: 'Vừa xong',
          done: true,
          description: 'Hệ thống Chillami đã tiếp nhận đơn hàng của quý khách.',
        },
        {
          title: 'Đang chuẩn bị hàng tại kho',
          time: 'Dự kiến 30 phút tới',
          done: true,
          description: 'Kiểm tra tem bảo hành điện tử và đóng gói tiêu chuẩn.',
        },
        {
          title: 'Kỹ thuật viên đang vận chuyển',
          time: 'Dự kiến trong 2 giờ',
          done: false,
          description: 'Kỹ thuật viên mang theo dụng cụ và phụ kiện lắp đặt.',
        },
        {
          title: 'Lắp đặt & Bàn giao hoàn tất',
          time: 'Sau khi lắp đặt',
          done: false,
          description: 'Khách hàng nghiệm thu thiết bị và kích hoạt E-Warranty.',
        },
      ],
    };

    setCreatedOrder(newOrder);
    onOrderSuccess(newOrder);
    setStep('success');
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/60">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-slate-900">
              {step === 'info' && '1. Thông Tin Nhận Hàng & Lắp Đặt'}
              {step === 'payment' && '2. Chọn Hình Thức Thanh Toán'}
              {step === 'success' && 'Đặt Hàng Thành Công!'}
            </h3>
          </div>

          {step !== 'success' && (
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8">
          {/* STEP 1: INFO */}
          {step === 'info' && (
            <form onSubmit={handleProceedToPayment} className="space-y-6 text-xs">
              <div className="bg-teal-50 border border-teal-200 p-3.5 rounded-2xl flex items-center gap-2.5 text-teal-900">
                <Truck className="w-5 h-5 text-teal-700 shrink-0" />
                <span>
                  <strong>Chillami Express:</strong> Giao hàng & lắp đặt miễn phí tại nhà trong 2H tại nội thành!
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Họ và tên người nhận: *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Số điện thoại nhận hàng & kích hoạt E-Warranty: *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0912345678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  Email (nhận hóa đơn điện tử VAT):
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">Tỉnh / Thành phố: *</label>
                  <select
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden"
                  >
                    <option value="Hà Nội">Hà Nội</option>
                    <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                    <option value="Đà Nẵng">Đà Nẵng</option>
                    <option value="Hải Phòng">Hải Phòng</option>
                    <option value="Cần Thơ">Cần Thơ</option>
                    <option value="Tỉnh thành khác">Tỉnh thành khác</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">Quận / Huyện: *</label>
                  <input
                    type="text"
                    required
                    placeholder="Quận Đống Đa, Cầu Giấy..."
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  Địa chỉ số nhà, tên đường, tên tòa nhà: *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Số 168 Đường Láng, Chung cư..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  Ghi chú lắp đặt cho kỹ thuật viên:
                </label>
                <textarea
                  rows={2}
                  placeholder="VD: Cần lắp điều hòa phòng ngủ tầng 2, gọi trước 15 phút khi đến..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden"
                />
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-slate-500">Tổng thanh toán: </span>
                  <strong className="text-base font-extrabold text-teal-800">{formatPrice(totalAmount)}</strong>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Tiếp tục chọn thanh toán</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: PAYMENT */}
          {step === 'payment' && (
            <div className="space-y-6 text-xs">
              <div className="space-y-3">
                <label className="block font-bold text-slate-900 text-sm">
                  Phương thức thanh toán phù hợp với bạn:
                </label>

                {/* Option 1: VietQR */}
                <div
                  onClick={() => setPaymentMethod('vietqr')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                    paymentMethod === 'vietqr'
                      ? 'border-teal-700 bg-teal-50/70 ring-2 ring-teal-600/20'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="p-2 rounded-xl bg-white border border-slate-200 text-teal-700 shrink-0">
                    <QrCode className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-900 text-xs">
                        Chuyển Khoản Nhanh Qua Mã VietQR (Khuyên dùng)
                      </h4>
                      <span className="text-[10px] font-bold text-teal-700 bg-teal-100 px-2 py-0.5 rounded">
                        Tự động khớp lệnh 24/7
                      </span>
                    </div>
                    <p className="text-slate-500 mt-1">
                      Mở app ngân hàng bất kỳ (Vietcombank, MB Bank, Techcombank...) quét mã QR có sẵn số tiền & nội dung đơn hàng.
                    </p>

                    {paymentMethod === 'vietqr' && (
                      <div className="mt-4 p-4 bg-white rounded-xl border border-teal-200 flex flex-col sm:flex-row items-center gap-4">
                        <div className="w-32 h-32 bg-slate-900 p-2 rounded-xl flex items-center justify-center shrink-0 shadow-xs">
                          {/* Simulated SVG VietQR Code */}
                          <div className="w-full h-full bg-white p-1 rounded-lg flex flex-col items-center justify-center relative">
                            <QrCode className="w-24 h-24 text-slate-900" />
                            <span className="text-[8px] font-bold text-teal-700 mt-0.5">VIETQR PRO</span>
                          </div>
                        </div>

                        <div className="space-y-1.5 text-xs text-slate-700 flex-1 w-full">
                          <div className="flex justify-between">
                            <span>Ngân hàng:</span>
                            <strong className="text-slate-900">MB Bank (Quân Đội)</strong>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Số tài khoản:</span>
                            <div className="flex items-center gap-1 font-mono font-bold text-slate-900">
                              <span>8899 6688 0001</span>
                              <button
                                type="button"
                                onClick={() => copyToClipboard('889966880001')}
                                className="text-teal-700 hover:text-teal-900"
                              >
                                <Copy className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                          <div className="flex justify-between">
                            <span>Chủ tài khoản:</span>
                            <strong className="text-slate-900">CONG TY TNHH CHILLAMI VIET NAM</strong>
                          </div>
                          <div className="flex justify-between">
                            <span>Số tiền:</span>
                            <strong className="text-teal-800 text-sm">{formatPrice(totalAmount)}</strong>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Option 2: COD */}
                <div
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                    paymentMethod === 'cod'
                      ? 'border-teal-700 bg-teal-50/70 ring-2 ring-teal-600/20'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="p-2 rounded-xl bg-white border border-slate-200 text-teal-700 shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-900 text-xs">
                        Thanh Toán Khi Nhận Hàng (COD)
                      </h4>
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                        Được kiểm tra máy trước
                      </span>
                    </div>
                    <p className="text-slate-500 mt-1">
                      Kỹ thuật viên giao hàng tận nhà, quý khách kiểm tra máy chạy thử êm ái rồi mới thanh toán tiền mặt hoặc quẹt thẻ.
                    </p>
                  </div>
                </div>

                {/* Option 3: Credit Card / VNPAY */}
                <div
                  onClick={() => setPaymentMethod('credit')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                    paymentMethod === 'credit'
                      ? 'border-teal-700 bg-teal-50/70 ring-2 ring-teal-600/20'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="p-2 rounded-xl bg-white border border-slate-200 text-teal-700 shrink-0">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 text-xs">
                      Thẻ Tín Dụng / Ghi Nợ Quốc Tế (Visa, MasterCard, JCB)
                    </h4>
                    <p className="text-slate-500 mt-1">
                      Cổng thanh toán bảo mật 3D-Secure VNPAY, miễn phí phí giao dịch quẹt thẻ.
                    </p>
                  </div>
                </div>

                {/* Option 4: Installment 0% */}
                <div
                  onClick={() => setPaymentMethod('installment')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                    paymentMethod === 'installment'
                      ? 'border-teal-700 bg-teal-50/70 ring-2 ring-teal-600/20'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="p-2 rounded-xl bg-white border border-slate-200 text-teal-700 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-900 text-xs">
                        Trả Góp 0% Lãi Suất Qua Thẻ Tín Dụng
                      </h4>
                      <span className="text-[10px] font-bold text-indigo-800 bg-indigo-100 px-2 py-0.5 rounded">
                        Kỳ hạn 3, 6, 12 tháng
                      </span>
                    </div>
                    <p className="text-slate-500 mt-1">
                      Áp dụng cho đơn hàng từ 3.000.000 đ qua hơn 25 ngân hàng liên kết tại Việt Nam.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep('info')}
                  className="text-slate-500 hover:text-slate-800 font-semibold"
                >
                  Quay lại sửa địa chỉ
                </button>

                <button
                  type="button"
                  onClick={handleConfirmOrder}
                  className="px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Xác nhận hoàn tất đơn hàng</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: ORDER SUCCESS */}
          {step === 'success' && createdOrder && (
            <div className="text-center py-4 space-y-6 text-xs">
              <div className="w-16 h-16 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                  Đặt Hàng Thành Công!
                </h3>
                <p className="text-slate-500 mt-1">
                  Cảm ơn quý khách <strong>{createdOrder.customerName}</strong> đã tin chọn thiết bị gia dụng Chillami.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 max-w-lg mx-auto text-left space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <span className="text-slate-500">Mã đơn hàng:</span>
                  <strong className="text-base font-mono font-extrabold text-teal-800">{createdOrder.id}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Người nhận:</span>
                  <span className="font-semibold text-slate-800">{createdOrder.customerName} ({createdOrder.customerPhone})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Địa chỉ giao:</span>
                  <span className="font-medium text-slate-800 text-right truncate max-w-[240px]">{createdOrder.customerAddress}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Phương thức:</span>
                  <span className="uppercase font-bold text-teal-700">{createdOrder.paymentMethod}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                  <span className="font-bold text-slate-800">Tổng thanh toán:</span>
                  <strong className="text-base font-extrabold text-slate-900">{formatPrice(createdOrder.totalAmount)}</strong>
                </div>
              </div>

              <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl max-w-lg mx-auto flex items-center gap-3 text-left">
                <Clock className="w-6 h-6 text-teal-700 shrink-0" />
                <div className="text-xs text-teal-950">
                  <strong>Thời gian giao dự kiến:</strong> Hôm nay (trong 2 giờ tới). Kỹ thuật viên sẽ liên hệ xác nhận trước khi đến nhà lắp đặt.
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenOrderTracking(createdOrder.id);
                  }}
                  className="px-5 py-3 bg-teal-700 hover:bg-teal-800 text-white rounded-xl font-bold transition-all cursor-pointer flex items-center gap-2 shadow-xs"
                >
                  <PackageCheck className="w-4 h-4" />
                  <span>Tra cứu tiến độ đơn hàng ngay</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-semibold transition-all cursor-pointer"
                >
                  Tiếp tục mua sắm
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

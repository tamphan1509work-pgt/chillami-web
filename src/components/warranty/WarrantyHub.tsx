import React, { useState } from 'react';
import { INITIAL_WARRANTIES } from '../../data/faqs';
import { WarrantyRecord } from '../../types';
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  PhoneCall,
  User,
  Wrench,
  AlertCircle,
  Sparkles,
  QrCode
} from 'lucide-react';

interface WarrantyHubProps {
  onClose?: () => void;
}

export const WarrantyHub: React.FC<WarrantyHubProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'activate' | 'lookup' | 'book-repair' | 'policy'>('activate');
  const [warranties, setWarranties] = useState<WarrantyRecord[]>(INITIAL_WARRANTIES);

  // Activate Form State
  const [serialInput, setSerialInput] = useState('');
  const [productNameInput, setProductNameInput] = useState('Quạt Cây Chillami Flow-100 BLDC');
  const [modelInput, setModelInput] = useState('CF-100B');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [dealerName, setDealerName] = useState('Chillami Flagship Store Hà Nội');
  const [activateSuccess, setActivateSuccess] = useState<WarrantyRecord | null>(null);

  // Lookup State
  const [searchKey, setSearchKey] = useState('');
  const [lookupResult, setLookupResult] = useState<WarrantyRecord | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  // Booking State
  const [bookingDevice, setBookingDevice] = useState('Điều hòa Inverter Chillami');
  const [bookingType, setBookingType] = useState<'install' | 'maintenance' | 'repair'>('maintenance');
  const [bookingAddress, setBookingAddress] = useState('');
  const [bookingDate, setBookingDate] = useState('2026-10-20');
  const [bookingTime, setBookingTime] = useState('09:00 - 11:30');
  const [bookingNote, setBookingNote] = useState('');
  const [bookingSuccessCode, setBookingSuccessCode] = useState<string | null>(null);

  // Handler for activating
  const handleActivate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serialInput.trim() || !customerName.trim() || !customerPhone.trim()) return;

    const newRecord: WarrantyRecord = {
      serialNumber: serialInput.trim().toUpperCase(),
      productName: productNameInput,
      model: modelInput,
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      purchaseDate: new Date().toISOString().split('T')[0],
      warrantyExpiry: '2028-10-16', // 24 months
      status: 'active',
      dealerName,
    };

    setWarranties([newRecord, ...warranties]);
    setActivateSuccess(newRecord);
    setSerialInput('');
    setCustomerName('');
    setCustomerPhone('');
  };

  // Handler for lookup
  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    const key = searchKey.trim().toLowerCase();
    const found = warranties.find(
      (w) =>
        w.serialNumber.toLowerCase() === key ||
        w.customerPhone.toLowerCase() === key
    );
    setLookupResult(found || null);
  };

  // Handler for booking technician
  const handleBookTechnician = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'SRV-' + Math.floor(100000 + Math.random() * 900000);
    setBookingSuccessCode(code);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hub Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold mb-3">
            <ShieldCheck className="w-4 h-4 text-teal-700" />
            <span>Hệ thống Bảo Hành Điện Tử Chillami E-Warranty</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
            Trung Tâm Bảo Hành & Chăm Sóc Khách Hàng
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Không cần lưu giữ hóa đơn giấy hay tem cào. Mọi thông tin bảo hành được lưu trữ tự động trên đám mây.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-2 mb-8 shadow-xs flex flex-wrap gap-1 sm:gap-2 justify-center text-xs font-bold">
          <button
            onClick={() => setActiveTab('activate')}
            className={`px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'activate'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Kích hoạt bảo hành</span>
          </button>

          <button
            onClick={() => setActiveTab('lookup')}
            className={`px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'lookup'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Search className="w-4 h-4" />
            <span>Tra cứu thời hạn</span>
          </button>

          <button
            onClick={() => setActiveTab('book-repair')}
            className={`px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'book-repair'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Wrench className="w-4 h-4" />
            <span>Đặt lịch kỹ thuật tại nhà</span>
          </button>

          <button
            onClick={() => setActiveTab('policy')}
            className={`px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'policy'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Chính sách 1 đổi 1 & Hotline</span>
          </button>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs">
          {/* TAB 1: KÍCH HOẠT BẢO HÀNH */}
          {activeTab === 'activate' && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Kích Hoạt Bảo Hành Điện Tử (E-Warranty)
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Nhập mã Serial Number in trên tem bạc sau thân máy hoặc quét mã QR trên thùng sản phẩm.
                </p>
              </div>

              {activateSuccess && (
                <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 text-xs text-teal-900 space-y-2 animate-in fade-in">
                  <div className="flex items-center gap-2 font-bold text-sm text-teal-800">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                    <span>Kích hoạt bảo hành điện tử thành công!</span>
                  </div>
                  <div className="pl-7 space-y-1">
                    <div>Thiết bị: <strong>{activateSuccess.productName}</strong> ({activateSuccess.model})</div>
                    <div>Số Serial: <strong>{activateSuccess.serialNumber}</strong></div>
                    <div>Khách hàng: <strong>{activateSuccess.customerName}</strong> ({activateSuccess.customerPhone})</div>
                    <div>Hạn bảo hành đến: <strong>{activateSuccess.warrantyExpiry}</strong> (Chính hãng 24 tháng)</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleActivate} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Số Serial Number (S/N) trên máy: *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="VD: CLM-FAN-2026-8899 hoặc CLM-2026-..."
                      value={serialInput}
                      onChange={(e) => setSerialInput(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden uppercase font-mono font-semibold"
                    />
                    <QrCode className="w-5 h-5 text-slate-400 absolute right-3 top-2.5 pointer-events-none" />
                  </div>
                  <span className="text-[11px] text-slate-400">
                    * Gợi ý thử nghiệm: Nhập <strong>CLM-FAN-2026-9999</strong>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-800 mb-1">
                      Dòng sản phẩm: *
                    </label>
                    <select
                      value={productNameInput}
                      onChange={(e) => {
                        setProductNameInput(e.target.value);
                        if (e.target.value.includes('Quạt Cây')) setModelInput('CF-100B');
                        else if (e.target.value.includes('Điều Hòa')) setModelInput('CAC-09ECO');
                        else if (e.target.value.includes('Bếp Từ')) setModelInput('CIC-2200D');
                        else if (e.target.value.includes('Hút Mùi')) setModelInput('CHH-90T');
                        else setModelInput('CWH-20SQ');
                      }}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden"
                    >
                      <option value="Quạt Cây Chillami Flow-100 BLDC">Quạt Cây Chillami Flow-100 BLDC</option>
                      <option value="Điều Hòa Chillami Eco-Inverter 9000 BTU">Điều Hòa Chillami Eco-Inverter 9000 BTU</option>
                      <option value="Bếp Từ Đôi Chillami MasterChef Dual-IGBT">Bếp Từ Đôi Chillami MasterChef Dual-IGBT</option>
                      <option value="Máy Hút Mùi Chữ T Chillami AirPure T-90">Máy Hút Mùi Chữ T Chillami AirPure T-90</option>
                      <option value="Bình Nước Nóng Chillami Titanium-Shield 20L">Bình Nước Nóng Chillami Titanium-Shield 20L</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-800 mb-1">
                      Mã Model:
                    </label>
                    <input
                      type="text"
                      disabled
                      value={modelInput}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-600 font-bold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-800 mb-1">
                      Họ và tên khách hàng: *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-800 mb-1">
                      Số điện thoại nhận SMS xác nhận: *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0912345678"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Nơi mua hàng / Kênh phân phối:
                  </label>
                  <select
                    value={dealerName}
                    onChange={(e) => setDealerName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden"
                  >
                    <option value="Mua trực tiếp tại Website Chillami">Mua trực tiếp tại Website Chillami (D2C)</option>
                    <option value="Chillami Flagship Store Hà Nội">Chillami Flagship Store Hà Nội</option>
                    <option value="Chillami Flagship Store TP.HCM">Chillami Flagship Store TP.HCM</option>
                    <option value="Shopee Mall Chillami Official">Shopee Mall Chillami Official</option>
                    <option value="Đại lý Điện máy ủy quyền">Đại lý Điện máy ủy quyền tại địa phương</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-xl shadow-md transition-colors cursor-pointer text-xs flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Xác nhận kích hoạt E-Warranty ngay</span>
                </button>
              </form>
            </div>
          )}

          {/* TAB 2: TRA CỨU THỜI HẠN BẢO HÀNH */}
          {activeTab === 'lookup' && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Tra Cứu Thông Tin & Thời Hạn Bảo Hành
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Nhập số Serial thiết bị hoặc số điện thoại đăng ký khi mua hàng.
                </p>
              </div>

              <form onSubmit={handleLookup} className="flex gap-2">
                <input
                  type="text"
                  required
                  placeholder="Nhập Serial (VD: CLM-FAN-2026-8899) hoặc SĐT (VD: 0912345678)"
                  value={searchKey}
                  onChange={(e) => setSearchKey(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden text-xs"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>Tra cứu</span>
                </button>
              </form>

              {hasSearched && (
                <div>
                  {lookupResult ? (
                    <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 text-xs space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-teal-200/60">
                        <span className="font-extrabold text-teal-900 text-sm">
                          {lookupResult.productName}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[11px] border border-emerald-300">
                          ĐANG TRONG HẠN BẢO HÀNH
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-slate-700">
                        <div>Mã Model: <strong>{lookupResult.model}</strong></div>
                        <div>Số Serial: <strong className="font-mono">{lookupResult.serialNumber}</strong></div>
                        <div>Chủ sở hữu: <strong>{lookupResult.customerName}</strong></div>
                        <div>SĐT đăng ký: <strong>{lookupResult.customerPhone}</strong></div>
                        <div>Ngày kích hoạt: <strong>{lookupResult.purchaseDate}</strong></div>
                        <div>Hết hạn bảo hành: <strong className="text-teal-800">{lookupResult.warrantyExpiry}</strong></div>
                        <div className="col-span-2">Nơi mua: <strong>{lookupResult.dealerName}</strong></div>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-teal-200 text-slate-600 text-[11px]">
                        Quý khách được hưởng quyền lợi bảo hành tận nhà miễn phí. Nếu máy có sự cố, vui lòng nhấn tab "Đặt lịch kỹ thuật tại nhà" hoặc gọi hotline <strong>1900 8899</strong>.
                      </div>
                    </div>
                  ) : (
                    <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 text-center text-xs text-rose-800">
                      <AlertCircle className="w-8 h-8 text-rose-500 mx-auto mb-2" />
                      <div className="font-bold">Không tìm thấy thông tin bảo hành với từ khóa "{searchKey}"</div>
                      <div className="text-slate-500 mt-1">
                        Vui lòng kiểm tra lại số Serial hoặc số điện thoại đăng ký mua hàng.
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: ĐẶT LỊCH KỸ THUẬT TẠI NHÀ */}
          {activeTab === 'book-repair' && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Đặt Lịch Kỹ Thuật Viên Lắp Đặt & Bảo Dưỡng Tại Nhà
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Đội ngũ kỹ sư chính hãng Chillami sẽ liên hệ và có mặt đúng giờ theo lịch hẹn của bạn.
                </p>
              </div>

              {bookingSuccessCode ? (
                <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 text-xs text-teal-900 space-y-3 text-center">
                  <CheckCircle2 className="w-10 h-10 text-teal-600 mx-auto" />
                  <h4 className="text-base font-bold text-slate-900">
                    Đặt Lịch Hẹn Thành Công!
                  </h4>
                  <p>Mã tiếp nhận dịch vụ của quý khách là:</p>
                  <div className="text-xl font-mono font-extrabold text-teal-800 bg-white py-2 px-4 rounded-xl border border-teal-200 inline-block">
                    {bookingSuccessCode}
                  </div>
                  <p className="text-slate-600 max-w-md mx-auto">
                    Kỹ thuật viên khu vực sẽ gọi điện xác nhận trong vòng 15 phút trước khi đến theo lịch hẹn ngày <strong>{bookingDate}</strong> khung giờ <strong>{bookingTime}</strong>.
                  </p>
                  <button
                    onClick={() => setBookingSuccessCode(null)}
                    className="mt-2 px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-xl font-bold cursor-pointer"
                  >
                    Tạo phiếu đặt lịch khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookTechnician} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-800 mb-1">Loại dịch vụ yêu cầu: *</label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setBookingType('install')}
                        className={`p-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                          bookingType === 'install'
                            ? 'border-teal-700 bg-teal-50 text-teal-900'
                            : 'border-slate-200 bg-white text-slate-700'
                        }`}
                      >
                        Lắp đặt mới
                      </button>
                      <button
                        type="button"
                        onClick={() => setBookingType('maintenance')}
                        className={`p-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                          bookingType === 'maintenance'
                            ? 'border-teal-700 bg-teal-50 text-teal-900'
                            : 'border-slate-200 bg-white text-slate-700'
                        }`}
                      >
                        Bảo dưỡng định kỳ
                      </button>
                      <button
                        type="button"
                        onClick={() => setBookingType('repair')}
                        className={`p-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                          bookingType === 'repair'
                            ? 'border-teal-700 bg-teal-50 text-teal-900'
                            : 'border-slate-200 bg-white text-slate-700'
                        }`}
                      >
                        Sửa chữa / Kiểm tra
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-800 mb-1">Thiết bị cần phục vụ:</label>
                    <input
                      type="text"
                      required
                      value={bookingDevice}
                      onChange={(e) => setBookingDevice(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-800 mb-1">Địa chỉ phục vụ tại nhà: *</label>
                    <input
                      type="text"
                      required
                      placeholder="Số nhà, tên đường, Phường/Xã, Quận/Huyện, Tỉnh/Thành phố"
                      value={bookingAddress}
                      onChange={(e) => setBookingAddress(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-800 mb-1">Ngày mong muốn: *</label>
                      <input
                        type="date"
                        required
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-800 mb-1">Khung giờ: *</label>
                      <select
                        value={bookingTime}
                        onChange={(e) => setBookingTime(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden"
                      >
                        <option value="08:30 - 11:30 (Buổi sáng)">08:30 - 11:30 (Buổi sáng)</option>
                        <option value="14:00 - 17:00 (Buổi chiều)">14:00 - 17:00 (Buổi chiều)</option>
                        <option value="17:30 - 20:00 (Buổi tối sau giờ làm)">17:30 - 20:00 (Buổi tối sau giờ làm)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-800 mb-1">Mô tả hiện tượng / Ghi chú cho thợ:</label>
                    <textarea
                      rows={3}
                      placeholder="VD: Cần lắp điều hòa phòng ngủ tầng 3, đã có sẵn đường ống đồng..."
                      value={bookingNote}
                      onChange={(e) => setBookingNote(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-xl shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Xác nhận đặt lịch hẹn kỹ thuật</span>
                  </button>
                </form>
              )}
            </div>
          )}

          {/* TAB 4: CHÍNH SÁCH BẢO HÀNH */}
          {activeTab === 'policy' && (
            <div className="max-w-3xl mx-auto space-y-6 text-xs text-slate-700">
              <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200">
                <h4 className="font-extrabold text-sm text-teal-950 mb-2">
                  Cam Kết Hậu Mãi Vàng Của Chillami Việt Nam:
                </h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Chính sách 1 Đổi 1 trong 30 ngày:</strong> Đổi mới nguyên seal nếu phát sinh bất kỳ lỗi kỹ thuật nào từ nhà sản xuất.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Bảo hành Động cơ & Máy nén:</strong> Động cơ quạt BLDC bảo hành 2-3 năm; Máy nén Inverter điều hòa bảo hành 5 năm; Bình chứa bình nóng lạnh tráng men Titanium bảo hành 10 năm.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Kỹ thuật viên tại nhà:</strong> Cam kết hỗ trợ trong vòng 2 giờ đối với khu vực nội thành Hà Nội, TP.HCM và 24 giờ đối với các tỉnh lân cận.</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <h5 className="font-bold text-slate-900 mb-1">Tổng đài tiếp nhận bảo hành 24/7</h5>
                  <p className="text-slate-500 mb-2">Cuộc gọi miễn phí cho khách hàng toàn quốc:</p>
                  <div className="text-lg font-bold text-teal-700">1900 8899</div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <h5 className="font-bold text-slate-900 mb-1">Mạng lưới trạm kỹ thuật</h5>
                  <p className="text-slate-500 mb-2">Bao phủ 63 tỉnh thành phố toàn quốc:</p>
                  <div className="text-sm font-bold text-slate-800">128 Trung tâm ủy quyền</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

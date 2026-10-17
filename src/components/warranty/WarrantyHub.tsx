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
import { useLanguage } from '../../context/LanguageContext';

// Warranty records keep the Vietnamese product/dealer names they were registered with
const WARRANTY_TEXT_EN: Record<string, string> = {
  'Quạt Cây Chillami Flow-100 BLDC': 'Chillami Flow-100 BLDC Standing Fan',
  'Điều Hòa Chillami Eco-Inverter 9000 BTU': 'Chillami Eco-Inverter 9000 BTU Air Conditioner',
  'Bếp Từ Đôi Chillami MasterChef Dual-IGBT': 'Chillami MasterChef Dual-IGBT Double Induction Hob',
  'Máy Hút Mùi Chữ T Chillami AirPure T-90': 'Chillami AirPure T-90 T-Shape Range Hood',
  'Bình Nước Nóng Chillami Titanium-Shield 20L': 'Chillami Titanium-Shield 20L Water Heater',
  'Mua trực tiếp tại Website Chillami': 'Bought directly on the Chillami website',
  'Mua trực tiếp tại Website Chillami (D2C)': 'Bought directly on the Chillami website (D2C)',
  'Chillami Flagship Store Hà Nội': 'Chillami Flagship Store Hanoi',
  'Chillami Experience Center Cầu Giấy': 'Chillami Experience Center Cau Giay',
  'Chillami Flagship Store TP.HCM': 'Chillami Flagship Store HCMC',
  'Đại lý Điện máy ủy quyền': 'Local authorized electronics dealer',
  'Đại lý Điện máy ủy quyền tại địa phương': 'Local authorized electronics dealer',
};

interface WarrantyHubProps {
  onClose?: () => void;
}

export const WarrantyHub: React.FC<WarrantyHubProps> = ({ onClose }) => {
  const { l, language } = useLanguage();
  const wt = (text: string) => (language === 'en' ? WARRANTY_TEXT_EN[text] ?? text : text);
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
  const [bookingDevice, setBookingDevice] = useState(() => l('Điều hòa Inverter Chillami', 'Chillami Inverter air conditioner'));
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
            <span>{l('Hệ thống Bảo Hành Điện Tử Chillami E-Warranty', 'Chillami E-Warranty Electronic Warranty System')}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
            {l('Trung Tâm Bảo Hành & Chăm Sóc Khách Hàng', 'Warranty & Customer Care Center')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            {l('Không cần lưu giữ hóa đơn giấy hay tem cào. Mọi thông tin bảo hành được lưu trữ tự động trên đám mây.', 'No need to keep paper receipts or scratch cards. All warranty information is stored automatically in the cloud.')}
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
            <span>{l('Kích hoạt bảo hành', 'Activate warranty')}</span>
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
            <span>{l('Tra cứu thời hạn', 'Check warranty period')}</span>
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
            <span>{l('Đặt lịch kỹ thuật tại nhà', 'Book a home technician')}</span>
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
            <span>{l('Chính sách 1 đổi 1 & Hotline', '1-for-1 policy & Hotline')}</span>
          </button>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs">
          {/* TAB 1: KÍCH HOẠT BẢO HÀNH */}
          {activeTab === 'activate' && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {l('Kích Hoạt Bảo Hành Điện Tử (E-Warranty)', 'Activate Electronic Warranty (E-Warranty)')}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {l('Nhập mã Serial Number in trên tem bạc sau thân máy hoặc quét mã QR trên thùng sản phẩm.', 'Enter the serial number printed on the silver sticker on the back of the unit, or scan the QR code on the product box.')}
                </p>
              </div>

              {activateSuccess && (
                <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 text-xs text-teal-900 space-y-2 animate-in fade-in">
                  <div className="flex items-center gap-2 font-bold text-sm text-teal-800">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                    <span>{l('Kích hoạt bảo hành điện tử thành công!', 'E-warranty activated successfully!')}</span>
                  </div>
                  <div className="pl-7 space-y-1">
                    <div>{l('Thiết bị:', 'Appliance:')} <strong>{wt(activateSuccess.productName)}</strong> ({activateSuccess.model})</div>
                    <div>{l('Số Serial:', 'Serial number:')} <strong>{activateSuccess.serialNumber}</strong></div>
                    <div>{l('Khách hàng:', 'Customer:')} <strong>{activateSuccess.customerName}</strong> ({activateSuccess.customerPhone})</div>
                    <div>{l('Hạn bảo hành đến:', 'Warranty valid until:')} <strong>{activateSuccess.warrantyExpiry}</strong> {l('(Chính hãng 24 tháng)', '(24-month official warranty)')}</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleActivate} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    {l('Số Serial Number (S/N) trên máy: *', 'Serial number (S/N) on the unit: *')}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder={l('VD: CLM-FAN-2026-8899 hoặc CLM-2026-...', 'E.g. CLM-FAN-2026-8899 or CLM-2026-...')}
                      value={serialInput}
                      onChange={(e) => setSerialInput(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden uppercase font-mono font-semibold"
                    />
                    <QrCode className="w-5 h-5 text-slate-400 absolute right-3 top-2.5 pointer-events-none" />
                  </div>
                  <span className="text-[11px] text-slate-400">
                    {l('* Gợi ý thử nghiệm: Nhập', '* Demo tip: enter')} <strong>CLM-FAN-2026-9999</strong>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-800 mb-1">
                      {l('Dòng sản phẩm: *', 'Product line: *')}
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
                      <option value="Quạt Cây Chillami Flow-100 BLDC">{wt('Quạt Cây Chillami Flow-100 BLDC')}</option>
                      <option value="Điều Hòa Chillami Eco-Inverter 9000 BTU">{wt('Điều Hòa Chillami Eco-Inverter 9000 BTU')}</option>
                      <option value="Bếp Từ Đôi Chillami MasterChef Dual-IGBT">{wt('Bếp Từ Đôi Chillami MasterChef Dual-IGBT')}</option>
                      <option value="Máy Hút Mùi Chữ T Chillami AirPure T-90">{wt('Máy Hút Mùi Chữ T Chillami AirPure T-90')}</option>
                      <option value="Bình Nước Nóng Chillami Titanium-Shield 20L">{wt('Bình Nước Nóng Chillami Titanium-Shield 20L')}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-800 mb-1">
                      {l('Mã Model:', 'Model:')}
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
                      {l('Họ và tên khách hàng: *', 'Customer full name: *')}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={l('Nguyễn Văn A', 'John Smith')}
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-800 mb-1">
                      {l('Số điện thoại nhận SMS xác nhận: *', 'Phone number for SMS confirmation: *')}
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
                    {l('Nơi mua hàng / Kênh phân phối:', 'Place of purchase / Sales channel:')}
                  </label>
                  <select
                    value={dealerName}
                    onChange={(e) => setDealerName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden"
                  >
                    <option value="Mua trực tiếp tại Website Chillami">{wt('Mua trực tiếp tại Website Chillami (D2C)')}</option>
                    <option value="Chillami Flagship Store Hà Nội">{wt('Chillami Flagship Store Hà Nội')}</option>
                    <option value="Chillami Flagship Store TP.HCM">{wt('Chillami Flagship Store TP.HCM')}</option>
                    <option value="Shopee Mall Chillami Official">Shopee Mall Chillami Official</option>
                    <option value="Đại lý Điện máy ủy quyền">{wt('Đại lý Điện máy ủy quyền tại địa phương')}</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-xl shadow-md transition-colors cursor-pointer text-xs flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>{l('Xác nhận kích hoạt E-Warranty ngay', 'Confirm E-Warranty activation now')}</span>
                </button>
              </form>
            </div>
          )}

          {/* TAB 2: TRA CỨU THỜI HẠN BẢO HÀNH */}
          {activeTab === 'lookup' && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {l('Tra Cứu Thông Tin & Thời Hạn Bảo Hành', 'Warranty Information & Period Lookup')}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {l('Nhập số Serial thiết bị hoặc số điện thoại đăng ký khi mua hàng.', 'Enter the appliance serial number or the phone number registered at purchase.')}
                </p>
              </div>

              <form onSubmit={handleLookup} className="flex gap-2">
                <input
                  type="text"
                  required
                  placeholder={l('Nhập Serial (VD: CLM-FAN-2026-8899) hoặc SĐT (VD: 0912345678)', 'Enter serial (e.g. CLM-FAN-2026-8899) or phone (e.g. 0912345678)')}
                  value={searchKey}
                  onChange={(e) => setSearchKey(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden text-xs"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>{l('Tra cứu', 'Look up')}</span>
                </button>
              </form>

              {hasSearched && (
                <div>
                  {lookupResult ? (
                    <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 text-xs space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-teal-200/60">
                        <span className="font-extrabold text-teal-900 text-sm">
                          {wt(lookupResult.productName)}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[11px] border border-emerald-300">
                          {l('ĐANG TRONG HẠN BẢO HÀNH', 'UNDER WARRANTY')}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-slate-700">
                        <div>{l('Mã Model:', 'Model:')} <strong>{lookupResult.model}</strong></div>
                        <div>{l('Số Serial:', 'Serial number:')} <strong className="font-mono">{lookupResult.serialNumber}</strong></div>
                        <div>{l('Chủ sở hữu:', 'Owner:')} <strong>{lookupResult.customerName}</strong></div>
                        <div>{l('SĐT đăng ký:', 'Registered phone:')} <strong>{lookupResult.customerPhone}</strong></div>
                        <div>{l('Ngày kích hoạt:', 'Activation date:')} <strong>{lookupResult.purchaseDate}</strong></div>
                        <div>{l('Hết hạn bảo hành:', 'Warranty expires:')} <strong className="text-teal-800">{lookupResult.warrantyExpiry}</strong></div>
                        <div className="col-span-2">{l('Nơi mua:', 'Purchased at:')} <strong>{wt(lookupResult.dealerName)}</strong></div>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-teal-200 text-slate-600 text-[11px]">
                        {l('Quý khách được hưởng quyền lợi bảo hành tận nhà miễn phí. Nếu máy có sự cố, vui lòng nhấn tab "Đặt lịch kỹ thuật tại nhà" hoặc gọi hotline', 'You are entitled to free at-home warranty service. If the appliance has a problem, open the "Book a home technician" tab or call our hotline')} <strong>1900 8899</strong>.
                      </div>
                    </div>
                  ) : (
                    <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 text-center text-xs text-rose-800">
                      <AlertCircle className="w-8 h-8 text-rose-500 mx-auto mb-2" />
                      <div className="font-bold">{l('Không tìm thấy thông tin bảo hành với từ khóa', 'No warranty information found for')} "{searchKey}"</div>
                      <div className="text-slate-500 mt-1">
                        {l('Vui lòng kiểm tra lại số Serial hoặc số điện thoại đăng ký mua hàng.', 'Please double-check the serial number or the phone number registered at purchase.')}
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
                  {l('Đặt Lịch Kỹ Thuật Viên Lắp Đặt & Bảo Dưỡng Tại Nhà', 'Book a Technician for Home Installation & Maintenance')}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {l('Đội ngũ kỹ sư chính hãng Chillami sẽ liên hệ và có mặt đúng giờ theo lịch hẹn của bạn.', 'Chillami\'s official engineers will contact you and arrive on time for your appointment.')}
                </p>
              </div>

              {bookingSuccessCode ? (
                <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 text-xs text-teal-900 space-y-3 text-center">
                  <CheckCircle2 className="w-10 h-10 text-teal-600 mx-auto" />
                  <h4 className="text-base font-bold text-slate-900">
                    {l('Đặt Lịch Hẹn Thành Công!', 'Appointment Booked!')}
                  </h4>
                  <p>{l('Mã tiếp nhận dịch vụ của quý khách là:', 'Your service request code is:')}</p>
                  <div className="text-xl font-mono font-extrabold text-teal-800 bg-white py-2 px-4 rounded-xl border border-teal-200 inline-block">
                    {bookingSuccessCode}
                  </div>
                  <p className="text-slate-600 max-w-md mx-auto">
                    {l('Kỹ thuật viên khu vực sẽ gọi điện xác nhận trong vòng 15 phút trước khi đến theo lịch hẹn ngày', 'The local technician will call to confirm 15 minutes before arriving on')} <strong>{bookingDate}</strong> {l('khung giờ', 'between')} <strong>{bookingTime}</strong>.
                  </p>
                  <button
                    onClick={() => setBookingSuccessCode(null)}
                    className="mt-2 px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-xl font-bold cursor-pointer"
                  >
                    {l('Tạo phiếu đặt lịch khác', 'Book another appointment')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookTechnician} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-800 mb-1">{l('Loại dịch vụ yêu cầu: *', 'Requested service: *')}</label>
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
                        {l('Lắp đặt mới', 'New installation')}
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
                        {l('Bảo dưỡng định kỳ', 'Routine maintenance')}
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
                        {l('Sửa chữa / Kiểm tra', 'Repair / Inspection')}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-800 mb-1">{l('Thiết bị cần phục vụ:', 'Appliance to service:')}</label>
                    <input
                      type="text"
                      required
                      value={bookingDevice}
                      onChange={(e) => setBookingDevice(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-800 mb-1">{l('Địa chỉ phục vụ tại nhà: *', 'Service address: *')}</label>
                    <input
                      type="text"
                      required
                      placeholder={l('Số nhà, tên đường, Phường/Xã, Quận/Huyện, Tỉnh/Thành phố', 'House number, street, ward, district, province/city')}
                      value={bookingAddress}
                      onChange={(e) => setBookingAddress(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-800 mb-1">{l('Ngày mong muốn: *', 'Preferred date: *')}</label>
                      <input
                        type="date"
                        required
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-800 mb-1">{l('Khung giờ: *', 'Time slot: *')}</label>
                      <select
                        value={bookingTime}
                        onChange={(e) => setBookingTime(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden"
                      >
                        <option value={l('08:30 - 11:30 (Buổi sáng)', '08:30 - 11:30 (Morning)')}>{l('08:30 - 11:30 (Buổi sáng)', '08:30 - 11:30 (Morning)')}</option>
                        <option value={l('14:00 - 17:00 (Buổi chiều)', '14:00 - 17:00 (Afternoon)')}>{l('14:00 - 17:00 (Buổi chiều)', '14:00 - 17:00 (Afternoon)')}</option>
                        <option value={l('17:30 - 20:00 (Buổi tối sau giờ làm)', '17:30 - 20:00 (Evening after work)')}>{l('17:30 - 20:00 (Buổi tối sau giờ làm)', '17:30 - 20:00 (Evening after work)')}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-800 mb-1">{l('Mô tả hiện tượng / Ghi chú cho thợ:', 'Describe the issue / Notes for the technician:')}</label>
                    <textarea
                      rows={3}
                      placeholder={l('VD: Cần lắp điều hòa phòng ngủ tầng 3, đã có sẵn đường ống đồng...', 'E.g. Install the AC in the 3rd-floor bedroom, copper piping already in place...')}
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
                    <span>{l('Xác nhận đặt lịch hẹn kỹ thuật', 'Confirm technician appointment')}</span>
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
                  {l('Cam Kết Hậu Mãi Vàng Của Chillami Việt Nam:', 'Chillami Vietnam\'s Gold After-Sales Commitment:')}
                </h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>{l('Chính sách 1 Đổi 1 trong 30 ngày:', '30-day 1-for-1 replacement policy:')}</strong> {l('Đổi mới nguyên seal nếu phát sinh bất kỳ lỗi kỹ thuật nào từ nhà sản xuất.', 'A brand-new sealed replacement for any manufacturing defect.')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>{l('Bảo hành Động cơ & Máy nén:', 'Motor & compressor warranty:')}</strong> {l('Động cơ quạt BLDC bảo hành 2-3 năm; Máy nén Inverter điều hòa bảo hành 5 năm; Bình chứa bình nóng lạnh tráng men Titanium bảo hành 10 năm.', '2-3 years on BLDC fan motors; 5 years on Inverter AC compressors; 10 years on Titanium enamel water heater tanks.')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>{l('Kỹ thuật viên tại nhà:', 'At-home technicians:')}</strong> {l('Cam kết hỗ trợ trong vòng 2 giờ đối với khu vực nội thành Hà Nội, TP.HCM và 24 giờ đối với các tỉnh lân cận.', 'Support guaranteed within 2 hours in inner Hanoi and HCMC, and within 24 hours in neighboring provinces.')}</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <h5 className="font-bold text-slate-900 mb-1">{l('Tổng đài tiếp nhận bảo hành 24/7', '24/7 warranty hotline')}</h5>
                  <p className="text-slate-500 mb-2">{l('Cuộc gọi miễn phí cho khách hàng toàn quốc:', 'Toll-free for customers nationwide:')}</p>
                  <div className="text-lg font-bold text-teal-700">1900 8899</div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <h5 className="font-bold text-slate-900 mb-1">{l('Mạng lưới trạm kỹ thuật', 'Service station network')}</h5>
                  <p className="text-slate-500 mb-2">{l('Bao phủ 63 tỉnh thành phố toàn quốc:', 'Covering all 63 provinces and cities:')}</p>
                  <div className="text-sm font-bold text-slate-800">{l('128 Trung tâm ủy quyền', '128 authorized centers')}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

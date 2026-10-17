import React, { useState } from 'react';
import { X, Building2, Briefcase, CheckCircle2, PhoneCall, Mail, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const B2B_CATEGORY_EN: Record<string, string> = {
  'Quạt điện BLDC': 'BLDC electric fans',
  'Điều hòa Inverter': 'Inverter air conditioners',
  'Bếp từ đôi IGBT': 'IGBT double induction hobs',
  'Máy hút mùi cảm ứng': 'Touch-control range hoods',
  'Bình nước nóng Titanium': 'Titanium water heaters',
};

interface B2BModalProps {
  onClose: () => void;
}

export const B2BModal: React.FC<B2BModalProps> = ({ onClose }) => {
  const { l } = useLanguage();
  const [b2bType, setB2bType] = useState<'dealer' | 'project'>('dealer');
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [city, setCity] = useState('Hà Nội');
  const [interestCategories, setInterestCategories] = useState<string[]>(['Quạt điện BLDC', 'Điều hòa Inverter']);
  const [submitted, setSubmitted] = useState(false);

  const toggleCategory = (cat: string) => {
    if (interestCategories.includes(cat)) {
      setInterestCategories(interestCategories.filter((c) => c !== cat));
    } else {
      setInterestCategories([...interestCategories, cat]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-teal-100 text-teal-800 rounded-xl">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                {l('Hợp Tác Kinh Doanh & Khách Hàng Dự Án Chillami B2B', 'Chillami B2B Partnerships & Project Clients')}
              </h3>
              <p className="text-xs text-slate-500">
                {l('Chính sách chiết khấu hấp dẫn, hỗ trợ thiết kế showroom và bảo vệ quyền lợi khu vực', 'Attractive discounts, showroom design support and territory protection')}
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
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-xs text-slate-700">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {l('Tiếp Nhận Thông Tin Thành Công!', 'Request Received!')}
              </h3>
              <p className="text-slate-500 max-w-md mx-auto">
                {l('Giám đốc phụ trách kênh B2B của Chillami sẽ liên hệ lại với quý đối tác', 'Chillami\'s B2B channel director will contact')} <strong>{contactName}</strong> {l('trong vòng 4 giờ làm việc để gửi bảng giá chiết khấu đại lý.', 'within 4 business hours to send the dealer discount price list.')}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 bg-teal-700 hover:bg-teal-800 text-white rounded-xl font-bold transition-colors cursor-pointer"
              >
                {l('Đóng', 'Close')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Type Switcher */}
              <div>
                <label className="block font-bold text-slate-900 mb-2">
                  {l('Quý đối tác quan tâm đến hình thức hợp tác nào:', 'Which type of partnership are you interested in:')}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setB2bType('dealer')}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      b2bType === 'dealer'
                        ? 'border-teal-700 bg-teal-50/80 text-teal-900 shadow-xs'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-bold text-sm">{l('Trở Thành Đại Lý Cấp 1', 'Become a Tier-1 Dealer')}</div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      {l('Mở cửa hàng bán lẻ, siêu thị điện máy, chiết khấu lên tới 35%', 'Open a retail store or electronics outlet, with discounts of up to 35%')}
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setB2bType('project')}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      b2bType === 'project'
                        ? 'border-teal-700 bg-teal-50/80 text-teal-900 shadow-xs'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-bold text-sm">{l('Khách Hàng Dự Án Công Trình', 'Project & Construction Clients')}</div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      {l('Chủ đầu tư, tổng thầu cơ điện MEP, khách sạn, căn hộ cao cấp', 'Developers, MEP general contractors, hotels, premium apartments')}
                    </div>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    {l('Tên doanh nghiệp / Cửa hàng: *', 'Company / Store name: *')}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={l('Công ty CP Thiết Bị Điện...', 'ABC Electrical Equipment JSC...')}
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    {l('Họ và tên người liên hệ: *', 'Contact person full name: *')}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={l('Nguyễn Văn A', 'John Smith')}
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    {l('Số điện thoại liên hệ: *', 'Contact phone number: *')}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0987654321"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    {l('Tỉnh / Thành phố dự kiến triển khai: *', 'Province / City of operation: *')}
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Product interest checkboxes */}
              <div>
                <label className="block font-bold text-slate-800 mb-2">
                  {l('Ngành hàng quan tâm hợp tác:', 'Product lines of interest:')}
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Quạt điện BLDC', 'Điều hòa Inverter', 'Bếp từ đôi IGBT', 'Máy hút mùi cảm ứng', 'Bình nước nóng Titanium'].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => toggleCategory(cat)}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                        interestCategories.includes(cat)
                          ? 'border-teal-700 bg-teal-50 text-teal-900'
                          : 'border-slate-200 bg-white text-slate-600'
                      }`}
                    >
                      {interestCategories.includes(cat) ? '✓ ' : '+ '}
                      {l(cat, B2B_CATEGORY_EN[cat])}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-slate-400">
                  {l('Hotline dự án B2B:', 'B2B project hotline:')} <strong>0988 889 966</strong>
                </span>

                <button
                  type="submit"
                  className="px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>{l('Gửi yêu cầu hợp tác', 'Submit partnership request')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

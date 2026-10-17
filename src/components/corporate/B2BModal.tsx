import React, { useState } from 'react';
import { X, Building2, Briefcase, CheckCircle2, PhoneCall, Mail, ArrowRight } from 'lucide-react';

interface B2BModalProps {
  onClose: () => void;
}

export const B2BModal: React.FC<B2BModalProps> = ({ onClose }) => {
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
                Hợp Tác Kinh Doanh & Khách Hàng Dự Án Chillami B2B
              </h3>
              <p className="text-xs text-slate-500">
                Chính sách chiết khấu hấp dẫn, hỗ trợ thiết kế showroom và bảo vệ quyền lợi khu vực
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
                Tiếp Nhận Thông Tin Thành Công!
              </h3>
              <p className="text-slate-500 max-w-md mx-auto">
                Giám đốc phụ trách kênh B2B của Chillami sẽ liên hệ lại với quý đối tác <strong>{contactName}</strong> trong vòng 4 giờ làm việc để gửi bảng giá chiết khấu đại lý.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 bg-teal-700 hover:bg-teal-800 text-white rounded-xl font-bold transition-colors cursor-pointer"
              >
                Đóng
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Type Switcher */}
              <div>
                <label className="block font-bold text-slate-900 mb-2">
                  Quý đối tác quan tâm đến hình thức hợp tác nào:
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
                    <div className="font-bold text-sm">Trở Thành Đại Lý Cấp 1</div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      Mở cửa hàng bán lẻ, siêu thị điện máy, chiết khấu lên tới 35%
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
                    <div className="font-bold text-sm">Khách Hàng Dự Án Công Trình</div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      Chủ đầu tư, tổng thầu cơ điện MEP, khách sạn, căn hộ cao cấp
                    </div>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Tên doanh nghiệp / Cửa hàng: *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Công ty CP Thiết Bị Điện..."
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Họ và tên người liên hệ: *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Số điện thoại liên hệ: *
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
                    Tỉnh / Thành phố dự kiến triển khai: *
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
                  Ngành hàng quan tâm hợp tác:
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
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-slate-400">
                  Hotline dự án B2B: <strong>0988 889 966</strong>
                </span>

                <button
                  type="submit"
                  className="px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Gửi yêu cầu hợp tác</span>
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

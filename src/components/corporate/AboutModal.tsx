import React from 'react';
import { Logo } from '../common/Logo';
import { X, Award, Factory, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface AboutModalProps {
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/60">
          <div className="flex items-center gap-3">
            <Logo iconSize={28} />
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
              Câu Chuyện Thương Hiệu
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 text-xs text-slate-700 leading-relaxed">
          {/* Banner */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-900 text-white p-8">
            <div className="relative z-10 max-w-xl space-y-3">
              <span className="text-[11px] font-bold text-teal-400 uppercase tracking-wider">
                Sứ mệnh Chillami
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Kiến Tạo Không Gian Sống Tĩnh Lặng & Tiết Kiệm Năng Lượng
              </h2>
              <p className="text-slate-300 text-xs">
                Chillami ra đời từ khát vọng mang đến những thiết bị điện gia dụng thông minh thế hệ mới, loại bỏ tiếng ồn cơ học khó chịu và tối ưu hóa điện năng tiêu thụ cho hàng triệu gia đình Việt.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 opacity-15 w-64 h-64 pointer-events-none">
              <Logo variant="icon-only" iconSize={240} color="#2dd4bf" />
            </div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <Factory className="w-6 h-6 text-teal-700" />
              <h4 className="font-bold text-slate-900 text-sm">R&D & Tiêu Chuẩn Quốc Tế</h4>
              <p className="text-slate-500">
                Quy trình kiểm định độ bền nghiêm ngặt theo tiêu chuẩn ISO 9001:2015 và CE Conformity châu Âu.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <Award className="w-6 h-6 text-teal-700" />
              <h4 className="font-bold text-slate-900 text-sm">Nhiệt Đới Hóa Khí Hậu VN</h4>
              <p className="text-slate-500">
                Bo mạch chống ẩm chuyên dụng, dàn tản nhiệt mạ vàng chống ăn mòn muối biển tại các tỉnh ven biển Việt Nam.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <HeartHandshake className="w-6 h-6 text-teal-700" />
              <h4 className="font-bold text-slate-900 text-sm">Hậu Mãi 1 Đổi 1 Tại Nhà</h4>
              <p className="text-slate-500">
                Cam kết đổi mới nguyên seal trong 30 ngày và bảo hành động cơ lên tới 10 năm với hệ thống E-Warranty.
              </p>
            </div>
          </div>

          {/* Certification Showcase */}
          <div className="p-6 rounded-2xl bg-teal-50/60 border border-teal-200 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm">
              Chứng Nhận Chất Lượng & Bản Quyền Công Nghệ:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 bg-white rounded-xl border border-teal-100">
                <div className="font-extrabold text-teal-800">TCVN 7830</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Hiệu suất năng lượng Việt Nam</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-teal-100">
                <div className="font-extrabold text-teal-800">ISO 9001:2015</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Hệ thống quản lý chất lượng</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-teal-100">
                <div className="font-extrabold text-teal-800">CE European</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Tiêu chuẩn an toàn châu Âu</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-teal-100">
                <div className="font-extrabold text-teal-800">RoHS Certified</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Thân thiện môi trường sống</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { X, ShieldCheck, Truck, RotateCcw, CreditCard, Lock, FileText } from 'lucide-react';

interface PolicyModalProps {
  initialPolicyKey?: string;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  initialPolicyKey = 'delivery',
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialPolicyKey);

  const policies = {
    delivery: {
      title: 'Chính Sách Giao Hàng & Lắp Đặt Tiêu Chuẩn',
      icon: Truck,
      content: (
        <div className="space-y-4">
          <p>
            Nhằm mang lại trải nghiệm tiện nghi trọn vẹn nhất cho khách hàng, Chillami áp dụng chính sách <strong>Miễn phí toàn bộ công vận chuyển và lắp đặt tiêu chuẩn</strong> cho mọi đơn hàng thiết bị lớn (Điều hòa, Máy hút mùi, Bình nước nóng) tại Hà Nội, TP.HCM, Đà Nẵng, Hải Phòng và Cần Thơ.
          </p>
          <div className="p-4 bg-teal-50 rounded-2xl border border-teal-200">
            <h5 className="font-bold text-teal-900 mb-1">Thời gian cam kết giao hàng:</h5>
            <ul className="list-disc pl-5 space-y-1 text-teal-800">
              <li><strong>Nội thành (Hà Nội & TP.HCM):</strong> Giao & lắp trong vòng 2 – 4 giờ kể từ khi xác nhận đơn.</li>
              <li><strong>Khu vực ngoại thành & tỉnh lân cận:</strong> Giao trong vòng 24 giờ.</li>
              <li><strong>Toàn quốc:</strong> Giao từ 2 – 4 ngày làm việc qua đối tác vận chuyển hỏa tốc.</li>
            </ul>
          </div>
          <p>
            Kỹ thuật viên Chillami được trang bị đầy đủ dụng cụ chuyên dụng, thang nhôm và đồng hồ đo áp suất gas chuẩn xác, đồng thời hướng dẫn khách hàng sử dụng và kích hoạt bảo hành điện tử E-Warranty ngay tại nhà.
          </p>
        </div>
      ),
    },
    returns: {
      title: 'Chính Sách Đổi Trả 1 Đổi 1 Trong 30 Ngày',
      icon: RotateCcw,
      content: (
        <div className="space-y-4">
          <p>
            Chillami tự tin tuyệt đối vào chất lượng linh kiện và độ hoàn thiện của từng sản phẩm xuất xưởng. Vì vậy, chúng tôi cam kết chính sách đổi trả vượt trội:
          </p>
          <div className="p-4 bg-teal-50 rounded-2xl border border-teal-200 space-y-2">
            <h5 className="font-bold text-teal-900">Điều kiện áp dụng 1 đổi 1 trong 30 ngày:</h5>
            <ul className="list-disc pl-5 space-y-1 text-teal-800">
              <li>Sản phẩm phát sinh bất kỳ lỗi kỹ thuật nào từ nhà sản xuất trong vòng 30 ngày kể từ ngày kích hoạt hoặc nhận máy.</li>
              <li>Kỹ thuật viên Chillami sẽ đến tận nhà kiểm tra và đổi ngay máy mới nguyên seal tại chỗ mà không phát sinh thêm bất cứ chi phí nào.</li>
              <li>Hỗ trợ hoàn tiền 100% nếu sản phẩm không đúng với thông số công bố trên website.</li>
            </ul>
          </div>
        </div>
      ),
    },
    payment: {
      title: 'Phương Thức Thanh Toán Linh Hoạt & An Toàn',
      icon: CreditCard,
      content: (
        <div className="space-y-4">
          <p>Khách hàng có thể lựa chọn 4 hình thức thanh toán thuận tiện nhất:</p>
          <div className="space-y-3">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong>1. Thanh toán khi nhận hàng (COD):</strong> Khách hàng được quyền bóc thùng kiểm tra máy, cắm điện thử máy êm ái rồi mới thanh toán cho nhân viên giao hàng.
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong>2. Chuyển khoản VietQR tự động:</strong> Quét mã QR động hiển thị trên web, tiền vào tài khoản công ty và đơn hàng tự động chuyển trạng thái "Đã thanh toán" trong 3 giây.
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong>3. Thẻ tín dụng/ATM qua cổng VNPAY:</strong> Hỗ trợ thẻ nội địa và thẻ quốc tế Visa, MasterCard, JCB bảo mật chuẩn quốc tế PCI-DSS.
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong>4. Trả góp 0% lãi suất:</strong> Áp dụng qua thẻ tín dụng hơn 25 ngân hàng liên kết kỳ hạn 3, 6, 9, 12 tháng.
            </div>
          </div>
        </div>
      ),
    },
    privacy: {
      title: 'Chính Sách Bảo Mật Thông Tin Khách Hàng',
      icon: Lock,
      content: (
        <div className="space-y-4">
          <p>
            Chillami cam kết bảo vệ dữ liệu cá nhân của khách hàng theo đúng Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân.
          </p>
          <p>
            Thông tin số điện thoại, địa chỉ và mã serial máy chỉ được sử dụng cho mục đích: Giao nhận hàng hóa, Kích hoạt bảo hành điện tử E-Warranty và Nhắc lịch bảo dưỡng thiết bị định kỳ. Chúng tôi tuyệt đối không bán hoặc chia sẻ thông tin khách hàng cho bên thứ ba vì mục đích tiếp thị rác.
          </p>
        </div>
      ),
    },
    terms: {
      title: 'Điều Khoản Dịch Vụ & Pháp Lý',
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p>
            Website thương mại điện tử Chillami thuộc sở hữu và vận hành bởi Công ty TNHH Chillami Việt Nam. Mọi sản phẩm kinh doanh đều có chứng nhận hợp quy TCVN, tem năng lượng 5 sao do Bộ Công Thương cấp và hóa đơn giá trị gia tăng (VAT) đầy đủ.
          </p>
        </div>
      ),
    },
  };

  const currentPolicy = policies[activeTab as keyof typeof policies] || policies.delivery;
  const Icon = currentPolicy.icon;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-teal-100 text-teal-800 rounded-xl">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                {currentPolicy.title}
              </h3>
              <p className="text-xs text-slate-500">
                Chính sách minh bạch cam kết bảo vệ 100% quyền lợi người tiêu dùng Chillami
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

        {/* Tab switcher */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-slate-200 bg-slate-50 text-xs font-semibold overflow-x-auto">
          {Object.entries(policies).map(([key, val]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`pb-3 border-b-2 whitespace-nowrap transition-all cursor-pointer px-2 ${
                activeTab === key
                  ? 'border-teal-700 text-teal-800 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              {val.title.split(' ')[2] || val.title}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 text-xs text-slate-700 leading-relaxed">
          {currentPolicy.content}
        </div>
      </div>
    </div>
  );
};

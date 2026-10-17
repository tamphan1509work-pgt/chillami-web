import React, { useState } from 'react';
import { X, ShieldCheck, Truck, RotateCcw, CreditCard, Lock, FileText } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface PolicyModalProps {
  initialPolicyKey?: string;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  initialPolicyKey = 'delivery',
  onClose,
}) => {
  const { l } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>(initialPolicyKey);

  const policies = {
    delivery: {
      title: l('Chính Sách Giao Hàng & Lắp Đặt Tiêu Chuẩn', 'Standard Delivery & Installation Policy'),
      icon: Truck,
      content: (
        <div className="space-y-4">
          <p>
            {l('Nhằm mang lại trải nghiệm tiện nghi trọn vẹn nhất cho khách hàng, Chillami áp dụng chính sách', 'To give customers the most convenient experience, Chillami offers')} <strong>{l('Miễn phí toàn bộ công vận chuyển và lắp đặt tiêu chuẩn', 'completely free delivery and standard installation')}</strong> {l('cho mọi đơn hàng thiết bị lớn (Điều hòa, Máy hút mùi, Bình nước nóng) tại Hà Nội, TP.HCM, Đà Nẵng, Hải Phòng và Cần Thơ.', 'for all large appliance orders (air conditioners, range hoods, water heaters) in Hanoi, Ho Chi Minh City, Da Nang, Hai Phong and Can Tho.')}
          </p>
          <div className="p-4 bg-teal-50 rounded-2xl border border-teal-200">
            <h5 className="font-bold text-teal-900 mb-1">{l('Thời gian cam kết giao hàng:', 'Guaranteed delivery times:')}</h5>
            <ul className="list-disc pl-5 space-y-1 text-teal-800">
              <li><strong>{l('Nội thành (Hà Nội & TP.HCM):', 'Inner city (Hanoi & HCMC):')}</strong> {l('Giao & lắp trong vòng 2 – 4 giờ kể từ khi xác nhận đơn.', 'Delivery & installation within 2 – 4 hours of order confirmation.')}</li>
              <li><strong>{l('Khu vực ngoại thành & tỉnh lân cận:', 'Suburbs & neighboring provinces:')}</strong> {l('Giao trong vòng 24 giờ.', 'Delivery within 24 hours.')}</li>
              <li><strong>{l('Toàn quốc:', 'Nationwide:')}</strong> {l('Giao từ 2 – 4 ngày làm việc qua đối tác vận chuyển hỏa tốc.', 'Delivery in 2 – 4 business days via express shipping partners.')}</li>
            </ul>
          </div>
          <p>
            {l('Kỹ thuật viên Chillami được trang bị đầy đủ dụng cụ chuyên dụng, thang nhôm và đồng hồ đo áp suất gas chuẩn xác, đồng thời hướng dẫn khách hàng sử dụng và kích hoạt bảo hành điện tử E-Warranty ngay tại nhà.', 'Chillami technicians come fully equipped with specialized tools, aluminum ladders and precise gas pressure gauges, and show customers how to use the appliance and activate the E-Warranty right at home.')}
          </p>
        </div>
      ),
    },
    returns: {
      title: l('Chính Sách Đổi Trả 1 Đổi 1 Trong 30 Ngày', '30-Day 1-for-1 Return & Replacement Policy'),
      icon: RotateCcw,
      content: (
        <div className="space-y-4">
          <p>
            {l('Chillami tự tin tuyệt đối vào chất lượng linh kiện và độ hoàn thiện của từng sản phẩm xuất xưởng. Vì vậy, chúng tôi cam kết chính sách đổi trả vượt trội:', 'Chillami is fully confident in the component quality and finish of every product that leaves the factory. That\'s why we offer an outstanding return policy:')}
          </p>
          <div className="p-4 bg-teal-50 rounded-2xl border border-teal-200 space-y-2">
            <h5 className="font-bold text-teal-900">{l('Điều kiện áp dụng 1 đổi 1 trong 30 ngày:', '30-day 1-for-1 replacement conditions:')}</h5>
            <ul className="list-disc pl-5 space-y-1 text-teal-800">
              <li>{l('Sản phẩm phát sinh bất kỳ lỗi kỹ thuật nào từ nhà sản xuất trong vòng 30 ngày kể từ ngày kích hoạt hoặc nhận máy.', 'The product has any manufacturing defect within 30 days of activation or delivery.')}</li>
              <li>{l('Kỹ thuật viên Chillami sẽ đến tận nhà kiểm tra và đổi ngay máy mới nguyên seal tại chỗ mà không phát sinh thêm bất cứ chi phí nào.', 'A Chillami technician will come to your home, inspect it and replace it on the spot with a brand-new sealed unit at no extra cost.')}</li>
              <li>{l('Hỗ trợ hoàn tiền 100% nếu sản phẩm không đúng với thông số công bố trên website.', '100% refund if the product does not match the specifications published on the website.')}</li>
            </ul>
          </div>
        </div>
      ),
    },
    payment: {
      title: l('Phương Thức Thanh Toán Linh Hoạt & An Toàn', 'Flexible & Secure Payment Methods'),
      icon: CreditCard,
      content: (
        <div className="space-y-4">
          <p>{l('Khách hàng có thể lựa chọn 4 hình thức thanh toán thuận tiện nhất:', 'Customers can choose from 4 convenient payment methods:')}</p>
          <div className="space-y-3">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong>{l('1. Thanh toán khi nhận hàng (COD):', '1. Cash on delivery (COD):')}</strong> {l('Khách hàng được quyền bóc thùng kiểm tra máy, cắm điện thử máy êm ái rồi mới thanh toán cho nhân viên giao hàng.', 'You may unbox and inspect the appliance and test-run it before paying the delivery staff.')}
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong>{l('2. Chuyển khoản VietQR tự động:', '2. Automatic VietQR transfer:')}</strong> {l('Quét mã QR động hiển thị trên web, tiền vào tài khoản công ty và đơn hàng tự động chuyển trạng thái "Đã thanh toán" trong 3 giây.', 'Scan the dynamic QR code on the website; the payment reaches our company account and the order switches to "Paid" within 3 seconds.')}
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong>{l('3. Thẻ tín dụng/ATM qua cổng VNPAY:', '3. Credit/ATM cards via VNPAY:')}</strong> {l('Hỗ trợ thẻ nội địa và thẻ quốc tế Visa, MasterCard, JCB bảo mật chuẩn quốc tế PCI-DSS.', 'Supports domestic cards and international Visa, MasterCard and JCB cards with PCI-DSS security.')}
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong>{l('4. Trả góp 0% lãi suất:', '4. 0% interest installments:')}</strong> {l('Áp dụng qua thẻ tín dụng hơn 25 ngân hàng liên kết kỳ hạn 3, 6, 9, 12 tháng.', 'Available with credit cards from 25+ partner banks over 3, 6, 9 or 12 months.')}
            </div>
          </div>
        </div>
      ),
    },
    privacy: {
      title: l('Chính Sách Bảo Mật Thông Tin Khách Hàng', 'Customer Data Privacy Policy'),
      icon: Lock,
      content: (
        <div className="space-y-4">
          <p>
            {l('Chillami cam kết bảo vệ dữ liệu cá nhân của khách hàng theo đúng Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân.', 'Chillami protects customers\' personal data in full compliance with Decree 13/2023/ND-CP on personal data protection.')}
          </p>
          <p>
            {l('Thông tin số điện thoại, địa chỉ và mã serial máy chỉ được sử dụng cho mục đích: Giao nhận hàng hóa, Kích hoạt bảo hành điện tử E-Warranty và Nhắc lịch bảo dưỡng thiết bị định kỳ. Chúng tôi tuyệt đối không bán hoặc chia sẻ thông tin khách hàng cho bên thứ ba vì mục đích tiếp thị rác.', 'Your phone number, address and serial numbers are used only for delivery, E-Warranty activation and routine maintenance reminders. We never sell or share customer information with third parties for spam marketing.')}
          </p>
        </div>
      ),
    },
    terms: {
      title: l('Điều Khoản Dịch Vụ & Pháp Lý', 'Terms of Service & Legal'),
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p>
            {l('Website thương mại điện tử Chillami thuộc sở hữu và vận hành bởi Công ty TNHH Chillami Việt Nam. Mọi sản phẩm kinh doanh đều có chứng nhận hợp quy TCVN, tem năng lượng 5 sao do Bộ Công Thương cấp và hóa đơn giá trị gia tăng (VAT) đầy đủ.', 'The Chillami e-commerce website is owned and operated by Chillami Vietnam Co., Ltd. Every product sold carries TCVN conformity certification, a 5-star energy label issued by the Ministry of Industry and Trade and a full value-added tax (VAT) invoice.')}
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
                {l('Chính sách minh bạch cam kết bảo vệ 100% quyền lợi người tiêu dùng Chillami', 'Transparent policies that fully protect Chillami customers\' rights')}
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

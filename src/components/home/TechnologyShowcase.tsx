import React from 'react';
import { Wind, Cpu, ShieldCheck, Zap, Volume2, Flame, Droplets } from 'lucide-react';
import { ScrollFadeIn } from '../common/ScrollFadeIn';

export const TechnologyShowcase: React.FC = () => {
  const techs = [
    {
      icon: Wind,
      title: 'Động Cơ BLDC & SoftAir',
      subtitle: 'Siêu tĩnh lặng 13dB · Tiết kiệm 70% điện',
      description:
        'Sử dụng động cơ một chiều không chổi than 100% dây đồng nguyên chất và nam châm vĩnh cửu NdFeB. Tạo luồng gió mềm mại như gió tự nhiên ven hồ, không gây bạt hơi hay nhức đầu.',
      stats: '13 dB',
      statsLabel: 'Độ ồn thấp nhất',
      color: 'teal',
    },
    {
      icon: Zap,
      title: 'Full Inverter Eco & Coanda',
      subtitle: 'Kiểm soát nhiệt độ ±0.5°C · Chuẩn 5 sao',
      description:
        'Hệ thống biến tần kép điều khiển máy nén và quạt dàn lạnh thông minh. Luồng gió thổi trần Coanda làm mát dịu nhẹ, hạn chế tối đa nguy cơ viêm họng và khô da cho trẻ sơ sinh.',
      stats: '65%',
      statsLabel: 'Tiết kiệm điện năng',
      color: 'cyan',
    },
    {
      icon: Cpu,
      title: 'Mạch Công Suất IGBT Infineon (Đức)',
      subtitle: 'Sôi lăn tăn liên tục mức 1-3 không ngắt',
      description:
        'Ứng dụng chíp điều khiển công suất IGBT tiêu chuẩn công nghiệp CHLB Đức. Khắc phục triệt để hiện tượng ngắt quãng on/off của bếp từ giá rẻ, giúp các món ninh kho đậm đà chuẩn vị.',
      stats: '2400W',
      statsLabel: 'Booster từng vùng nấu',
      color: 'amber',
    },
    {
      icon: ShieldCheck,
      title: 'Men Titanium & An Toàn Kép TSS',
      subtitle: 'Bảo hành bình chứa 10 năm · Chống rò điện 0.01s',
      description:
        'Lớp men vi tinh thể nung ở 850°C bảo vệ bình nước nóng tuyệt đối trước nguồn nước phèn và cặn đá vôi. Rơ le ELCB điện tử ngắt cả 2 cực nguồn ngay khi phát hiện chênh lệch dòng rò 15mA.',
      stats: '10 Năm',
      statsLabel: 'Bảo hành bình chứa',
      color: 'emerald',
    },
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn direction="up" distance={20} duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Trái tim công nghệ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1 font-display">
              Nền Tảng Công Nghệ Đột Phá Của Chillami
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Chillami tập trung giải quyết 3 nỗi trăn trở lớn nhất của người tiêu dùng Việt: Tiếng ồn thiết bị, Chi phí tiền điện hàng tháng và Độ bền trong môi trường nhiệt đới gió mùa.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollFadeIn
                key={idx}
                direction="up"
                distance={24}
                delay={idx * 100}
                duration={650}
                className="h-full"
              >
                <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <div className="text-xs font-semibold text-teal-700 mb-2.5">
                      {item.subtitle}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-100 flex items-baseline justify-between">
                    <span className="text-xl font-extrabold text-slate-900 tracking-tight">
                      {item.stats}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {item.statsLabel}
                    </span>
                  </div>
                </div>
              </ScrollFadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

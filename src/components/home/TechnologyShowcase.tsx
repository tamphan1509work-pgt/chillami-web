import React from 'react';
import { Wind, Cpu, ShieldCheck, Zap, Volume2, Flame, Droplets } from 'lucide-react';
import { ScrollFadeIn } from '../common/ScrollFadeIn';
import { useLanguage } from '../../context/LanguageContext';

export const TechnologyShowcase: React.FC = () => {
  const { l } = useLanguage();
  const techs = [
    {
      icon: Wind,
      title: l('Động Cơ BLDC & SoftAir', 'BLDC Motor & SoftAir'),
      subtitle: l('Siêu tĩnh lặng 13dB · Tiết kiệm 70% điện', 'Ultra-quiet 13dB · 70% power savings'),
      description:
        l('Sử dụng động cơ một chiều không chổi than 100% dây đồng nguyên chất và nam châm vĩnh cửu NdFeB. Tạo luồng gió mềm mại như gió tự nhiên ven hồ, không gây bạt hơi hay nhức đầu.', 'Uses a brushless DC motor with 100% pure copper windings and NdFeB permanent magnets. Creates a soft airflow like a natural lakeside breeze, without wind blast or headaches.'),
      stats: '13 dB',
      statsLabel: l('Độ ồn thấp nhất', 'Lowest noise level'),
      color: 'teal',
    },
    {
      icon: Zap,
      title: 'Full Inverter Eco & Coanda',
      subtitle: l('Kiểm soát nhiệt độ ±0.5°C · Chuẩn 5 sao', '±0.5°C temperature control · 5-star rated'),
      description:
        l('Hệ thống biến tần kép điều khiển máy nén và quạt dàn lạnh thông minh. Luồng gió thổi trần Coanda làm mát dịu nhẹ, hạn chế tối đa nguy cơ viêm họng và khô da cho trẻ sơ sinh.', 'A dual inverter system smartly drives the compressor and indoor fan. Coanda ceiling airflow cools gently, minimizing the risk of sore throats and dry skin for newborns.'),
      stats: '65%',
      statsLabel: l('Tiết kiệm điện năng', 'Energy savings'),
      color: 'cyan',
    },
    {
      icon: Cpu,
      title: l('Mạch Công Suất IGBT Infineon (Đức)', 'Infineon IGBT Power Board (Germany)'),
      subtitle: l('Sôi lăn tăn liên tục mức 1-3 không ngắt', 'Continuous gentle simmer at levels 1-3 without cut-outs'),
      description:
        l('Ứng dụng chíp điều khiển công suất IGBT tiêu chuẩn công nghiệp CHLB Đức. Khắc phục triệt để hiện tượng ngắt quãng on/off của bếp từ giá rẻ, giúp các món ninh kho đậm đà chuẩn vị.', 'Uses German industrial-grade IGBT power control chips. Completely eliminates the on/off pulsing of cheap induction hobs, so slow-cooked stews come out rich and authentic.'),
      stats: '2400W',
      statsLabel: l('Booster từng vùng nấu', 'Booster per cooking zone'),
      color: 'amber',
    },
    {
      icon: ShieldCheck,
      title: l('Men Titanium & An Toàn Kép TSS', 'Titanium Enamel & TSS Dual Safety'),
      subtitle: l('Bảo hành bình chứa 10 năm · Chống rò điện 0.01s', '10-year tank warranty · 0.01s leakage cut-off'),
      description:
        l('Lớp men vi tinh thể nung ở 850°C bảo vệ bình nước nóng tuyệt đối trước nguồn nước phèn và cặn đá vôi. Rơ le ELCB điện tử ngắt cả 2 cực nguồn ngay khi phát hiện chênh lệch dòng rò 15mA.', 'Micro-crystal enamel fired at 850°C fully protects the heater against alum-rich water and limescale. The electronic ELCB relay cuts both power poles the moment it detects a 15mA leakage difference.'),
      stats: l('10 Năm', '10 Years'),
      statsLabel: l('Bảo hành bình chứa', 'Tank warranty'),
      color: 'emerald',
    },
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn direction="up" distance={20} duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              {l('Trái tim công nghệ', 'The heart of our technology')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1 font-display">
              {l('Nền Tảng Công Nghệ Đột Phá Của Chillami', 'Chillami\'s Breakthrough Technology Platform')}
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              {l('Chillami tập trung giải quyết 3 nỗi trăn trở lớn nhất của người tiêu dùng Việt: Tiếng ồn thiết bị, Chi phí tiền điện hàng tháng và Độ bền trong môi trường nhiệt đới gió mùa.', 'Chillami focuses on solving the three biggest concerns of Vietnamese consumers: appliance noise, monthly electricity bills and durability in a tropical monsoon climate.')}
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

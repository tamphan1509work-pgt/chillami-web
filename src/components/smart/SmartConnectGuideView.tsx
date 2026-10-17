import React, { useState } from 'react';
import {
  Smartphone,
  Wifi,
  QrCode,
  Download,
  Apple,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Sparkles,
  Zap,
  Sliders,
  Wind,
  Power,
  RotateCw,
  Moon,
  Volume2,
  Clock,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  RefreshCw,
  Check
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface SmartConnectGuideViewProps {
  onExploreSmartFans?: () => void;
}

export const SmartConnectGuideView: React.FC<SmartConnectGuideViewProps> = ({
  onExploreSmartFans,
}) => {
  const { l } = useLanguage();
  // Simulator State
  const [simulatorStep, setSimulatorStep] = useState<'idle' | 'scanning' | 'found' | 'connecting' | 'connected'>('idle');
  const [simPower, setSimPower] = useState(true);
  const [simSpeed, setSimSpeed] = useState(12);
  const [simOscillate, setSimOscillate] = useState(true);
  const [simMode, setSimMode] = useState<'normal' | 'softair' | 'sleep'>('softair');
  const [activeStepTab, setActiveStepTab] = useState<number>(1);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Download QR copied notice
  const [copiedLink, setCopiedLink] = useState(false);

  const handleStartSimulation = () => {
    setSimulatorStep('scanning');
    setTimeout(() => {
      setSimulatorStep('found');
    }, 1200);
  };

  const handlePairDevice = () => {
    setSimulatorStep('connecting');
    setTimeout(() => {
      setSimulatorStep('connected');
    }, 1500);
  };

  const handleResetSimulation = () => {
    setSimulatorStep('idle');
    setSimPower(true);
    setSimSpeed(12);
    setSimOscillate(true);
    setSimMode('softair');
  };

  const handleCopyAppUrl = () => {
    navigator.clipboard.writeText('https://chillami.vn/app/download');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const faqs = [
    {
      q: l('Tại sao quạt chỉ hỗ trợ mạng WiFi 2.4GHz mà không nhận 5GHz?', 'Why does the fan only support 2.4GHz WiFi and not 5GHz?'),
      a: l('Băng tần WiFi 2.4GHz có tầm phủ sóng xa gấp 3 lần và khả năng xuyên tường vượt trội so với 5GHz, đảm bảo quạt luôn giữ kết nối ổn định dù đặt ở bất kỳ góc nào trong nhà. Hầu hết các modem WiFi hiện nay đều phát song song cả 2 băng tần (Dual-band). Khi kết nối lần đầu, bạn chỉ cần chọn tên WiFi 2.4GHz của nhà mình.', 'The 2.4GHz band reaches 3 times farther and penetrates walls far better than 5GHz, so the fan stays reliably connected wherever it is in your home. Most routers today broadcast both bands at once (dual-band). When pairing for the first time, simply choose your home\'s 2.4GHz WiFi name.'),
    },
    {
      q: l('Làm thế nào để reset cài đặt WiFi khi đổi modem hoặc đổi mật khẩu nhà?', 'How do I reset the WiFi settings after changing my router or password?'),
      a: l('Trên thân quạt hoặc remote, nhấn và giữ nút nguồn/WiFi trong 5 - 7 giây cho đến khi quạt phát ra tiếng "Bíp" và đèn báo WiFi bắt đầu nhấp nháy nhanh. Lúc này quạt đã trở về trạng thái ghép nối ban đầu.', 'On the fan or remote, press and hold the Power/WiFi button for 5 - 7 seconds until the fan beeps and the WiFi light starts blinking rapidly. The fan is now back in its initial pairing mode.'),
    },
    {
      q: l('Tôi có thể điều khiển quạt khi không có ở nhà (dùng 4G/5G) được không?', 'Can I control the fan when I\'m away from home (over 4G/5G)?'),
      a: l('Hoàn toàn được! Ứng dụng Chillami Home kết nối qua máy chủ đám mây Cloud tốc độ cao. Dù bạn đang ở công ty hay đi du lịch, chỉ cần điện thoại có kết nối 4G/5G/WiFi là có thể bật quạt trước khi về nhà hoặc kiểm tra xem quạt ở nhà đã tắt chưa.', 'Absolutely! The Chillami Home app connects through high-speed cloud servers. Whether you\'re at work or traveling, as long as your phone has 4G/5G/WiFi you can switch the fan on before you get home or check whether it\'s been turned off.'),
    },
    {
      q: l('Quạt Chillami có tương thích với Google Home và Apple Siri không?', 'Are Chillami fans compatible with Google Home and Apple Siri?'),
      a: l('Có. Trong ứng dụng Chillami Home, vào mục "Cài đặt tài khoản" > "Liên kết bên thứ ba", bạn có thể liên kết nhanh với Google Assistant, Apple Siri Shortcuts hoặc Amazon Alexa để ra lệnh bằng giọng nói tiếng Việt dễ dàng.', 'Yes. In the Chillami Home app, go to "Account settings" > "Third-party links" to quickly link Google Assistant, Apple Siri Shortcuts or Amazon Alexa and control it easily by voice.'),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      {/* 1. HERO SECTION & APP DOWNLOAD BADGES */}
      <section className="bg-gradient-to-b from-slate-900 via-teal-950 to-slate-900 text-white pt-12 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Col: Hero Pitch */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold">
                <Wifi className="w-3.5 h-3.5 animate-pulse text-teal-300" />
                <span>{l('Hệ Sinh Thái Thông Minh Chillami Home v3.2', 'Chillami Home v3.2 Smart Ecosystem')}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white leading-tight">
                {l('Điều Khiển Ngôi Nhà Mát Lành', 'Control Your Cool, Comfortable Home')} <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-100">
                  {l('Chỉ Với Một Chạm Trên Điện Thoại', 'With a Single Tap on Your Phone')}
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {l('Ứng dụng', 'The')} <strong>Chillami Home</strong> {l('cho phép bạn tùy chỉnh 24 cấp độ gió, hẹn giờ thông minh, tự động điều hòa nhiệt độ theo thời tiết thực tế và điều khiển giọng nói qua Google Assistant, Siri, Alexa.', 'app lets you fine-tune 24 wind speeds, set smart timers, automatically adjust to real-time weather and use voice control via Google Assistant, Siri and Alexa.')}
              </p>

              {/* Download Buttons Badges */}
              <div className="pt-2 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  {/* iOS App Store */}
                  <a
                    href="#download-ios"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(l('Đang chuyển hướng đến Apple App Store để tải Chillami Home...', 'Redirecting to the Apple App Store to download Chillami Home...'));
                    }}
                    className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white text-slate-950 hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl cursor-pointer group"
                  >
                    <Apple className="w-7 h-7 text-slate-950 shrink-0" />
                    <div className="text-left">
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">{l('Tải trên', 'Download on the')}</div>
                      <div className="text-xs sm:text-sm font-bold tracking-tight">App Store</div>
                    </div>
                  </a>

                  {/* Google Play Store */}
                  <a
                    href="#download-android"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(l('Đang chuyển hướng đến Google Play Store để tải Chillami Home...', 'Redirecting to the Google Play Store to download Chillami Home...'));
                    }}
                    className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white text-slate-950 hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl cursor-pointer group"
                  >
                    <Smartphone className="w-7 h-7 text-teal-700 shrink-0" />
                    <div className="text-left">
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">{l('Khám phá trên', 'Get it on')}</div>
                      <div className="text-xs sm:text-sm font-bold tracking-tight">Google Play</div>
                    </div>
                  </a>

                  {/* Direct APK */}
                  <button
                    onClick={handleCopyAppUrl}
                    className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all text-xs font-semibold cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-teal-300" />
                    <span>{copiedLink ? l('✓ Đã sao chép link APK', '✓ APK link copied') : l('Tải file APK trực tiếp', 'Download APK directly')}</span>
                  </button>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    {l('Miễn phí 100%', '100% free')}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    {l('Hỗ trợ iOS 14.0+ & Android 8.0+', 'Supports iOS 14.0+ & Android 8.0+')}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    {l('Bảo mật đám mây 2 lớp', '2-layer cloud security')}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Col: Phone Mockup & QR Scan Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-teal-400 text-slate-950 flex items-center justify-center font-bold">
                      C
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{l('Quét Mã Tải Ứng Dụng', 'Scan to Download the App')}</div>
                      <div className="text-[10px] text-slate-300">{l('Tự động nhận diện hệ điều hành', 'Detects your operating system automatically')}</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-teal-300 bg-teal-500/20 px-2 py-0.5 rounded-full">
                    {l('Phiên bản 3.2.0', 'Version 3.2.0')}
                  </span>
                </div>

                {/* QR Code Graphic Frame */}
                <div className="p-4 rounded-2xl bg-white flex flex-col items-center justify-center text-center space-y-3">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <QrCode className="w-36 h-36 text-slate-900" />
                  </div>
                  <div className="text-xs text-slate-600 font-medium leading-tight">
                    {l('Mở', 'Open your')} <strong>{l('Camera điện thoại', 'phone camera')}</strong> {l('hoặc ứng dụng', 'or the')} <strong>Zalo</strong> {l('để quét mã tải ngay', 'app to scan and download now')}
                  </div>
                </div>

                <div className="text-[11px] text-slate-300 text-center leading-relaxed">
                  {l('Đã có hơn', 'More than')} <strong>50.000+</strong> {l('gia đình kết nối thiết bị Chillami thông minh trên toàn quốc.', 'families nationwide have connected Chillami smart appliances.')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STEP-BY-STEP ILLUSTRATED PAIRING GUIDE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 p-6 sm:p-10 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              {l('QUY TRÌNH KẾT NỐI ĐƠN GIẢN', 'SIMPLE PAIRING PROCESS')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
              {l('4 Bước Kết Nối Quạt Thông Minh Trong 60 Giây', 'Pair Your Smart Fan in 4 Steps Within 60 Seconds')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              {l('Công nghệ Bluetooth Mesh + WiFi 2.4GHz tự động nhận diện thiết bị nhanh chóng mà không cần cấu hình phức tạp.', 'Bluetooth Mesh + 2.4GHz WiFi detects devices quickly without complicated setup.')}
            </p>
          </div>

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-teal-500 transition-all space-y-3 relative group">
              <div className="w-10 h-10 rounded-xl bg-teal-700 text-white font-extrabold flex items-center justify-center text-sm shadow-md">
                1
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                {l('Bật Bluetooth & WiFi 2.4G', 'Turn on Bluetooth & 2.4G WiFi')}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {l('Đảm bảo điện thoại của bạn đang kết nối với mạng WiFi băng tần 2.4GHz tại gia đình và đã bật định vị Bluetooth.', 'Make sure your phone is connected to your home 2.4GHz WiFi network and Bluetooth/location is turned on.')}
              </p>
              <div className="text-[10px] font-semibold text-teal-700 bg-teal-50 p-2 rounded-lg">
                {l('💡 Mẹo: Tạm thời tắt 5GHz nếu router phát gộp 1 tên sóng.', '💡 Tip: Temporarily disable 5GHz if your router uses one name for both bands.')}
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-teal-500 transition-all space-y-3 relative group">
              <div className="w-10 h-10 rounded-xl bg-teal-700 text-white font-extrabold flex items-center justify-center text-sm shadow-md">
                2
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                {l('Nhấn Giữ Nút WiFi 5 Giây', 'Hold the WiFi Button for 5 Seconds')}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {l('Cắm nguồn quạt Chillami. Nhấn và giữ phím biểu tượng WiFi trên thân quạt trong 5 giây cho đến khi đèn LED nhấp nháy liên tục.', 'Plug in your Chillami fan. Press and hold the WiFi key on the fan for 5 seconds until the LED blinks continuously.')}
              </p>
              <div className="text-[10px] font-semibold text-teal-700 bg-teal-50 p-2 rounded-lg">
                {l('🔔 Quạt sẽ phát âm báo "Bíp" xác nhận vào chế độ Pairing.', '🔔 The fan beeps to confirm it has entered pairing mode.')}
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-teal-500 transition-all space-y-3 relative group">
              <div className="w-10 h-10 rounded-xl bg-teal-700 text-white font-extrabold flex items-center justify-center text-sm shadow-md">
                3
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                {l('Mở App & Thêm Thiết Bị', 'Open the App & Add Device')}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {l('Mở ứng dụng', 'Open the')} <strong>Chillami Home</strong>, {l('nhấn nút dấu "+" (Thêm thiết bị). App sẽ tự động phát hiện quạt qua Bluetooth và đồng bộ WiFi.', 'app and tap "+" (Add device). The app automatically finds the fan via Bluetooth and syncs WiFi.')}
              </p>
              <div className="text-[10px] font-semibold text-teal-700 bg-teal-50 p-2 rounded-lg">
                {l('⚡ Quá trình đồng bộ cấu hình chỉ mất khoảng 10 giây.', '⚡ Syncing the configuration takes only about 10 seconds.')}
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-teal-500 transition-all space-y-3 relative group">
              <div className="w-10 h-10 rounded-xl bg-teal-700 text-white font-extrabold flex items-center justify-center text-sm shadow-md">
                4
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                {l('Đặt Tên Phòng & Tận Hưởng', 'Name the Room & Enjoy')}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {l('Đặt tên cho quạt (Ví dụ: "Quạt Phòng Ngủ", "Quạt Bé Yêu"), liên kết với Google Assistant hoặc Siri để ra lệnh giọng nói tiện lợi.', 'Name your fan (e.g. "Bedroom Fan", "Baby\'s Fan") and link it with Google Assistant or Siri for convenient voice commands.')}
              </p>
              <div className="text-[10px] font-semibold text-teal-700 bg-teal-50 p-2 rounded-lg">
                {l('🎉 Hoàn tất! Quạt đã sẵn sàng điều khiển từ mọi nơi.', '🎉 Done! Your fan is ready to be controlled from anywhere.')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE DEVICE PAIRING SIMULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-700 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-300" />
                {l('Trình Mô Phỏng Tương Tác', 'Interactive Simulator')}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
                {l('Thử Nghiệm Ghép Nối Ảo & Điều Khiển Quạt Ngay Trên Màn Hình', 'Try Virtual Pairing & Fan Control Right on Screen')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                {l('Trải nghiệm giao diện điều khiển thực tế của ứng dụng Chillami Home mà không cần thiết bị thật.', 'Experience the real Chillami Home control interface without a physical device.')}
              </p>
            </div>

            {simulatorStep === 'connected' && (
              <button
                onClick={handleResetSimulation}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold border border-white/20 transition-all flex items-center gap-2 cursor-pointer w-fit"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>{l('Thử lại từ đầu', 'Start over')}</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Smartphone Simulator Frame */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-sm rounded-[40px] bg-slate-950 border-4 border-slate-700 p-4 shadow-2xl relative">
                {/* Speaker Notch */}
                <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-4" />

                {/* Smartphone Screen Content */}
                <div className="bg-slate-900 rounded-[28px] p-5 text-white min-h-[460px] flex flex-col justify-between border border-slate-800">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pb-3 border-b border-slate-800">
                    <span className="font-mono font-bold text-white">12:30</span>
                    <div className="flex items-center gap-2">
                      <Wifi className="w-3.5 h-3.5 text-teal-400" />
                      <span>100%</span>
                    </div>
                  </div>

                  {/* Stage 1: Idle - Start pairing */}
                  {simulatorStep === 'idle' && (
                    <div className="my-auto text-center space-y-4 py-6">
                      <div className="w-16 h-16 rounded-2xl bg-teal-500/20 border border-teal-400/40 text-teal-300 mx-auto flex items-center justify-center">
                        <Wifi className="w-8 h-8 animate-pulse" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-bold text-white">{l('Thêm Thiết Bị Mới', 'Add New Device')}</div>
                        <p className="text-xs text-slate-400">
                          {l('Bấm nút bên dưới để quét tìm quạt Chillami qua Bluetooth', 'Tap the button below to scan for Chillami fans via Bluetooth')}
                        </p>
                      </div>
                      <button
                        onClick={handleStartSimulation}
                        className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-xl text-xs shadow-lg transition-transform hover:scale-105 cursor-pointer w-full"
                      >
                        {l('Bắt đầu quét thiết bị', 'Start scanning')}
                      </button>
                    </div>
                  )}

                  {/* Stage 2: Scanning */}
                  {simulatorStep === 'scanning' && (
                    <div className="my-auto text-center space-y-4 py-8">
                      <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-teal-500/20 animate-ping" />
                        <div className="w-14 h-14 rounded-full bg-teal-500/40 border border-teal-400 flex items-center justify-center">
                          <Wifi className="w-6 h-6 text-teal-200" />
                        </div>
                      </div>
                      <div className="text-xs font-bold text-teal-300">{l('Đang tìm kiếm thiết bị xung quanh...', 'Searching for nearby devices...')}</div>
                      <div className="text-[11px] text-slate-400">Bluetooth BLE Scanning active</div>
                    </div>
                  )}

                  {/* Stage 3: Device Found */}
                  {simulatorStep === 'found' && (
                    <div className="my-auto space-y-4 py-4 animate-in fade-in">
                      <div className="text-xs font-bold text-emerald-400 text-center">
                        {l('✓ Đã tìm thấy 1 thiết bị Chillami!', '✓ Found 1 Chillami device!')}
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-800/90 border border-teal-500/50 space-y-3">
                        <div className="flex items-center gap-3">
                          <img
                            src="/images/muji_fan.jpg"
                            alt="Fan"
                            className="w-12 h-12 object-cover rounded-xl bg-slate-700"
                          />
                          <div>
                            <div className="text-xs font-bold text-white">Chillami Flow-100 BLDC</div>
                            <div className="text-[10px] text-slate-400 font-mono">MAC: 4A:2F:8C:99:E1</div>
                            <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">{l('Sóng WiFi: Tốt (-42 dBm)', 'WiFi signal: Good (-42 dBm)')}</div>
                          </div>
                        </div>

                        <button
                          onClick={handlePairDevice}
                          className="w-full py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-xl text-xs transition-colors cursor-pointer"
                        >
                          {l('Ghép nối thiết bị ngay', 'Pair device now')}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Stage 4: Connecting */}
                  {simulatorStep === 'connecting' && (
                    <div className="my-auto text-center space-y-4 py-8">
                      <div className="w-12 h-12 border-3 border-teal-400 border-t-transparent rounded-full animate-spin mx-auto" />
                      <div className="text-xs font-bold text-white">{l('Đang gửi cấu hình mạng WiFi...', 'Sending WiFi configuration...')}</div>
                      <div className="text-[11px] text-slate-400">{l('Đồng bộ mã hóa bảo mật đám mây', 'Syncing cloud security encryption')}</div>
                    </div>
                  )}

                  {/* Stage 5: Connected -> Virtual Remote Control */}
                  {simulatorStep === 'connected' && (
                    <div className="space-y-4 animate-in fade-in py-2">
                      {/* Device Header */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-white flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                            {l('Quạt Cây Phòng Ngủ Master', 'Master Bedroom Standing Fan')}
                          </div>
                          <div className="text-[10px] text-teal-300 font-medium">{l('Đang chạy · Động cơ BLDC êm 13dB', 'Running · Quiet 13dB BLDC motor')}</div>
                        </div>

                        <button
                          onClick={() => setSimPower(!simPower)}
                          className={`p-2.5 rounded-xl transition-all cursor-pointer ${
                            simPower ? 'bg-teal-500 text-slate-950 shadow-md' : 'bg-slate-800 text-slate-400'
                          }`}
                          title={l('Bật/Tắt nguồn quạt', 'Fan power on/off')}
                        >
                          <Power className="w-4 h-4 font-bold" />
                        </button>
                      </div>

                      {simPower ? (
                        <>
                          {/* Speed Gauge & Slider */}
                          <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-400 flex items-center gap-1">
                                <Wind className="w-3.5 h-3.5 text-teal-400" />
                                {l('Tốc độ gió:', 'Wind speed:')}
                              </span>
                              <strong className="text-teal-300 text-sm font-bold">
                                {l('Cấp', 'Level')} {simSpeed} / 24
                              </strong>
                            </div>

                            <input
                              type="range"
                              min="1"
                              max="24"
                              value={simSpeed}
                              onChange={(e) => setSimSpeed(Number(e.target.value))}
                              className="w-full accent-teal-400 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                            />

                            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                              <span>{l('1 (Gió thoảng)', '1 (Light breeze)')}</span>
                              <span>{l('12 (Gió mát)', '12 (Cool breeze)')}</span>
                              <span>24 (Turbo)</span>
                            </div>
                          </div>

                          {/* Wind Modes */}
                          <div className="grid grid-cols-3 gap-2">
                            <button
                              onClick={() => setSimMode('softair')}
                              className={`p-2 rounded-xl text-center text-[11px] font-semibold transition-all cursor-pointer ${
                                simMode === 'softair'
                                  ? 'bg-teal-500 text-slate-950 font-bold shadow-xs'
                                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                              }`}
                            >
                              {l('Gió Tự Nhiên', 'Natural Breeze')}
                            </button>
                            <button
                              onClick={() => setSimMode('sleep')}
                              className={`p-2 rounded-xl text-center text-[11px] font-semibold transition-all cursor-pointer ${
                                simMode === 'sleep'
                                  ? 'bg-teal-500 text-slate-950 font-bold shadow-xs'
                                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                              }`}
                            >
                              {l('Ngủ Đêm 13dB', '13dB Night Sleep')}
                            </button>
                            <button
                              onClick={() => setSimMode('normal')}
                              className={`p-2 rounded-xl text-center text-[11px] font-semibold transition-all cursor-pointer ${
                                simMode === 'normal'
                                  ? 'bg-teal-500 text-slate-950 font-bold shadow-xs'
                                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                              }`}
                            >
                              {l('Tiêu Chuẩn', 'Standard')}
                            </button>
                          </div>

                          {/* Quick Controls */}
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <button
                              onClick={() => setSimOscillate(!simOscillate)}
                              className={`p-2.5 rounded-xl border flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                                simOscillate
                                  ? 'border-teal-400 bg-teal-500/20 text-teal-200'
                                  : 'border-slate-700 bg-slate-800 text-slate-400'
                              }`}
                            >
                              <RotateCw className={`w-3.5 h-3.5 ${simOscillate ? 'animate-spin [animation-duration:4s]' : ''}`} />
                              <span>{simOscillate ? l('Quay 3D 120° (Bật)', '3D 120° oscillation (On)') : l('Đứng yên', 'Stationary')}</span>
                            </button>

                            <div className="p-2.5 rounded-xl border border-slate-700 bg-slate-800 text-slate-300 flex items-center justify-center gap-1.5 text-xs">
                              <Clock className="w-3.5 h-3.5 text-teal-400" />
                              <span>{l('Hẹn giờ 8H', '8H timer')}</span>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="py-12 text-center text-xs text-slate-500">
                          {l('Quạt đang tắt nguồn. Nhấn biểu tượng nguồn ở góc trên để bật quạt.', 'The fan is off. Tap the power icon at the top to turn it on.')}
                        </div>
                      )}
                    </div>
                  )}

                  {/* App Bottom Navigation */}
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-around text-[10px] text-slate-500">
                    <span className="text-teal-400 font-bold">{l('Trang chủ', 'Home')}</span>
                    <span>{l('Phòng ngủ', 'Bedroom')}</span>
                    <span>{l('Tự động hóa', 'Automation')}</span>
                    <span>{l('Tài khoản', 'Account')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Explanation of Smart Features */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  {l('Những Đặc Quyền Khi Sử Dụng Quạt Thông Minh Chillami', 'Perks of Using a Chillami Smart Fan')}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {l('Quạt thông minh Chillami được tích hợp vi xử lý 32-bit tốc độ cao và cảm biến vi khí hậu, giúp tự động tối ưu tốc độ gió theo nhiệt độ phòng thực tế mà không cần bạn phải thức giấc giữa đêm để chỉnh quạt.', 'Chillami smart fans have a fast 32-bit processor and microclimate sensors that automatically optimize wind speed to the actual room temperature, so you never have to wake up at night to adjust the fan.')}
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
                    <Moon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{l('Chế độ ngủ SleepAir tự động giảm tốc', 'SleepAir mode slows down automatically')}</div>
                    <div className="text-slate-300 text-xs mt-0.5 leading-relaxed">
                      {l('Nhiệt độ cơ thể giảm dần về sáng sớm; quạt sẽ tự động hạ cấp độ gió sau mỗi 2 giờ để bảo vệ cổ họng và giấc ngủ của trẻ nhỏ.', 'Body temperature drops toward early morning; the fan automatically lowers its speed every 2 hours to protect children\'s throats and sleep.')}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{l('Tự động hóa thông minh (Smart Scene)', 'Smart automation (Smart Scene)')}</div>
                    <div className="text-slate-300 text-xs mt-0.5 leading-relaxed">
                      {l('Cài đặt kịch bản: Tự động bật quạt khi bạn về đến nhà, hoặc tự tắt khi cả nhà rời đi để tiết kiệm điện tối đa.', 'Set up scenes: switch the fan on automatically when you get home, or off when everyone leaves, to save as much power as possible.')}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{l('Bảo mật dữ liệu đám mây chuẩn AES-128', 'AES-128 cloud data security')}</div>
                    <div className="text-slate-300 text-xs mt-0.5 leading-relaxed">
                      {l('Toàn bộ lệnh điều khiển được mã hóa đầu cuối, máy chủ đặt tại Việt Nam cho phản hồi cực nhanh dưới 0.1 giây.', 'All control commands are end-to-end encrypted, with servers in Vietnam for ultra-fast responses under 0.1 seconds.')}
                    </div>
                  </div>
                </div>
              </div>

              {onExploreSmartFans && (
                <div className="pt-2">
                  <button
                    onClick={onExploreSmartFans}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold rounded-xl text-xs transition-colors cursor-pointer"
                  >
                    <span>{l('Xem các mẫu quạt thông minh IoT WiFi', 'View IoT WiFi smart fan models')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-6">
        <div className="text-center space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
            {l('HỖ TRỢ KỸ THUẬT', 'TECHNICAL SUPPORT')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            {l('Giải Đáp Thắc Mắc Khi Kết Nối WiFi & App', 'WiFi & App Pairing FAQ')}
          </h2>
          <p className="text-xs text-slate-500">
            {l('Nếu gặp khó khăn trong quá trình ghép nối, vui lòng tham khảo các hướng dẫn sau hoặc liên hệ Hotline 1900 8899', 'If you have trouble pairing, see the guidance below or call our hotline 1900 8899')}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition-all"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-sm text-slate-900">{faq.q}</span>
                <ChevronRight
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                    activeFaq === idx ? 'rotate-90 text-teal-700' : ''
                  }`}
                />
              </button>

              {activeFaq === idx && (
                <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

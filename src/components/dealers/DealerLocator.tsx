import React, { useState } from 'react';
import { DEALERS, ONLINE_PARTNERS } from '../../data/dealers';
import { DEALER_TEXT_EN } from '../../data/dealers.en';
import { Dealer } from '../../types';
import {
  MapPin,
  PhoneCall,
  Clock,
  Car,
  Navigation,
  ExternalLink,
  Search,
  CheckCircle2,
  Store,
  Building2
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const DealerLocator: React.FC = () => {
  const { l, language } = useLanguage();
  const dt = (text: string) => (language === 'en' ? DEALER_TEXT_EN[text] ?? text : text);
  const [selectedProvince, setSelectedProvince] = useState<string>('all');
  const [activeDealer, setActiveDealer] = useState<Dealer>(DEALERS[0]);

  const provinces = ['all', 'Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ'];

  const filteredDealers = selectedProvince === 'all'
    ? DEALERS
    : DEALERS.filter((d) => d.province === selectedProvince);

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold mb-3">
            <MapPin className="w-4 h-4 text-teal-700" />
            <span>{l('Hệ thống mạng lưới phân phối toàn quốc', 'Nationwide distribution network')}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
            {l('Tìm Showroom & Nơi Mua Hàng Chillami', 'Find a Chillami Showroom & Store')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            {l('Trải nghiệm trực tiếp độ êm của quạt BLDC, luồng gió điều hòa thổi trần và nhận tư vấn chuyên sâu từ chuyên gia Chillami.', 'Experience the quietness of BLDC fans and ceiling-directed AC airflow in person, and get in-depth advice from Chillami experts.')}
          </p>
        </div>

        {/* Province Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
          {provinces.map((prov) => (
            <button
              key={prov}
              onClick={() => setSelectedProvince(prov)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedProvince === prov
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {prov === 'all' ? l('Tất cả khu vực', 'All regions') : dt(prov)}
            </button>
          ))}
        </div>

        {/* Two-Column Grid: Store List & Map View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          {/* Left Column: Stores List (5 cols) */}
          <div className="lg:col-span-5 space-y-4 max-h-[600px] overflow-y-auto pr-2">
            <div className="text-xs text-slate-500 font-semibold mb-2">
              {l('Tìm thấy', 'Found')} {filteredDealers.length} {l('địa điểm tại', 'locations in')} {selectedProvince === 'all' ? l('toàn quốc', 'all of Vietnam') : dt(selectedProvince)}:
            </div>

            {filteredDealers.map((dealer) => (
              <div
                key={dealer.id}
                onClick={() => setActiveDealer(dealer)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  activeDealer.id === dealer.id
                    ? 'bg-white border-teal-600 shadow-md ring-2 ring-teal-600/20'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">
                    {dt(dealer.type)}
                  </span>
                  {dealer.hasParking && (
                    <span className="text-[10px] text-slate-400 flex items-center gap-1">
                      <Car className="w-3 h-3 text-teal-600" />
                      {l('Có chỗ đỗ ô tô', 'Car parking')}
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  {dealer.name}
                </h3>

                <p className="text-xs text-slate-600 mb-3 flex items-start gap-1.5 leading-relaxed">
                  <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                  <span>{dealer.address}</span>
                </p>

                <div className="space-y-1 text-xs text-slate-500 border-t border-slate-100 pt-3">
                  <div className="flex items-center gap-2">
                    <PhoneCall className="w-3.5 h-3.5 text-teal-600" />
                    <span className="font-semibold text-slate-800">{dealer.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-teal-600" />
                    <span>{dt(dealer.openHours)}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-3 pt-2">
                  {dealer.badges.map((b, i) => (
                    <span key={i} className="text-[10px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                      {dt(b)}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Interactive Map Preview (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between">
            {/* Map Simulator Canvas */}
            <div className="relative w-full h-80 sm:h-96 bg-slate-100 flex items-center justify-center overflow-hidden">
              {/* Map background pattern */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#00828a_1px,transparent_1px)] [background-size:16px_16px]" />

              {/* Pin indicator */}
              <div className="relative z-10 flex flex-col items-center animate-bounce">
                <div className="p-3 bg-teal-700 text-white rounded-2xl shadow-xl flex items-center gap-2">
                  <Store className="w-5 h-5 text-teal-300" />
                  <span className="text-xs font-bold">{activeDealer.name}</span>
                </div>
                <div className="w-3 h-3 bg-teal-700 rotate-45 -mt-1.5" />
              </div>

              {/* Coordinates info tag */}
              <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-mono px-3 py-1 rounded-lg">
                GPS: {activeDealer.coordinates.lat.toFixed(4)}° N, {activeDealer.coordinates.lng.toFixed(4)}° E
              </div>
            </div>

            {/* Selected Store Details Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-[11px] font-bold text-teal-700 uppercase">
                  {l('Địa điểm đang chọn:', 'Selected location:')}
                </div>
                <div className="text-base font-extrabold text-slate-900 mt-0.5">
                  {activeDealer.name}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {activeDealer.address}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`tel:${activeDealer.phone.replace(/\s+/g, '')}`}
                  className="px-4 py-2.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-800 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-teal-700" />
                  <span>{l('Gọi Hotline', 'Call hotline')}</span>
                </a>

                <button
                  type="button"
                  onClick={() => alert(l(`Chỉ đường tới: ${activeDealer.address}`, `Directions to: ${activeDealer.address}`))}
                  className="px-4 py-2.5 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{l('Chỉ đường', 'Directions')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Online Channels: Shopee Mall, LazMall, TikTok Shop */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold text-teal-700 uppercase">{l('Mua sắm trực tuyến', 'Online shopping')}</span>
            <h2 className="text-xl font-bold text-slate-900 mt-0.5">
              {l('Gian Hàng Chính Hãng Trên Các Sàn Thương Mại Điện Tử', 'Official Stores on E-commerce Marketplaces')}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              {l('Cam kết 100% hàng mới chính hãng, hỗ trợ freeship extra và đầy đủ quyền lợi bảo hành điện tử.', '100% new genuine products guaranteed, extra free shipping and full e-warranty benefits.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ONLINE_PARTNERS.map((partner, idx) => (
              <a
                key={idx}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl border border-slate-200 hover:border-teal-500 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-md">
                      {dt(partner.badge)}
                    </span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-teal-700 transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {dt(partner.desc)}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-teal-700 flex items-center gap-1">
                  <span>{l('Ghé thăm gian hàng', 'Visit store')}</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

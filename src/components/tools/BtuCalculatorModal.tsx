import React, { useState, useMemo } from 'react';
import { Product } from '../../types';
import {
  X,
  Calculator,
  Sun,
  Users,
  Maximize2,
  CheckCircle2,
  Zap,
  ShoppingBag,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface BtuCalculatorModalProps {
  onClose: () => void;
  acProducts: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const BtuCalculatorModal: React.FC<BtuCalculatorModalProps> = ({
  onClose,
  acProducts,
  onSelectProduct,
  onAddToCart,
}) => {
  const [area, setArea] = useState<number>(14); // m2
  const [ceilingHeight, setCeilingHeight] = useState<number>(3.0); // meters
  const [roomType, setRoomType] = useState<'bedroom' | 'living' | 'kitchen'>('bedroom');
  const [sunExposure, setSunExposure] = useState<'normal' | 'west' | 'roof'>('normal');
  const [occupants, setOccupants] = useState<number>(2);

  // Calculation formula
  const calculatedResult = useMemo(() => {
    // Base BTU per m2
    let baseRate = 600; // standard bedroom
    if (roomType === 'living') baseRate = 700;
    if (roomType === 'kitchen') baseRate = 800;

    let btu = area * baseRate;

    // Ceiling height modifier
    if (ceilingHeight > 3.0) {
      btu = btu * (ceilingHeight / 3.0);
    }

    // Sun exposure modifier
    if (sunExposure === 'west') {
      btu = btu * 1.15; // +15% for hot afternoon sun
    } else if (sunExposure === 'roof') {
      btu = btu * 1.2; // +20% for top floor/attic
    }

    // Occupants modifier: +500 BTU per person beyond 2
    if (occupants > 2) {
      btu += (occupants - 2) * 500;
    }

    const roundedBtu = Math.round(btu / 500) * 500;

    // Recommended HP & Model
    let recommendedHp = '1.0 HP (9.000 BTU)';
    let recommendedCategory = 'dieu-hoa-9k';

    if (roundedBtu > 9500 && roundedBtu <= 14000) {
      recommendedHp = '1.5 HP (12.000 BTU)';
      recommendedCategory = 'dieu-hoa-12k';
    } else if (roundedBtu > 14000) {
      recommendedHp = '2.0 HP (18.000 BTU)';
      recommendedCategory = 'dieu-hoa-18k';
    }

    // Find best match in Chillami products
    let matchingProduct = acProducts.find((p) => {
      if (roundedBtu <= 9500) return p.model === 'CAC-09ECO' || p.model === 'CAC-09SLIM';
      return p.model === 'CAC-09ECO'; // default fallback
    }) || acProducts[0];

    return {
      rawBtu: Math.round(btu),
      recommendedBtu: roundedBtu,
      recommendedHp,
      matchingProduct,
      estimatedSavingYear: '1.450.000 đ',
    };
  }, [area, ceilingHeight, roomType, sunExposure, occupants, acProducts]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-teal-100 text-teal-800 rounded-xl">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Công Cụ Tính Công Suất Điều Hòa (BTU) Chuẩn Xác
              </h3>
              <p className="text-xs text-slate-500">
                Tối ưu hóa theo diện tích m², hướng nắng và đặc thù nhà ở tại Việt Nam
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
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Input Controls (7 cols) */}
            <div className="md:col-span-7 space-y-6">
              {/* 1. Diện tích phòng */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-900 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-teal-700" />
                    Diện tích sàn phòng:
                  </span>
                  <span className="text-sm font-extrabold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-lg border border-teal-200">
                    {area} m² ({Math.round(area * ceilingHeight)} m³)
                  </span>
                </div>
                <input
                  type="range"
                  min="8"
                  max="45"
                  step="1"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-700"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>8 m² (Phòng trọ/nhỏ)</span>
                  <span>20 m² (Chung cư vừa)</span>
                  <span>45 m² (Phòng khách rộng)</span>
                </div>
              </div>

              {/* 2. Chiều cao trần */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-900 mb-2">
                  <span>Chiều cao trần:</span>
                  <span className="text-xs font-bold text-slate-700">{ceilingHeight} mét</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[2.8, 3.2, 3.8].map((h) => (
                    <button
                      key={h}
                      type="button"
                      onClick={() => setCeilingHeight(h)}
                      className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                        ceilingHeight === h
                          ? 'border-teal-700 bg-teal-50 text-teal-900 shadow-xs'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {h} m {h === 2.8 ? '(Trần thấp)' : h === 3.2 ? '(Tiêu chuẩn)' : '(Trần cao/thông)'}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Loại không gian phòng */}
              <div>
                <label className="block text-xs font-bold text-slate-900 mb-2">
                  Loại không gian sử dụng:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setRoomType('bedroom')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all text-center cursor-pointer ${
                      roomType === 'bedroom'
                        ? 'border-teal-700 bg-teal-50 text-teal-900'
                        : 'border-slate-200 bg-white text-slate-700'
                    }`}
                  >
                    <div>Phòng ngủ</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Êm ái tĩnh lặng</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRoomType('living')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all text-center cursor-pointer ${
                      roomType === 'living'
                        ? 'border-teal-700 bg-teal-50 text-teal-900'
                        : 'border-slate-200 bg-white text-slate-700'
                    }`}
                  >
                    <div>Phòng khách</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Mở cửa nhiều</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRoomType('kitchen')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all text-center cursor-pointer ${
                      roomType === 'kitchen'
                        ? 'border-teal-700 bg-teal-50 text-teal-900'
                        : 'border-slate-200 bg-white text-slate-700'
                    }`}
                  >
                    <div>Bếp / Cửa hàng</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Tỏa nhiệt lớn</div>
                  </button>
                </div>
              </div>

              {/* 4. Hướng nắng & Môi trường */}
              <div>
                <label className="block text-xs font-bold text-slate-900 mb-2">
                  Mức độ tiếp xúc ánh nắng mặt trời:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSunExposure('normal')}
                    className={`p-2.5 rounded-xl border text-xs font-medium text-left transition-all cursor-pointer ${
                      sunExposure === 'normal'
                        ? 'border-teal-700 bg-teal-50 text-teal-900'
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    <div className="font-bold">Mát mẻ / Hướng Đông</div>
                    <div className="text-[10px] text-slate-500">Nắng nhẹ</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSunExposure('west')}
                    className={`p-2.5 rounded-xl border text-xs font-medium text-left transition-all cursor-pointer ${
                      sunExposure === 'west'
                        ? 'border-amber-600 bg-amber-50 text-amber-900'
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    <div className="font-bold text-amber-800">Hướng Tây / Cửa kính</div>
                    <div className="text-[10px] text-amber-600">Nắng chiều gay gắt</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSunExposure('roof')}
                    className={`p-2.5 rounded-xl border text-xs font-medium text-left transition-all cursor-pointer ${
                      sunExposure === 'roof'
                        ? 'border-rose-600 bg-rose-50 text-rose-900'
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    <div className="font-bold text-rose-800">Tầng áp mái / Tôn</div>
                    <div className="text-[10px] text-rose-600">Hấp thụ nhiệt cao</div>
                  </button>
                </div>
              </div>

              {/* 5. Số người thường xuyên sinh hoạt */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-900 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-teal-700" />
                    Số lượng người thường xuyên trong phòng:
                  </span>
                  <span className="text-xs font-bold text-slate-700">{occupants} người</span>
                </div>
                <div className="flex gap-2">
                  {[1, 2, 4, 6].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setOccupants(num)}
                      className={`flex-1 py-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                        occupants === num
                          ? 'border-teal-700 bg-teal-50 text-teal-900'
                          : 'border-slate-200 bg-white text-slate-700'
                      }`}
                    >
                      {num === 6 ? '6+ người' : `${num} người`}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Result & Matching Product Recommendation (5 cols) */}
            <div className="md:col-span-5 bg-gradient-to-b from-teal-900 to-slate-900 text-white rounded-3xl p-6 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-2 text-xs text-teal-300 font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4 text-teal-300" />
                  Kết quả phân tích nhiệt học
                </div>

                <div className="text-3xl font-extrabold tracking-tight text-white mb-1">
                  {calculatedResult.recommendedHp}
                </div>
                <div className="text-xs text-teal-200 mb-4">
                  Công suất tối ưu: ~<strong>{calculatedResult.recommendedBtu.toLocaleString()} BTU/h</strong>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-2 mb-6 text-xs text-slate-200">
                  <div className="flex items-center justify-between">
                    <span>Thể tích phòng:</span>
                    <strong className="text-white">{Math.round(area * ceilingHeight)} m³</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Tỷ lệ tiết kiệm điện:</span>
                    <strong className="text-teal-300">Eco-Inverter 65%</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Tiết kiệm tiền điện/năm:</span>
                    <strong className="text-amber-300">{calculatedResult.estimatedSavingYear}</strong>
                  </div>
                </div>

                {/* Matching Product Card */}
                {calculatedResult.matchingProduct && (
                  <div className="bg-white text-slate-900 rounded-2xl p-4 shadow-lg space-y-3">
                    <span className="text-[10px] font-bold text-teal-700 uppercase tracking-wide">
                      Model Chillami được đề xuất:
                    </span>
                    <div className="flex gap-3 items-center">
                      <img
                        src={calculatedResult.matchingProduct.image}
                        alt={calculatedResult.matchingProduct.name}
                        className="w-16 h-16 rounded-xl object-cover bg-slate-100 shrink-0"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
                          {calculatedResult.matchingProduct.name}
                        </h4>
                        <div className="text-xs text-slate-500">
                          {calculatedResult.matchingProduct.model} · 5 sao năng lượng
                        </div>
                        <div className="text-sm font-extrabold text-teal-700 mt-1">
                          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                            calculatedResult.matchingProduct.price
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-1">
                      <button
                        onClick={() => {
                          onAddToCart(calculatedResult.matchingProduct);
                          onClose();
                        }}
                        className="flex-1 py-2 px-3 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Đặt mua ngay</span>
                      </button>
                      <button
                        onClick={() => {
                          onSelectProduct(calculatedResult.matchingProduct);
                          onClose();
                        }}
                        className="py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                      >
                        Chi tiết
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="text-[11px] text-teal-200/80 pt-4 border-t border-white/10 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Bao trọn gói ống đồng tiêu chuẩn và công lắp đặt chính hãng</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

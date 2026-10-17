import React from 'react';
import { CATEGORIES_CONFIG } from '../../data/products';
import { ArrowUpRight } from 'lucide-react';
import { ScrollFadeIn } from '../common/ScrollFadeIn';
import { useLanguage } from '../../context/LanguageContext';

interface CategoryGridProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  const { l, translateCategory } = useLanguage();
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn direction="up" distance={20} duration={600}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-1">
                {l('Hệ sinh thái thiết bị điện gia dụng', 'Home appliance ecosystem')}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                {l('Danh Mục Sản Phẩm Chillami', 'Chillami Product Categories')}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              {l('Mỗi thiết bị đều được nghiên cứu và nhiệt đới hóa hoàn hảo cho khí hậu nóng ẩm tại Việt Nam.', 'Every appliance is engineered and fully tropicalized for Vietnam\'s hot and humid climate.')}
            </p>
          </div>
        </ScrollFadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {CATEGORIES_CONFIG.map(translateCategory).map((cat, idx) => (
            <ScrollFadeIn
              key={cat.id}
              direction="up"
              distance={24}
              delay={idx * 60}
              duration={600}
              className="h-full"
            >
              <div
                onClick={() => onSelectCategory(cat.id)}
                className="group relative bg-slate-50 hover:bg-white rounded-2xl p-3 border border-slate-200/80 hover:border-teal-500/50 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 ease-out cursor-pointer flex flex-col justify-between will-change-transform h-full"
              >
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-white mb-3">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {cat.name}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                    {cat.subtitle}
                  </p>
                  <div className="text-[10px] font-semibold text-teal-700 mt-2">
                    {cat.count} {l('sản phẩm', 'products')}
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};


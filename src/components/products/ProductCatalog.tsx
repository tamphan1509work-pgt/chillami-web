import React, { useState, useMemo } from 'react';
import { Product } from '../../types';
import { ProductCard } from './ProductCard';
import { CATEGORIES_CONFIG } from '../../data/products';
import {
  SlidersHorizontal,
  X,
  Check,
  ChevronDown,
  Sparkles,
  Search,
  Filter,
  CheckCircle2,
  RefreshCw,
  Zap,
  Volume2
} from 'lucide-react';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { useLanguage } from '../../context/LanguageContext';

interface ProductCatalogProps {
  products: Product[];
  initialCategory?: string;
  initialSubCategory?: string;
  onOpenDetail: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  comparedProductIds: string[];
  onOpenBtuCalc: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  initialCategory,
  initialSubCategory,
  onOpenDetail,
  onAddToCart,
  onToggleCompare,
  comparedProductIds,
  onOpenBtuCalc,
}) => {
  const { l, translateCategory } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [newOnly, setNewOnly] = useState(false);
  const [promotionOnly, setPromotionOnly] = useState(false);
  const [priceRange, setPriceRange] = useState<string>('all'); // 'all', '<2m', '2-5m', '5-10m', '>10m'
  const [selectedTech, setSelectedTech] = useState<string>('all'); // 'bldc', 'inverter', 'igbt', 'titanium', 'iot'
  const [sortBy, setSortBy] = useState<string>('popular'); // 'popular', 'discount', 'price-asc', 'price-desc', 'rating'
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);

  // Smooth category select
  const handleCategorySelect = (catId: string) => {
    setIsFiltering(true);
    setSelectedCategory(catId);
    setTimeout(() => setIsFiltering(false), 200);
  };

  // Sync when initialCategory changes externally
  React.useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  // Filtering logic
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }
      // In Stock
      if (inStockOnly && !p.inStock) {
        return false;
      }
      // New Only
      if (newOnly && !p.isNew) {
        return false;
      }
      // Promotion Only
      if (promotionOnly && !p.isPromotion && !(p.discountPercent && p.discountPercent > 0)) {
        return false;
      }
      // Price range
      if (priceRange === '<2m' && p.price >= 2000000) return false;
      if (priceRange === '2-5m' && (p.price < 2000000 || p.price > 5000000)) return false;
      if (priceRange === '5-10m' && (p.price < 5000000 || p.price > 10000000)) return false;
      if (priceRange === '>10m' && p.price <= 10000000) return false;

      // Technology filter
      if (selectedTech === 'bldc' && !p.features.some((f) => /bldc|không chổi than|brushless/i.test(f))) return false;
      if (selectedTech === 'inverter' && !p.name.toLowerCase().includes('inverter') && !p.features.some((f) => f.toLowerCase().includes('inverter'))) return false;
      if (selectedTech === 'igbt' && !p.tagline.toLowerCase().includes('igbt') && !p.name.toLowerCase().includes('igbt')) return false;
      if (selectedTech === 'titanium' && !p.tagline.toLowerCase().includes('titanium') && !p.name.toLowerCase().includes('titanium')) return false;
      if (selectedTech === 'iot' && !p.tagline.toLowerCase().includes('wifi') && !p.name.toLowerCase().includes('iot')) return false;

      // Search keyword
      if (searchKeyword.trim()) {
        const query = searchKeyword.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesModel = p.model.toLowerCase().includes(query);
        const matchesTagline = p.tagline.toLowerCase().includes(query);
        if (!matchesName && !matchesModel && !matchesTagline) return false;
      }

      return true;
    });
  }, [products, selectedCategory, inStockOnly, newOnly, promotionOnly, priceRange, selectedTech, searchKeyword]);

  // Sorting logic
  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (sortBy === 'popular') return (b.reviewsCount || 0) - (a.reviewsCount || 0);
      if (sortBy === 'discount') return (b.discountPercent || 0) - (a.discountPercent || 0);
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [filteredProducts, sortBy]);

  const resetAllFilters = () => {
    setSelectedCategory('all');
    setInStockOnly(false);
    setNewOnly(false);
    setPromotionOnly(false);
    setPriceRange('all');
    setSelectedTech('all');
    setSortBy('popular');
    setSearchKeyword('');
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    inStockOnly ||
    newOnly ||
    promotionOnly ||
    priceRange !== 'all' ||
    selectedTech !== 'all' ||
    Boolean(searchKeyword.trim());

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title & Hub Banner */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 mb-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">
                <span>{l('Trang Hub Sản Phẩm Chính Hãng', 'Official Product Hub')}</span>
                <span className="text-slate-300">·</span>
                <span>{l('Bảo Hành 1 Đổi 1 Tại Nhà', '1-for-1 Home Replacement Warranty')}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                {l('Tất Cả Thiết Bị Điện Gia Dụng Chillami', 'All Chillami Home Appliances')}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-2xl leading-relaxed">
                {l('Được thiết kế tối giản chuẩn phong cách Scandinavian hiện đại, vận hành bền bỉ với công nghệ Inverter và BLDC siêu êm 13dB.', 'Minimalist modern Scandinavian design with durable operation powered by Inverter and ultra-quiet 13dB BLDC technology.')}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={onOpenBtuCalc}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-bold border border-teal-200 transition-colors cursor-pointer"
              >
                <Zap className="w-4 h-4 text-teal-600" />
                <span>{l('Công cụ tính BTU Điều Hòa', 'AC BTU calculator')}</span>
              </button>
            </div>
          </div>

          {/* Category Tabs (Segmented controls as allowed by Constitution) */}
          <div className="flex items-center gap-2 overflow-x-auto pt-6 mt-6 border-t border-slate-100 pb-1 scrollbar-none">
            <button
              onClick={() => handleCategorySelect('all')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {l('Tất cả', 'All')} ({products.length})
            </button>
            {CATEGORIES_CONFIG.map(translateCategory).map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* ADVANCED FILTER BAR - MATCHING SAMPLE IN USER PROMPT */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 mb-8 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Left Criteria: Sẵn hàng, Hàng mới, Khuyến mãi, Xem theo giá */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-bold text-slate-900 flex items-center gap-1.5 mr-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-teal-700" />
                {l('Chọn theo tiêu chí:', 'Filter by:')}
              </span>

              {/* Sẵn hàng toggle */}
              <button
                onClick={() => setInStockOnly(!inStockOnly)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  inStockOnly
                    ? 'bg-teal-50 border-teal-600 text-teal-800'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                <div
                  className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${
                    inStockOnly ? 'bg-teal-700 border-teal-700 text-white' : 'border-slate-300'
                  }`}
                >
                  {inStockOnly && <Check className="w-2.5 h-2.5" />}
                </div>
                <span>{l('Sẵn hàng', 'In stock')}</span>
              </button>

              {/* Hàng mới về toggle */}
              <button
                onClick={() => setNewOnly(!newOnly)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  newOnly
                    ? 'bg-indigo-50 border-indigo-600 text-indigo-800'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                <div
                  className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${
                    newOnly ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-300'
                  }`}
                >
                  {newOnly && <Check className="w-2.5 h-2.5" />}
                </div>
                <span>{l('Hàng mới về', 'New arrivals')}</span>
              </button>

              {/* Khuyến mãi HOT */}
              <button
                onClick={() => setPromotionOnly(!promotionOnly)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  promotionOnly
                    ? 'bg-rose-50 border-rose-600 text-rose-800'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                <div
                  className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${
                    promotionOnly ? 'bg-rose-600 border-rose-600 text-white' : 'border-slate-300'
                  }`}
                >
                  {promotionOnly && <Check className="w-2.5 h-2.5" />}
                </div>
                <span>{l('Khuyến mãi HOT', 'HOT deals')}</span>
              </button>

              {/* Price filter dropdown */}
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-700 focus:outline-hidden focus:border-teal-500 cursor-pointer"
              >
                <option value="all">{l('Xem theo giá (Tất cả)', 'Price range (All)')}</option>
                <option value="<2m">{l('Dưới 2 triệu', 'Under 2 million VND')}</option>
                <option value="2-5m">{l('Từ 2 - 5 triệu', '2 - 5 million VND')}</option>
                <option value="5-10m">{l('Từ 5 - 10 triệu', '5 - 10 million VND')}</option>
                <option value=">10m">{l('Trên 10 triệu', 'Over 10 million VND')}</option>
              </select>

              {/* Technology filter dropdown */}
              <select
                value={selectedTech}
                onChange={(e) => setSelectedTech(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-700 focus:outline-hidden focus:border-teal-500 cursor-pointer"
              >
                <option value="all">{l('Công nghệ & Động cơ (Tất cả)', 'Technology & Motor (All)')}</option>
                <option value="bldc">{l('Động cơ BLDC không chổi than', 'Brushless BLDC motor')}</option>
                <option value="inverter">{l('Biến tần Inverter Eco', 'Eco Inverter')}</option>
                <option value="igbt">{l('Mạch công suất kép IGBT Đức', 'German dual IGBT power board')}</option>
                <option value="titanium">{l('Men Titanium 10 năm', '10-year Titanium enamel')}</option>
                <option value="iot">{l('Kết nối App & WiFi IoT', 'App & WiFi IoT connectivity')}</option>
              </select>
            </div>

            {/* Right: Sắp xếp theo (Phổ biến · Khuyến mãi HOT · Giá Thấp – Cao · Giá Cao – Thấp) */}
            <div className="flex items-center gap-2 text-xs ml-auto">
              <span className="text-slate-500 font-medium">{l('Sắp xếp theo:', 'Sort by:')}</span>
              <div className="flex items-center bg-slate-100 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setSortBy('popular')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    sortBy === 'popular' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {l('Phổ biến', 'Popular')}
                </button>
                <button
                  type="button"
                  onClick={() => setSortBy('discount')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    sortBy === 'discount' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {l('Khuyến mãi', 'Deals')}
                </button>
                <button
                  type="button"
                  onClick={() => setSortBy('price-asc')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    sortBy === 'price-asc' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {l('Giá Thấp - Cao', 'Price: Low - High')}
                </button>
                <button
                  type="button"
                  onClick={() => setSortBy('price-desc')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    sortBy === 'price-desc' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {l('Giá Cao - Thấp', 'Price: High - Low')}
                </button>
              </div>
            </div>
          </div>

          {/* Active filter summary & reset */}
          {hasActiveFilters && (
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-2 flex-wrap">
                <span>{l('Đang hiển thị', 'Showing')} <strong>{sortedProducts.length}</strong> {l('sản phẩm phù hợp:', 'matching products:')}</span>
                {selectedCategory !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-teal-50 text-teal-800 text-[11px] font-medium">
                    {l('Danh mục:', 'Category:')} {CATEGORIES_CONFIG.map(translateCategory).find((c) => c.id === selectedCategory)?.name}
                  </span>
                )}
                {priceRange !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium">
                    {l('Mức giá:', 'Price:')} {priceRange}
                  </span>
                )}
                {selectedTech !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium">
                    {l('Công nghệ:', 'Technology:')} {selectedTech.toUpperCase()}
                  </span>
                )}
              </div>

              <button
                onClick={resetAllFilters}
                className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 hover:text-rose-700 hover:underline cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>{l('Xóa bộ lọc', 'Clear filters')}</span>
              </button>
            </div>
          )}
        </div>

        {/* PRODUCTS GRID */}
        {isFiltering ? (
          <div className="bg-white rounded-3xl border border-slate-200/80 p-20 text-center flex items-center justify-center">
            <LoadingSpinner message={l('Đang lọc danh sách thiết bị Chillami...', 'Filtering Chillami appliances...')} size="md" />
          </div>
        ) : sortedProducts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
            <Filter className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-900">{l('Không tìm thấy sản phẩm nào', 'No products found')}</h3>
            <p className="text-xs text-slate-500 mt-1">
              {l('Vui lòng thử bỏ bớt bộ lọc hoặc chọn mức giá khác để xem các thiết bị Chillami.', 'Try removing some filters or choosing a different price range to see Chillami appliances.')}
            </p>
            <button
              onClick={resetAllFilters}
              className="mt-4 px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs font-semibold transition-colors"
            >
              {l('Xóa toàn bộ bộ lọc', 'Clear all filters')}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetail={onOpenDetail}
                onAddToCart={onAddToCart}
                onToggleCompare={onToggleCompare}
                isCompared={comparedProductIds.includes(product.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

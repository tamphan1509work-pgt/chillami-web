import React, { useState, useEffect } from 'react';
import { PRODUCTS } from './data/products';
import { Product, CartItem, Order } from './types';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroBanner } from './components/home/HeroBanner';
import { CategoryGrid } from './components/home/CategoryGrid';
import { TechnologyShowcase } from './components/home/TechnologyShowcase';
import { RoomSolutionsSection } from './components/home/RoomSolutionsSection';
import { ProductCard } from './components/products/ProductCard';
import { ProductCatalog } from './components/products/ProductCatalog';
import { ProductDetailModal } from './components/products/ProductDetailModal';
import { ProductComparisonModal } from './components/products/ProductComparisonModal';
import { BtuCalculatorModal } from './components/tools/BtuCalculatorModal';
import { WarrantyHub } from './components/warranty/WarrantyHub';
import { DealerLocator } from './components/dealers/DealerLocator';
import { CartDrawer } from './components/cart/CartDrawer';
import { CheckoutModal } from './components/checkout/CheckoutModal';
import { OrderTrackingModal } from './components/orders/OrderTrackingModal';
import { BenchmarkModal } from './components/benchmark/BenchmarkModal';
import { AboutModal } from './components/corporate/AboutModal';
import { B2BModal } from './components/corporate/B2BModal';
import { PolicyModal } from './components/policies/PolicyModal';
import { PromotionsView } from './components/promotions/PromotionsView';
import { FaqsView } from './components/faqs/FaqsView';
import { CookieConsentBanner } from './components/common/CookieConsentBanner';
import { LoadingSpinner } from './components/common/LoadingSpinner';
import { ScrollFadeIn } from './components/common/ScrollFadeIn';
import { FloatingContactWidget } from './components/common/FloatingContactWidget';
import { AiChatbotModal } from './components/common/AiChatbotModal';
import { SmartConnectGuideView } from './components/smart/SmartConnectGuideView';
import { PromotionalBanner } from './components/promotions/PromotionalBanner';
import { GitCompare, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

export default function App() {
  const { l, language, translateProducts, translateProduct } = useLanguage();
  const products = React.useMemo(() => translateProducts(PRODUCTS), [language]);

  // Navigation View State
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedCatalogCategory, setSelectedCatalogCategory] = useState<string>('all');
  const [selectedCatalogSubCategory, setSelectedCatalogSubCategory] = useState<string>('');
  const [isViewTransitioning, setIsViewTransitioning] = useState<boolean>(false);
  const [transitionMessage, setTransitionMessage] = useState<string>('');

  // Cart State with LocalStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('chillami_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('chillami_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  // Comparison State
  const [comparedProductIds, setComparedProductIds] = useState<string[]>([]);

  // Orders State
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 'CLM-89241',
      customerName: 'Hoàng Minh Đức',
      customerPhone: '0988665544',
      customerAddress: 'Số 168 Đường Láng, Q. Đống Đa, Hà Nội',
      items: [
        {
          product: PRODUCTS[0],
          quantity: 1,
          unitPrice: PRODUCTS[0].price,
        },
      ],
      totalAmount: PRODUCTS[0].price,
      paymentMethod: 'vietqr',
      status: 'confirmed',
      createdAt: '16/10/2026 14:30',
      estimatedDelivery: 'Hôm nay (Trong vòng 2 giờ)',
      trackingTimeline: [
        {
          title: 'Đã đặt hàng thành công',
          time: '14:30',
          done: true,
          description: 'Hệ thống đã nhận thanh toán qua VietQR.',
        },
        {
          title: 'Kho xuất hàng & Kiểm định',
          time: '14:45',
          done: true,
          description: 'Kiểm tra động cơ BLDC và dán tem kích hoạt bảo hành điện tử.',
        },
        {
          title: 'Kỹ thuật viên đang giao & lắp đặt',
          time: '15:15',
          done: true,
          description: 'KTV Trần Đình Dũng đang di chuyển đến địa chỉ.',
        },
        {
          title: 'Bàn giao thiết bị',
          time: 'Dự kiến 16:30',
          done: false,
          description: 'Khách hàng thử quạt và nghiệm thu.',
        },
      ],
    },
  ]);

  // Modals Open State
  const [selectedDetailProduct, setSelectedDetailProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isBtuCalcOpen, setIsBtuCalcOpen] = useState(false);
  const [isOrderTrackingOpen, setIsOrderTrackingOpen] = useState(false);
  const [trackingOrderId, setTrackingOrderId] = useState<string>('');
  const [isWarrantyOpen, setIsWarrantyOpen] = useState(false);
  const [isBenchmarkOpen, setIsBenchmarkOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isB2bOpen, setIsB2bOpen] = useState(false);
  const [policyModalKey, setPolicyModalKey] = useState<string | null>(null);
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);

  // Home Featured Tab
  const [homeFeaturedTab, setHomeFeaturedTab] = useState<'bestseller' | 'bldc' | 'new' | 'ac'>('bestseller');

  // Navigation handler with smooth loading transition
  const handleNavigate = (view: string, payload?: any) => {
    if (view === 'about') {
      setIsAboutOpen(true);
      return;
    }
    if (view === 'b2b') {
      setIsB2bOpen(true);
      return;
    }
    if (view === 'warranty') {
      setIsWarrantyOpen(true);
      return;
    }

    if (currentView === view && (!payload || !payload.category)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Contextual loading message
    let msg = l('Đang tải dữ liệu...', 'Loading data...');
    if (view === 'products') msg = l('Đang tải danh mục thiết bị điện gia dụng...', 'Loading home appliance catalog...');
    else if (view === 'promotions') msg = l('Đang cập nhật chương trình ưu đãi mùa hè...', 'Updating summer promotions...');
    else if (view === 'solutions') msg = l('Đang tính toán giải pháp theo không gian sống...', 'Calculating solutions for your living space...');
    else if (view === 'dealers') msg = l('Đang định vị hệ thống Showroom & Đại lý gần nhất...', 'Locating the nearest showrooms & dealers...');
    else if (view === 'faqs') msg = l('Đang tải trung tâm hướng dẫn & cẩm nang...', 'Loading help center & guides...');
    else if (view === 'smart-connect') msg = l('Đang tải trung tâm kết nối thông minh & App...', 'Loading smart connect & app center...');
    else if (view === 'home') msg = l('Đang tải trang chủ Chillami...', 'Loading Chillami home page...');

    setTransitionMessage(msg);
    setIsViewTransitioning(true);

    setTimeout(() => {
      setCurrentView(view);
      if (view === 'products') {
        setSelectedCatalogCategory(payload?.category || 'all');
        setSelectedCatalogSubCategory(payload?.subCategory || '');
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
      setIsViewTransitioning(false);
    }, 280);
  };

  // Cart operations
  const handleAddToCart = (product: Product, quantity: number = 1, variant?: string) => {
    let unitPrice = product.price;
    if (variant && product.variants) {
      const v = product.variants.find((item) => item.value === variant);
      if (v) unitPrice = v.price;
    }

    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedVariant === variant
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { product, quantity, selectedVariant: variant, unitPrice }];
    });

    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number, variant?: string) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.product.id === productId && item.selectedVariant === variant) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const handleRemoveFromCart = (productId: string, variant?: string) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.selectedVariant === variant))
    );
  };

  // Instant order now (from PDP)
  const handleOrderNow = (product: Product, quantity: number = 1, variant?: string) => {
    handleAddToCart(product, quantity, variant);
    setSelectedDetailProduct(null);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Compare operations
  const handleToggleCompare = (product: Product) => {
    if (comparedProductIds.includes(product.id)) {
      setComparedProductIds(comparedProductIds.filter((id) => id !== product.id));
    } else {
      if (comparedProductIds.length >= 4) {
        alert(l('Quý khách có thể so sánh tối đa 4 sản phẩm cùng lúc.', 'You can compare up to 4 products at a time.'));
        return;
      }
      setComparedProductIds([...comparedProductIds, product.id]);
    }
  };

  const comparedProducts = comparedProductIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as Product[];

  // Filtered featured products on home
  const homeFeaturedProducts = React.useMemo(() => {
    if (homeFeaturedTab === 'bestseller') {
      return products.filter((p) => p.isBestSeller).slice(0, 8);
    }
    if (homeFeaturedTab === 'bldc') {
      return products.filter(
        (p) =>
          p.features.some((f) => /bldc|không chổi than|brushless/i.test(f))
      ).slice(0, 8);
    }
    if (homeFeaturedTab === 'new') {
      return products.filter((p) => p.isNew || p.discountPercent).slice(0, 8);
    }
    return products.filter((p) => p.category === 'ac').slice(0, 8);
  }, [homeFeaturedTab, products]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* HEADER */}
      <Header
        onNavigate={handleNavigate}
        currentView={currentView}
        cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)}
        compareCount={comparedProductIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCompare={() => setIsCompareOpen(true)}
        onOpenOrderTracking={() => setIsOrderTrackingOpen(true)}
        onOpenWarranty={() => setIsWarrantyOpen(true)}
        onOpenBenchmark={() => setIsBenchmarkOpen(true)}
        onOpenBtuCalc={() => setIsBtuCalcOpen(true)}
        onSelectProduct={(p) => setSelectedDetailProduct(p)}
        allProducts={products}
      />

      {/* MAIN VIEW CONTENT */}
      <main className="flex-1">
        {/* VIEW 1: HOME */}
        {currentView === 'home' && (
          <div className="space-y-0">
            {/* 1. Hero Banner */}
            <HeroBanner
              onExploreProducts={() => handleNavigate('products')}
              onOpenBtuCalc={() => setIsBtuCalcOpen(true)}
            />

            {/* 2. Category Grid */}
            <CategoryGrid
              onSelectCategory={(catId) => {
                handleNavigate('products', { category: catId });
              }}
            />

            {/* 2.5 Promotional Advertising Banner with Countdown */}
            <ScrollFadeIn direction="up" distance={20} duration={600}>
              <PromotionalBanner
                onExploreProducts={() => handleNavigate('products')}
                onExplorePromotions={() => handleNavigate('promotions')}
              />
            </ScrollFadeIn>

            {/* 3. Featured Products Showcase */}
            <ScrollFadeIn direction="up" distance={24} duration={650}>
              <section className="py-14 bg-slate-50 border-t border-slate-200/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-1">
                        {l('Thiết bị nổi bật', 'Featured Appliances')}
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                        {l('Sản Phẩm Được Tin Dùng Nhất', 'Most Trusted Products')}
                      </h2>
                    </div>

                    {/* Tabs */}
                    <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 rounded-xl overflow-x-auto">
                      <button
                        onClick={() => setHomeFeaturedTab('bestseller')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                          homeFeaturedTab === 'bestseller'
                            ? 'bg-white text-slate-900 shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {l('Bán chạy nhất', 'Best Sellers')}
                      </button>
                      <button
                        onClick={() => setHomeFeaturedTab('bldc')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                          homeFeaturedTab === 'bldc'
                            ? 'bg-white text-slate-900 shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {l('Động cơ BLDC siêu êm', 'Ultra-quiet BLDC Motors')}
                      </button>
                      <button
                        onClick={() => setHomeFeaturedTab('new')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                          homeFeaturedTab === 'new'
                            ? 'bg-white text-slate-900 shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {l('Mới ra mắt 2026', 'New for 2026')}
                      </button>
                      <button
                        onClick={() => setHomeFeaturedTab('ac')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                          homeFeaturedTab === 'ac'
                            ? 'bg-white text-slate-900 shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {l('Điều hòa Inverter', 'Inverter ACs')}
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {homeFeaturedProducts.map((p) => (
                      <ProductCard
                        key={p.id}
                        product={p}
                        onOpenDetail={(product) => setSelectedDetailProduct(product)}
                        onAddToCart={(product) => handleAddToCart(product)}
                        onToggleCompare={(product) => handleToggleCompare(product)}
                        isCompared={comparedProductIds.includes(p.id)}
                      />
                    ))}
                  </div>

                  <div className="mt-10 text-center">
                    <button
                      onClick={() => handleNavigate('products')}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-xl border border-slate-300 text-xs shadow-xs transition-colors cursor-pointer"
                    >
                      <span>{l('Khám phá sản phẩm', 'Explore products')}</span>
                      <ArrowRight className="w-4 h-4 text-teal-700" />
                    </button>
                  </div>
                </div>
              </section>
            </ScrollFadeIn>

            {/* 4. Core Technology Showcase */}
            <TechnologyShowcase />

            {/* 5. Room Solutions Section */}
            <RoomSolutionsSection
              allProducts={products}
              onOpenDetail={(p) => setSelectedDetailProduct(p)}
              onAddToCart={(p) => handleAddToCart(p)}
            />

            {/* 6. Chillami Care & Quality Service Commitment */}
            <ScrollFadeIn direction="up" distance={24} duration={650}>
              <section className="py-16 bg-gradient-to-r from-teal-950 via-slate-900 to-teal-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                    <div className="space-y-2 max-w-2xl">
                      <span className="text-xs font-bold uppercase tracking-wider text-teal-300 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-teal-300" />
                        {l('Đặc quyền dịch vụ vàng Chillami Care', 'Chillami Care Gold Service Privileges')}
                      </span>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display tracking-tight text-white">
                        {l('An Tâm Tuyệt Đối Với Hệ Thống Hậu Mãi Chính Hãng', 'Complete Peace of Mind with Official After-Sales Service')}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {l('Chillami cam kết mang đến tiêu chuẩn dịch vụ vượt trội: giao hàng & lắp đặt tận nhà nhanh chóng, chính sách 1 đổi 1 minh bạch và hệ sinh thái bảo hành điện tử E-Warranty hiện đại.', 'Chillami is committed to outstanding service: fast home delivery & installation, a transparent 1-for-1 replacement policy and a modern E-Warranty digital warranty ecosystem.')}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => handleNavigate('products')}
                        className="px-6 py-3.5 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold rounded-xl text-xs shadow-lg transition-all cursor-pointer flex items-center gap-2"
                      >
                        <span>{l('Khám phá sản phẩm', 'Explore products')}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setIsWarrantyOpen(true)}
                        className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-xs border border-white/20 transition-all cursor-pointer flex items-center gap-2"
                      >
                        <ShieldCheck className="w-4 h-4 text-teal-300" />
                        <span>{l('Tra cứu bảo hành E-Warranty', 'E-Warranty Lookup')}</span>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ScrollFadeIn direction="up" distance={20} delay={50} duration={600} className="h-full">
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-2.5 h-full">
                        <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold">
                          🚚
                        </div>
                        <h4 className="text-sm font-bold text-white">{l('Miễn Phí Giao & Lắp Đặt 2H', 'Free 2H Delivery & Installation')}</h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {l('Miễn 100% công lắp đặt tiêu chuẩn tại nhà bởi kỹ sư chính hãng có tay nghề cao.', '100% free standard home installation by highly skilled official engineers.')}
                        </p>
                      </div>
                    </ScrollFadeIn>

                    <ScrollFadeIn direction="up" distance={20} delay={120} duration={600} className="h-full">
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-2.5 h-full">
                        <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold">
                          🔄
                        </div>
                        <h4 className="text-sm font-bold text-white">{l('1 Đổi 1 Trong 30 Ngày', '1-for-1 Replacement in 30 Days')}</h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {l('Phát sinh bất kỳ lỗi kỹ thuật nào từ nhà sản xuất sẽ được đổi ngay máy mới nguyên seal tại nhà.', 'Any manufacturing defect gets an immediate brand-new sealed replacement at your home.')}
                        </p>
                      </div>
                    </ScrollFadeIn>

                    <ScrollFadeIn direction="up" distance={20} delay={190} duration={600} className="h-full">
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-2.5 h-full">
                        <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold">
                          🛡️
                        </div>
                        <h4 className="text-sm font-bold text-white">{l('Bảo Hành Tới 10 Năm', 'Up to 10-Year Warranty')}</h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {l('Bình chứa tráng men Titanium bảo hành 10 năm; máy nén Inverter và động cơ BLDC bảo hành 5 năm.', '10-year warranty on Titanium enamel tanks; 5 years on Inverter compressors and BLDC motors.')}
                        </p>
                      </div>
                    </ScrollFadeIn>

                    <ScrollFadeIn direction="up" distance={20} delay={260} duration={600} className="h-full">
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-2.5 h-full">
                        <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold">
                          📱
                        </div>
                        <h4 className="text-sm font-bold text-white">{l('E-Warranty Số Hóa 100%', '100% Digital E-Warranty')}</h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {l('Kích hoạt bằng số Serial máy hoặc SĐT, lưu trữ đám mây không lo mất hóa đơn giấy.', 'Activate with the serial number or phone number, stored in the cloud – no more lost paper receipts.')}
                        </p>
                      </div>
                    </ScrollFadeIn>
                  </div>
                </div>
              </section>
            </ScrollFadeIn>
          </div>
        )}

        {/* VIEW 2: PRODUCTS CATALOG (PLP) */}
        {currentView === 'products' && (
          <ProductCatalog
            products={products}
            initialCategory={selectedCatalogCategory}
            initialSubCategory={selectedCatalogSubCategory}
            onOpenDetail={(p) => setSelectedDetailProduct(p)}
            onAddToCart={(p) => handleAddToCart(p)}
            onToggleCompare={(p) => handleToggleCompare(p)}
            comparedProductIds={comparedProductIds}
            onOpenBtuCalc={() => setIsBtuCalcOpen(true)}
          />
        )}

        {/* VIEW 3: PROMOTIONS */}
        {currentView === 'promotions' && (
          <PromotionsView
            products={products}
            onOpenDetail={(p) => setSelectedDetailProduct(p)}
            onAddToCart={(p) => handleAddToCart(p)}
            onToggleCompare={(p) => handleToggleCompare(p)}
            comparedProductIds={comparedProductIds}
          />
        )}

        {/* VIEW 4: ROOM SOLUTIONS */}
        {currentView === 'solutions' && (
          <div className="py-8 bg-white min-h-screen">
            <RoomSolutionsSection
              allProducts={products}
              onOpenDetail={(p) => setSelectedDetailProduct(p)}
              onAddToCart={(p) => handleAddToCart(p)}
            />
          </div>
        )}

        {/* VIEW 5: DEALER LOCATOR */}
        {currentView === 'dealers' && <DealerLocator />}

        {/* VIEW 6: FAQS */}
        {currentView === 'faqs' && <FaqsView />}

        {/* VIEW 7: TECHNOLOGY STANDALONE */}
        {currentView === 'technology' && (
          <div className="py-12 bg-white min-h-screen">
            <TechnologyShowcase />
          </div>
        )}

        {/* VIEW 8: SMART CONNECT GUIDE & APP DOWNLOAD */}
        {currentView === 'smart-connect' && (
          <SmartConnectGuideView
            onExploreSmartFans={() => handleNavigate('products', { category: 'fan', subCategory: 'quat-thong-minh' })}
          />
        )}
      </main>

      {/* FOOTER */}
      <Footer
        onNavigate={handleNavigate}
        onOpenWarranty={() => setIsWarrantyOpen(true)}
        onOpenOrderTracking={() => setIsOrderTrackingOpen(true)}
        onOpenBenchmark={() => setIsBenchmarkOpen(true)}
        onOpenBtuCalc={() => setIsBtuCalcOpen(true)}
        onOpenPolicy={(policyKey) => setPolicyModalKey(policyKey)}
      />

      {/* FLOATING COMPARISON DOCK (When 1+ products selected) */}
      {comparedProductIds.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-slate-900/95 backdrop-blur-md text-white rounded-2xl px-5 py-3 shadow-2xl border border-slate-700 flex items-center gap-4 animate-in slide-in-from-bottom-5">
          <div className="flex items-center gap-2 text-xs font-semibold">
            <GitCompare className="w-4 h-4 text-teal-400" />
            <span>{l('Đã chọn', 'Selected')} <strong>{comparedProductIds.length}</strong> {l('sản phẩm để so sánh', 'products to compare')}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCompareOpen(true)}
              className="px-3.5 py-1.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-lg text-xs transition-colors cursor-pointer"
            >
              {l('Xem bảng so sánh', 'View comparison')}
            </button>
            <button
              onClick={() => setComparedProductIds([])}
              className="text-xs text-slate-400 hover:text-white"
            >
              {l('Xóa', 'Clear')}
            </button>
          </div>
        </div>
      )}

      {/* ALL MODALS */}
      {/* 1. Product Detail PDP */}
      <ProductDetailModal
        product={selectedDetailProduct && translateProduct(selectedDetailProduct)}
        onClose={() => setSelectedDetailProduct(null)}
        onAddToCart={(p, qty, v) => handleAddToCart(p, qty, v)}
        onToggleCompare={(p) => handleToggleCompare(p)}
        isCompared={selectedDetailProduct ? comparedProductIds.includes(selectedDetailProduct.id) : false}
        onOpenOrderNow={(p, qty, v) => handleOrderNow(p, qty, v)}
      />

      {/* 2. Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
        onAddUpsell={(p) => handleAddToCart(p, 1)}
        upsellProducts={products.filter((p) => p.category === 'accessory')}
      />

      {/* 3. Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderSuccess={(order) => {
          setOrders([order, ...orders]);
          setCartItems([]);
        }}
        onOpenOrderTracking={(orderId) => {
          setTrackingOrderId(orderId);
          setIsOrderTrackingOpen(true);
        }}
      />

      {/* 4. Product Comparison Matrix */}
      {isCompareOpen && (
        <ProductComparisonModal
          comparedProducts={comparedProducts}
          onClose={() => setIsCompareOpen(false)}
          onRemoveProduct={(id) =>
            setComparedProductIds(comparedProductIds.filter((pId) => pId !== id))
          }
          onAddToCart={(p) => handleAddToCart(p)}
          onClearAll={() => setComparedProductIds([])}
        />
      )}

      {/* 5. Smart BTU Calculator Tool */}
      {isBtuCalcOpen && (
        <BtuCalculatorModal
          onClose={() => setIsBtuCalcOpen(false)}
          acProducts={products.filter((p) => p.category === 'ac')}
          onSelectProduct={(p) => setSelectedDetailProduct(p)}
          onAddToCart={(p) => handleAddToCart(p)}
        />
      )}

      {/* 6. Warranty Hub Modal */}
      {isWarrantyOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-in fade-in">
          <div className="relative w-full max-w-5xl max-h-[94vh] overflow-y-auto rounded-3xl bg-slate-50">
            <button
              onClick={() => setIsWarrantyOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 rounded-xl bg-white shadow-md text-slate-500 hover:text-slate-800 cursor-pointer"
            >
              ✕
            </button>
            <WarrantyHub onClose={() => setIsWarrantyOpen(false)} />
          </div>
        </div>
      )}

      {/* 7. Order Tracking Modal */}
      {isOrderTrackingOpen && (
        <OrderTrackingModal
          initialOrderId={trackingOrderId}
          onClose={() => {
            setIsOrderTrackingOpen(false);
            setTrackingOrderId('');
          }}
          orders={orders}
        />
      )}

      {/* 8. Benchmark Modal */}
      {isBenchmarkOpen && (
        <BenchmarkModal
          onClose={() => setIsBenchmarkOpen(false)}
          onExploreProducts={() => {
            setIsBenchmarkOpen(false);
            handleNavigate('products');
          }}
        />
      )}

      {/* 9. About Modal */}
      {isAboutOpen && <AboutModal onClose={() => setIsAboutOpen(false)} />}

      {/* 10. B2B Modal */}
      {isB2bOpen && <B2BModal onClose={() => setIsB2bOpen(false)} />}

      {/* 11. Policies Modal */}
      {policyModalKey && (
        <PolicyModal
          initialPolicyKey={policyModalKey}
          onClose={() => setPolicyModalKey(null)}
        />
      )}

      {/* 12. Cookie Consent Banner */}
      <CookieConsentBanner />

      {/* 13. Smooth View Transition Loading Spinner */}
      {isViewTransitioning && (
        <LoadingSpinner fullScreen={true} message={transitionMessage} />
      )}

      {/* 14. FLOATING CONTACT WIDGET (ZALO, MESSENGER, HOTLINE, AI CHATBOT) */}
      <FloatingContactWidget
        onOpenAiChat={() => setIsAiChatOpen(true)}
        onOpenSmartGuide={() => handleNavigate('smart-connect')}
      />

      {/* 15. AI CHATBOT ASSISTANT MODAL */}
      <AiChatbotModal
        isOpen={isAiChatOpen}
        onClose={() => setIsAiChatOpen(false)}
        allProducts={products}
        onSelectProduct={(p) => setSelectedDetailProduct(p)}
        onAddToCart={(p) => handleAddToCart(p)}
        onNavigate={handleNavigate}
        onOpenSmartGuide={() => handleNavigate('smart-connect')}
      />
    </div>
  );
}

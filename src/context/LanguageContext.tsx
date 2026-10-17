import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../types';

export type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, fallback?: string) => string;
  translateProduct: (product: Product) => Product;
  translateProducts: (products: Product[]) => Product[];
  formatCurrency: (amount: number) => string;
}

const translations: Record<Language, Record<string, string>> = {
  vi: {
    // Header & Announcement
    'top.promo': 'Ưu đãi ra mắt:',
    'top.promo_detail': 'Miễn phí giao hàng & lắp đặt tận nhà · 1 đổi 1 trong 30 ngày · Động cơ bảo hành tới 10 năm',
    'top.warranty': 'Bảo hành chính hãng 1 đổi 1 trong 30 ngày',
    'top.hotline': 'Hotline:',
    'search.placeholder': 'Tìm kiếm quạt BLDC, điều hòa Inverter, bếp từ, máy hút mùi...',
    'nav.home': 'Trang chủ',
    'nav.products': 'Sản phẩm',
    'nav.all_products': 'Tất cả sản phẩm',
    'nav.fans': 'Quạt mát BLDC',
    'nav.air_conditioners': 'Điều hòa Eco Inverter',
    'nav.kitchen': 'Thiết bị bếp cao cấp',
    'nav.water_heater': 'Bình nước nóng Titanium',
    'nav.smart_connect': 'Kết Nối App',
    'nav.solutions': 'Giải pháp không gian',
    'nav.promotions': 'Ưu đãi',
    'nav.about': 'Về Chillami',
    'nav.support': 'Tư vấn & Hỗ trợ',
    'nav.dealers': 'Nơi Mua Hàng & Showroom',
    'header.warranty': 'Bảo hành',
    'header.orders': 'Tra cứu đơn',
    'header.compare': 'So sánh',
    'header.cart': 'Giỏ hàng',
    'header.btu_calc': 'Tính công suất BTU',
    'header.ai_advisor': 'Tư vấn AI',

    // Hero Banner
    'hero.badge.bldc': 'Công nghệ độc quyền',
    'hero.title.bldc': 'Quạt BLDC SoftAir 13dB',
    'hero.desc.bldc': 'Động cơ một chiều không chổi than 100% dây đồng, 24 cấp độ gió tự nhiên, vận hành siêu tĩnh lặng bảo vệ giấc ngủ.',
    'hero.stat.bldc': 'Tiết kiệm 70%',
    'hero.statLabel.bldc': 'Điện năng tiêu thụ',
    'hero.action.bldc': 'Xem Quạt BLDC',

    'hero.badge.inverter': 'Kiến trúc tối giản',
    'hero.title.inverter': 'Điều Hòa Slim Inverter 16.8cm',
    'hero.desc.inverter': 'Thiết kế siêu mỏng thanh lịch kết hợp luồng gió Coanda thổi trần, làm lạnh dịu mát không gây khô da hay buốt đầu.',
    'hero.stat.inverter': 'CSPF 5.25',
    'hero.statLabel.inverter': 'Chuẩn 5 sao năng lượng',
    'hero.action.inverter': 'Xem Điều Hòa Inverter',

    'hero.badge.igbt': 'Linh kiện Infineon Đức',
    'hero.title.igbt': 'Bếp Từ Đôi MasterChef IGBT',
    'hero.desc.igbt': 'Công nghệ sôi lăn tăn liên tục mức 1-3 không ngắt quãng, mặt kính Kanger vát kim cương chịu nhiệt 750°C.',
    'hero.stat.igbt': '4000W',
    'hero.statLabel.igbt': 'Booster đun siêu tốc',
    'hero.action.igbt': 'Xem Bếp Từ Đôi',

    'hero.badge.titanium': 'Bảo hành bình chứa 10 năm',
    'hero.title.titanium': 'Bình Nước Nóng Men Titanium',
    'hero.desc.titanium': 'Chống ăn mòn tuyệt đối, cọc đốt Incoloy 840 truyền nhiệt nhanh, hệ thống chống giật ELCB kép an toàn tuyệt đối.',
    'hero.stat.titanium': '72 Giờ',
    'hero.statLabel.titanium': 'Giữ nhiệt chuẩn SuperFoam',
    'hero.action.titanium': 'Xem Bình Nóng Lạnh',

    'hero.calc_btu': 'Tính công suất BTU',
    'hero.free_install': 'Miễn phí giao & lắp đặt tận nơi',
    'hero.exchange_30d': '1 đổi 1 trong 30 ngày',
    'hero.motor_10y': 'Động cơ bảo hành 10 năm',

    // Promotional Banner
    'promo.badge': 'SIÊU ĐẠI TIỆC MÙA HÈ 2026 · GIẢM ĐẾN 35%',
    'promo.title': 'Lên Đời Quạt BLDC Tiết Kiệm 75% Điện',
    'promo.title_sub': 'Êm Tĩnh 13dB Cho Giấc Ngủ Trọn Vẹn',
    'promo.desc': 'Cơ hội nâng cấp không gian sống với công nghệ DC Inverter thế hệ mới. Đổi quạt cũ lấy quạt mới trợ giá ngay 300.000đ, miễn phí công lắp đặt tại nhà.',
    'promo.ends_in': 'Ưu đãi chớp nhoáng kết thúc sau:',
    'promo.days': 'Ngày',
    'promo.hours': 'Giờ',
    'promo.minutes': 'Phút',
    'promo.seconds': 'Giây',
    'promo.copy': 'Sao chép',
    'promo.copied': 'Đã chép!',
    'promo.explore': 'Khám phá ưu đãi ngay',
    'promo.free_shipping_title': 'Miễn phí giao hàng & lắp đặt tận nhà',
    'promo.exchange_title': 'Đổi mới 1-1 trong 30 ngày đầu tiên',
    'promo.motor_warranty_title': 'Bảo hành động cơ BLDC lên đến 10 năm',

    // Categories
    'cat.section_tag': 'Danh Mục Tiện Nghi',
    'cat.section_title': 'Hệ Sinh Thái Làm Mát & Tiện Nghi Sống',
    'cat.fans': 'Quạt Làm Mát BLDC',
    'cat.fans_desc': 'Quạt cây, quạt lửng, quạt sàn, quạt tích điện BLDC siêu êm 13dB',
    'cat.ac': 'Điều Hòa Không Khí Inverter',
    'cat.ac_desc': 'Điều hòa 1 chiều, 2 chiều Eco Inverter tiết kiệm điện năng 5 sao',
    'cat.kitchen': 'Thiết Bị Nhà Bếp Cao Cấp',
    'cat.kitchen_desc': 'Bếp từ đôi MasterChef IGBT, máy hút mùi than hoạt tính',
    'cat.water_heater': 'Bình Nước Nóng Titanium',
    'cat.water_heater_desc': 'Bình gián tiếp, bình trực tiếp chống giật ELCB kép',

    // Technology Showcase
    'tech.section_tag': 'Công Nghệ Tiên Phong',
    'tech.section_title': 'Đột Phá Hiệu Năng · Êm Ái & Tiết Kiệm Vượt Trội',
    'tech.bldc_title': 'Động Cơ BLDC Inverter',
    'tech.bldc_desc': 'Công nghệ không chổi than 100% dây đồng nguyên chất, vận hành êm ái, tuổi thọ trên 15 năm, tiết kiệm 75% điện năng so với quạt truyền thống.',
    'tech.coanda_title': 'Luồng Gió Tự Nhiên Coanda',
    'tech.coanda_desc': 'Mô phỏng làn gió tự nhiên êm dịu, khuếch tán không khí đều khắp phòng mà không gây khó chịu hay bạt hơi.',
    'tech.quiet_title': 'Chuẩn Tĩnh Lặng 13dB',
    'tech.quiet_desc': 'Độ ồn thấp hơn tiếng lá rơi, bảo đảm sự yên tĩnh tuyệt đối cho trẻ nhỏ và người cao tuổi.',
    'tech.ai_title': 'Cảm Biến AI Tiết Kiệm Điện',
    'tech.ai_desc': 'Tự động cảm nhận nhiệt độ môi trường để điều chỉnh cấp gió và công suất làm lạnh tối ưu nhất.',

    // Room Solutions
    'room.section_tag': 'Tư Vấn Không Gian',
    'room.section_title': 'Giải Pháp Tiện Nghi Cho Từng Căn Phòng',
    'room.bedroom': 'Phòng Ngủ',
    'room.living': 'Phòng Khách',
    'room.kitchen': 'Phòng Bếp',
    'room.office': 'Phòng Làm Việc',

    // Product Catalog & Filter
    'catalog.section_tag': 'Bộ Sưu Tập Chính Hãng',
    'catalog.section_title': 'Sản Phẩm Nổi Bật Chillami',
    'catalog.filter_all': 'Tất cả',
    'catalog.filter_bestseller': 'Bán chạy nhất',
    'catalog.filter_bldc': 'Công nghệ BLDC',
    'catalog.filter_ac': 'Điều hòa Inverter',
    'catalog.filter_new': 'Sản phẩm mới',
    'catalog.sort_label': 'Sắp xếp theo:',
    'catalog.sort_popular': 'Phổ biến nhất',
    'catalog.sort_price_low': 'Giá thấp đến cao',
    'catalog.sort_price_high': 'Giá cao đến thấp',
    'catalog.sort_deals': 'Ưu đãi HOT',
    'catalog.badge_new': 'Mới',
    'catalog.save': 'Tiết kiệm',
    'catalog.reviews_count': 'đánh giá',
    'catalog.quick_view': 'Xem nhanh',
    'catalog.no_products': 'Không tìm thấy sản phẩm nào trong tiêu chí lựa chọn',

    // Product Detail
    'detail.select_color': 'Chọn màu sắc:',
    'detail.select_version': 'Phiên bản / Cấu hình:',
    'detail.in_stock': 'Còn hàng - Giao nhanh 2h',
    'detail.free_install': 'Miễn phí giao hàng & công lắp đặt tiêu chuẩn',
    'detail.warranty_24m': 'Bảo hành chính hãng 24 tháng tận nơi',
    'detail.return_30d': 'Lỗi 1 đổi 1 trong vòng 30 ngày',
    'detail.tab_specs': 'Thông số kỹ thuật',
    'detail.tab_features': 'Tính năng & Công nghệ',
    'detail.tab_energy': 'Nhãn năng lượng & Chứng nhận',
    'detail.tab_video': 'Video trên tay & Đánh giá',
    'detail.tab_reviews': 'Đánh giá khách hàng',
    'detail.btn_add_cart': 'Thêm vào giỏ hàng',
    'detail.btn_buy_now': 'Mua ngay giao 2h',
    'detail.btn_compare': 'So sánh sản phẩm',
    'detail.power_calc_title': 'Ước tính tiền điện & Tiết kiệm hàng tháng',
    'detail.power_calc_desc': 'So sánh công suất tiêu thụ thực tế với quạt AC truyền thống:',
    'detail.chillami_monthly': 'Chi phí điện Chillami:',
    'detail.traditional_monthly': 'Quạt AC thông thường:',
    'detail.monthly_savings': 'Tiết kiệm mỗi tháng:',
    'detail.cert_standard': 'Chứng nhận tiêu chuẩn năng lượng & an toàn:',

    // Floating Widget & Chat
    'floating.ai': 'AI Tư vấn thiết bị',
    'floating.zalo': 'Chat Zalo OA',
    'floating.messenger': 'Facebook Messenger',
    'floating.hotline': 'Hotline: 1900 8899',
    'floating.copied': 'Đã sao chép hotline!',
    'floating.operating_hours': 'Hoạt động 8:00 - 21:00',
    'floating.free_call': 'Gọi miễn phí',

    // Smart Connect
    'smart.title': 'Hướng Dẫn Kết Nối Thiết Bị Thông Minh Chillami Home',
    'smart.subtitle': 'Điều khiển quạt BLDC, điều hòa và thiết bị gia dụng chỉ bằng một chạm trên điện thoại của bạn.',
    'smart.download_app': 'Tải Ứng Dụng Chillami Home',
    'smart.ios_app': 'Tải cho iOS (App Store)',
    'smart.android_app': 'Tải cho Android (Google Play)',
    'smart.scan_qr': 'Quét mã QR tải app tức thì',
    'smart.step1_title': 'Bước 1: Tải & Mở Ứng Dụng',
    'smart.step1_desc': 'Tải app Chillami Home trên App Store hoặc Google Play, bật Bluetooth và WiFi (băng tần 2.4GHz) trên điện thoại.',
    'smart.step2_title': 'Bước 2: Kích Hoạt Chế Độ Ghép Nối',
    'smart.step2_desc': 'Nhấn giữ phím Nguồn/WiFi trên quạt hoặc điều khiển 5 giây cho đến khi đèn báo WiFi nhấp nháy phát tiếng bíp.',
    'smart.step3_title': 'Bước 3: Thêm Thiết Bị Tự Động',
    'smart.step3_desc': 'Ứng dụng tự động dò tìm qua BLE (Bluetooth Low Energy), chọn model xuất hiện trên màn hình và nhập mật khẩu WiFi.',
    'smart.step4_title': 'Bước 4: Hoàn Tất & Điều Khiển',
    'smart.step4_desc': 'Đặt tên thiết bị (Ví dụ: Quạt Phòng Khách) và tận hưởng 24 cấp gió, hẹn giờ, điều khiển giọng nói tiện lợi.',

    // Cart Drawer
    'cart.title': 'Giỏ hàng của bạn',
    'cart.empty_title': 'Giỏ hàng đang trống',
    'cart.empty_desc': 'Bạn chưa chọn thiết bị nào. Khám phá các dòng quạt BLDC và điều hòa tiết kiệm điện của Chillami ngay!',
    'cart.subtotal': 'Tạm tính:',
    'cart.shipping': 'Phí giao hàng & lắp đặt:',
    'cart.free': 'Miễn phí',
    'cart.total': 'Tổng thanh toán:',
    'cart.checkout_btn': 'Tiến hành đặt hàng ngay',
    'cart.continue_btn': 'Tiếp tục xem sản phẩm',

    // Footer
    'footer.brand_desc': 'Thương hiệu thiết bị gia dụng làm mát và tiện nghi sống chuẩn công nghệ Nhật Bản tại Việt Nam. Tối ưu điện năng, êm ái tuyệt đối, bảo hành 1 đổi 1 tận nơi.',
    'footer.copyright': '© 2026 Chillami Home Appliances Vietnam. All rights reserved.',
    'footer.support_center': 'Tổng đài chăm sóc khách hàng: 1900 8899 (8h00 - 21h00 hàng ngày)',
    'footer.col_products': 'Sản Phẩm',
    'footer.col_support': 'Hỗ Trợ & Dịch Vụ',
    'footer.col_about': 'Về Chillami',
    'footer.col_contact': 'Liên Hệ Trực Tiếp',
    'footer.warranty_lookup': 'Tra cứu bảo hành điện tử',
    'footer.order_tracking': 'Tra cứu tiến độ đơn hàng',
    'footer.btu_calc': 'Công cụ tính công suất BTU',
    'footer.faqs': 'Câu hỏi thường gặp',
    'footer.store_locator': 'Hệ thống cửa hàng & Showroom',
    'footer.quality_policy': 'Chính sách bảo hành & Đổi mới',
    'footer.terms': 'Điều khoản sử dụng',
    'footer.privacy': 'Chính sách bảo mật dữ liệu',
  },
  en: {
    // Header & Announcement
    'top.promo': 'Launch Offer:',
    'top.promo_detail': 'Free home delivery & installation · 30-day 1-to-1 replacement · Up to 10-year motor warranty',
    'top.warranty': 'Official warranty with 30-day 1-to-1 replacement',
    'top.hotline': 'Hotline:',
    'search.placeholder': 'Search BLDC fans, Inverter ACs, induction hobs, range hoods...',
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.all_products': 'All Products',
    'nav.fans': 'BLDC Cooling Fans',
    'nav.air_conditioners': 'Eco Inverter AC',
    'nav.kitchen': 'Premium Kitchen',
    'nav.water_heater': 'Titanium Water Heater',
    'nav.smart_connect': 'Smart App',
    'nav.solutions': 'Space Solutions',
    'nav.promotions': 'Deals',
    'nav.about': 'About Chillami',
    'nav.support': 'Support & Advisory',
    'nav.dealers': 'Showrooms & Stores',
    'header.warranty': 'Warranty',
    'header.orders': 'Order Track',
    'header.compare': 'Compare',
    'header.cart': 'Cart',
    'header.btu_calc': 'BTU Calculator',
    'header.ai_advisor': 'AI Advisor',

    // Hero Banner
    'hero.badge.bldc': 'Proprietary Technology',
    'hero.title.bldc': 'BLDC SoftAir 13dB Fan',
    'hero.desc.bldc': 'Brushless DC motor with 100% pure copper winding, 24 natural wind levels, ultra-quiet operation protecting sleep.',
    'hero.stat.bldc': 'Save 70%',
    'hero.statLabel.bldc': 'Power Consumption',
    'hero.action.bldc': 'Explore BLDC Fans',

    'hero.badge.inverter': 'Minimalist Architecture',
    'hero.title.inverter': 'Slim Inverter AC 16.8cm',
    'hero.desc.inverter': 'Ultra-slim elegant design paired with Coanda ceiling airflow, gentle cooling without drying skin or head chills.',
    'hero.stat.inverter': 'CSPF 5.25',
    'hero.statLabel.inverter': '5-Star Energy Certified',
    'hero.action.inverter': 'Explore Inverter AC',

    'hero.badge.igbt': 'German Infineon IGBT',
    'hero.title.igbt': 'MasterChef Induction Hob',
    'hero.desc.igbt': 'Continuous low-simmer boiling without pulsing, diamond-beveled Kanger glass heat resistant to 750°C.',
    'hero.stat.igbt': '4000W',
    'hero.statLabel.igbt': 'Ultra-Fast Booster',
    'hero.action.igbt': 'Explore Induction Hobs',

    'hero.badge.titanium': '10-Year Tank Warranty',
    'hero.title.titanium': 'Titanium Water Heater',
    'hero.desc.titanium': 'Zero corrosion, Incoloy 840 rapid heating element, dual ELCB anti-shock protection for ultimate safety.',
    'hero.stat.titanium': '72 Hours',
    'hero.statLabel.titanium': 'SuperFoam Heat Retention',
    'hero.action.titanium': 'Explore Water Heaters',

    'hero.calc_btu': 'Calculate BTU',
    'hero.free_install': 'Free delivery & standard installation',
    'hero.exchange_30d': '30-Day 1-to-1 Replacement',
    'hero.motor_10y': '10-Year Motor Warranty',

    // Promotional Banner
    'promo.badge': 'SUMMER LAUNCH MEGA DEALS 2026 · UP TO 35% OFF',
    'promo.title': 'Upgrade to BLDC Fans Saving 75% Power',
    'promo.title_sub': 'Whisper-Quiet 13dB for Pure Sleep',
    'promo.desc': 'Upgrade your living space with next-gen DC Inverter technology. Old-for-new trade-in rebate, free in-home installation.',
    'promo.ends_in': 'Flash deal ends in:',
    'promo.days': 'Days',
    'promo.hours': 'Hours',
    'promo.minutes': 'Mins',
    'promo.seconds': 'Secs',
    'promo.copy': 'Copy',
    'promo.copied': 'Copied!',
    'promo.explore': 'Explore Deals Now',
    'promo.free_shipping_title': 'Free home delivery & professional installation',
    'promo.exchange_title': '30-day 1-to-1 replacement guarantee',
    'promo.motor_warranty_title': 'Up to 10-year BLDC motor warranty',

    // Categories
    'cat.section_tag': 'Comfort Categories',
    'cat.section_title': 'Cooling & Home Comfort Ecosystem',
    'cat.fans': 'BLDC Cooling Fans',
    'cat.fans_desc': 'Pedestal, standing, floor, rechargeable BLDC fans ultra-quiet 13dB',
    'cat.ac': 'Eco Inverter AC',
    'cat.ac_desc': '1-way & 2-way Eco Inverter ACs 5-star energy certified',
    'cat.kitchen': 'Premium Kitchen',
    'cat.kitchen_desc': 'MasterChef IGBT induction hobs, range hoods',
    'cat.water_heater': 'Titanium Water Heater',
    'cat.water_heater_desc': 'Direct & storage water heaters with dual ELCB protection',

    // Technology Showcase
    'tech.section_tag': 'Pioneering Technology',
    'tech.section_title': 'Breakthrough Performance · Whisper-Quiet & Extreme Savings',
    'tech.bldc_title': 'BLDC Inverter Motor',
    'tech.bldc_desc': '100% pure copper brushless DC technology, ultra-quiet, 15+ years lifespan, saving 75% electricity compared to traditional fans.',
    'tech.coanda_title': 'Coanda Natural Airflow',
    'tech.coanda_desc': 'Simulates gentle natural breeze, evenly circulating room air without draft discomfort.',
    'tech.quiet_title': '13dB Silence Standard',
    'tech.quiet_desc': 'Quieter than falling leaves, guaranteeing absolute serenity for babies and the elderly.',
    'tech.ai_title': 'Smart AI Eco Sensor',
    'tech.ai_desc': 'Automatically senses room temperature to adjust wind speeds and cooling capacity optimally.',

    // Room Solutions
    'room.section_tag': 'Space Advisory',
    'room.section_title': 'Comfort Solutions for Every Living Space',
    'room.bedroom': 'Bedroom',
    'room.living': 'Living Room',
    'room.kitchen': 'Kitchen',
    'room.office': 'Home Office',

    // Product Catalog & Filter
    'catalog.section_tag': 'Official Collection',
    'catalog.section_title': 'Chillami Featured Products',
    'catalog.filter_all': 'All',
    'catalog.filter_bestseller': 'Best Sellers',
    'catalog.filter_bldc': 'BLDC Technology',
    'catalog.filter_ac': 'Inverter AC',
    'catalog.filter_new': 'New Arrivals',
    'catalog.sort_label': 'Sort by:',
    'catalog.sort_popular': 'Most Popular',
    'catalog.sort_price_low': 'Price: Low to High',
    'catalog.sort_price_high': 'Price: High to Low',
    'catalog.sort_deals': 'Hot Deals',
    'catalog.badge_new': 'New',
    'catalog.save': 'Save',
    'catalog.reviews_count': 'reviews',
    'catalog.quick_view': 'Quick View',
    'catalog.no_products': 'No products found matching the criteria',

    // Product Detail
    'detail.select_color': 'Select Color:',
    'detail.select_version': 'Version / Configuration:',
    'detail.in_stock': 'In Stock - 2h Express Delivery',
    'detail.free_install': 'Free delivery & standard installation included',
    'detail.warranty_24m': '24-month official door-to-door warranty',
    'detail.return_30d': '30-day 1-to-1 replacement for defects',
    'detail.tab_specs': 'Specifications',
    'detail.tab_features': 'Features & Tech',
    'detail.tab_energy': 'Energy Label & Certificates',
    'detail.tab_video': 'Hands-on Video & Reviews',
    'detail.tab_reviews': 'Customer Reviews',
    'detail.btn_add_cart': 'Add to Cart',
    'detail.btn_buy_now': 'Buy Now (2h Delivery)',
    'detail.btn_compare': 'Compare Product',
    'detail.power_calc_title': 'Estimated Power Costs & Monthly Savings',
    'detail.power_calc_desc': 'Comparing actual power consumption with traditional AC motor fans:',
    'detail.chillami_monthly': 'Chillami Monthly Cost:',
    'detail.traditional_monthly': 'Traditional AC Fan Cost:',
    'detail.monthly_savings': 'Estimated Monthly Savings:',
    'detail.cert_standard': 'Certified Energy & Safety Standards:',

    // Floating Widget & Chat
    'floating.ai': 'AI Appliance Advisor',
    'floating.zalo': 'Zalo Official Chat',
    'floating.messenger': 'Facebook Messenger',
    'floating.hotline': 'Hotline: 1900 8899',
    'floating.copied': 'Hotline copied!',
    'floating.operating_hours': 'Open 8:00 AM - 9:00 PM',
    'floating.free_call': 'Toll-free Call',

    // Smart Connect
    'smart.title': 'Chillami Home Smart Device Connection Guide',
    'smart.subtitle': 'Control BLDC fans, air conditioners and appliances seamlessly with one touch on your smartphone.',
    'smart.download_app': 'Download Chillami Home App',
    'smart.ios_app': 'Download for iOS (App Store)',
    'smart.android_app': 'Download for Android (Google Play)',
    'smart.scan_qr': 'Scan QR Code to Download App',
    'smart.step1_title': 'Step 1: Download & Open App',
    'smart.step1_desc': 'Download Chillami Home from App Store or Google Play. Turn on Bluetooth and 2.4GHz WiFi on your phone.',
    'smart.step2_title': 'Step 2: Enter Pairing Mode',
    'smart.step2_desc': 'Press and hold Power/WiFi button on device for 5s until the WiFi indicator blinks and beeps.',
    'smart.step3_title': 'Step 3: Auto-Discovery & Add Device',
    'smart.step3_desc': 'The app automatically discovers device via BLE. Select model and input your 2.4GHz WiFi password.',
    'smart.step4_title': 'Step 4: Complete & Enjoy Control',
    'smart.step4_desc': 'Assign a room name (e.g., Living Room Fan) and enjoy 24 speeds, schedule timers, and voice controls.',

    // Cart Drawer
    'cart.title': 'Your Shopping Cart',
    'cart.empty_title': 'Your Cart is Empty',
    'cart.empty_desc': 'You have not added any appliances yet. Explore Chillami energy-saving BLDC fans and Inverter ACs now!',
    'cart.subtotal': 'Subtotal:',
    'cart.shipping': 'Delivery & Installation:',
    'cart.free': 'Free',
    'cart.total': 'Total Amount:',
    'cart.checkout_btn': 'Proceed to Checkout',
    'cart.continue_btn': 'Continue Shopping',

    // Footer
    'footer.brand_desc': 'Premium cooling and home comfort appliances powered by Japanese engineering standards in Vietnam. Energy-efficient, whisper-quiet, door-to-door warranty.',
    'footer.copyright': '© 2026 Chillami Home Appliances Vietnam. All rights reserved.',
    'footer.support_center': 'Customer Care Center: 1900 8899 (8:00 AM - 9:00 PM daily)',
    'footer.col_products': 'Products',
    'footer.col_support': 'Support & Services',
    'footer.col_about': 'About Chillami',
    'footer.col_contact': 'Contact Direct',
    'footer.warranty_lookup': 'E-Warranty Lookup',
    'footer.order_tracking': 'Track Order Status',
    'footer.btu_calc': 'BTU Calculator Tool',
    'footer.faqs': 'Frequently Asked Questions',
    'footer.store_locator': 'Showrooms & Store Locator',
    'footer.quality_policy': 'Warranty & Replacement Policy',
    'footer.terms': 'Terms of Use',
    'footer.privacy': 'Data Privacy Policy',
  }
};

// English product translation overrides
const PRODUCT_EN_TRANSLATIONS: Record<string, Partial<Product>> = {
  'cf-100b': {
    name: 'Chillami Flow-100 BLDC Standing Fan',
    tagline: 'Brushless BLDC motor ultra-quiet 13dB, SoftAir natural breeze technology',
    features: [
      'Brushless DC Inverter motor saves 70% electricity',
      '24 flexible speed levels with SoftAir natural wind mode',
      'Ultra-low 13dB noise level - ideal for baby and senior sleep',
      'Smart 12-hour off-timer with multifunction remote control',
      'Aerodynamic 7-blade design delivers soft and smooth airflow'
    ],
  },
  'csw-80b': {
    name: 'Chillami SoftWind-80 BLDC Pedestal Fan',
    tagline: 'Dual height 70-100cm, ultra-light portable with 3D oscillation',
    features: [
      'Dual-purpose standing and table height adjustment (70cm - 100cm)',
      'Brushless DC motor 22W whisper-quiet 15dB',
      '3D 4-way oscillation (Horizontal 90°, Vertical 60°)',
      'Touch control panel + magnetic remote dock on back',
      'Sleep mode automatically lowers wind speed every 30 minutes'
    ]
  },
  'fb-180': {
    name: 'Chillami FloorBreeze-180 BLDC Floor Fan',
    tagline: 'High-velocity floor circulation fan, turbine airflow reaches 15 meters',
    features: [
      'Spiral turbine casing projects air column up to 15m away',
      'Brushless BLDC motor 35W with 32 fine speed gradations',
      'Vertical 90° flip angle for full-room air convection',
      'Compact floor design suitable for living rooms and cafes'
    ]
  },
  'csa-200x': {
    name: 'Chillami AirCirc-200X BLDC Ceiling Circulator',
    tagline: 'Omnidirectional 360° ceiling fan, air-conditioner booster circulator',
    features: [
      'Continuous 360° omnidirectional air dispersal eliminates room hot spots',
      'Cuts AC cooling time by 50% and electricity cost by 30%',
      'Smart WiFi smartphone app connectivity + wireless RF remote',
      'Slim ceiling profile 18cm, easy standard ceiling grid mounting'
    ]
  },
  'cpg-300': {
    name: 'Chillami PowerGo-Pro 15000mAh Rechargeable Fan',
    tagline: 'Outdoor & blackout fan, up to 36 hours continuous runtime',
    features: [
      'Huge 15000mAh Lithium polymer battery, runs 8 to 36 hours',
      'USB-C 18W fast charging + doubles as phone power bank',
      'Weather-resistant casing with integrated 3-level warm LED camping lantern',
      'Whisper-quiet BLDC motor for tent, travel and power outages'
    ]
  },
  'cac-09eco': {
    name: 'Chillami Eco-Cool 9000BTU Inverter Wall AC',
    tagline: 'Slim profile 16.8cm, Coanda ceiling cooling, 5-Star Energy CSPF 5.85',
    features: [
      'Full DC Inverter with smart AI Eco power-saving sensor',
      'Coanda ceiling airflow prevents direct cold drafts on skin',
      'Plasma-Air active sterilization filters PM2.5 dust and allergens',
      'Ultra-quiet indoor unit 18dB for uninterrupted restful sleep'
    ]
  },
  'cac-12eco': {
    name: 'Chillami Eco-Cool 12000BTU Inverter Wall AC',
    tagline: 'High-efficiency 1.5HP AC for rooms 15–22 m², rapid 30s cooling',
    features: [
      'Rapid cooling down to 21°C within 30 seconds',
      'Dual-rotor DC compressor with GoldFin corrosion resistance',
      'Smart WiFi App Chillami Home temperature scheduling',
      'Highest energy efficiency rating CSPF 6.10'
    ]
  },
  'cac-18eco': {
    name: 'Chillami Master-Cool 18000BTU Inverter AC',
    tagline: 'High-power 2.0HP for open living rooms and master suites 22–32 m²',
    features: [
      'Powerful 2.0HP capacity covering large living spaces',
      'Wide-angle 4D airflow louvers with 12m air throw',
      'Smart humidity control maintained at optimal 55%-65%',
      'Self-cleaning FrostWash technology purges internal coils'
    ]
  },
  'cih-4000': {
    name: 'Chillami MasterChef Dual Induction Hob 4000W',
    tagline: 'German Infineon IGBT, continuous low-simmer boiling without pulsing',
    features: [
      'Continuous low heat levels 1-3 without on/off cycling',
      'Kanger diamond-beveled crystal glass with 750°C heat resistance',
      'Dual independent slide touch sliders with 9 precise power levels',
      'Auto-shutoff spill detection and child safety lock'
    ]
  },
  'cih-2200': {
    name: 'Chillami UltraSlim Single Induction Hob 2200W',
    tagline: 'Slim profile 3.8cm, Japanese NEG ceramic glass, 10 heat levels',
    features: [
      'Ultra-slim portable design 3.8cm, lightweight and modern',
      'Japanese NEG ceramic glass scratch and shock resistant',
      'Electromagnetic coil with double-layer copper winding',
      'Quiet turbo cooling fan 32dB'
    ]
  },
  'crh-700': {
    name: 'Chillami WhisperAir Range Hood 70cm',
    tagline: 'Gesture wave control, turbo suction 1200m³/h, dual activated carbon',
    features: [
      'Touchless infrared wave sensor control to power on and change speed',
      'High-velocity brushless turbine motor with 1200m³/h airflow',
      'Dual multi-layer aluminum mesh + activated carbon odor filters',
      'Noise damping insulation keeps operating sound below 52dB'
    ]
  },
  'cwh-30t': {
    name: 'Chillami Titanium Safe 30L Storage Water Heater',
    tagline: 'Titanium enameled inner tank, Incoloy 840 heating element, dual TSS',
    features: [
      'Titanium enamel coating prevents limestone deposits and tank corrosion',
      'Incoloy 840 rapid heating element transfers heat 25% faster',
      'Dual TSS & ELCB anti-shock system cuts power in 0.01 seconds',
      'High-density SuperFoam retains heat up to 72 hours'
    ]
  },
  'cwh-20s': {
    name: 'Chillami Slim 20L Horizontal Storage Water Heater',
    tagline: 'Compact horizontal design fits low false ceilings, digital LED display',
    features: [
      'Horizontal compact profile fits narrow false ceiling spaces',
      'Real-time water temperature digital LED display',
      'Antibacterial silver-ion Ag+ inlet purifies bathing water',
      '10-year official warranty on internal tank'
    ]
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Default language is 'vi' as requested by the user
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('chillami_lang');
      return (saved === 'en' || saved === 'vi') ? saved : 'vi';
    } catch {
      return 'vi';
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('chillami_lang', lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

  const t = (key: string, fallback?: string): string => {
    const langDict = translations[language];
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    return fallback || key;
  };

  const translateProduct = (product: Product): Product => {
    if (language === 'vi') return product;
    const override = PRODUCT_EN_TRANSLATIONS[product.id];
    if (!override) return product;
    return {
      ...product,
      ...override,
    };
  };

  const translateProducts = (products: Product[]): Product[] => {
    if (language === 'vi') return products;
    return products.map(translateProduct);
  };

  const formatCurrency = (amount: number): string => {
    if (language === 'en') {
      // Format as USD approximate ($1 ~ 25,000 VND) or VND international
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'VND',
        maximumFractionDigits: 0
      }).format(amount);
    }
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      toggleLanguage,
      t,
      translateProduct,
      translateProducts,
      formatCurrency
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

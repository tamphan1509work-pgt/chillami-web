import { Dealer } from '../types';

export const DEALERS: Dealer[] = [
  {
    id: 'd1',
    name: 'Chillami Flagship Store Hà Nội',
    type: 'Flagship Showroom',
    address: 'Số 168 Đường Láng, Ngã Tư Sở, Q. Đống Đa, Hà Nội',
    province: 'Hà Nội',
    district: 'Đống Đa',
    phone: '024 7300 8899',
    openHours: '08:00 - 21:30 (Thứ 2 - CN)',
    hasParking: true,
    coordinates: { lat: 21.0069, lng: 105.8209 },
    badges: ['Trải nghiệm thực tế', 'Có sẵn hàng tất cả Model', 'Tư vấn viên chuyên sâu']
  },
  {
    id: 'd2',
    name: 'Chillami Experience Center Cầu Giấy',
    type: 'Flagship Showroom',
    address: 'Tầng 1 Tòa nhà Indochina Plaza, 241 Xuân Thủy, Q. Cầu Giấy, Hà Nội',
    province: 'Hà Nội',
    district: 'Cầu Giấy',
    phone: '024 7300 8898',
    openHours: '09:00 - 22:00',
    hasParking: true,
    coordinates: { lat: 21.0366, lng: 105.7831 },
    badges: ['Không gian nhà thông minh', 'Có quầy bảo hành']
  },
  {
    id: 'd3',
    name: 'Chillami Flagship Store TP. Hồ Chí Minh',
    type: 'Flagship Showroom',
    address: 'Số 285 Cách Mạng Tháng Tám, Phường 12, Quận 10, TP.HCM',
    province: 'TP. Hồ Chí Minh',
    district: 'Quận 10',
    phone: '028 7300 6688',
    openHours: '08:00 - 21:30',
    hasParking: true,
    coordinates: { lat: 10.7769, lng: 106.6775 },
    badges: ['Flagship lớn nhất', 'Giao hỏa tốc 2H']
  },
  {
    id: 'd4',
    name: 'Showroom Chillami Thảo Điền (TP. Thủ Đức)',
    type: 'Flagship Showroom',
    address: 'Số 98 Xuân Thủy, P. Thảo Điền, TP. Thủ Đức, TP.HCM',
    province: 'TP. Hồ Chí Minh',
    district: 'Thủ Đức',
    phone: '028 7300 6689',
    openHours: '09:00 - 21:00',
    hasParking: true,
    coordinates: { lat: 10.8041, lng: 106.7328 },
    badges: ['Tư vấn căn hộ cao cấp', 'Hỗ trợ kỹ thuật tại chỗ']
  },
  {
    id: 'd5',
    name: 'Đại lý Điện máy Cao Cấp Phương Đông Đà Nẵng',
    type: 'Đại lý ủy quyền',
    address: 'Số 42 Điện Biên Phủ, Q. Thanh Khê, Đà Nẵng',
    province: 'Đà Nẵng',
    district: 'Thanh Khê',
    phone: '0236 389 9988',
    openHours: '08:00 - 20:30',
    hasParking: true,
    coordinates: { lat: 16.0678, lng: 108.2035 },
    badges: ['Đại lý ủy quyền cấp 1', 'Miễn phí công lắp']
  },
  {
    id: 'd6',
    name: 'Đại lý Ủy quyền Chillami Hải Phòng',
    type: 'Đại lý ủy quyền',
    address: 'Số 112 Lê Lợi, Q. Ngô Quyền, TP. Hải Phòng',
    province: 'Hải Phòng',
    district: 'Ngô Quyền',
    phone: '0225 388 6622',
    openHours: '08:00 - 21:00',
    hasParking: true,
    coordinates: { lat: 20.8561, lng: 106.6822 },
    badges: ['Đại lý ủy quyền', 'Lắp đặt trong ngày']
  },
  {
    id: 'd7',
    name: 'Chillami Authorized Partner Cần Thơ',
    type: 'Đại lý ủy quyền',
    address: 'Số 79 Đại Lộ Hòa Bình, P. Tân An, Q. Ninh Kiều, Cần Thơ',
    province: 'Cần Thơ',
    district: 'Ninh Kiều',
    phone: '0292 373 5566',
    openHours: '08:00 - 21:00',
    hasParking: true,
    coordinates: { lat: 10.0342, lng: 105.7877 },
    badges: ['Đại lý miền Tây', 'Có sẵn linh kiện']
  }
];

export const ONLINE_PARTNERS = [
  {
    name: 'Shopee Mall Chillami Official',
    url: 'https://shopee.vn',
    badge: 'Gian hàng chính hãng 100%',
    desc: 'Ưu đãi freeship extra & mã voucher độc quyền'
  },
  {
    name: 'LazMall Chillami Store',
    url: 'https://lazada.vn',
    badge: 'LazMall Flagship',
    desc: 'Giao nhanh 24h & quà tặng giá trị'
  },
  {
    name: 'TikTok Shop Chillami Việt Nam',
    url: 'https://tiktok.com',
    badge: 'Livestream deal sốc',
    desc: 'Trải nghiệm xem video thực tế và săn flash sale'
  }
];

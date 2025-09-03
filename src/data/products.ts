import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    title: 'E-book Marketing Digital untuk Pemula',
    description: 'Panduan lengkap untuk memulai marketing digital dari nol. Cocok untuk pemula yang ingin memahami strategi pemasaran online modern.',
    price: 149000,
    originalPrice: 199000,
    category: 'ebook',
    coverImage: 'https://images.pexels.com/photos/267586/pexels-photo-267586.jpeg?auto=compress&cs=tinysrgb&w=400',
    downloadUrl: '/downloads/marketing-digital-pemula.pdf',
    isFeatured: true,
    tags: ['marketing', 'digital', 'pemula', 'strategi']
  },
  {
    id: '2',
    title: 'Template Landing Page Modern',
    description: 'Kumpulan 10 template landing page modern dan responsive. Siap pakai untuk bisnis, startup, dan portfolio.',
    price: 299000,
    originalPrice: 399000,
    category: 'template',
    coverImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
    downloadUrl: '/downloads/landing-page-templates.zip',
    isFeatured: true,
    tags: ['landing page', 'modern', 'responsive', 'bisnis']
  },
  {
    id: '3',
    title: 'E-book Investasi Saham Indonesia',
    description: 'Strategi investasi saham di pasar modal Indonesia. Analisis fundamental, teknikal, dan manajemen risiko.',
    price: 179000,
    category: 'ebook',
    coverImage: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=400',
    downloadUrl: '/downloads/investasi-saham-indonesia.pdf',
    isFeatured: false,
    tags: ['investasi', 'saham', 'indonesia', 'keuangan']
  },
  {
    id: '4',
    title: 'Template Dashboard Admin',
    description: 'Template dashboard admin yang clean dan powerful. Cocok untuk sistem management dan monitoring.',
    price: 399000,
    category: 'template',
    coverImage: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400',
    downloadUrl: '/downloads/dashboard-admin-template.zip',
    isFeatured: true,
    tags: ['dashboard', 'admin', 'management', 'monitoring']
  },
  {
    id: '5',
    title: 'Panduan Bisnis Online',
    description: 'Cara memulai dan mengembangkan bisnis online dari nol hingga sukses. Strategi terbukti dan actionable.',
    price: 129000,
    originalPrice: 179000,
    category: 'ebook',
    coverImage: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400',
    downloadUrl: '/downloads/panduan-bisnis-online.pdf',
    isFeatured: false,
    tags: ['bisnis online', 'entrepreneurship', 'strategi', 'sukses']
  },
  {
    id: '6',
    title: 'Template E-commerce Modern',
    description: 'Template website e-commerce lengkap dengan fitur cart, checkout, dan payment integration.',
    price: 499000,
    category: 'template',
    coverImage: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400',
    downloadUrl: '/downloads/ecommerce-template.zip',
    isFeatured: false,
    tags: ['e-commerce', 'modern', 'shopping', 'cart']
  }
];
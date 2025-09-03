export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: 'ebook' | 'template';
  coverImage: string;
  previewImages?: string[];
  downloadUrl: string;
  isFeatured: boolean;
  tags: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  purchasedProducts: string[];
}
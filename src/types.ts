export interface Product {
  id: string;
  name: string;
  description: string;
  price_cents: number;
  image_url: string;
  isFeatured?: boolean;
  category?: string;
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

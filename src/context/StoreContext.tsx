import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product, CartItem, User } from '../types';
import { products } from '../data/products';

interface StoreContextType {
  products: Product[];
  cart: CartItem[];
  user: User | null;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  login: (email: string, password: string) => void;
  logout: () => void;
  purchaseProducts: (items: CartItem[]) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const login = (email: string, password: string) => {
    // Mock login - in real app this would call an API
    const mockUser: User = {
      id: '1',
      name: email.split('@')[0],
      email,
      purchasedProducts: []
    };
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  const purchaseProducts = (items: CartItem[]) => {
    if (user) {
      const productIds = items.map(item => item.product.id);
      setUser(prev => prev ? {
        ...prev,
        purchasedProducts: [...prev.purchasedProducts, ...productIds]
      } : null);
      clearCart();
    }
  };

  return (
    <StoreContext.Provider value={{
      products,
      cart,
      user,
      addToCart,
      removeFromCart,
      clearCart,
      login,
      logout,
      purchaseProducts
    }}>
      {children}
    </StoreContext.Provider>
  );
};
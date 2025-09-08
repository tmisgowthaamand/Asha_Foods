import { useState, useCallback } from 'react';

export interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  createdAt: Date;
}

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  const generateOrderId = useCallback(() => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `ASH-${timestamp}-${random}`;
  }, []);

  const addToCart = useCallback((product: Omit<CartItem, 'quantity'>) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const createOrder = useCallback(() => {
    if (cartItems.length === 0) return null;

    const total = cartItems.reduce((sum, item) => {
      const price = parseFloat(item.price.replace('₹', ''));
      return sum + (price * item.quantity);
    }, 0);

    const order: Order = {
      id: generateOrderId(),
      items: [...cartItems],
      total,
      createdAt: new Date()
    };

    setOrders(prev => [...prev, order]);
    clearCart();
    return order;
  }, [cartItems, generateOrderId, clearCart]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return {
    cartItems,
    cartCount,
    orders,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    createOrder
  };
};

import { createContext, useContext, useState, useCallback, useMemo } from 'react';

const CartContext = createContext(null);

const PRODUCT = {
  id: 'gorilla-grip-100ml',
  name: 'Gorilla Grip — Liquid Chalk (100ML)',
  shortName: 'Liquid Chalk Grip',
  price: 230,
  currency: 'EGP',
  volume: '100ML',
};

// Replace with your actual WhatsApp number (with country code, no + or spaces)
const WHATSAPP_NUMBER = '201097143642';
const FREE_DELIVERY_THRESHOLD = 300;
const DELIVERY_FEE = 50;

export function CartProvider({ children }) {
  const [quantity, setQuantity] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((qty = 1) => {
    setQuantity(prev => prev + qty);
    setIsCartOpen(true);
  }, []);

  const increment = useCallback(() => {
    setQuantity(prev => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setQuantity(prev => Math.max(0, prev - 1));
  }, []);

  const updateQuantity = useCallback((qty) => {
    setQuantity(Math.max(0, qty));
  }, []);

  const clearCart = useCallback(() => {
    setQuantity(0);
  }, []);

  const toggleCart = useCallback(() => {
    setIsCartOpen(prev => !prev);
  }, []);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const total = useMemo(() => quantity * PRODUCT.price, [quantity]);
  const isFreeDelivery = useMemo(() => total >= FREE_DELIVERY_THRESHOLD, [total]);
  const finalTotal = useMemo(() => total + (isFreeDelivery ? 0 : DELIVERY_FEE), [total, isFreeDelivery]);

  const checkoutViaWhatsApp = useCallback((customerDetails = {}) => {
    if (quantity === 0) return;

    const { name = '', phone = '', location = '' } = customerDetails;

    const message = `🦍 *GORILLA GRIP ORDER*
━━━━━━━━━━━━━━━━━
👤 *Customer Details*
Name: ${name || 'N/A'}
Phone: ${phone || 'N/A'}
Location: ${location || 'N/A'}
━━━━━━━━━━━━━━━━━
📦 *Product:* ${PRODUCT.shortName} (${PRODUCT.volume})
🔢 *Quantity:* ${quantity}
💰 *Unit Price:* ${PRODUCT.price} ${PRODUCT.currency}
━━━━━━━━━━━━━━━━━
🛒 *Subtotal:* ${total} ${PRODUCT.currency}
🚚 *Delivery:* ${isFreeDelivery ? 'FREE ✓' : `${DELIVERY_FEE} ${PRODUCT.currency}`}
━━━━━━━━━━━━━━━━━
*💵 FINAL TOTAL: ${finalTotal} ${PRODUCT.currency}*
━━━━━━━━━━━━━━━━━
Please confirm my order. Thank you! 🙏`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }, [quantity, total, finalTotal, isFreeDelivery]);

  const value = {
    product: PRODUCT,
    quantity,
    total,
    finalTotal,
    isCartOpen,
    isFreeDelivery,
    deliveryFee: DELIVERY_FEE,
    freeDeliveryThreshold: FREE_DELIVERY_THRESHOLD,
    addToCart,
    increment,
    decrement,
    updateQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart,
    checkoutViaWhatsApp,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

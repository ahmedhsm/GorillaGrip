import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiXMark, HiPlus, HiMinus, HiTrash } from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    product, quantity, total, finalTotal, isCartOpen, isFreeDelivery, deliveryFee,
    freeDeliveryThreshold, increment, decrement, clearCart,
    closeCart, checkoutViaWhatsApp,
  } = useCart();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [formError, setFormError] = useState('');

  const handleCheckout = () => {
    if (!name.trim() || !phone.trim() || !location.trim()) {
      setFormError('Please fill out all delivery details (Name, Phone, Location).');
      return;
    }
    setFormError('');
    checkoutViaWhatsApp({ name, phone, location });
  };

  // Lock body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isCartOpen]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[200]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md glass-strong z-[201] flex flex-col bg-[#0a0a0a]/90 border-l border-white/[0.06]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
              <h2 className="font-heading text-2xl tracking-[3px] text-brand-white">Your Cart</h2>
              <button
                onClick={closeCart}
                className="p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-brand-muted hover:text-brand-white transition-all duration-300 cursor-pointer"
                aria-label="Close cart"
              >
                <HiXMark className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {quantity === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-20 h-20 rounded-2xl bg-white/[0.03] flex items-center justify-center text-5xl mb-4">🦍</div>
                  <p className="font-display text-xl font-semibold text-brand-white mb-2">Cart is Empty</p>
                  <p className="text-sm text-brand-muted">Add some Gorilla Grip to get started</p>
                </div>
              ) : (
                <div className="space-y-5">
                  {/* Product card */}
                  <div className="glass rounded-2xl p-5">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-sm font-semibold text-brand-white tracking-tight">
                          {product.shortName}
                        </h3>
                        <p className="text-[11px] text-brand-muted mt-1">{product.volume} · Liquid Chalk</p>
                      </div>
                      <button
                        onClick={clearCart}
                        className="p-2 rounded-lg bg-white/[0.03] hover:bg-red-500/10 text-brand-muted hover:text-red-400 transition-all duration-300 cursor-pointer"
                        aria-label="Remove item"
                      >
                        <HiTrash className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center rounded-full bg-white/[0.05] overflow-hidden">
                        <button
                          onClick={decrement}
                          className="w-9 h-9 flex items-center justify-center text-brand-muted hover:text-brand-white hover:bg-white/[0.08] transition-colors cursor-pointer"
                          aria-label="Decrease"
                        >
                          <HiMinus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-10 h-9 flex items-center justify-center text-sm font-semibold text-brand-white border-x border-white/[0.06] font-display">
                          {quantity}
                        </span>
                        <button
                          onClick={increment}
                          className="w-9 h-9 flex items-center justify-center text-brand-muted hover:text-brand-white hover:bg-white/[0.08] transition-colors cursor-pointer"
                          aria-label="Increase"
                        >
                          <HiPlus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-brand-muted">
                          {product.price} × {quantity}
                        </div>
                        <div className="font-heading text-xl text-brand-white">
                          {total} {product.currency}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Delivery info */}
                  <div className={`text-[12px] tracking-[1px] px-4 py-3 rounded-xl ${
                    isFreeDelivery
                      ? 'bg-white/[0.06] border border-white/[0.12] text-white/80'
                      : 'glass text-brand-muted'
                  }`}>
                    {isFreeDelivery
                      ? '🚚 Free delivery on this order!'
                      : `Add ${freeDeliveryThreshold - total} ${product.currency} more for free delivery`
                    }
                  </div>

                  {/* Customer Details Form */}
                  <div className="glass rounded-2xl p-5 space-y-3">
                    <h4 className="text-xs tracking-[1px] uppercase text-brand-muted mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                      Delivery Details
                    </h4>

                    <input
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-brand-white placeholder:text-[#555] focus:outline-none focus:border-white/30 focus:shadow-[0_0_15px_rgba(255,255,255,0.04)] transition-all duration-300"
                    />

                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-brand-white placeholder:text-[#555] focus:outline-none focus:border-white/30 focus:shadow-[0_0_15px_rgba(255,255,255,0.04)] transition-all duration-300"
                    />

                    <textarea
                      placeholder="Full Delivery Address / Location"
                      rows={2}
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-brand-white placeholder:text-[#555] focus:outline-none focus:border-white/30 focus:shadow-[0_0_15px_rgba(255,255,255,0.04)] transition-all duration-300 resize-none"
                    />

                    {formError && (
                      <p className="text-red-400 text-xs mt-1">{formError}</p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Footer / Checkout */}
            {quantity > 0 && (
              <div className="px-6 py-5 border-t border-white/[0.06] space-y-4 bg-black/30">
                {/* Breakdown */}
                <div className="space-y-2 mb-3">
                  <div className="flex items-center justify-between text-xs text-brand-muted">
                    <span>Subtotal</span>
                    <span>{total} {product.currency}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-brand-muted">
                    <span>Delivery Fee</span>
                    <span>{isFreeDelivery ? <span className="text-white/70">FREE</span> : `${deliveryFee} ${product.currency}`}</span>
                  </div>
                </div>

                {/* Final Total */}
                <div className="flex items-center justify-between border-t border-white/[0.06] pt-3">
                  <span className="text-sm text-brand-white tracking-[1px] uppercase font-display font-semibold">Final Total</span>
                  <span className="font-heading text-3xl text-brand-white">{finalTotal} {product.currency}</span>
                </div>

                {/* WhatsApp checkout button */}
                <motion.button
                  id="checkout-whatsapp-btn"
                  whileHover={{ y: -2, boxShadow: '0 0 25px rgba(37,211,102,0.3)' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleCheckout}
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 font-bold text-sm tracking-[2px] uppercase cursor-pointer hover:bg-[#20bd5a] transition-all duration-300 rounded-xl overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
                  <FaWhatsapp className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Checkout via WhatsApp</span>
                </motion.button>

                <p className="text-center text-[10px] text-brand-muted tracking-[1px]">
                  You&apos;ll be redirected to WhatsApp to confirm your order
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { quantity, toggleCart } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-2 px-4 md:px-8'
          : 'py-4 px-6 md:px-10'
      }`}
    >
      <div className={`mx-auto flex items-center justify-between transition-all duration-500 ${
        scrolled
          ? 'max-w-5xl bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-full px-6 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
          : 'max-w-7xl'
      }`}>
        {/* Logo */}
        <a
          href="#"
          className="font-heading text-xl md:text-2xl tracking-[4px] text-brand-white hover:text-brand-accent2 transition-colors duration-300"
        >
          GORILLA GRIP<span className="text-brand-muted">®</span>
        </a>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Cart button */}
          <button
            id="cart-toggle"
            onClick={toggleCart}
            className="relative p-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-brand-white hover:text-white transition-all duration-300 cursor-pointer"
            aria-label="Open cart"
          >
            <HiOutlineShoppingBag className="w-5 h-5" />
            <AnimatePresence>
              {quantity > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-white text-brand-black text-[10px] font-bold rounded-full flex items-center justify-center shadow-[0_0_12px_rgba(255,255,255,0.25)]"
                >
                  {quantity}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Order CTA */}
          <button
            id="nav-order-btn"
            onClick={() => scrollToSection('cta-section')}
            className="hidden sm:flex items-center gap-2 bg-white text-brand-black px-5 py-2 text-xs font-bold tracking-[1px] uppercase rounded-full hover:bg-brand-accent2 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 cursor-pointer"
          >
            <span>Order Now</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

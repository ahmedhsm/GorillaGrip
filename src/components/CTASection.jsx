import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiPlus, HiMinus } from 'react-icons/hi2';
import { useCart } from '../context/CartContext';

export default function CTASection() {
  const { product, addToCart, freeDeliveryThreshold } = useCart();
  const [qty, setQty] = useState(1);

  const handleAdd = () => {
    addToCart(qty);
    setQty(1);
  };

  return (
    <section id="cta-section" className="relative py-32 md:py-44 px-6 md:px-10 text-center bg-brand-black text-brand-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-30 bg-cover md:bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/land.png)' }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-brand-black/40" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-black/60 to-transparent" />

      {/* Animated blobs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-white/[0.03] rounded-full blur-[100px] animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-white/[0.02] rounded-full blur-[80px] animate-blob pointer-events-none" style={{ animationDelay: '-3s' }} />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] px-4 py-1.5 rounded-full text-[11px] tracking-[3px] uppercase text-[#aaa] mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Get Yours
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-5xl md:text-6xl tracking-wide text-brand-white mb-6"
        >
          Ready To <span className="text-brand-muted">Grip?</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="font-heading text-7xl md:text-8xl tracking-wide text-brand-white mb-2 drop-shadow-xl"
        >
          {product.price} {product.currency}
        </motion.div>

        <p className="text-[13px] text-[#888] tracking-[2px] mb-8">
          {product.volume} · Free delivery on orders above {freeDeliveryThreshold} {product.currency}
        </p>

        {/* Product Card Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="w-44 h-44 md:w-56 md:h-56 mx-auto glass rounded-[2rem] flex items-center justify-center p-4 hover:bg-white/[0.06] transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/[0.1]">
            <img 
              src="/cardprod.png" 
              alt="Gorilla Grip Liquid Chalk" 
              className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)] hover:scale-110 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Quantity + Add to Cart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          {/* Quantity selector */}
          <div className="flex items-center glass rounded-full overflow-hidden">
            <button
              onClick={() => setQty(q => Math.max(1, q - 1))}
              className="w-12 h-12 flex items-center justify-center hover:bg-white/[0.08] transition-colors cursor-pointer text-white"
              aria-label="Decrease quantity"
            >
              <HiMinus className="w-4 h-4" />
            </button>
            <span className="w-14 h-12 flex items-center justify-center text-lg font-semibold border-x border-white/[0.08] text-white font-display">
              {qty}
            </span>
            <button
              onClick={() => setQty(q => q + 1)}
              className="w-12 h-12 flex items-center justify-center hover:bg-white/[0.08] transition-colors cursor-pointer text-white"
              aria-label="Increase quantity"
            >
              <HiPlus className="w-4 h-4" />
            </button>
          </div>

          {/* Add to cart button */}
          <motion.button
            id="add-to-cart-btn"
            whileHover={{ y: -2, boxShadow: '0 0 30px rgba(255,255,255,0.15)' }}
            whileTap={{ scale: 0.97 }}
            onClick={handleAdd}
            className="relative bg-white text-brand-black px-10 py-3.5 font-bold text-sm tracking-[2px] uppercase cursor-pointer rounded-full hover:bg-brand-accent2 transition-all duration-300 overflow-hidden"
          >
            {/* Shimmer overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
            <span className="relative z-10">Add to Cart →</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

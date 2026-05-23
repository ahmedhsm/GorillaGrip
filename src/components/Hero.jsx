import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

export default function Hero() {
  const { addToCart } = useCart();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-brand-black">
      {/* Animated gradient blobs */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/[0.03] blur-[120px] animate-blob" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-white/[0.02] blur-[100px] animate-blob" style={{ animationDelay: '-4s' }} />

      {/* Grid dot pattern */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-16">
        {/* Main grid: always 2 columns, text left / image right */}
        <div className="grid grid-cols-[1fr_auto] sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center">

          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-20"
          >
            {/* Pill tag */}
            <div className="inline-flex items-center gap-2 bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] tracking-[2px] uppercase text-brand-muted mb-5 lg:mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Made in Egypt · 100ML
            </div>

            {/* Title */}
            <h1 className="font-heading text-[44px] sm:text-[64px] md:text-[80px] lg:text-[110px] leading-[0.9] tracking-wide text-brand-white mb-3">
              NO<br />
              SWEAT.<br />
              <span className="text-brand-muted">MAX</span><br />
              GRIP.
            </h1>

            {/* Tagline */}
            <p className="text-[11px] sm:text-[13px] tracking-[4px] sm:tracking-[6px] uppercase text-brand-muted mb-5 lg:mb-8 mt-2">
              Liquid Chalk Grip
            </p>

            {/* Description — hidden on very small, shown on sm+ */}
            <p className="hidden sm:block text-[14px] lg:text-[15px] leading-relaxed text-[#777] max-w-md mb-8 lg:mb-10">
              Premium liquid chalk designed to keep your hands dry, powerful, and in control. Built for athletes who refuse to slip.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
              <motion.button
                id="hero-order-btn"
                whileHover={{ y: -2, boxShadow: '0 0 25px rgba(255,255,255,0.15)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('cta-section')}
                className="bg-white text-brand-black px-7 sm:px-9 py-3.5 sm:py-4 font-bold text-[12px] sm:text-[13px] tracking-[2px] uppercase cursor-pointer rounded-full hover:bg-brand-accent2 transition-all duration-300 text-center"
              >
                Order Now
              </motion.button>
              <motion.button
                id="hero-howto-btn"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('howto')}
                className="bg-transparent text-brand-white border border-white/[0.15] px-7 sm:px-9 py-3.5 sm:py-4 font-medium text-[12px] sm:text-[13px] tracking-[2px] uppercase cursor-pointer hover:border-white/[0.3] hover:bg-white/[0.03] transition-all duration-300 rounded-full text-center"
              >
                See How It Works
              </motion.button>
            </div>
          </motion.div>

          {/* Right: Product visual */}
          <motion.div
            className="flex justify-center items-center relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          >
            {/* Rotating glow ring */}
            <div className="absolute w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] rounded-full animate-spin-slow opacity-20"
              style={{
                background: 'conic-gradient(from 0deg, transparent, rgba(255,255,255,0.1), transparent, rgba(255,255,255,0.05), transparent)',
              }}
            />

            {/* Glow blob behind image */}
            <div className="absolute w-[140px] h-[140px] sm:w-[250px] sm:h-[250px] md:w-[320px] md:h-[320px] rounded-full bg-white/[0.04] blur-[40px] sm:blur-[60px] animate-pulse-glow" />

            {/* Product image */}
            <img
              src="/pro1.png"
              alt="Gorilla Grip Liquid Chalk"
              className="animate-float relative w-[150px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto object-contain rounded-2xl md:rounded-3xl border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            />
          </motion.div>
        </div>

        {/* Mobile-only description below the grid */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="sm:hidden text-[13px] leading-relaxed text-[#777] mt-8"
        >
          Premium liquid chalk designed to keep your hands dry, powerful, and in control. Built for athletes who refuse to slip.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 rounded-full border border-white/[0.12] flex justify-center pt-2">
          <div className="w-1 h-2.5 bg-gradient-to-b from-white/60 to-white/20 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { HiLightBulb } from 'react-icons/hi2';

export default function ProTip() {
  return (
    <motion.div
      id="pro-tip"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-6 md:mx-10 my-12 max-w-6xl lg:mx-auto"
    >
      <div className="gradient-border glass rounded-2xl p-6 md:p-7 flex items-start md:items-center gap-5 hover:bg-white/[0.05] transition-all duration-300">
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-white/[0.06] flex items-center justify-center animate-glow-pulse">
            <HiLightBulb className="w-5 h-5 text-white/70" />
          </div>
          <span className="font-display text-sm font-semibold tracking-tight text-brand-white">Pro Tip</span>
        </div>
        <p className="text-[13px] text-brand-muted leading-relaxed">
          Layer for extra dryness on heavy sweat days. Apply a second coat before your heaviest sets for iron-lock grip.
        </p>
      </div>
    </motion.div>
  );
}

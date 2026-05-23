import { motion } from 'framer-motion';

const ingredients = [
  'Alcohol Denat.', 'Magnesium Carbonate', 'Aloe Barbadensis Leaf Extract',
  'Rosin', 'Water (Aqua)', 'Silica', 'Glycerin', 'Fragrance',
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="py-16 px-6 md:px-10 bg-brand-gray relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] px-4 py-1.5 rounded-full text-[11px] tracking-[3px] uppercase text-brand-muted mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
          Formula
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl tracking-wide text-brand-white mb-8"
        >
          What&apos;s <span className="text-brand-muted">Inside.</span>
        </motion.h2>

        <div className="flex flex-wrap gap-3">
          {ingredients.map((ing, i) => (
            <motion.span
              key={ing}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-full px-5 py-2.5 text-[12px] tracking-[1px] text-[#888] hover:text-brand-white hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.04)] transition-all duration-300 cursor-default"
            >
              {ing}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

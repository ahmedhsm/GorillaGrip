import { motion } from 'framer-motion';

const sports = [
  { icon: '🤸', name: 'Calisthenics' },
  { icon: '🏋️', name: 'Weightlifting' },
  { icon: '🧗', name: 'Climbing' },
  { icon: '💪', name: 'CrossFit' },
];

export default function Sports() {
  return (
    <section id="sports" className="py-20 px-6 md:px-10 bg-brand-gray relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] px-4 py-1.5 rounded-full text-[11px] tracking-[3px] uppercase text-brand-muted mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
          Works For
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-5xl md:text-6xl tracking-wide text-brand-white mb-12"
        >
          Your <span className="text-brand-muted">Sport.</span>
        </motion.h2>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-4 scrollbar-hide snap-x snap-mandatory">
          {sports.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="min-w-[200px] md:min-w-0 snap-start glass rounded-2xl py-10 px-6 text-center transition-all duration-300 cursor-default group hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(255,255,255,0.03)]"
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-white/[0.05] flex items-center justify-center text-4xl md:text-5xl mb-5 group-hover:scale-110 group-hover:bg-white/[0.08] transition-all duration-300">
                {s.icon}
              </div>
              <div className="font-display text-lg md:text-xl font-semibold text-brand-white tracking-tight">
                {s.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

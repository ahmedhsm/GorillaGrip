import { motion } from 'framer-motion';

const features = [
  {
    icon: '⚡',
    title: 'Dries Fast',
    desc: 'Apply and go. Dries in 7~10 seconds so you never lose momentum between sets.',
    span: 'md:col-span-2',
  },
  {
    icon: '🦍',
    title: 'Maximum Grip',
    desc: 'Magnesium carbonate formula locks your grip so you focus on performance, not the bar.',
    span: '',
  },
  {
    icon: '🌿',
    title: 'Aloe Vera Enriched',
    desc: 'Skin-friendly formula with Aloe Barbadensis extract. Train hard, recover soft.',
    span: '',
  },
  {
    icon: '⏱',
    title: 'Long-Lasting',
    desc: 'One application carries you through your entire session — no reapplying every set.',
    span: '',
  },
  {
    icon: '🚫',
    title: 'Non-Slip Formula',
    desc: 'Engineered to eliminate sweat-related slippage under high-intensity training conditions.',
    span: '',
  },
  {
    icon: '🇪🇬',
    title: 'Made in Egypt',
    desc: 'Locally made with premium ingredients. Built for Egyptian athletes, by Egyptian athletes.',
    span: 'md:col-span-2',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 md:px-10 bg-brand-black relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] px-4 py-1.5 rounded-full text-[11px] tracking-[3px] uppercase text-brand-muted mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
          Why Gorilla Grip
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-5xl md:text-6xl tracking-wide text-brand-white mb-12"
        >
          Built <span className="text-brand-muted">Different.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`glass rounded-2xl p-7 md:p-8 group hover:bg-white/[0.06] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] ${f.span}`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center text-2xl mb-5 group-hover:scale-110 group-hover:bg-white/[0.08] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.06)] transition-all duration-300">
                {f.icon}
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold text-brand-white mb-2 tracking-tight">
                {f.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-brand-muted">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

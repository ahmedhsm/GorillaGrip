import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Apply', desc: 'Apply a small amount to dry hands', image: '/step.jpeg' },
  { num: '02', title: 'Spread', desc: 'Spread evenly across palms and fingers', image: '/step2_clean.png' },
  { num: '03', title: 'Dry', desc: 'Let dry for 3–5 seconds', image: '/step3_clean.png' },
  { num: '04', title: 'Train', desc: 'Train with full confidence and maximum grip', image: '/step4_clean.png' },
];

export default function HowToUse() {
  return (
    <section id="howto" className="py-20 px-6 md:px-10 bg-brand-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] px-4 py-1.5 rounded-full text-[11px] tracking-[3px] uppercase text-brand-muted mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
          How To Use
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-5xl md:text-6xl tracking-wide text-brand-white mb-14"
        >
          Simple. <span className="text-brand-muted">Effective.</span>
        </motion.h2>

        {/* Timeline layout */}
        <div className="relative">
          {/* Connecting gradient line (desktop) */}
          <div className="hidden lg:block absolute top-[40px] left-0 right-0 h-[2px] bg-gradient-to-r from-white/20 via-white/10 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="relative group flex flex-col h-full"
              >
                {/* Step number circle */}
                <div className="w-[56px] h-[56px] rounded-2xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-white/[0.1] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.06)] transition-all duration-300 relative z-10 shrink-0">
                  <span className="font-heading text-xl text-white/80">{step.num}</span>
                </div>

                {/* Card content */}
                <div className="glass rounded-2xl p-6 group-hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden flex-1 flex flex-col justify-end min-h-[160px]">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-300 mix-blend-luminosity"
                    style={{ backgroundImage: `url(${step.image})` }}
                  />
                  {/* Gradient Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent" />

                  <div className="relative z-10 mt-auto">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-brand-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-brand-muted group-hover:text-gray-300 transition-colors">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

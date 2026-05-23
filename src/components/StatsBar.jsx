import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: 3, suffix: 's', label: 'Dries In', icon: '⚡' },
  { value: 100, suffix: 'ML', label: 'Net Volume', icon: '📦' },
  { value: 4, suffix: '+', label: 'Sports Ready', icon: '🏆' },
  { value: 0, suffix: '%', label: 'Slip Rate', icon: '🎯' },
];

function AnimatedNumber({ value, suffix }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1500;
          const steps = 40;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className="font-heading text-4xl md:text-5xl tracking-wide gradient-text">
      {count}{suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <div id="stats-bar" className="py-8 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass rounded-2xl p-6 text-center group hover:bg-white/[0.05] transition-all duration-300"
          >
            <div className="text-2xl mb-3">{stat.icon}</div>
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            <div className="text-[11px] tracking-[2px] text-brand-muted uppercase mt-2">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

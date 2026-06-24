"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

// Reusable animated counter component
function Counter({ from = 0, to, suffix = "", duration = 2 }: { from?: number, to: number, suffix?: string, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && ref.current) {
      animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = latest.toFixed(0) + suffix;
          }
        },
      });
    }
  }, [isInView, from, to, suffix, duration]);

  return <span ref={ref} className="tabular-nums">{from}{suffix}</span>;
}

export default function Stats() {
  const stats = [
    { label: "Projects Completed", value: 150, suffix: "+" },
    { label: "Communities Built", value: 25, suffix: "+" },
    { label: "Bots Developed", value: 40, suffix: "+" },
    { label: "Thumbnails Created", value: 500, suffix: "+" },
  ];

  return (
    <section className="py-24 bg-background border-b border-primary/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-5xl md:text-7xl font-bold text-primary tracking-tighter mb-4">
                <Counter to={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-sm md:text-base font-mono text-accent uppercase tracking-widest font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
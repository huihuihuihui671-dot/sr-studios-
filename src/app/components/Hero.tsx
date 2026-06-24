"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center z-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Sub-label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm"
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase font-semibold">
            UK (Sarthak Raj) • SR Studios
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="overflow-hidden mb-6"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-primary">
            SR STUDIOS
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-primary/70 font-medium max-w-2xl mx-auto mb-10"
        >
          Designing visuals that stop the scroll and communities that never stop growing.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="px-8 py-4 w-full sm:w-auto bg-primary text-background rounded-full font-semibold tracking-wide hover:bg-accent transition-colors duration-300" data-cursor="hover">
            View Portfolio
          </button>
          <button className="px-8 py-4 w-full sm:w-auto bg-transparent border-2 border-primary text-primary rounded-full font-semibold tracking-wide hover:bg-highlight transition-colors duration-300" data-cursor="hover">
            Join Discord
          </button>
        </motion.div>
        
      </div>
    </section>
  );
}
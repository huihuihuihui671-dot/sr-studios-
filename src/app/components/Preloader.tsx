"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock scrolling while the loader is active
    document.body.style.overflow = "hidden";

    // Simulate loading progress with realistic random jumps
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Wait a moment at 100% before sliding up
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "auto";
          }, 800); 
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5; 
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          // Custom apple-ease transition for the slide-out
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-primary text-background"
        >
          {/* Text Reveal Animation */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter"
            >
              SR STUDIOS
            </motion.h1>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-48 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.2 }}
              />
            </div>
            <span className="font-mono text-sm w-10 text-accent">{progress}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
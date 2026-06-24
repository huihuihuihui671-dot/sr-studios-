"use client";

import { motion } from "framer-motion";
import { Star, Heart, Sparkles, Circle } from "lucide-react";
import { useEffect, useState } from "react";

// We create an array of random positions and delays so the elements look natural
export default function AnimatedBackground() {
  const [elements, setElements] = useState<any[]>([]);

  useEffect(() => {
    // Generate the floating elements only on the client to avoid hydration mismatches
    const generatedElements = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      size: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
      type: i % 4, // 0: Star, 1: Heart, 2: Sparkles, 3: Circle
    }));
    setElements(generatedElements);
  }, []);

  const renderIcon = (type: number, size: number) => {
    const props = { size, className: "text-accent/30" }; // 30% opacity green
    switch (type) {
      case 0: return <Star {...props} />;
      case 1: return <Heart {...props} />;
      case 2: return <Sparkles {...props} />;
      case 3: return <Circle {...props} strokeWidth={1} />;
      default: return <Star {...props} />;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute"
          style={{ left: `${el.x}%`, top: `${el.y}%` }}
          animate={{
            y: ["0%", "-100%", "0%"],
            x: ["0%", "50%", "0%"],
            rotate: [0, 360],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            ease: "linear",
            delay: el.delay,
          }}
        >
          {renderIcon(el.type, el.size)}
        </motion.div>
      ))}
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  // Start the cursor off-screen so it doesn't flash in the top left corner
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics for that premium, fluid drag effect
  const springConfig = { damping: 25, stiffness: 700, mass: 0.1 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Update Framer Motion coordinates
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Detect if the mouse is hovering over an interactive element
      const target = e.target as HTMLElement;
      const isClickable = target.closest("a, button, [data-cursor='hover']");
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference flex items-center justify-center text-background font-mono text-[10px] tracking-widest font-bold"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isHovering ? 80 : 16,
        height: isHovering ? 80 : 16,
        backgroundColor: isHovering ? "#E8F0DF" : "#7A956B",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      {/* Show text only when expanded */}
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovering ? 1 : 0 }}
        className="pointer-events-none"
      >
        VIEW
      </motion.span>
    </motion.div>
  );
}
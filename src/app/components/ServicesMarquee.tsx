"use client";

import { motion } from "framer-motion";

export default function ServicesMarquee() {
  // Your core services
  const services = [
    "GRAPHIC DESIGN",
    "DISCORD BOTS",
    "THUMBNAIL ART",
    "COMMUNITY MANAGEMENT",
    "STREAM ASSETS",
  ];

  // We duplicate the array a few times to ensure the loop is seamless
  const marqueeItems = [...services, ...services, ...services, ...services];

  return (
    <section className="py-20 bg-background overflow-hidden flex flex-col justify-center border-y border-primary/10">
      
      {/* Marquee Track container */}
      <div className="relative w-full flex overflow-hidden">
        
        <motion.div
          className="flex whitespace-nowrap items-center"
          // Animate from 0 to -50% to create a perfect infinite loop since we duplicated the content
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20, // Adjust this to make it faster or slower
          }}
        >
          {marqueeItems.map((item, index) => (
            <div key={index} className="flex items-center">
              {/* Massive outlined text for that premium agency feel */}
              <span 
                className="text-7xl md:text-9xl font-bold tracking-tighter mx-8 text-transparent"
                style={{ WebkitTextStroke: "2px #111111" }} // Primary color outline
              >
                {item}
              </span>
              
              {/* The Star separator */}
              <span className="text-accent text-5xl md:text-7xl mx-4">
                ✦
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
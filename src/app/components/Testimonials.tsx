"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  // Tailored placeholder data reflecting your diverse skill set
  const testimonials = [
    {
      name: "Doma Live",
      role: "Gaming Content Creator",
      text: "The thumbnails grab immediate attention. The CTR skyrocketed on my channel, and the New Year stream package was absolutely flawless.",
      rating: 5,
    },
    {
      name: "Rani Priya & Rajnish",
      role: "Event Clients",
      text: "The cinematic wedding invitations and stationery for our Haldi, Mehendi, and Wedding ceremonies were breathtaking. Incredible attention to detail.",
      rating: 5,
    },
    {
      name: "Nexus Gaming",
      role: "Discord Community",
      text: "The AI moderation and custom economy bots completely transformed our server. Community engagement is at an all-time high.",
      rating: 5,
    },
    {
      name: "Alex M.",
      role: "Esports Team Manager",
      text: "Premium stream overlays and banners. Sarthak understands the gaming aesthetic perfectly while keeping the design clean and professional.",
      rating: 5,
    },
  ];

  // Duplicate for a seamless infinite loop
  const carouselItems = [...testimonials, ...testimonials];

  return (
    <section className="py-32 overflow-hidden bg-primary relative z-10">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-background mb-4">
          Client Feedback
        </h2>
        <p className="text-background/60 font-mono tracking-widest uppercase text-sm">
          The reputation behind the studio
        </p>
      </div>

      {/* Infinite Carousel Track */}
      <div className="relative w-full flex overflow-hidden">
        
        {/* Gradient fades on the edges for a premium look */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex gap-6 items-center px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // Adjust speed here
          }}
          // Pause the loop when the user hovers to read
          whileHover={{ animationPlayState: "paused" }}
        >
          {carouselItems.map((testimonial, index) => (
            <div
              key={index}
              className="w-[350px] md:w-[450px] shrink-0 p-8 rounded-3xl bg-background/5 backdrop-blur-md border border-background/10 text-background"
              data-cursor="hover"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-lg leading-relaxed mb-8 opacity-90">
                "{testimonial.text}"
              </p>
              
              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm opacity-50 font-mono">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
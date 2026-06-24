"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Temporary dummy data until we connect the PostgreSQL database
const projects = [
  { id: 1, title: "Doma Live Stream Package", category: "Stream Assets", height: "h-[400px]", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "E-Sports Tournament", category: "Thumbnails", height: "h-[250px]", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "Nexus Economy Bot", category: "Discord Projects", height: "h-[350px]", img: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Rani & Rajnish Event", category: "Graphic Design", height: "h-[500px]", img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop" },
  { id: 5, title: "Apex Legends Thumbnail", category: "Thumbnails", height: "h-[250px]", img: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800&auto=format&fit=crop" },
  { id: 6, title: "Valorant Overlay", category: "Stream Assets", height: "h-[350px]", img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop" },
];

const categories = ["All", "Thumbnails", "Stream Assets", "Discord Projects", "Graphic Design"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  return (
    <section className="py-32 px-6 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary mb-4">
              Selected Works
            </h2>
            <p className="text-xl text-primary/60 font-medium max-w-md">
              A curated collection of visual designs and Discord ecosystems.
            </p>
          </div>

          {/* Filtering System */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                data-cursor="hover"
                className={`px-5 py-2 rounded-full font-mono text-sm tracking-wide transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-primary text-background"
                    : "bg-transparent border border-primary/20 text-primary hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className={`relative w-full rounded-2xl overflow-hidden group cursor-pointer ${project.height}`}
                data-cursor="hover"
              >
                {/* Project Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.img})` }}
                />
                
                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Project Info (Slides up on hover) */}
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-accent font-mono text-xs uppercase tracking-widest mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
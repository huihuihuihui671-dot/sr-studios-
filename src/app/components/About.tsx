"use client";

import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { title: "Graphic Design", desc: "Cinematic event stationery, branding, and stream packages." },
    { title: "Thumbnail Art", desc: "High-CTR visuals tailored for gaming creators and streamers." },
    { title: "Discord Bots", desc: "Custom AI moderation, economy, and ticket systems." },
    { title: "Community Building", desc: "Scaling, retaining, and managing highly active server communities." }
  ];

  return (
    <section className="relative w-full py-32 px-6 bg-primary text-background z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Sticky Intro */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-sm font-mono text-accent mb-4 tracking-widest uppercase font-bold"
            >
              The Mind Behind The Studio
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
            >
              UK <br/> <span className="text-3xl md:text-5xl text-background/50">(Sarthak Raj)</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="text-xl text-background/70 font-medium max-w-md"
            >
              Bridging the gap between scroll-stopping visual design and highly functional Discord ecosystems.
            </motion.p>
          </div>

          {/* Right Side: Story & Bento Grid */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-lg md:text-xl text-background/80 leading-relaxed font-medium"
            >
              <p className="mb-6">
                I am a multidisciplinary creator specializing in high-impact graphics and comprehensive digital communities. My work spans across multiple domains, ensuring brands and creators not only look premium but function flawlessly.
              </p>
              <p>
                From crafting high-engagement thumbnails for gaming streamers like Doma Live, to designing elegant, highly detailed event stationery for clients like Rani Priya & Rajnish, I adapt my visual language to perfectly fit the medium, the message, and the audience.
              </p>
            </motion.div>

            {/* Bento Box Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.1 * i }}
                  className="p-8 rounded-3xl bg-background/5 border border-background/10 hover:border-accent/50 hover:bg-background/10 transition-all duration-300"
                  data-cursor="hover"
                >
                  <h4 className="text-2xl font-bold mb-3 text-highlight">{skill.title}</h4>
                  <p className="text-base text-background/60">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
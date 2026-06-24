"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative w-full bg-primary text-background z-10 pt-32 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          {/* Left Side: Copy & Info */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
            >
              Let's build <br /> something <span className="text-accent">iconic.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-background/70 max-w-md mb-12 font-medium"
            >
              Whether you need high-CTR thumbnails, a custom Discord ecosystem, or a complete brand overhaul, I'm ready to bring your vision to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 font-mono text-sm uppercase tracking-widest text-background/50"
            >
              <p>Email: <a href="mailto:hello@srstudios.com" className="text-accent hover:text-highlight transition-colors" data-cursor="hover">hello@srstudios.com</a></p>
              <p>Discord: <span className="text-background">@sarthakraj</span></p>
              <p>Location: <span className="text-background">Remote / Global</span></p>
            </motion.div>
          </div>

          {/* Right Side: The Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-background/5 p-8 md:p-12 rounded-3xl border border-background/10 backdrop-blur-sm"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono tracking-widest text-background/60 uppercase">Name</label>
                  <input type="text" placeholder="John Doe" className="bg-transparent border-b border-background/20 py-3 text-background focus:outline-none focus:border-accent transition-colors" data-cursor="hover" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono tracking-widest text-background/60 uppercase">Email</label>
                  <input type="email" placeholder="john@example.com" className="bg-transparent border-b border-background/20 py-3 text-background focus:outline-none focus:border-accent transition-colors" data-cursor="hover" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono tracking-widest text-background/60 uppercase">Service</label>
                  <select className="bg-transparent border-b border-background/20 py-3 text-background focus:outline-none focus:border-accent transition-colors appearance-none" data-cursor="hover">
                    <option className="bg-primary text-background">Thumbnails & Art</option>
                    <option className="bg-primary text-background">Discord Bots & Setup</option>
                    <option className="bg-primary text-background">Stream Packages</option>
                    <option className="bg-primary text-background">Full Branding</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono tracking-widest text-background/60 uppercase">Budget</label>
                  <select className="bg-transparent border-b border-background/20 py-3 text-background focus:outline-none focus:border-accent transition-colors appearance-none" data-cursor="hover">
                    <option className="bg-primary text-background">$100 - $500</option>
                    <option className="bg-primary text-background">$500 - $1000</option>
                    <option className="bg-primary text-background">$1000+</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <label className="text-xs font-mono tracking-widest text-background/60 uppercase">Project Details</label>
                <textarea rows={4} placeholder="Tell me about your goals..." className="bg-transparent border-b border-background/20 py-3 text-background focus:outline-none focus:border-accent transition-colors resize-none" data-cursor="hover"></textarea>
              </div>

              <button className="mt-6 w-full py-4 bg-accent text-primary font-bold tracking-widest uppercase rounded-full hover:bg-highlight transition-colors duration-300" data-cursor="hover">
                Send Inquiry
              </button>
            </form>
          </motion.div>

        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-background/10 text-sm font-mono text-background/40">
          <p>© {new Date().getFullYear()} SR STUDIOS. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors" data-cursor="hover">Twitter / X</a>
            <a href="#" className="hover:text-accent transition-colors" data-cursor="hover">Instagram</a>
            <a href="#" className="hover:text-accent transition-colors" data-cursor="hover">Discord</a>
          </div>
        </div>
      </div>
    </section>
  );
}
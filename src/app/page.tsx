import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesMarquee from "@/components/ServicesMarquee";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero Section Container */}
      <div className="relative h-screen w-full">
        <AnimatedBackground />
        <Hero />
      </div>

      {/* About Section (Dark) */}
      <About />

      {/* Infinite Services Marquee (Light) */}
      <ServicesMarquee />
      
      {/* Portfolio Masonry Grid (Light) */}
      <Portfolio />
      
      {/* Testimonials Carousel (Dark) */}
      <Testimonials />

      {/* Animated Stats (Light) */}
      <Stats />
      
      {/* Spacer for footer/contact */}
      <div className="h-[20vh] flex items-center justify-center bg-background">
        <p className="font-mono text-accent">Next up: Contact Footer ↓</p>
      </div>
    </div>
  );
}
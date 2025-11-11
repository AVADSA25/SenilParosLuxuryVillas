import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import waveIcon from "@assets/ChatGPT Image Oct 21, 2025, 12_56_10 PM (1)_1761049770147.png";
import logoImage from "@assets/ChatGPT Image Oct 21, 2025, 02_42_29 PM (1)-3_1761052593840.png";
import heroVideo from "@assets/860497b9-de9a-444e-a6a6-861649914c40_1761070130520.mp4";

const navItems = [
  { label: "Villas", href: "#villas" },
  { label: "Lifestyle", href: "#lifestyle" },
  { label: "Key Features", href: "#features" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Film", href: "#film" },
  { label: "Partners", href: "#partners" },
  { label: "Why Greece", href: "#greece" },
  { label: "Location", href: "#location" },
  { label: "Brochure", href: "#brochure" },
  { label: "Ownership", href: "#timeline" },
  { label: "Viewing", href: "#viewing" },
  { label: "Contact", href: "#contact" },
];

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    
    setTimeout(() => {
      const element = document.querySelector(id);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 100;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-0 right-0 z-50 bg-transparent border-0 p-0"
        aria-label="Toggle menu"
        data-testid="burger-menu-button"
      >
        <img 
          src={waveIcon}
          alt="Menu"
          className="w-16 h-16"
          data-testid="wave-icon"
        />
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed top-0 right-0 z-40 bg-graphite border border-ash/20"
              style={{ width: "160px", height: "64px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              data-testid="menu-icon-background"
            />
            <motion.nav
              className="fixed top-16 right-0 z-50 bg-graphite border border-ash/20"
              style={{ width: "160px" }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              data-testid="dropdown-menu"
            >
              <div className="py-4 px-5 max-h-[70vh] overflow-y-auto">
                {navItems.map((item, index) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center justify-between w-full py-2.5 text-ash hover:text-white transition-colors group"
                    data-testid={`nav-${item.label.toLowerCase()}`}
                    style={{ color: "var(--ash)" }}
                  >
                    <span className="text-xs opacity-40 group-hover:opacity-60">•</span>
                    <span className="text-sm">{item.label}</span>
                  </button>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted={true}
          playsInline
          className="video-background"
          data-testid="hero-video"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 text-center text-white flex flex-col justify-end h-screen pb-12">
        <img 
          src={logoImage}
          alt="SENIL"
          className="mx-auto mb-4 w-[500px] max-w-[85vw]"
          data-testid="logo-hero"
        />
        <p
          className="text-xl md:text-2xl mb-3 font-display font-light max-w-2xl mx-auto"
          style={{ color: 'var(--ash)' }}
          data-testid="text-hero-subtitle"
        >
          Luxurious villas in Paros
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="rounded-full px-8 bg-primary text-primary-foreground border border-primary-border"
            onClick={() => scrollToSection("#contact")}
            data-testid="button-request-viewing"
          >
            Request Viewing
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20"
            onClick={() => scrollToSection("#brochure")}
            data-testid="button-download-brochure"
          >
            Download Brochure
          </Button>
        </div>
      </div>
    </section>
  );
}
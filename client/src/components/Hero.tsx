import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import waveIcon from "@assets/ChatGPT Image Oct 21, 2025, 12_56_10 PM (1)_1761049770147.png";

const HERO_IMAGE = "https://i.imgur.com/NgkAQhs.png";

const navItems = [
  { label: "Villas", href: "#villas" },
  { label: "Design", href: "#design" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="absolute top-8 left-8 z-50 bg-transparent border-0 p-0"
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
          <motion.nav
            className="absolute top-24 left-8 z-50 bg-graphite rounded-md overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            data-testid="dropdown-menu"
          >
            <div className="py-4 px-6 min-w-[200px]">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 text-ash hover:text-white transition-colors"
                  data-testid={`nav-${item.label.toLowerCase()}`}
                  style={{ color: "var(--ash)" }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 text-center text-white flex flex-col justify-end h-screen pb-12">
        <p
          className="text-xl md:text-2xl mb-3 text-white/90 font-light max-w-2xl mx-auto"
          data-testid="text-hero-subtitle"
        >
          Luxurious villas in Isterni, Paros
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
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import waveIcon from "@assets/ChatGPT Image Oct 21, 2025, 12_56_10 PM (1)_1761046917866.png";

const navItems = [
  { label: "Villas", href: "#villas" },
  { label: "Design", href: "#design" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="sticky top-0 z-40"
      role="banner"
      data-testid="header-main"
    >
      <div className={`max-w-[1200px] mx-auto px-8 transition-all duration-300 ${
        isMenuOpen ? "bg-graphite" : ""
      }`}>
        <div className="h-16 flex items-center justify-end">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="bg-transparent border-0 p-0"
            aria-label="Toggle menu"
            data-testid="wave-menu-button"
          >
            <img 
              src={waveIcon} 
              alt="Menu" 
              width={64} 
              height={64}
              className="block"
              style={{ background: 'transparent' }}
              data-testid="wave-icon"
            />
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              data-testid="mobile-menu-dropdown"
            >
              <div className="py-4 border-t border-border/30">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-0 py-3 text-foreground/70 hover:text-foreground transition-colors"
                    data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
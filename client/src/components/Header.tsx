import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import waveIcon from "@assets/ChatGPT Image Oct 21, 2025, 12_56_10 PM (1)_1761046917866.png";

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

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 64;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  return (
    <header
      className="sticky top-0 z-40 bg-transparent"
      role="banner"
      data-testid="header-main"
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="h-16 flex items-center justify-end bg-transparent">
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
              data-testid="wave-icon"
            />
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className={`bg-graphite`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              data-testid="mobile-menu-dropdown"
            >
              <div className="py-4 border-t border-white/30 max-h-[70vh] overflow-y-auto">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-0 py-3 text-white/70 hover:text-white transition-colors"
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
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Villas", href: "#villas" },
  { label: "Design", href: "#design" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

const WAVE = "https://i.imgur.com/awUhJhY.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false); // Close menu when navigating
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? "backdrop-blur bg-background/70" : "bg-transparent"
      }`}
      role="banner"
      data-testid="header-main"
    >
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Main header bar */}
        <div className="h-16 flex items-center justify-between">
          {/* Desktop nav - left side */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/70 hover:text-primary transition-colors"
                data-testid={`nav-link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          {/* Logo/Title - center on mobile, hidden on desktop */}
          <div className="md:hidden font-serif text-xl">SENIL</div>
          
          {/* Wave icon - right side */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="ml-auto"
            aria-label="Toggle menu"
            data-testid="wave-menu-button"
          >
            <img 
              src={WAVE} 
              alt="Menu" 
              width={72} 
              height={28}
              className="block"
              data-testid="wave-icon"
            />
          </button>
        </div>

        {/* Sliding dropdown menu - slides down from header */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
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
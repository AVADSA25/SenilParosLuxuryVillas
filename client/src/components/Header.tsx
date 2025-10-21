import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Villas", href: "#villas" },
  { label: "Design", href: "#design" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

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
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled ? "backdrop-blur bg-background/70" : "bg-transparent"
        }`}
        role="banner"
        data-testid="header-main"
      >
        <div className="max-w-[1200px] mx-auto px-8 h-16 flex items-center justify-between">
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
          
          {/* Burger menu icon - right side */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="ml-auto p-2"
            aria-label="Toggle menu"
            data-testid="burger-menu-button"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span 
                className="w-full h-0.5 bg-foreground block"
                animate={{ 
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 9 : 0
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span 
                className="w-full h-0.5 bg-foreground block"
                animate={{ 
                  opacity: isMenuOpen ? 0 : 1
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span 
                className="w-full h-0.5 bg-foreground block"
                animate={{ 
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -9 : 0
                }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Sliding dropdown menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-16 right-0 z-30 bg-background border-l border-b shadow-lg"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            data-testid="mobile-menu-dropdown"
          >
            <nav className="flex flex-col p-6 gap-4 min-w-[200px]">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground/70 hover:text-foreground transition-colors py-2"
                  data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
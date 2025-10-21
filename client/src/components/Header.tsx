import { useState, useEffect } from "react";

const navItems = [
  { label: "Villas", href: "#villas" },
  { label: "Design", href: "#design" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

const WAVE = "https://i.imgur.com/awUhJhY.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
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
      <div className="max-w-[1200px] mx-auto px-8 h-16 flex items-center">
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
        
        <button 
          onClick={() => scrollToSection("#top")} 
          className="ml-auto inline-flex"
          data-testid="logo-wave-button"
        >
          <img 
            src={WAVE} 
            alt="SENIL wave" 
            width={72} 
            height={28}
            className="block"
            data-testid="logo-wave"
          />
        </button>
      </div>
    </header>
  );
}
import { useEffect, useRef, useState } from "react";
import parosImage from "@assets/09-paros-island-mix-picture8_1761073561584.png";

export default function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Disable parallax on mobile
    
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        setOffsetY(scrollPercent * 300);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full overflow-hidden bg-graphite"
      style={{ 
        paddingTop: '56.25%' // 16:9 aspect ratio
      }}
      data-testid="section-parallax"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={parosImage}
          alt="Paros Island"
          className="absolute w-full h-full object-cover"
          style={isMobile ? {
            // Mobile: no parallax, perfect fit
            objectPosition: 'center'
          } : {
            // Desktop: parallax effect
            transform: `translateY(${offsetY - 150}px)`,
            transition: 'transform 0.1s linear',
            minHeight: '120%',
            top: '-10%',
            objectPosition: 'center'
          }}
          data-testid="image-parallax"
        />
      </div>
    </section>
  );
}

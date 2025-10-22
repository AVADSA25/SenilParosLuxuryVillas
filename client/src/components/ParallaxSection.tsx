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
        paddingTop: '56.25%', // 16:9 aspect ratio
        perspective: '1px' // Safari: Enable 3D rendering context
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
            // Desktop: parallax effect with Safari optimization
            transform: `translate3d(0, ${offsetY - 150}px, 0)`,
            WebkitTransform: `translate3d(0, ${offsetY - 150}px, 0)`,
            transition: 'transform 0.1s linear',
            WebkitTransition: 'transform 0.1s linear',
            minHeight: '120%',
            top: '-10%',
            objectPosition: 'center',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
          data-testid="image-parallax"
        />
      </div>
    </section>
  );
}

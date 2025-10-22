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
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        setOffsetY(scrollPercent * (isMobile ? 150 : 300));
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
        height: 'clamp(300px, 50vh, 600px)'
      }}
      data-testid="section-parallax"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-full h-full"
          style={{
            backgroundImage: `url(${parosImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transform: `translateY(${offsetY - (isMobile ? 75 : 150)}px) scale(${isMobile ? 1.1 : 1.2})`,
            transition: 'transform 0.1s linear',
          }}
          data-testid="image-parallax"
        />
      </div>
    </section>
  );
}

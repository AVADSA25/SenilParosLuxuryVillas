import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import sunsetHarbor from "@assets/09-paros-island-mix-picture_1761134882585.png";

export default function ParallaxDivider() {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  
  // Use less aggressive parallax on mobile
  const y = useTransform(scrollY, [0, 1000], [0, isMobile ? 50 : 150]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div 
      className="relative w-full overflow-hidden bg-graphite"
      style={{ height: 'clamp(200px, 40vh, 400px)' }}
      data-testid="section-parallax-divider"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url(${sunsetHarbor})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transform: isMobile ? 'scale(1.1)' : 'scale(1.2)',
          }}
        />
      </motion.div>
      
      {/* Subtle dark overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-graphite/20 via-transparent to-graphite/20" />
    </div>
  );
}

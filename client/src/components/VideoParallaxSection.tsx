import { useEffect, useRef, useState } from "react";
import villaVideo from "@assets/Camera_rotation_still_202510212204_1761077076465.mp4";

export default function VideoParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
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
        setOffsetY(scrollPercent * (isMobile ? 100 : 200));
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
      data-testid="section-video-parallax"
    >
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            transform: `translateY(${offsetY - (isMobile ? 50 : 100)}px) scale(${isMobile ? 1.1 : 1.2})`,
            transition: 'transform 0.1s linear',
          }}
          data-testid="video-parallax"
        >
          <source src={villaVideo} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

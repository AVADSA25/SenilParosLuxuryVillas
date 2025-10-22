import { useEffect, useRef, useState } from "react";
import villaVideo from "@assets/Camera_rotation_still_202510212204_1761077076465.mp4";

export default function VideoParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        setOffsetY(scrollPercent * 200);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full overflow-hidden bg-graphite"
      style={{ 
        paddingTop: '56.25%'
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
          className="absolute w-full h-full object-cover"
          style={{
            transform: `translateY(${offsetY - 100}px)`,
            transition: 'transform 0.1s linear',
            minHeight: '120%',
            top: '-10%'
          }}
          data-testid="video-parallax"
        >
          <source src={villaVideo} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import exterior from "@assets/02-senil-villas-paros-estate3_1761078697987.png";
import interior1 from "@assets/05-senil-villa-interior-_1761078737080.jpg";
import interior2 from "@assets/05-senil-villa-interior-3_1761078744243.png";
import interior3 from "@assets/05-senil-villa-interior-5_1761078752661.jpg";
import rooms2 from "@assets/06-senil-villa-indoor-rooms2_1761078787639.jpg";
import rooms3 from "@assets/06-senil-villa-indoor-rooms3_1761078842923.jpg";
import rooms5 from "@assets/06-senil-villa-indoor-rooms5_1761078806733.jpg";
import rooms6 from "@assets/06-senil-villa-indoor-rooms6_1761078822961.jpg";

const lifestyleImages = [
  exterior,
  interior1,
  interior2,
  interior3,
  rooms2,
  rooms5,
  rooms6,
  rooms3,
];

export default function LifestyleSection() {
  const duplicatedImages = [...lifestyleImages, ...lifestyleImages, ...lifestyleImages];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const animationRef = useRef<number | null>(null);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isAutoScrollingRef = useRef(true);

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const speed = 0.67; // 33% faster than base speed

    const animate = () => {
      if (!container || !isAutoScrollingRef.current) return;
      
      container.scrollLeft += speed;
      
      // Loop back when reaching 1/3 of the scroll width
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll / 3) {
        container.scrollLeft = 0;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    
    // Stop auto-scrolling
    isAutoScrollingRef.current = false;
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    velocityRef.current = 0;
    lastXRef.current = e.pageX;
    lastTimeRef.current = Date.now();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;

    const now = Date.now();
    const dt = now - lastTimeRef.current;
    if (dt > 0) {
      velocityRef.current = (e.pageX - lastXRef.current) / dt;
    }
    lastXRef.current = e.pageX;
    lastTimeRef.current = now;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    
    if (Math.abs(velocityRef.current) > 0.1) {
      applyMomentum();
    }
    
    // Resume auto-scrolling after 3 seconds
    pauseTimeoutRef.current = setTimeout(() => {
      isAutoScrollingRef.current = true;
      
      const container = scrollRef.current;
      if (!container) return;

      const speed = 0.67;

      const animate = () => {
        if (!container || !isAutoScrollingRef.current) return;
        
        container.scrollLeft += speed;
        
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll / 3) {
          container.scrollLeft = 0;
        }
        
        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);
    }, 3000);
  };

  const applyMomentum = () => {
    if (!scrollRef.current) return;
    
    const friction = 0.95;
    let velocity = velocityRef.current * 10;
    
    const momentum = () => {
      velocity *= friction;
      
      if (scrollRef.current) {
        scrollRef.current.scrollLeft -= velocity;
      }
      
      if (Math.abs(velocity) > 0.1) {
        requestAnimationFrame(momentum);
      }
    };
    
    requestAnimationFrame(momentum);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      applyMomentum();
      
      // Resume auto-scrolling after 3 seconds
      pauseTimeoutRef.current = setTimeout(() => {
        isAutoScrollingRef.current = true;
        
        const container = scrollRef.current;
        if (!container) return;

        const speed = 0.67;

        const animate = () => {
          if (!container || !isAutoScrollingRef.current) return;
          
          container.scrollLeft += speed;
          
          const maxScroll = container.scrollWidth - container.clientWidth;
          if (container.scrollLeft >= maxScroll / 3) {
            container.scrollLeft = 0;
          }
          
          animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);
      }, 3000);
    }
  };

  return (
    <section className="py-24 bg-graphite overflow-hidden" id="lifestyle" data-testid="section-lifestyle">
      <div className="max-w-[1400px] mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl font-semibold mb-16 text-center text-accent" 
          data-testid="text-lifestyle-title"
        >
          Lifestyle & Amenities
        </motion.h2>

        <div className="relative">
          <div 
            ref={scrollRef}
            className="overflow-x-scroll scrollbar-hide select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{
              cursor: isDragging ? 'grabbing' : 'grab',
              scrollBehavior: isDragging ? 'auto' : 'smooth',
            }}
          >
            <div className="flex gap-6 w-max">
              {duplicatedImages.map((img, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 rounded-lg overflow-hidden"
                  style={{ 
                    width: window.innerWidth < 768 
                      ? 'calc((100vw - 64px) / 1.3 - 12px)'
                      : 'calc((100vw - 64px) / 2.5 - 14.4px)',
                    maxWidth: '520px',
                  }}
                  data-testid={`image-lifestyle-${index % lifestyleImages.length}`}
                >
                  <div 
                    className="relative w-full overflow-hidden"
                    style={{ paddingTop: '112.5%' }}
                  >
                    <img
                      src={img}
                      alt={`Villa lifestyle ${(index % lifestyleImages.length) + 1}`}
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6 text-accent/60 text-sm">
            <ChevronLeft className="w-4 h-4" />
            <span className="font-light">Drag to explore</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Home, TrendingUp, Sun, Shield, Sparkles } from "lucide-react";
import beach from "@assets/09-paros-island-mix-picture4_1761128760341.png";
import harbor from "@assets/09-paros-island-mix-picture7_1761128768990.png";
import church from "@assets/09-paros-island-mix-picture9_1761128776857.png";
import sunset from "@assets/09-paros-island-mix-picture_1761135186874.png";
import rocks from "@assets/09-paros-island-mix-picture5_1761138280595.png";

const benefits = [
  {
    icon: Home,
    title: "Golden Visa Residency",
    description: "Real estate investment grants a 5-year renewable Greek residency for non-EU families, with visa-free Schengen travel."
  },
  {
    icon: TrendingUp,
    title: "High-Season Demand",
    description: "Paros is a top Mediterranean destination; luxury stays command strong rates across a long May–Oct season (and shoulder months)."
  },
  {
    icon: Sparkles,
    title: "Rental Yield Potential",
    description: "A 19-bedroom, three-villa estate can be operated as a boutique compound or per-villa rentals for premium returns."
  },
  {
    icon: Sun,
    title: "Sunny, Long Season",
    description: "250+ sunny days a year and mild shoulders extend usage and rental windows beyond peak summer."
  },
  {
    icon: TrendingUp,
    title: "Scarcity & Appreciation",
    description: "Tight building rules + rising global attention have pushed prime Paros values into Greece's top tier—strong long-term fundamentals."
  },
  {
    icon: Shield,
    title: "Easy Access & Safety",
    description: "Fast ferries and excellent connectivity; Greece rates among the safest EU destinations—ideal for families and discreet owners."
  }
];

export default function WhyGreeceSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const parallaxRef2 = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);
  const [offsetY2, setOffsetY2] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect();
        const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        setOffsetY(scrollPercent * 150);
      }
      if (parallaxRef2.current) {
        const rect2 = parallaxRef2.current.getBoundingClientRect();
        const scrollPercent2 = (window.innerHeight - rect2.top) / (window.innerHeight + rect2.height);
        setOffsetY2(scrollPercent2 * 150);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="why-greece" 
      className="bg-graphite"
      data-testid="section-why-greece"
    >
      <div 
        ref={parallaxRef}
        className="relative h-[40vh] md:h-[50vh] overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 overflow-hidden"
        >
          <img 
            src={sunset} 
            alt="Paros harbor at sunset" 
            className="absolute w-full h-full object-cover"
            style={{
              transform: `translateY(${offsetY - 75}px)`,
              transition: 'transform 0.1s linear',
              minHeight: '120%',
              top: '-10%'
            }}
          />
        </motion.div>
      </div>

      <div className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-accent" data-testid="text-why-greece-title">
            Why Greece
          </h2>
          <p className="text-accent/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Enduring lifestyle value in the Aegean—sun, stability, and world-class demand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="group rounded-2xl bg-card ring-1 ring-card-border p-6 shadow-sm hover-elevate active-elevate-2 will-change-transform"
            data-testid="benefit-card-0"
          >
            <div className="w-10 h-10 rounded-full bg-olive/8 flex items-center justify-center mb-4">
              <Home className="w-5 h-5 text-olive" strokeWidth={1.5} />
            </div>
            <h3 className="text-[15px] font-medium mb-1">{benefits[0].title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{benefits[0].description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="rounded-2xl overflow-hidden ring-1 ring-card-border"
            data-testid="image-harbor"
          >
            <img src={harbor} alt="Greek harbor with traditional boats" className="w-full h-full object-cover aspect-[4/5]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="group rounded-2xl bg-card ring-1 ring-card-border p-6 shadow-sm hover-elevate active-elevate-2 will-change-transform"
            data-testid="benefit-card-1"
          >
            <div className="w-10 h-10 rounded-full bg-olive/8 flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5 text-olive" strokeWidth={1.5} />
            </div>
            <h3 className="text-[15px] font-medium mb-1">{benefits[1].title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{benefits[1].description}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="group rounded-2xl bg-card ring-1 ring-card-border p-6 shadow-sm hover-elevate active-elevate-2 will-change-transform"
            data-testid="benefit-card-2"
          >
            <div className="w-10 h-10 rounded-full bg-olive/8 flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5 text-olive" strokeWidth={1.5} />
            </div>
            <h3 className="text-[15px] font-medium mb-1">{benefits[2].title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{benefits[2].description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="rounded-2xl overflow-hidden ring-1 ring-card-border"
            data-testid="image-beach"
          >
            <img src={beach} alt="Paros beach with turquoise waters" className="w-full h-full object-cover aspect-[4/5]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="group rounded-2xl bg-card ring-1 ring-card-border p-6 shadow-sm hover-elevate active-elevate-2 will-change-transform"
            data-testid="benefit-card-3"
          >
            <div className="w-10 h-10 rounded-full bg-olive/8 flex items-center justify-center mb-4">
              <Sun className="w-5 h-5 text-olive" strokeWidth={1.5} />
            </div>
            <h3 className="text-[15px] font-medium mb-1">{benefits[3].title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{benefits[3].description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="group rounded-2xl bg-card ring-1 ring-card-border p-6 shadow-sm hover-elevate active-elevate-2 will-change-transform"
            data-testid="benefit-card-4"
          >
            <div className="w-10 h-10 rounded-full bg-olive/8 flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5 text-olive" strokeWidth={1.5} />
            </div>
            <h3 className="text-[15px] font-medium mb-1">{benefits[4].title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{benefits[4].description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.55 }}
            className="rounded-2xl overflow-hidden ring-1 ring-card-border"
            data-testid="image-church"
          >
            <img src={church} alt="Traditional Greek church" className="w-full h-full object-cover aspect-[4/5]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="group rounded-2xl bg-card ring-1 ring-card-border p-6 shadow-sm hover-elevate active-elevate-2 will-change-transform"
            data-testid="benefit-card-5"
          >
            <div className="w-10 h-10 rounded-full bg-olive/8 flex items-center justify-center mb-4">
              <Shield className="w-5 h-5 text-olive" strokeWidth={1.5} />
            </div>
            <h3 className="text-[15px] font-medium mb-1">{benefits[5].title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{benefits[5].description}</p>
          </motion.div>
        </div>
        </div>
      </div>

      <div 
        ref={parallaxRef2}
        className="relative h-[40vh] md:h-[50vh] overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 overflow-hidden"
        >
          <img 
            src={rocks} 
            alt="Paros rock formations" 
            className="absolute w-full h-full object-cover"
            style={{
              transform: `translateY(${offsetY2 - 75}px)`,
              transition: 'transform 0.1s linear',
              minHeight: '120%',
              top: '-10%',
              objectPosition: 'center 35%'
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

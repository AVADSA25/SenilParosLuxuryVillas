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
    description: "Eligible real-estate investment can grant a renewable 5-year Greek residency for non-EU families (Schengen access)."
  },
  {
    icon: TrendingUp,
    title: "High-Season Demand",
    description: "Cyclades remain a top Mediterranean market with robust May-Oct occupancy."
  },
  {
    icon: Sparkles,
    title: "Rental Yield Potential",
    description: "Three-villa, 19-bed estate can operate as a boutique compound or per-villa rentals."
  },
  {
    icon: Sun,
    title: "Long, Sunny Season",
    description: "250+ sunny days and mild shoulders extend personal use and rental windows."
  },
  {
    icon: TrendingUp,
    title: "Scarcity & Appreciation",
    description: "Tight planning + global attention support long-term value."
  },
  {
    icon: Shield,
    title: "Easy & Safe",
    description: "Frequent links via Athens; Greece ranks among the safer EU destinations."
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
            Enduring lifestyle value in the Aegean: sun, stability, and world-class demand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="group rounded-2xl bg-card ring-1 ring-card-border p-8 shadow-sm hover-elevate active-elevate-2 will-change-transform flex flex-col items-center text-center"
            data-testid="benefit-card-0"
          >
            <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center mb-5">
              <Home className="w-6 h-6 text-olive" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold mb-3 text-olive">{benefits[0].title}</h3>
            <p className="text-base leading-relaxed text-muted-foreground">{benefits[0].description}</p>
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
            className="group rounded-2xl bg-card ring-1 ring-card-border p-8 shadow-sm hover-elevate active-elevate-2 will-change-transform flex flex-col items-center text-center"
            data-testid="benefit-card-1"
          >
            <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center mb-5">
              <TrendingUp className="w-6 h-6 text-olive" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold mb-3 text-olive">{benefits[1].title}</h3>
            <p className="text-base leading-relaxed text-muted-foreground">{benefits[1].description}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="group rounded-2xl bg-card ring-1 ring-card-border p-8 shadow-sm hover-elevate active-elevate-2 will-change-transform flex flex-col items-center text-center"
            data-testid="benefit-card-2"
          >
            <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center mb-5">
              <Sparkles className="w-6 h-6 text-olive" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold mb-3 text-olive">{benefits[2].title}</h3>
            <p className="text-base leading-relaxed text-muted-foreground">{benefits[2].description}</p>
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
            className="group rounded-2xl bg-card ring-1 ring-card-border p-8 shadow-sm hover-elevate active-elevate-2 will-change-transform flex flex-col items-center text-center"
            data-testid="benefit-card-3"
          >
            <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center mb-5">
              <Sun className="w-6 h-6 text-olive" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold mb-3 text-olive">{benefits[3].title}</h3>
            <p className="text-base leading-relaxed text-muted-foreground">{benefits[3].description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="group rounded-2xl bg-card ring-1 ring-card-border p-8 shadow-sm hover-elevate active-elevate-2 will-change-transform flex flex-col items-center text-center"
            data-testid="benefit-card-4"
          >
            <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center mb-5">
              <TrendingUp className="w-6 h-6 text-olive" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold mb-3 text-olive">{benefits[4].title}</h3>
            <p className="text-base leading-relaxed text-muted-foreground">{benefits[4].description}</p>
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
            className="group rounded-2xl bg-card ring-1 ring-card-border p-8 shadow-sm hover-elevate active-elevate-2 will-change-transform flex flex-col items-center text-center"
            data-testid="benefit-card-5"
          >
            <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center mb-5">
              <Shield className="w-6 h-6 text-olive" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold mb-3 text-olive">{benefits[5].title}</h3>
            <p className="text-base leading-relaxed text-muted-foreground">{benefits[5].description}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <p className="text-xs text-accent/60 text-center leading-relaxed italic" data-testid="text-legal-disclaimer">
            Information is general; consult your legal financial advisor for eligibility and tax specifics (e.g., Golden Visa, rental income).
          </p>
        </motion.div>
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

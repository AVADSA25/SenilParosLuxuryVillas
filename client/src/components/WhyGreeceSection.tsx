import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Home, TrendingUp, Sun, Shield, Sparkles } from "lucide-react";
import beach from "@assets/09-paros-island-mix-picture4_1761128760341.png";
import harbor from "@assets/09-paros-island-mix-picture7_1761128768990.png";
import church from "@assets/09-paros-island-mix-picture9_1761128776857.png";
import flowers from "@assets/09-paros-island-mix-picture2_1761128784882.png";

const stats = [
  { value: 250, suffix: "+ sunny days / yr" },
  { label: "Schengen residency path" }
];

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

function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
            
            setCount(Math.floor(progress * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, end, duration]);

  return (
    <div ref={ref} className="text-xl font-medium">
      {count}{suffix}
    </div>
  );
}

export default function WhyGreeceSection() {
  return (
    <section 
      id="why-greece" 
      className="py-20 md:py-28 bg-accent"
      data-testid="section-why-greece"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4" data-testid="text-why-greece-title">
            Why Greece
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enduring lifestyle value in the Aegean—sun, stability, and world-class demand.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-full bg-card/60 backdrop-blur-sm ring-1 ring-card-border px-6 py-4 flex items-center justify-center text-sm tracking-wide"
              data-testid={`stat-capsule-${index}`}
            >
              <div className="text-center">
                {stat.label ? (
                  <div className="text-base font-medium">{stat.label}</div>
                ) : (
                  <AnimatedCounter 
                    end={stat.value!} 
                    suffix={stat.suffix}
                  />
                )}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="rounded-2xl overflow-hidden ring-1 ring-card-border"
            data-testid="image-beach"
          >
            <img src={beach} alt="Paros beach with turquoise waters" className="w-full h-full object-cover aspect-[4/5]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.36 }}
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
            transition={{ duration: 0.4, delay: 0.42 }}
            className="rounded-2xl overflow-hidden ring-1 ring-card-border"
            data-testid="image-harbor"
          >
            <img src={harbor} alt="Greek harbor with traditional boats" className="w-full h-full object-cover aspect-[4/5]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.48 }}
            className="group rounded-2xl bg-card ring-1 ring-card-border p-6 shadow-sm hover-elevate active-elevate-2 will-change-transform"
            data-testid="benefit-card-1"
          >
            <div className="w-10 h-10 rounded-full bg-olive/8 flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5 text-olive" strokeWidth={1.5} />
            </div>
            <h3 className="text-[15px] font-medium mb-1">{benefits[1].title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{benefits[1].description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.54 }}
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
            transition={{ duration: 0.4, delay: 0.6 }}
            className="rounded-2xl overflow-hidden ring-1 ring-card-border"
            data-testid="image-church"
          >
            <img src={church} alt="Traditional Greek church" className="w-full h-full object-cover aspect-[4/5]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.66 }}
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
            transition={{ duration: 0.4, delay: 0.72 }}
            className="rounded-2xl overflow-hidden ring-1 ring-card-border"
            data-testid="image-flowers"
          >
            <img src={flowers} alt="Bougainvillea flowers and Greek architecture" className="w-full h-full object-cover aspect-[4/5]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.78 }}
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
            transition={{ duration: 0.4, delay: 0.84 }}
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
    </section>
  );
}

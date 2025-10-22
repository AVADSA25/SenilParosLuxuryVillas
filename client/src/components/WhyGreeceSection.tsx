import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Home, TrendingUp, Sun, MapPin, Shield, Sparkles } from "lucide-react";

const stats = [
  { value: 250, suffix: "+ sunny days / yr", icon: Sun },
  { value: 25, suffix: " min from PAS airport", prefix: "≤", icon: MapPin },
  { label: "Schengen residency path", icon: Home }
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
    description: "25-min drive from PAS airport; fast ferries; Greece rates among the safest EU destinations—ideal for families and discreet owners."
  }
];

function AnimatedCounter({ end, duration = 2, prefix = "", suffix = "" }: { end: number; duration?: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

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
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-2xl font-medium">
      {prefix}{count}{suffix}
    </div>
  );
}

export default function WhyGreeceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="why-greece" 
      ref={sectionRef}
      className="py-20 md:py-28 bg-accent relative overflow-hidden"
      data-testid="section-why-greece"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-olive rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-olive rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
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
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
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
                  <div className="flex items-baseline justify-center gap-1">
                    <AnimatedCounter 
                      end={stat.value!} 
                      prefix={stat.prefix}
                      suffix=""
                    />
                    <span className="text-sm text-muted-foreground">{stat.suffix}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-5 rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm ring-1 ring-card-border"
          >
            <div className="aspect-[9/16] bg-gradient-to-br from-olive/10 to-graphite/5 flex items-center justify-center text-muted-foreground text-sm">
              Portrait Image 1 (9:16)
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm ring-1 ring-card-border">
              <div className="aspect-video bg-gradient-to-br from-ash/20 to-olive/10 flex items-center justify-center text-muted-foreground text-sm">
                Landscape Image 1 (16:9)
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm ring-1 ring-card-border">
              <div className="aspect-video bg-gradient-to-br from-olive/10 to-ash/20 flex items-center justify-center text-muted-foreground text-sm">
                Landscape Image 2 (16:9)
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-7 space-y-6"
          >
            {benefits.slice(0, 3).map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.45 + index * 0.06 }}
                className="group rounded-2xl bg-card ring-1 ring-card-border p-6 shadow-sm hover-elevate active-elevate-2 will-change-transform"
                data-testid={`benefit-card-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-olive/8 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-olive" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[15px] font-medium mb-1">{benefit.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:col-span-5 rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm ring-1 ring-card-border"
          >
            <div className="aspect-[9/16] bg-gradient-to-br from-graphite/5 to-olive/10 flex items-center justify-center text-muted-foreground text-sm">
              Portrait Image 2 (9:16)
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {benefits.slice(3).map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.65 + index * 0.06 }}
              className="group rounded-2xl bg-card ring-1 ring-card-border p-6 shadow-sm hover-elevate active-elevate-2 will-change-transform"
              data-testid={`benefit-card-${index + 3}`}
            >
              <div className="w-10 h-10 rounded-full bg-olive/8 flex items-center justify-center mb-4">
                <benefit.icon className="w-5 h-5 text-olive" strokeWidth={1.5} />
              </div>
              <h3 className="text-[15px] font-medium mb-1">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

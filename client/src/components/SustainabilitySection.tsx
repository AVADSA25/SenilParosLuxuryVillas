import { motion } from "framer-motion";
import parosBeach from "@assets/09-paros-island-mix-picture6_1761080091981.png";

const features = [
  "Solar energy systems with battery storage",
  "Rainwater harvesting and greywater recycling",
  "High-performance thermal insulation",
  "Energy-efficient HVAC systems",
  "LED lighting throughout",
  "Locally sourced natural materials",
];

export default function SustainabilitySection() {
  return (
    <section className="py-24 bg-background" data-testid="section-sustainability">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-8" data-testid="text-sustainability-title">
              Sustainability & Systems
            </h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3" data-testid={`sustainability-feature-${index}`}>
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg"
          >
            <img
              src={parosBeach}
              alt="Paros beach with turquoise waters"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

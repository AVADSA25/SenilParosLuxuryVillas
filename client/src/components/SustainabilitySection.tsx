import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
const parosBeach = "https://i.imgur.com/JEIxBir.jpeg";

const features = [
  {
    title: "Water Conservation",
    description: "Rainwater harvesting with greywater reuse for sustainable water management."
  },
  {
    title: "Building Envelope",
    description: "High-performance envelope and shading strategy for optimal thermal efficiency."
  },
  {
    title: "Climate Control",
    description: "Energy-efficient HVAC with zoned control for personalized comfort."
  },
  {
    title: "Lighting Design",
    description: "LED lighting throughout with warm, low-glare scenes for ambiance and efficiency."
  },
  {
    title: "Materials & Finishes",
    description: "Locally sourced natural materials with low-VOC finishes for healthier living."
  },
  {
    title: "Smart Integration",
    description: "Smart home (KNX / equivalent) with CAT6a data backbone for seamless connectivity."
  },
  {
    title: "Security Systems",
    description: "CCTV and discreet perimeter intrusion detection for peace of mind."
  },
];

export default function SustainabilitySection() {
  const [expandedImage, setExpandedImage] = useState(false);

  return (
    <>
    <section className="py-24 bg-background" id="sustainability" data-testid="section-sustainability">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-8" data-testid="text-sustainability-title">
              Sustainability & Systems
            </h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} data-testid={`sustainability-feature-${index}`}>
                  <h3 className="text-sm font-semibold mb-1" style={{ color: 'var(--olive)' }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer hover-elevate transition-transform duration-300 hover:scale-[1.01] order-1 md:order-2 md:pt-16"
            onClick={() => setExpandedImage(true)}
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

    {expandedImage && (
      <div 
        className="fixed inset-0 z-50 bg-background flex items-center justify-center p-4"
        onClick={() => setExpandedImage(false)}
        data-testid="fullscreen-sustainability-image"
      >
        <button
          onClick={() => setExpandedImage(false)}
          className="absolute top-4 right-4 z-50 rounded-full bg-card border border-card-border p-2 hover-elevate active-elevate-2"
          data-testid="button-close-sustainability-image"
        >
          <X className="w-6 h-6" />
        </button>
        <img 
          src={parosBeach} 
          alt="Paros beach with turquoise waters" 
          className="max-w-full max-h-full object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    )}
    </>
  );
}

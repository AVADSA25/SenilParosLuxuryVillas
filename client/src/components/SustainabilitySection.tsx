import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import parosBeach from "@assets/09-paros-island-mix-picture6_1761080091981.png";

const features = [
  "Rainwater harvesting with greywater reuse",
  "High-performance envelope and shading strategy",
  "Energy-efficient HVAC with zoned control",
  "LED lighting throughout with warm, low-glare scenes",
  "Locally sourced natural materials, low-VOC finishes",
  "Smart home (KNX / equivalent), CAT6a data backbone",
  "CCTV and discreet perimeter intrusion detection",
];

export default function SustainabilitySection() {
  const [expandedImage, setExpandedImage] = useState(false);

  return (
    <>
    <section className="py-24 bg-background" id="sustainability" data-testid="section-sustainability">
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
            className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer hover-elevate transition-transform duration-300 hover:scale-[1.01]"
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

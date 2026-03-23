import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import interiorBathroom from "@assets/05-senil-villa-interior-6_1762185017342.jpg";
import interiorKitchen from "@assets/06-senil-villa-indoor-rooms_1762185226595.jpg";

const features = [
  {
    title: "Architecture & Structure",
    description: "Designed for harmony with the landscape using premium ALUMIL doors, windows, and skylights for insulation, soundproofing, and energy efficiency."
  },
  {
    title: "Outdoor Living",
    description: "Private heated infinity pools with jacuzzis, pergola-shaded terraces, fire pits, BBQ and dining areas for 8–12 guests."
  },
  {
    title: "Wellness & Fitness",
    description: "Dedicated gym with cardio and free-weight equipment."
  },
  {
    title: "HVAC & Energy",
    description: "Central VRF air-source heat recovery system with independent room controls, low-noise diffusers, and dedicated pool heating."
  },
  {
    title: "Electrical Systems",
    description: "Backup generator for essential loads, DALI-controlled LED lighting, and acoustically insulated plant rooms for all MEP equipment."
  },
  {
    title: "Water & Waste Management",
    description: "Connection to public supply plus private two-day water storage with softening and chlorination systems. Hot water via VRF heat recovery and supplementary boiler. Biological wastewater and rainwater treatment connected to the communal network, reused for irrigation."
  },
  {
    title: "Fire & Security",
    description: "Full fire-detection network, intrusion alarm, and CCTV system."
  },
  {
    title: "Connectivity & Smart Living",
    description: "High-speed Wi-Fi and KNX automation for lighting, climate, pool, and entertainment control."
  },
  {
    title: "Mobility & Infrastructure",
    description: "Two private parking spaces per villa with EV chargers; access via private road."
  },
  {
    title: "Waste & Sustainability",
    description: "Underground waste bins, water-recycling irrigation, and Energy Certificate A rating."
  },
  {
    title: "Landscape Design",
    description: "Site-specific plan integrating topography, microclimate, and irrigation with local flora for visual and ecological continuity."
  },
];

export default function KeyFeaturesSection() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <>
      <section className="py-24 bg-background" id="features" data-testid="section-features">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 md:pt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer hover-elevate transition-transform duration-300 hover:scale-[1.01]"
                onClick={() => setExpandedImage(interiorBathroom)}
              >
                <img
                  src={interiorBathroom}
                  alt="SENIL villa interior bathroom"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer hover-elevate transition-transform duration-300 hover:scale-[1.01]"
                onClick={() => setExpandedImage(interiorKitchen)}
              >
                <img
                  src={interiorKitchen}
                  alt="SENIL villa interior kitchen and dining area"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-8" data-testid="text-features-title">
                Key Features
              </h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} data-testid={`feature-${index}`}>
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
          </div>
        </div>
      </section>

      {expandedImage && (
        <div 
          className="fixed inset-0 z-50 bg-background flex items-center justify-center p-4"
          onClick={() => setExpandedImage(null)}
          data-testid="fullscreen-features-image"
        >
          <button
            onClick={() => setExpandedImage(null)}
            className="absolute top-4 right-4 z-50 rounded-full bg-card border border-card-border p-2 hover-elevate active-elevate-2"
            data-testid="button-close-features-image"
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={expandedImage} 
            alt="SENIL villa interior" 
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

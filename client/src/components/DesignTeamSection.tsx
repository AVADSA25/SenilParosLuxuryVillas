import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import architectImage from "@assets/02-senil-villas-paros-estate_1761137532426.jpg";

export default function DesignTeamSection() {
  const [expandedImage, setExpandedImage] = useState(false);

  return (
    <>
    <section className="py-20 md:py-28 bg-accent" data-testid="section-design-team">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div 
              className="relative overflow-hidden rounded-2xl cursor-pointer hover-elevate transition-transform duration-300 hover:scale-[1.01]"
              onClick={() => setExpandedImage(true)}
            >
              <div className="relative" style={{ paddingTop: '56.25%' }}>
                <img
                  src={architectImage}
                  alt="Aristides Dallas Architects - SENIL Villas aerial view"
                  className="absolute inset-0 w-full h-full object-cover"
                  data-testid="image-architect"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-12 h-px mb-6"
              style={{ 
                backgroundColor: 'var(--olive)',
                transformOrigin: 'left'
              }}
            />
            
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4" data-testid="text-design-team-title">
              Design Team
            </h2>
            
            <h3 className="text-2xl font-medium mb-4 text-olive" data-testid="text-architect-name">
              Aristides Dallas Architects
            </h3>
            
            <p className="text-muted-foreground leading-relaxed text-lg" data-testid="text-architect-description">
              An award-winning Greek studio known for contemporary Cycladic architecture. Landscape-first compositions, measured minimalism, and horizon-led interiors. Their work has been recognized internationally (incl. Architizer A+ Awards) and widely published.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {expandedImage && (
      <div 
        className="fixed inset-0 z-50 bg-background flex items-center justify-center p-4"
        onClick={() => setExpandedImage(false)}
        data-testid="fullscreen-designteam-image"
      >
        <button
          onClick={() => setExpandedImage(false)}
          className="absolute top-4 right-4 z-50 rounded-full bg-card border border-card-border p-2 hover-elevate active-elevate-2"
          data-testid="button-close-designteam-image"
        >
          <X className="w-6 h-6" />
        </button>
        <img 
          src={architectImage} 
          alt="Aristides Dallas Architects - SENIL Villas aerial view" 
          className="max-w-full max-h-full object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    )}
    </>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import villaAerial from "@assets/02-senil-villas-paros-estate2_1761075580986.jpg";
import villaNight from "@assets/03b-senil-villa-night4_1761075658399.jpg";
import villaOutdoor from "@assets/04-senil-villa-outdoor_1761076245245.jpg";

const blocks = [
  {
    image: villaAerial,
    title: "Architectural Excellence",
    description:
      "Each villa is individually independent, embodying contemporary Cycladic architecture and seamlessly blending traditional stone masonry with modern minimalist design. Clean lines frame the infinite Aegean horizon.",
    reverse: false,
  },
  {
    image: villaNight,
    title: "Material Integrity",
    description:
      "Natural limestone, indigenous timber, and hand-finished plaster create tactile warmth. Every surface speaks to the island's geological heritage while meeting exacting modern standards.",
    reverse: true,
  },
  {
    image: villaOutdoor,
    title: "Horizon Lines",
    description:
      "Floor-to-ceiling glazing dissolves boundaries between interior and landscape. Living spaces open to panoramic sea views, private infinity pools, and carefully choreographed sunsets.",
    reverse: false,
  },
];

export default function DesignSection() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <>
    <section className="py-24 bg-background" id="design" data-testid="section-design">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl font-medium mb-6 text-center" 
          data-testid="text-design-title"
        >
          Design & Architecture
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-center mb-20"
          data-testid="text-design-intro"
        >
          Architecture moves with the land. Limestone, timber and hand-finished plaster hold a quiet geometry; clean lines lead the gaze outward: to the sea, the sky, and the horizon beyond.
        </motion.p>

        <div className="space-y-32">
          {blocks.map((block, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${
                block.reverse ? "md:flex-row-reverse" : ""
              }`}
              data-testid={`block-design-${index}`}
            >
              <motion.div 
                className={block.reverse ? "md:order-2" : ""}
                initial={{ opacity: 0, x: block.reverse ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <div 
                  className="relative overflow-hidden rounded-lg hover-elevate transition-transform duration-300 hover:scale-[1.01] cursor-pointer"
                  style={{ paddingTop: '56.25%' }}
                  onClick={() => setExpandedImage(block.image)}
                >
                  <img
                    src={block.image}
                    alt={block.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              <div className={block.reverse ? "md:order-1" : ""}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-12 h-px mb-6"
                    style={{ 
                      backgroundColor: 'var(--olive)',
                      transformOrigin: 'left'
                    }}
                  />
                  
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="font-serif text-3xl md:text-4xl font-medium mb-4" 
                    data-testid={`text-design-block-title-${index}`}
                  >
                    {block.title}
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    className="text-muted-foreground leading-relaxed text-lg" 
                    data-testid={`text-design-block-desc-${index}`}
                  >
                    {block.description}
                  </motion.p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {expandedImage && (
      <div 
        className="fixed inset-0 z-50 bg-background flex items-center justify-center p-4"
        onClick={() => setExpandedImage(null)}
        data-testid="fullscreen-design-image"
      >
        <button
          onClick={() => setExpandedImage(null)}
          className="absolute top-4 right-4 z-50 rounded-full bg-card border border-card-border p-2 hover-elevate active-elevate-2"
          data-testid="button-close-design-image"
        >
          <X className="w-6 h-6" />
        </button>
        <img 
          src={expandedImage} 
          alt="Design detail" 
          className="max-w-full max-h-full object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    )}
    </>
  );
}

import { motion } from "framer-motion";
import exterior from "@assets/02-senil-villas-paros-estate3_1761078697987.png";
import interior1 from "@assets/05-senil-villa-interior-_1761078737080.jpg";
import interior2 from "@assets/05-senil-villa-interior-3_1761078744243.png";
import interior3 from "@assets/05-senil-villa-interior-5_1761078752661.jpg";
import interior4 from "@assets/05-senil-villa-interior-6_1761078764987.jpg";
import rooms1 from "@assets/06-senil-villa-indoor-rooms_1761078776908.jpg";
import rooms2 from "@assets/06-senil-villa-indoor-rooms2_1761078787639.jpg";
import rooms3 from "@assets/06-senil-villa-indoor-rooms3_1761078842923.jpg";
import rooms5 from "@assets/06-senil-villa-indoor-rooms5_1761078806733.jpg";
import rooms6 from "@assets/06-senil-villa-indoor-rooms6_1761078822961.jpg";

const lifestyleImages = [
  exterior,
  interior1,
  interior2,
  interior3,
  interior4,
  rooms1,
  rooms2,
  rooms5,
  rooms6,
  rooms3,
];

export default function LifestyleSection() {
  const duplicatedImages = [...lifestyleImages, ...lifestyleImages, ...lifestyleImages];

  return (
    <section className="py-24 bg-accent overflow-hidden" data-testid="section-lifestyle">
      <div className="max-w-[1400px] mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl font-medium mb-16 text-center" 
          data-testid="text-lifestyle-title"
        >
          Lifestyle & Amenities
        </motion.h2>

        <div className="relative overflow-hidden">
          <div 
            className="flex gap-6"
            style={{
              animation: 'scroll 40s linear infinite',
            }}
          >
            {duplicatedImages.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 rounded-lg overflow-hidden"
                style={{ 
                  width: 'calc((100vw - 64px) / 2.5 - 14.4px)',
                  maxWidth: '520px',
                }}
                data-testid={`image-lifestyle-${index % lifestyleImages.length}`}
              >
                <div 
                  className="relative w-full overflow-hidden"
                  style={{ paddingTop: '112.5%' }}
                >
                  <img
                    src={img}
                    alt={`Villa lifestyle ${(index % lifestyleImages.length) + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
      `}</style>
    </section>
  );
}

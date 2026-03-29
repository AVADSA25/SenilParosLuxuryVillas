import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import exterior from "@assets/02-senil-villas-paros-estate3_1761078697987.png";
import interior1 from "@assets/05-senil-villa-interior-_1761078737080.jpg";
import interior2 from "@assets/05-senil-villa-interior-3_1761078744243.png";
import interior3 from "@assets/05-senil-villa-interior-5_1761078752661.jpg";
import rooms2 from "@assets/06-senil-villa-indoor-rooms2_1761078787639.jpg";
import rooms3 from "@assets/06-senil-villa-indoor-rooms3_1761078842923.jpg";
import rooms5 from "@assets/06-senil-villa-indoor-rooms5_1761078806733.jpg";
import rooms6 from "@assets/06-senil-villa-indoor-rooms6_1761078822961.jpg";

const lifestyleImages = [
  exterior,
  interior1,
  interior2,
  interior3,
  rooms2,
  rooms5,
  rooms6,
  rooms3,
];

export default function LifestyleSection() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <>
    <section className="py-24 bg-graphite" id="lifestyle" data-testid="section-lifestyle">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl font-semibold mb-16 text-center text-accent"
          data-testid="text-lifestyle-title"
        >
          Lifestyle & Amenities
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {lifestyleImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
              style={{ paddingTop: index === 0 ? "100%" : "75%" }}
              onClick={() => setExpandedImage(img)}
              data-testid={`image-lifestyle-${index}`}
            >
              <img
                src={img}
                alt={`Villa lifestyle ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-graphite/0 group-hover:bg-graphite/15 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {expandedImage && (
      <div
        className="fixed inset-0 z-50 bg-background flex items-center justify-center p-4"
        onClick={() => setExpandedImage(null)}
        data-testid="fullscreen-lifestyle-image"
      >
        <button
          onClick={() => setExpandedImage(null)}
          className="absolute top-4 right-4 z-50 rounded-full bg-card border border-card-border p-2 hover-elevate active-elevate-2"
          data-testid="button-close-lifestyle-image"
        >
          <X className="w-6 h-6" />
        </button>
        <img
          src={expandedImage}
          alt="Lifestyle detail"
          className="max-w-full max-h-full object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    )}
    </>
  );
}

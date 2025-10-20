import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const lifestyleImages = [
  "https://i.imgur.com/vGqL8Km.jpg",
  "https://i.imgur.com/xWn9K3L.jpg",
  "https://i.imgur.com/TpH7Zmq.jpg",
  "https://i.imgur.com/9sYmN2K.jpg",
  "https://i.imgur.com/KfP8nQm.jpg",
  "https://i.imgur.com/2mH9Lkq.jpg",
];

const amenities = [
  "Private infinity pools",
  "Sea-view terraces",
  "Outdoor dining pavilions",
  "Landscaped gardens",
  "Wine cellars",
  "Home cinema rooms",
  "Fitness facilities",
  "Staff quarters",
  "Secure parking",
];

export default function LifestyleSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="py-24 bg-accent" data-testid="section-lifestyle">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-16 text-center" data-testid="text-lifestyle-title">
            Lifestyle & Amenities
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {lifestyleImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover-elevate transition-transform duration-300 hover:scale-[1.02]"
                onClick={() => setSelectedImage(img)}
                data-testid={`image-lifestyle-${index}`}
              >
                <img
                  src={img}
                  alt={`Lifestyle ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-card p-4 rounded-lg border border-card-border text-center"
                data-testid={`amenity-${index}`}
              >
                <span className="text-sm">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <img src={selectedImage} alt="Lifestyle detail" className="w-full h-auto rounded-lg" />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

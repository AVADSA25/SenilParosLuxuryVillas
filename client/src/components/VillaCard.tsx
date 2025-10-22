import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface VillaCardProps {
  name: string;
  area: string;
  bedrooms: number;
  images: {
    exterior: string;
    interior: string;
    detail: string;
  };
  floorplan: string;
}

export default function VillaCard({ name, area, bedrooms, images, floorplan }: VillaCardProps) {
  const [showFloorplan, setShowFloorplan] = useState(false);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-card rounded-lg overflow-hidden border border-card-border"
        data-testid={`card-villa-${name.toLowerCase()}`}
      >
        <div className="p-6">
          <div
            className="relative w-full overflow-hidden rounded-lg cursor-pointer hover-elevate transition-transform duration-300 hover:scale-[1.01]"
            style={{ paddingTop: '56.25%' }}
            onClick={() => setShowFloorplan(true)}
            data-testid={`image-villa-${name.toLowerCase()}`}
          >
            <img
              src={images.exterior}
              alt={`${name} villa floorplan`}
              className="absolute inset-0 w-full h-full object-contain bg-background"
            />
          </div>
        </div>

        <div className="px-6 pb-6">
          <h3 className="font-serif text-2xl font-medium mb-3" data-testid={`text-villa-name-${name.toLowerCase()}`}>
            {name} Villa
          </h3>
          <div className="flex items-center gap-6 mb-6 text-muted-foreground font-tabular">
            <span data-testid={`text-area-${name.toLowerCase()}`}>{area} m²</span>
            <span>•</span>
            <span data-testid={`text-bedrooms-${name.toLowerCase()}`}>{bedrooms} Bedrooms</span>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              onClick={() => setShowFloorplan(true)}
              data-testid={`button-floorplan-${name.toLowerCase()}`}
            >
              Expand Picture
            </Button>
            <Button
              onClick={scrollToContact}
              data-testid={`button-request-${name.toLowerCase()}`}
            >
              Request Viewing
            </Button>
          </div>
        </div>
      </motion.div>

      {showFloorplan && (
        <div 
          className="fixed inset-0 z-50 bg-background flex items-center justify-center p-4"
          onClick={() => setShowFloorplan(false)}
          data-testid={`fullscreen-floorplan-${name.toLowerCase()}`}
        >
          <button
            onClick={() => setShowFloorplan(false)}
            className="absolute top-4 right-4 z-50 rounded-full bg-card border border-card-border p-2 hover-elevate active-elevate-2"
            data-testid={`button-close-floorplan-${name.toLowerCase()}`}
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={floorplan} 
            alt={`${name} villa floorplan`} 
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

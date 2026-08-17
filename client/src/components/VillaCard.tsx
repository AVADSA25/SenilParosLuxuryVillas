import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import VillaBrochureGate from "./VillaBrochureGate";

interface VillaCardProps {
  name: string;
  area: string;
  bedrooms: number;
  price: string;
  delivery: string;
  brochureUrl: string;
  images: {
    exterior: string;
    interior: string;
    detail: string;
  };
  floorplan: string;
}

export default function VillaCard({ name, area, bedrooms, price, delivery, brochureUrl, images, floorplan }: VillaCardProps) {
  const [showFloorplan, setShowFloorplan] = useState(false);
  const [showBrochure, setShowBrochure] = useState(false);

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
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-serif text-2xl font-medium" data-testid={`text-villa-name-${name.toLowerCase()}`}>
                {name} Villa
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {name === "Top" && "(A, 355.69 m²)"}
                {name === "Middle" && "(B, 401.34 m²)"}
                {name === "Bottom" && "(C, 275.79 m²)"}
              </p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold" style={{ color: 'var(--graphite)' }} data-testid={`text-price-${name.toLowerCase()}`}>
                {price}
              </p>
              <p className="text-xs mt-0.5" style={{ color: '#888' }}>
                {delivery}
              </p>
            </div>
          </div>
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
              variant="outline"
              onClick={() => setShowBrochure(true)}
              data-testid={`button-brochure-${name.toLowerCase()}`}
            >
              Download Brochure
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

      <Dialog open={showBrochure} onOpenChange={setShowBrochure}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="sr-only">Download {name} Villa Brochure</DialogTitle>
          </DialogHeader>
          <VillaBrochureGate
            villaName={name}
            brochureUrl={brochureUrl}
            onClose={() => setShowBrochure(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

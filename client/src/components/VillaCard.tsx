import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
            onClick={() => setSelectedImage(images.exterior)}
            data-testid={`image-villa-${name.toLowerCase()}`}
          >
            <img
              src={images.exterior}
              alt={`${name} villa`}
              className="absolute inset-0 w-full h-full object-cover"
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
              View Floorplan
            </Button>
            <Button
              onClick={scrollToContact}
              data-testid={`button-request-${name.toLowerCase()}`}
            >
              Request Viewing ({name})
            </Button>
          </div>
        </div>
      </motion.div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <img src={selectedImage} alt="Villa detail" className="w-full h-auto rounded-lg" />
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={showFloorplan} onOpenChange={setShowFloorplan}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{name} Villa Floorplan</DialogTitle>
          </DialogHeader>
          <img src={floorplan} alt={`${name} villa floorplan`} className="w-full h-auto rounded-lg" />
          <Button variant="outline" asChild className="w-full">
            <a href={floorplan} download data-testid={`button-download-floorplan-${name.toLowerCase()}`}>
              Download Floorplan
            </a>
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

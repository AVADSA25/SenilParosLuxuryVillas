import { useState } from "react";
import LogoIntro from "@/components/LogoIntro";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import ParallaxSection from "@/components/ParallaxSection";
import KeyFactsBand from "@/components/KeyFactsBand";
import VillaCard from "@/components/VillaCard";
import DesignSection from "@/components/DesignSection";
import LifestyleSection from "@/components/LifestyleSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import LocationSection from "@/components/LocationSection";
import OwnershipTimeline from "@/components/OwnershipTimeline";
import BrochureGate from "@/components/BrochureGate";
import ContactFooter from "@/components/ContactFooter";
import villa1Floorplan from "@assets/07-senil-villas1-floorplan_1761076882136.png";

const villas = [
  {
    name: "Top",
    area: "355.69",
    bedrooms: 6,
    images: {
      exterior: "https://i.imgur.com/9KZ5QmK.jpg",
      interior: "https://i.imgur.com/xjYZK8L.jpg",
      detail: "https://i.imgur.com/7sYGK2M.jpg",
    },
    floorplan: villa1Floorplan,
  },
  {
    name: "Middle",
    area: "401.34",
    bedrooms: 9,
    images: {
      exterior: "https://i.imgur.com/mNH8pLq.jpg",
      interior: "https://i.imgur.com/8KfZN9R.jpg",
      detail: "https://i.imgur.com/vGqL8Km.jpg",
    },
    floorplan: "https://i.imgur.com/floorplan-middle.jpg",
  },
  {
    name: "Bottom",
    area: "275.79",
    bedrooms: 5,
    images: {
      exterior: "https://i.imgur.com/xWn9K3L.jpg",
      interior: "https://i.imgur.com/TpH7Zmq.jpg",
      detail: "https://i.imgur.com/9sYmN2K.jpg",
    },
    floorplan: "https://i.imgur.com/floorplan-bottom.jpg",
  },
];

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <LogoIntro onComplete={() => setShowContent(true)} />
      {showContent && (
        <div className="min-h-screen">
          <a id="top" />
          <Hero />
          <IntroSection />
          <ParallaxSection />
          <KeyFactsBand />

          <DesignSection />

          <section className="py-24 bg-background" id="villas" data-testid="section-villas">
            <div className="max-w-[1200px] mx-auto px-8">
              <h2 className="font-serif text-4xl md:text-5xl font-medium mb-16 text-center" data-testid="text-villas-title">
                The Villas
              </h2>
              <div className="space-y-12">
                {villas.map((villa) => (
                  <VillaCard key={villa.name} {...villa} />
                ))}
              </div>
              <p className="text-sm text-muted-foreground text-center mt-12" data-testid="text-villas-footnote">
                All areas are approximate and subject to final permits
              </p>
            </div>
          </section>
          <LifestyleSection />
          <SustainabilitySection />
          <LocationSection />
          <OwnershipTimeline />
          <BrochureGate />
          <ContactFooter />
        </div>
      )}
    </>
  );
}

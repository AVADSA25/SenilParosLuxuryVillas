import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import ParallaxSection from "@/components/ParallaxSection";
import VideoParallaxSection from "@/components/VideoParallaxSection";
import KeyFactsBand from "@/components/KeyFactsBand";
import VillaCard from "@/components/VillaCard";
import DesignSection from "@/components/DesignSection";
import LifestyleSection from "@/components/LifestyleSection";
import KeyFeaturesSection from "@/components/KeyFeaturesSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import FilmSection from "@/components/FilmSection";
import PartnersSection from "@/components/PartnersSection";
import WhyGreeceSection from "@/components/WhyGreeceSection";
import LocationSection from "@/components/LocationSection";
import OwnershipTimeline from "@/components/OwnershipTimeline";
import DesignTeamSection from "@/components/DesignTeamSection";
import BrochureSection from "@/components/BrochureSection";
import ViewingSection from "@/components/ViewingSection";
import ContactFooter from "@/components/ContactFooter";
import villa1Floorplan from "@assets/07-senil-villas1-floorplan_1761078324008.png";
import villa2Floorplan from "@assets/07-senil-villas2-floorplan_1761078385180.png";
import villa3Floorplan from "@assets/07-senil-villas3-floorplan_1761078407561.png";
import locationMap from "@assets/08-senil-villas-location-map_1762185262067.png";
import waveIcon from "@assets/awUhJhY - Imgur (1)_1761160541990.png";

const villas = [
  {
    name: "Top",
    area: "355.69",
    bedrooms: 6,
    images: {
      exterior: villa1Floorplan,
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
      exterior: villa2Floorplan,
      interior: "https://i.imgur.com/8KfZN9R.jpg",
      detail: "https://i.imgur.com/vGqL8Km.jpg",
    },
    floorplan: villa2Floorplan,
  },
  {
    name: "Bottom",
    area: "275.79",
    bedrooms: 5,
    images: {
      exterior: villa3Floorplan,
      interior: "https://i.imgur.com/TpH7Zmq.jpg",
      detail: "https://i.imgur.com/9sYmN2K.jpg",
    },
    floorplan: villa3Floorplan,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <a id="top" />
      <Hero />
      <IntroSection />
      <ParallaxSection />
      <KeyFactsBand />

      <DesignSection />
      <DesignTeamSection />

      <VideoParallaxSection />

      <section className="py-24 bg-background" id="villas" data-testid="section-villas">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-center" data-testid="text-villas-title">
            The Villas
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed text-center mb-8" data-testid="text-villas-description">
            Senil is a luxury villa complex in Isterni, Paros, blending Cycladic heritage with refined modern design. Sculpted into the natural slope, each villa frames the Aegean horizon, offering uninterrupted sea views and an atmosphere of elemental calm.
          </p>
          <div className="max-w-4xl mx-auto mb-12">
            <img 
              src={locationMap} 
              alt="SENIL Villas location map - Isterni, Paros" 
              className="w-full h-auto rounded-lg"
              data-testid="image-location-map"
            />
          </div>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed text-center mb-12" data-testid="text-villas-details">
            Located 4.8 km from Naoussa and 200 m from the sea, the estate covers 8,295 m² with two villas of 322.78 m² and 347.75 m², plus auxiliary spaces and an approved extension of 249.85 m². Landscaped Mediterranean gardens complete the setting.
          </p>
          <div className="flex justify-center mb-8">
            <img 
              src={waveIcon} 
              alt="Wave icon" 
              className="w-40 h-40 opacity-70"
              style={{ filter: 'brightness(0.7)' }}
              data-testid="icon-wave-villas"
            />
          </div>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-center mb-16" data-testid="text-villas-intro">
            Three independent villas: Top, Middle, Bottom. One horizon. Private pools, deep terraces and indoor-outdoor living; 6, 9 and 5 bedrooms respectively.
          </p>
          <div className="space-y-12">
            {villas.map((villa) => (
              <VillaCard key={villa.name} {...villa} />
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center mt-12" data-testid="text-villas-footnote">
            Areas are approximate and subject to final permits. Technical SQM Plan (PDF) available on request.
          </p>
        </div>
      </section>
      <LifestyleSection />
      <KeyFeaturesSection />
      <SustainabilitySection />
      <FilmSection />
      <PartnersSection />
      <WhyGreeceSection />
      <LocationSection />
      <BrochureSection />
      <OwnershipTimeline />
      <ViewingSection />
      <ContactFooter />
    </div>
  );
}

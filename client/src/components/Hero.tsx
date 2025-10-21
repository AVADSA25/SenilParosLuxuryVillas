import { Button } from "@/components/ui/button";

const LOGO = "https://i.imgur.com/M3kLaK9.png";
const HERO_IMAGE = "https://i.imgur.com/NgkAQhs.png";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 text-center text-white">
        <img 
          src={LOGO}
          alt="SENIL"
          className="mx-auto mb-6 w-[400px] max-w-[80vw]"
          data-testid="logo-hero"
        />
        <p
          className="text-xl md:text-2xl mb-12 text-white/90 font-light max-w-2xl mx-auto"
          data-testid="text-hero-subtitle"
        >
          Luxurious villas in Isterni, Paros
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="rounded-full px-8 bg-primary text-primary-foreground border border-primary-border"
            onClick={() => scrollToSection("#contact")}
            data-testid="button-request-viewing"
          >
            Request Viewing
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20"
            onClick={() => scrollToSection("#brochure")}
            data-testid="button-download-brochure"
          >
            Download Brochure
          </Button>
        </div>
      </div>
    </section>
  );
}
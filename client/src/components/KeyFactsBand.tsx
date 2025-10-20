import { useEffect, useState } from "react";

const facts = [
  "Isterni, Paros",
  "19 Bedrooms",
  "1,032.82 m² Living",
  "Architect: TBD",
  "Completion 2026",
  "Price on Request",
  "Viewings by Appointment",
];

export default function KeyFactsBand() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsSticky(window.scrollY > heroHeight + 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-30 bg-primary text-primary-foreground transition-opacity duration-300 ${
        isSticky ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ minHeight: "48px" }}
      data-testid="band-key-facts"
    >
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-8 px-8 py-3 min-w-max justify-center">
          {facts.map((fact, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="text-sm font-medium whitespace-nowrap" data-testid={`fact-${index}`}>
                {fact}
              </span>
              {index < facts.length - 1 && (
                <span className="text-primary-foreground/40">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

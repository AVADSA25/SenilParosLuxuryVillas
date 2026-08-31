import senilLogo from "@assets/SENIL_WHITE_1761080366041.png";
import { Instagram, Youtube } from "lucide-react";
import { SiTiktok } from "react-icons/si";

export default function ContactFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16 relative" id="contact" data-testid="footer-contact">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-medium mb-4" data-testid="text-contact-title">
              Contact
            </h3>
            <div className="space-y-2 text-secondary-foreground/80">
              <p data-testid="text-phone">
                <a href="tel:+306957831717" className="hover:text-secondary-foreground transition-colors">
                  +30 695 783 1717
                </a>
              </p>
              <p data-testid="text-phone-2">
                <a href="tel:+306932314314" className="hover:text-secondary-foreground transition-colors">
                  +30 693 2314314
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@senilluxuriousparosvillas.com"
                  className="hover:text-secondary-foreground transition-colors"
                  data-testid="link-email"
                >
                  info@senilluxuriousparosvillas.com
                </a>
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/seniluxuriousparosvillas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@seniluxuriousparosvillas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
                aria-label="TikTok"
                data-testid="link-tiktok"
              >
                <SiTiktok className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@seniluxuriousparosvillas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
                aria-label="YouTube"
                data-testid="link-youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-medium mb-4">Location</h3>
            <p className="text-secondary-foreground/80">
              Isterni, Paros
              <br />
              Cyclades, Greece
            </p>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-medium mb-4">Viewings</h3>
            <p className="text-secondary-foreground/80">
              By appointment only
              <br />
              On-site or virtual conference call
            </p>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8">
          <div
            className="mb-10 rounded-lg bg-white px-6 py-7 text-[#144e8c]"
            data-testid="funding-notice"
          >
            <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap items-center justify-center gap-6 md:justify-start">
                <img
                  src="/funding/ministry-of-rural-development.png"
                  alt="Hellenic Republic Ministry of Rural Development and Food"
                  className="h-auto w-[min(100%,420px)] max-w-[420px]"
                  data-testid="funding-logo-ministry"
                />
                <div className="flex items-center gap-3" aria-label="NextGenerationEU">
                  <span
                    className="text-3xl leading-none text-[#f6c900]"
                    aria-hidden="true"
                  >
                    ★ ★ ★
                  </span>
                  <span className="text-lg font-semibold leading-tight text-[#595a5c]">
                    NextGenerationEU
                  </span>
                </div>
                <img
                  src="/funding/recovery-resilience-plan.png"
                  alt="National Recovery and Resilience Plan"
                  className="h-auto w-[min(100%,250px)] max-w-[250px]"
                  data-testid="funding-logo-recovery"
                />
              </div>

              <div className="max-w-sm text-center text-sm leading-relaxed md:text-right">
                <p className="font-semibold uppercase tracking-wide">
                  Establishment of a New Tourism Unit
                </p>
                <p className="mt-2">
                  The investment was implemented under the action{" "}
                  <strong>“Green Agrotourism”</strong> of the Recovery and
                  Resilience Facility.
                </p>
                <div className="mt-3 grid grid-cols-2 gap-x-5 gap-y-1 text-left md:text-right">
                  <span>Investment budget:</span>
                  <strong>€3,015,095.73</strong>
                  <span>EU Funding:</span>
                  <strong>€1,507,547.87</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="flex-1">
              <p className="text-sm text-secondary-foreground/60" data-testid="text-legal">
                Renders and areas are indicative. All areas approximate and subject to final permits.
              </p>
            </div>
            <div className="flex-shrink-0">
              <img 
                src={senilLogo} 
                alt="SENIL Logo" 
                className="h-20 w-auto opacity-20"
                data-testid="footer-logo"
              />
            </div>
          </div>
          <div className="mt-6 pt-2 border-t border-secondary-foreground/10 flex flex-col items-center gap-1">
            <p className="text-[10px] text-center text-secondary-foreground/30">
              All rights reserved to @senilluxuriousparosvillas
            </p>
            <a
              href="https://avadigital.ai"
              target="_blank"
              className="text-[10px] text-secondary-foreground/25 hover:text-secondary-foreground/40 transition-colors"
              data-testid="link-site-credit"
            >
              Site by AVA Digital
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

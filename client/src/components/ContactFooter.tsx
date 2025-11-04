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
                href="https://www.instagram.com/senilluxuriousparosvilla/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@senilluxuriousparosvilla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
                aria-label="TikTok"
                data-testid="link-tiktok"
              >
                <SiTiktok className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@senilluxuriousparosvilla"
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
          <div className="mt-6 pt-2 border-t border-secondary-foreground/10">
            <p className="text-[10px] text-center text-secondary-foreground/30">
              All rights reserved to @senilluxuriousparosvillas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import senilLogo from "@assets/SENIL_WHITE_1761080366041.png";

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
              <p data-testid="text-phone-1">+30 123 456 7890</p>
              <p data-testid="text-phone-2">+30 098 765 4321</p>
              <p>
                <a
                  href="mailto:sales@senilparos.com"
                  className="hover:text-secondary-foreground transition-colors"
                  data-testid="link-email"
                >
                  sales@senilparos.com
                </a>
              </p>
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

        <div className="border-t border-secondary-foreground/20 pt-8 space-y-4">
          <p className="text-sm text-secondary-foreground/60" data-testid="text-legal">
            Renders and areas are indicative. All areas approximate and subject to final permits.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
              Cookies Policy
            </a>
          </div>
          <p className="text-xs text-secondary-foreground/40">
            Marketed in collaboration with Engel & Völkers Paros
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 opacity-20 hover:opacity-40 transition-opacity duration-300">
        <img 
          src={senilLogo} 
          alt="SENIL Logo" 
          className="h-16 w-auto"
          data-testid="footer-logo"
        />
      </div>
    </footer>
  );
}

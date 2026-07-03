import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Instagram, Youtube, Phone, Mail } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { motion } from "framer-motion";
import senilLogo from "@assets/SENIL_WHITE_1761080366041.png";

export default function ThankYou() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-secondary text-secondary-foreground flex items-center justify-center px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full text-center"
      >
        <img 
          src={senilLogo} 
          alt="SENIL" 
          className="w-[400px] max-w-full mx-auto mb-12 opacity-90"
          data-testid="logo-thankyou"
        />

        <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6" data-testid="text-thankyou-title">
          Thank You
        </h1>

        <p className="text-xl text-secondary-foreground/80 mb-4" data-testid="text-thankyou-message">
          We've received your inquiry and appreciate your interest in SENIL.
        </p>

        <p className="text-lg text-secondary-foreground/70 mb-12">
          Our team will contact you within 24 hours to discuss your requirements.
        </p>

        <div className="border-t border-secondary-foreground/20 pt-8 mb-8">
          <p className="text-sm text-secondary-foreground/60 mb-6">
            For immediate assistance, please contact us:
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a 
              href="tel:+306957831717"
              className="flex items-center gap-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              data-testid="link-phone-1"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+30 695 783 1717</span>
            </a>
            <span className="hidden sm:inline text-secondary-foreground/40">•</span>
            <a 
              href="tel:+306932314314"
              className="flex items-center gap-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              data-testid="link-phone-2"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+30 693 2314314</span>
            </a>
          </div>

          <a 
            href="mailto:drits74@hotmail.com"
            className="flex items-center justify-center gap-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors mb-8"
            data-testid="link-email"
          >
            <Mail className="w-4 h-4" />
            <span className="font-medium">drits74@hotmail.com</span>
          </a>

          <div className="flex gap-4 justify-center mb-8">
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

        <Button
          onClick={() => setLocation("/")}
          variant="outline"
          size="lg"
          className="rounded-full px-8"
          data-testid="button-return-home"
        >
          Return to Home
        </Button>
      </motion.div>
    </div>
  );
}

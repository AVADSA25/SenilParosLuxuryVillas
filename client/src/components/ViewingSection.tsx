import { motion } from "framer-motion";
import ViewingRequestForm from "./ViewingRequestForm";
import { Instagram, Youtube } from "lucide-react";
import { SiTiktok } from "react-icons/si";

export default function ViewingSection() {
  return (
    <section className="bg-accent" data-testid="section-viewing">
      <div className="w-full bg-primary text-primary-foreground scroll-mt-32" style={{ minHeight: "48px" }} id="viewing">
        <div className="flex items-center justify-center gap-8 px-8 py-3">
          <span className="text-sm font-medium">Follow us</span>
          <span className="text-primary-foreground/40">•</span>
          <a 
            href="https://www.instagram.com/senilluxuriousparosvilla/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            aria-label="Instagram"
            data-testid="link-instagram-bar"
          >
            <Instagram className="w-4 h-4" />
            <span className="text-sm font-medium whitespace-nowrap">Instagram</span>
          </a>
          <span className="text-primary-foreground/40">•</span>
          <a 
            href="https://www.tiktok.com/@senilluxuriousparosvilla"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            aria-label="TikTok"
            data-testid="link-tiktok-bar"
          >
            <SiTiktok className="w-4 h-4" />
            <span className="text-sm font-medium whitespace-nowrap">TikTok</span>
          </a>
          <span className="text-primary-foreground/40">•</span>
          <a 
            href="https://www.youtube.com/@senilluxuriousparosvilla"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            aria-label="YouTube"
            data-testid="link-youtube-bar"
          >
            <Youtube className="w-4 h-4" />
            <span className="text-sm font-medium whitespace-nowrap">YouTube</span>
          </a>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <ViewingRequestForm />
        </motion.div>
      </div>
    </section>
  );
}

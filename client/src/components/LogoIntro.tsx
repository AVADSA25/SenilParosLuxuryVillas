import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WordmarkImage } from "./WordmarkImage";
import logoImage from "@assets/SENIL_WHITE_1761053378465.png";

const FLAG = "senil:intro_seen";
const WORDMARK = logoImage;

export default function LogoIntro({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(false);
  const [shouldSkip, setShouldSkip] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = localStorage.getItem(FLAG);
    
    if (prefersReducedMotion || seen) {
      setShouldSkip(true);
      onComplete();
      return;
    }

    setShow(true);
    const timer = setTimeout(() => {
      localStorage.setItem(FLAG, "1");
      setShow(false);
      setTimeout(onComplete, 300);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (shouldSkip) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "#1E1E1C" }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          aria-hidden="true"
          data-testid="logo-intro-overlay"
        >
          <WordmarkImage src={WORDMARK} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WordmarkImage } from "./WordmarkImage";

const FLAG = "senil:intro_seen";
const WORDMARK = "https://i.imgur.com/nLRvGQ0_d.png";

export default function LogoIntro({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    const seen = localStorage.getItem(FLAG);
    if (!seen) {
      setShow(true);
      const timer = setTimeout(() => {
        localStorage.setItem(FLAG, "1");
        setShow(false);
        setTimeout(onComplete, 240); // Wait for exit animation
      }, 900);
      return () => clearTimeout(timer);
    } else {
      onComplete();
    }
  }, [onComplete]);

  const prefersReducedMotion = typeof window !== "undefined" 
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches 
    : false;
    
  if (prefersReducedMotion) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24 }}
          aria-hidden="true"
          data-testid="logo-intro-overlay"
        >
          <WordmarkImage src={WORDMARK} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WordmarkImage } from "./WordmarkImage";

const FLAG = "senil:intro_seen";
const WORDMARK = "https://i.imgur.com/nLRvGQ0_d.png";

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

    // Only show intro if not seen before
    setShow(true);
    const timer = setTimeout(() => {
      localStorage.setItem(FLAG, "1");
      setShow(false);
      setTimeout(onComplete, 240); // Wait for exit animation
    }, 900);
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  // Don't render anything if we should skip
  if (shouldSkip) return null;

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

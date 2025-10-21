import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@assets/SENIL_WHITE_1761051060324.png";

const FLAG = "senil:intro_seen";

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
      setTimeout(onComplete, 240);
    }, 900);
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (shouldSkip) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: "#000000" }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24 }}
          aria-hidden="true"
          data-testid="logo-intro-overlay"
        >
          <motion.img
            src={logoImage}
            alt="SENIL"
            className="w-[600px] max-w-[85vw]"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            data-testid="logo-intro-image"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

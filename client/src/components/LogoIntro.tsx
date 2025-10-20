import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LogoIntro({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem("senil:intro_seen");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasSeenIntro || prefersReducedMotion) {
      setShow(false);
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      localStorage.setItem("senil:intro_seen", "1");
      setShow(false);
      setTimeout(onComplete, 300);
    }, 900);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        data-testid="logo-intro"
      >
        <motion.div
          initial={{ scale: 0.92 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M40 80 Q40 40, 60 40 T80 80"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.42, delay: 0.18, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

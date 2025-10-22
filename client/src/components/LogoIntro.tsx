import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import introVideo from "@assets/Camera_rotation_still_202510212204_1761077076465.mp4";

const FLAG = "senil:intro_seen";

export default function LogoIntro({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(false);
  const [shouldSkip, setShouldSkip] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = localStorage.getItem(FLAG);
    
    if (prefersReducedMotion || seen) {
      setShouldSkip(true);
      onComplete();
      return;
    }

    setShow(true);
    
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
      videoRef.current.play();
    }
  }, [onComplete]);

  const handleVideoEnd = () => {
    localStorage.setItem(FLAG, "1");
    setShow(false);
    setTimeout(onComplete, 300);
  };

  if (shouldSkip) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          aria-hidden="true"
          data-testid="logo-intro-overlay"
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            playsInline
            onEnded={handleVideoEnd}
            data-testid="intro-video"
          >
            <source src={introVideo} type="video/mp4" />
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
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

    // Never leave the site hidden if the intro video is blocked or slow.
    const fallbackTimer = window.setTimeout(() => {
      localStorage.setItem(FLAG, "1");
      setShow(false);
      onComplete();
    }, 8000);

    return () => window.clearTimeout(fallbackTimer);
  }, [onComplete]);

  const handleVideoLoaded = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
      videoRef.current.play().catch((err) => {
        console.error("Video play failed:", err);
        handleSkip();
      });
    }
  };

  const handleVideoEnd = () => {
    localStorage.setItem(FLAG, "1");
    setShow(false);
    setTimeout(onComplete, 300);
  };

  const handleSkip = () => {
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
          <button
            onClick={handleSkip}
            className="absolute top-4 right-4 z-50 rounded-full bg-card border border-card-border p-2 hover-elevate active-elevate-2"
            aria-label="Skip intro"
            data-testid="button-skip-intro"
          >
            <X className="w-6 h-6" />
          </button>
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            preload="auto"
            onLoadedData={handleVideoLoaded}
            onEnded={handleVideoEnd}
            onError={handleSkip}
            data-testid="intro-video"
          >
            <source src={introVideo} type="video/mp4" />
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import waveIcon from "@assets/awUhJhY - Imgur (1)_1761160541990.png";

export default function FilmSection() {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const posterUrl = "https://i.ytimg.com/vi/o96BqDku1_g/maxresdefault.jpg";
  const videoUrl = "https://www.youtube-nocookie.com/embed/o96BqDku1_g?modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&enablejsapi=1";

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            if (!isIframeLoaded && !isPlaying) {
              // Load iframe when scrolled into view
            }
          } else if (entry.intersectionRatio < 0.3) {
            // Pause when scrolled out of view
            if (isIframeLoaded) {
              setIsIframeLoaded(false);
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: [0.3, 0.6] }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [isIframeLoaded, isPlaying]);

  const handlePosterClick = () => {
    setIsIframeLoaded(true);
    setIsPlaying(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handlePosterClick();
    }
  };

  return (
    <section 
      id="film" 
      ref={sectionRef}
      className="pt-4 pb-24 bg-black" 
      data-testid="section-film"
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-8">
            <img 
              src={waveIcon} 
              alt="Wave icon" 
              className="w-40 h-40 opacity-40"
              style={{ filter: 'brightness(1.5)' }}
              data-testid="icon-wave-film"
            />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-center text-white" data-testid="text-film-title">
            Presentation Film
          </h2>
          <p className="text-center text-white/70 mb-12 max-w-[800px] mx-auto">
            A quiet look at SENIL's architecture and the landscape of Paros, shot for stillness, light, and horizon.
          </p>

          <div className="relative aspect-video overflow-hidden rounded-lg bg-graphite">
            {!isIframeLoaded ? (
              <button
                onClick={handlePosterClick}
                onKeyDown={handleKeyPress}
                className="relative w-full h-full group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Play SENIL Presentation Film"
                data-testid="button-play-video"
              >
                <img
                  src={posterUrl}
                  alt="SENIL Presentation Film thumbnail"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-graphite/40 group-hover:bg-graphite/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-8 h-8 text-graphite ml-1" fill="currentColor" />
                  </div>
                </div>
              </button>
            ) : (
              <iframe
                src={`${videoUrl}&autoplay=1`}
                title="SENIL Presentation Film"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                data-testid="iframe-video"
              />
            )}
          </div>

          <p className="text-sm text-white/60 text-center mt-6">
            Footage includes architectural renders and scenes of Paros: Naoussa harbor, beaches, and hillside context.
          </p>
        </motion.div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "SENIL Presentation Film",
            "description": "A quiet look at SENIL's architecture and the landscape of Paros, shot for stillness, light, and horizon.",
            "thumbnailUrl": posterUrl,
            "uploadDate": "2025-10-22T12:00:00+00:00",
            "duration": "PT1M23S",
            "embedUrl": "https://www.youtube.com/embed/o96BqDku1_g",
            "contentUrl": "https://www.youtube.com/watch?v=o96BqDku1_g"
          })
        }}
      />
    </section>
  );
}

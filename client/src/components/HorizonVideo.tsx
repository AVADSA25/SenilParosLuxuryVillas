import { useEffect, useRef, useState } from "react";

export default function HorizonVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: [0.6] }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full h-[60vh] md:h-[70vh] relative overflow-hidden" data-testid="section-video">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
        poster="https://i.imgur.com/xjYZK8L.jpg"
        data-testid="video-horizon"
      >
        <source src="https://i.imgur.com/placeholder-video.mp4" type="video/mp4" />
      </video>
    </section>
  );
}

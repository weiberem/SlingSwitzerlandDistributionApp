"use client";

import { useState } from "react";

const YOUTUBE_ID = "09KxiRLC7s4";
const START_SECONDS = 489;
const END_SECONDS = 520;

export default function HeroVideo() {
  const [isLoaded, setIsLoaded] = useState(false);

  const embedUrl = `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_ID}&start=${START_SECONDS}&end=${END_SECONDS}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&iv_load_policy=3&disablekb=1`;

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: "scale(1.3)",
          transformOrigin: "center center",
        }}
      >
        <iframe
          src={embedUrl}
          title="Sling Aircraft Background Video"
          className="absolute inset-0 w-full h-full"
          style={{ border: "none" }}
          allow="autoplay; encrypted-media"
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
    </div>
  );
}

"use client";

import { useState } from "react";

// YouTube video ID from: https://youtu.be/LbO28tBc1hU
const YOUTUBE_ID = "LbO28tBc1hU";
const START_SECONDS = 7;
const END_SECONDS = 26;

export default function HeroVideo() {
  const [isLoaded, setIsLoaded] = useState(false);

  // YouTube embed with autoplay, mute, loop, and start/end times
  // playlist parameter = same video ID enables looping
  const embedUrl = `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_ID}&start=${START_SECONDS}&end=${END_SECONDS}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&iv_load_policy=3&disablekb=1`;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Black fallback background */}
      <div className="absolute inset-0 bg-black" />

      {/* YouTube iframe - scaled up to cover and hide letterboxing */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          // Scale up to ensure full coverage and crop black bars
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

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />
      {/* Red gradient overlay from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20" />
      {/* Top gradient for nav blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
    </div>
  );
}

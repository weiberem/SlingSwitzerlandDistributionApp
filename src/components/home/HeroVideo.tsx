"use client";

import { useRef, useEffect } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Loop the video between 7s and 26s
    const startTime = 7;
    const endTime = 26;

    video.currentTime = startTime;

    const handleTimeUpdate = () => {
      if (video.currentTime >= endTime) {
        video.currentTime = startTime;
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/hero-poster.jpg"
      >
        {/*
          Place your video file at: public/videos/hero.mp4
          The video will loop between 7s and 26s automatically.

          To convert the YouTube clip:
          1. Download the video from YouTube
          2. Cut to the desired section (7s-26s)
          3. Convert to mp4 (web-optimized)
          4. Place in public/videos/hero.mp4
        */}
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />
      {/* Red gradient overlay from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
    </div>
  );
}

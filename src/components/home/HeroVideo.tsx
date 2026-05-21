"use client";

import { useEffect, useRef, useState } from "react";

const YOUTUBE_ID = "09KxiRLC7s4";
const START_SECONDS = 489;
const END_SECONDS = 520;

declare global {
  interface Window {
    YT?: {
      Player: new (
        el: HTMLIFrameElement,
        opts: {
          events?: {
            onReady?: (e: { target: { playVideo: () => void; mute: () => void } }) => void;
            onStateChange?: (e: { data: number; target: { playVideo: () => void } }) => void;
          };
        },
      ) => unknown;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

export default function HeroVideo() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const embedUrl = `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_ID}&start=${START_SECONDS}&end=${END_SECONDS}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&iv_load_policy=3&disablekb=1&fs=0`;

  useEffect(() => {
    const initPlayer = () => {
      if (!iframeRef.current || !window.YT) return;
      new window.YT.Player(iframeRef.current, {
        events: {
          onReady: (e) => {
            e.target.mute();
            e.target.playVideo();
            // Optimistic: assume it'll play; if blocked the cover stays visible briefly
            setTimeout(() => setIsPlaying(true), 600);
          },
          onStateChange: (e) => {
            // 1 = playing
            if (e.data === 1) setIsPlaying(true);
          },
        },
      });
    };

    if (window.YT) {
      initPlayer();
    } else {
      const existing = document.querySelector(
        'script[src="https://www.youtube.com/iframe_api"]',
      );
      window.onYouTubeIframeAPIReady = initPlayer;
      if (!existing) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
      }
    }
  }, []);

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
          ref={iframeRef}
          src={embedUrl}
          title="Sling Aircraft Background Video"
          className="absolute inset-0 w-full h-full"
          style={{ border: "none" }}
          allow="autoplay; encrypted-media; picture-in-picture"
          loading="eager"
        />
      </div>

      {/* Cover that hides the YouTube play button until autoplay starts */}
      <div
        className={`absolute inset-0 bg-black pointer-events-none transition-opacity duration-700 ${
          isPlaying ? "opacity-0" : "opacity-100"
        }`}
      />

      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
    </div>
  );
}

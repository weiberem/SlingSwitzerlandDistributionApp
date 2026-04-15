"use client";

interface YouTubeBackgroundProps {
  videoId?: string;
  startSeconds?: number;
  endSeconds?: number;
  className?: string;
}

// Default: Sling Aircraft official video
const DEFAULT_VIDEO_ID = "LbO28tBc1hU";

export default function YouTubeBackground({
  videoId = DEFAULT_VIDEO_ID,
  startSeconds = 0,
  endSeconds,
  className = "",
}: YouTubeBackgroundProps) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: videoId,
    controls: "0",
    showinfo: "0",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    enablejsapi: "1",
    iv_load_policy: "3",
    disablekb: "1",
  });

  if (startSeconds > 0) params.set("start", String(startSeconds));
  if (endSeconds) params.set("end", String(endSeconds));

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Black fallback */}
      <div className="absolute inset-0 bg-black" />

      {/* YouTube iframe - scaled to cover and hide letterboxing */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: "scale(1.3)",
          transformOrigin: "center center",
        }}
      >
        <iframe
          src={embedUrl}
          title="Background Video"
          className="absolute inset-0 w-full h-full"
          style={{ border: "none" }}
          allow="autoplay; encrypted-media"
          loading="lazy"
        />
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
    </div>
  );
}

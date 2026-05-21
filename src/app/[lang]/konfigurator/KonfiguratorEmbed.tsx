"use client";

export default function KonfiguratorEmbed() {
  return (
    <section className="bg-black">
      <iframe
        src="https://slingaircraftconfig.app"
        title="Sling Aircraft Konfigurator"
        className="block w-full border-0"
        style={{ height: "calc(100vh - 6rem)", minHeight: "720px" }}
        allow="fullscreen; clipboard-write"
        loading="eager"
      />
    </section>
  );
}

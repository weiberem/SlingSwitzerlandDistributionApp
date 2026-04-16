import type { Metadata } from "next";
import KonfiguratorEmbed from "./KonfiguratorEmbed";

export const metadata: Metadata = {
  title: "Konfigurator - Gestalten Sie Ihr Traumflugzeug",
  description:
    "Konfigurieren Sie Ihren Sling Aircraft online. Wählen Sie Modell, Avionik und Ausstattung.",
};

export default function KonfiguratorPage() {
  return <KonfiguratorEmbed />;
}

import type { Metadata } from "next";
import KonfiguratorEmbed from "./KonfiguratorEmbed";

export const metadata: Metadata = {
  title: "Konfigurator – Gestalte deinen Sling",
  description:
    "Konfiguriere deinen Sling Aircraft online. Wähle Modell, Avionik und Ausstattung.",
};

export default function KonfiguratorPage() {
  return <KonfiguratorEmbed />;
}

import { Suspense } from "react";
import type { Metadata } from "next";
import KonfiguratorClient from "./KonfiguratorClient";

export const metadata: Metadata = {
  title: "Konfigurator - Gestalten Sie Ihr Traumflugzeug",
  description:
    "Konfigurieren Sie Ihren Sling Aircraft online. Wählen Sie Modell, Farbe, Avionik und Ausstattung.",
};

function KonfiguratorFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-neutral-200 border-t-brand-600 rounded-full animate-spin mx-auto mb-4" />
        <p className="text-neutral-500 text-sm">Konfigurator wird geladen...</p>
      </div>
    </div>
  );
}

export default function KonfiguratorPage() {
  return (
    <Suspense fallback={<KonfiguratorFallback />}>
      <KonfiguratorClient />
    </Suspense>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Maximize2 } from "lucide-react";

const CONFIGURATOR_URL = "https://sling-configurator.vercel.app";

export default function KonfiguratorEmbed() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-4 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between"
          >
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-brand-400">
                Konfigurator
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Konfigurieren Sie Ihren Sling
              </h1>
              <p className="mt-2 text-neutral-400">
                Wählen Sie Modell, Optionen und Ausstattung
              </p>
            </div>
            <a
              href={CONFIGURATOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm text-neutral-400 hover:text-white border border-neutral-700 hover:border-brand-600 rounded-lg transition-all"
            >
              <Maximize2 className="h-4 w-4" />
              Vollbild öffnen
            </a>
          </motion.div>
        </div>
      </section>

      {/* Embedded Configurator */}
      <section className="bg-black">
        <div className="relative w-full" style={{ minHeight: "calc(100vh - 180px)" }}>
          {/* Loading state */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-950 z-10">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-neutral-800 border-t-brand-600 rounded-full animate-spin mx-auto mb-4" />
                <p className="text-neutral-400 text-sm">
                  Konfigurator wird geladen...
                </p>
              </div>
            </div>
          )}

          <iframe
            src={CONFIGURATOR_URL}
            title="Sling Aircraft Konfigurator"
            className="w-full border-0"
            style={{ height: "calc(100vh - 180px)", minHeight: "600px" }}
            allow="fullscreen"
            onLoad={() => setIsLoaded(true)}
          />
        </div>

        {/* Mobile: Link to open standalone */}
        <div className="sm:hidden p-4 text-center">
          <a
            href={CONFIGURATOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-500 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Konfigurator im Vollbild öffnen
          </a>
        </div>
      </section>
    </>
  );
}

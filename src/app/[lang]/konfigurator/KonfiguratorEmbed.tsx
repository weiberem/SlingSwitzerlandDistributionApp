"use client";

import { motion } from "framer-motion";
import { Wrench, Mail, Phone } from "lucide-react";

export default function KonfiguratorEmbed() {
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
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-brand-400">
              Konfigurator
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Konfigurieren Sie Ihren Sling
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Under Construction */}
      <section className="bg-black min-h-[60vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center px-4 max-w-lg"
        >
          {/* Animated gear/wrench icon */}
          <div className="relative w-24 h-24 mx-auto mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-4 border-neutral-800 border-t-brand-600"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Wrench className="h-8 w-8 text-brand-500" />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Im Aufbau
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-8">
            Unser interaktiver Flugzeug-Konfigurator wird derzeit entwickelt.
            Bald können Sie hier Ihr Sling-Flugzeug nach Ihren Wünschen zusammenstellen.
          </p>

          <div className="h-px bg-neutral-800 mb-8" />

          <p className="text-sm text-neutral-500 mb-6">
            In der Zwischenzeit beraten wir Sie gerne persönlich:
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@slingaircraftswitzerland.ch"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-500 transition-colors"
            >
              <Mail className="h-4 w-4" />
              Kontakt aufnehmen
            </a>
            <a
              href="tel:+41000000000"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-neutral-700 text-white font-semibold rounded-lg hover:border-brand-600 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Anrufen
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}

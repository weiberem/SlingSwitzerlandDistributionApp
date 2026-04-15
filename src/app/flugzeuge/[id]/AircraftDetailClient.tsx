"use client";

import { motion } from "framer-motion";
import {
  Plane,
  ArrowRight,
  Check,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Aircraft, formatPrice } from "@/data/aircraft";

export default function AircraftDetailClient({
  aircraft: plane,
}: {
  aircraft: Aircraft;
}) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${plane.heroColor}`}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/flugzeuge"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Übersicht
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                {plane.name}
              </h1>
              <p className="mt-2 text-xl text-white/80 font-medium">
                {plane.tagline}
              </p>
              <p className="mt-6 text-white/70 leading-relaxed">
                {plane.longDescription}
              </p>
              <div className="mt-8 flex items-center gap-6">
                <div>
                  <span className="text-sm text-white/60">ab</span>
                  <div className="text-3xl font-bold text-white">
                    {formatPrice(plane.basePrice)}
                  </div>
                </div>
                <Button
                  href={`/konfigurator?model=${plane.id}`}
                  size="lg"
                  className="bg-white text-neutral-900 hover:bg-white/90"
                >
                  Jetzt konfigurieren
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <div className="w-80 h-80 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                <Plane className="h-32 w-32 text-white/30" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-12">
              Technische Daten
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plane.specs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-neutral-50 rounded-xl p-6 border border-neutral-100"
              >
                <div className="text-sm text-neutral-400 mb-2">
                  {spec.label}
                </div>
                <div className="text-xl font-bold text-neutral-900">
                  {spec.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Highlights & Features
              </h2>
              <p className="text-neutral-500 leading-relaxed mb-8">
                Der {plane.name} überzeugt durch eine Kombination aus
                hochwertiger Verarbeitung, modernster Technik und
                durchdachtem Design.
              </p>
              <div className="space-y-4">
                {plane.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5 text-brand-600" />
                    </div>
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`h-80 rounded-2xl bg-gradient-to-br ${plane.heroColor} flex items-center justify-center`}
            >
              <Plane className="h-24 w-24 text-white/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Interessiert am {plane.name}?
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto mb-8">
              Konfigurieren Sie Ihren {plane.name} nach Ihren Wünschen oder
              kontaktieren Sie uns für eine persönliche Beratung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href={`/konfigurator?model=${plane.id}`}
                size="lg"
              >
                Jetzt konfigurieren
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                href="/kontakt"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 hover:border-white/40"
              >
                Kontakt aufnehmen
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

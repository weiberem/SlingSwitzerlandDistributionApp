"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Shield,
  Clock,
  Package,
  CheckCircle,
  Phone,
  FileText,
  Settings,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const services = [
  {
    icon: Wrench,
    title: "Wartung & Inspektion",
    description:
      "Regelmässige Wartung und jährliche Inspektionen nach Herstellervorgaben. Wir halten Ihr Flugzeug in bestem Zustand.",
    features: [
      "Jährliche Inspektion (Annual)",
      "50-Stunden-Kontrolle",
      "100-Stunden-Kontrolle",
      "Motorenwartung Rotax",
    ],
  },
  {
    icon: Settings,
    title: "Reparatur & Instandsetzung",
    description:
      "Professionelle Reparaturen und Instandsetzungen. Von der kleinen Korrektur bis zur umfangreichen Überholung.",
    features: [
      "Strukturreparaturen",
      "Avionik-Reparaturen",
      "Fahrwerksüberholung",
      "Motorenüberholung",
    ],
  },
  {
    icon: Package,
    title: "Ersatzteile",
    description:
      "Original Sling Aircraft Ersatzteile direkt ab Lager oder kurzfristig lieferbar. Schnelle Verfügbarkeit garantiert.",
    features: [
      "Original TAF-Ersatzteile",
      "Avionik-Komponenten",
      "Rotax-Motorenteile",
      "Verbrauchsmaterial",
    ],
  },
  {
    icon: FileText,
    title: "Zulassung & Dokumentation",
    description:
      "Unterstützung bei der Zulassung in der Schweiz, technische Dokumentation und Begleitung durch den Registrierungsprozess.",
    features: [
      "BAZL-Zulassungsbegleitung",
      "Technische Dokumentation",
      "Import & Verzollung",
      "Versicherungsberatung",
    ],
  },
];

export default function ServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-brand-950 to-neutral-900" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-brand-400">
              Service & Wartung
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Rundum bestens betreut
            </h1>
            <p className="mt-6 text-lg text-neutral-300 leading-relaxed">
              Vom ersten Flug bis zur jährlichen Inspektion: Wir sind Ihr
              zuverlässiger Partner für alle Belange rund um Ihr Sling-Flugzeug.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-16 bg-neutral-900 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Herstellergarantie",
                text: "Volle Herstellergarantie durch autorisierten Service",
              },
              {
                icon: Clock,
                title: "Schnelle Reaktion",
                text: "Kurze Wege und schnelle Terminvergabe in der Schweiz",
              },
              {
                icon: CheckCircle,
                title: "Zertifiziert",
                text: "Geschultes Personal nach TAF-Standards",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-600/15 flex items-center justify-center shrink-0">
                  <item.icon className="h-6 w-6 text-brand-500" />
                </div>
                <div>
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-neutral-400 mt-1">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            light
            label="Unsere Leistungen"
            title="Umfassender Service"
            description="Alles aus einer Hand: Von der Wartung über Reparaturen bis zur Ersatzteilversorgung."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-900 rounded-xl p-8 border border-neutral-800 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-600/15 flex items-center justify-center mb-6">
                  <service.icon className="h-6 w-6 text-brand-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle className="h-4 w-4 text-brand-500 shrink-0" />
                      <span className="text-neutral-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
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
              Service-Termin vereinbaren
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto mb-8">
              Kontaktieren Sie uns für einen Service-Termin oder eine
              unverbindliche Beratung zu Wartung und Ersatzteilen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/kontakt" size="lg">
                <Phone className="mr-2 h-4 w-4" />
                Kontakt aufnehmen
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

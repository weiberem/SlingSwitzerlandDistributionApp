"use client";

import { motion } from "framer-motion";
import {
  Award,
  Users,
  Heart,
  Globe,
  CheckCircle,
  Plane,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function UeberUnsPage() {
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
              Über uns
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Leidenschaft für die Fliegerei
            </h1>
            <p className="mt-6 text-lg text-neutral-300 leading-relaxed">
              Sling Aircraft Switzerland ist der offizielle Händler und
              Servicepartner von Sling Aircraft (The Airplane Factory) für die
              Schweiz. Unsere Mission: Ihnen den Traum vom eigenen Flugzeug zu
              ermöglichen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                align="left"
                label="Unsere Geschichte"
                title="Vom Traum zur Realität"
                description="Als begeisterte Piloten wissen wir, was Fliegen bedeutet. Die Entscheidung, offizieller Sling-Händler für die Schweiz zu werden, war eine logische Konsequenz unserer Leidenschaft für erstklassige Flugzeuge."
              />
              <div className="mt-8 space-y-4">
                {[
                  "Offizieller autorisierter Händler von The Airplane Factory (TAF)",
                  "Kompletter Verkauf, Service und Support in der Schweiz",
                  "Persönliche Beratung durch erfahrene Piloten",
                  "Unterstützung bei Zulassung und Registrierung in der Schweiz",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-96 rounded-2xl bg-gradient-to-br from-brand-800 to-brand-950 flex items-center justify-center"
            >
              <Plane className="h-32 w-32 text-white/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Unsere Werte"
            title="Was uns antreibt"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Leidenschaft",
                description:
                  "Fliegen ist nicht nur unser Beruf, sondern unsere Berufung. Diese Begeisterung geben wir an unsere Kunden weiter.",
              },
              {
                icon: Award,
                title: "Qualität",
                description:
                  "Wir vertreiben nur Produkte, von denen wir selbst überzeugt sind. Sling Aircraft steht für höchste Fertigungsqualität.",
              },
              {
                icon: Users,
                title: "Persönlichkeit",
                description:
                  "Jeder Kunde ist einzigartig. Wir nehmen uns die Zeit für individuelle Beratung und begleiten Sie persönlich.",
              },
              {
                icon: Globe,
                title: "Schweizer Standard",
                description:
                  "Service, Wartung und Beratung nach Schweizer Qualitätsmassstäben. Lokal erreichbar, international vernetzt.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-neutral-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="font-bold text-neutral-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sling Aircraft */}
      <section className="py-24 bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-80 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center border border-neutral-800"
            >
              <div className="text-center">
                <Plane className="h-16 w-16 text-brand-500 mx-auto mb-4" />
                <div className="text-2xl font-bold">The Airplane Factory</div>
                <div className="text-neutral-400 text-sm mt-1">
                  Johannesburg, South Africa
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                light
                align="left"
                label="Der Hersteller"
                title="The Airplane Factory"
                description="Sling Aircraft wird von The Airplane Factory (TAF) in Johannesburg, Südafrika, gefertigt. Seit 2006 hat sich TAF als führender Hersteller von Leichtflugzeugen etabliert und weltweit über 2'000 Flugzeuge ausgeliefert."
              />
              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { value: "2006", label: "Gegründet" },
                  { value: "2000+", label: "Flugzeuge weltweit" },
                  { value: "4", label: "Modelle" },
                  { value: "50+", label: "Länder" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-brand-400">
                      {stat.value}
                    </div>
                    <div className="text-sm text-neutral-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Lernen Sie uns kennen
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto mb-8">
              Besuchen Sie uns, fliegen Sie mit uns oder rufen Sie uns einfach
              an. Wir freuen uns auf den Austausch mit Ihnen.
            </p>
            <Button href="/kontakt" size="lg">
              Kontakt aufnehmen
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

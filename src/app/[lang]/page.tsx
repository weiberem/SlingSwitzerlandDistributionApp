"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Wrench,
  Award,
  Plane,
  ChevronRight,
  Star,
  Users,
  Clock,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import HeroVideo from "@/components/home/HeroVideo";
import YouTubeBackground from "@/components/ui/YouTubeBackground";
import { aircraft } from "@/data/aircraft";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Video Background with fallback */}
        <HeroVideo />
        {/* Red glow overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(196,20,24,0.12)_0%,_transparent_60%)]" />
        {/* Bottom red accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-600 to-transparent z-10" />

        {/* Diagonal red bar - transparent */}
        <div className="absolute top-0 right-0 w-[600px] h-full overflow-hidden pointer-events-none z-10">
          <div className="absolute -top-20 -right-20 w-[200px] h-[120%] bg-brand-600/10 rotate-12 transform origin-top-right" />
          <div className="absolute -top-20 right-20 w-[3px] h-[120%] bg-brand-600/30 rotate-12 transform origin-top-right" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600/15 border border-brand-600/30 text-sm text-brand-400 mb-8">
                <Star className="h-4 w-4 text-brand-500" />
                Offizieller Sling Aircraft Händler Schweiz
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]"
            >
              Fliegen Sie Ihre
              <br />
              <span className="text-brand-500">
                Träume.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 text-lg sm:text-xl text-neutral-400 max-w-2xl leading-relaxed"
            >
              Entdecken Sie die preisgekrönten Sling Aircraft Flugzeuge.
              Konfigurieren Sie Ihr Traumflugzeug online und erleben Sie
              südafrikanische Ingenieurskunst auf Schweizer Niveau.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button href="/konfigurator" size="lg">
                Konfigurator starten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button href="/flugzeuge" variant="outline" size="lg">
                Flugzeuge entdecken
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-20 grid grid-cols-3 gap-8 max-w-lg"
            >
              {[
                { value: "3", label: "Modelle" },
                { value: "2-4", label: "Sitzplätze" },
                { value: "140", label: "kts max." },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border-2 border-brand-600/30 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 rounded-full bg-brand-500/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* Red accent bar */}
      <div className="h-1.5 bg-brand-600" />

      {/* Aircraft Showcase */}
      <section className="py-24 lg:py-32 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Unsere Flugzeuge"
            title="Für jeden Piloten das Richtige"
            description="Von sportlichen Zweisitzern bis zum komfortablen Viersitzer-Tourer: Die Sling-Familie bietet für jedes Bedürfnis das perfekte Flugzeug."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {aircraft.map((plane, index) => (
              <motion.div
                key={plane.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={`/flugzeuge/${plane.id}`}
                  className="group block relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-brand-600/50 transition-all duration-500 hover:shadow-xl hover:shadow-brand-600/10"
                >
                  {/* Red top accent */}
                  <div className="h-1 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-700 opacity-60 group-hover:opacity-100 transition-opacity" />

                  <div className="h-48 relative overflow-hidden">
                    <YouTubeBackground
                      videoId={plane.video.videoId}
                      startSeconds={plane.video.startSeconds}
                      endSeconds={plane.video.endSeconds}
                    />
                    {/* Transparent red overlay on hover */}
                    <div className="absolute inset-0 bg-brand-600/0 group-hover:bg-brand-600/10 transition-colors duration-500 z-10" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
                          {plane.name}
                        </h3>
                        <p className="text-sm text-brand-500 font-medium mt-1">
                          {plane.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                      {plane.description}
                    </p>

                    <div className="mt-4 flex items-center gap-4 text-xs text-neutral-500">
                      <span className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" />
                        {plane.seats} Sitze
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {plane.specs.find(
                          (s) => s.label === "Reisegeschwindigkeit"
                        )?.value}
                      </span>
                    </div>

                    <div className="mt-4 flex items-center text-sm font-medium text-brand-500 group-hover:gap-3 gap-2 transition-all">
                      Details ansehen
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sling Section - with transparent red bar */}
      <section className="relative py-24 lg:py-32 bg-black text-white overflow-hidden">
        {/* Transparent red side bar */}
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-brand-600/60" />
        <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-brand-600/20" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Warum Sling?"
            title="Exzellenz in jeder Hinsicht"
            description="Sling Aircraft steht für Innovation, Qualität und Leidenschaft. Erfahren Sie, warum immer mehr Piloten weltweit auf Sling setzen."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Preisgekröntes Design",
                description:
                  "Mehrfach ausgezeichnet für herausragendes Design und Ingenieursleistung. Sling Aircraft setzt neue Massstäbe in der Leichtfliegerei.",
              },
              {
                icon: Shield,
                title: "Höchste Sicherheit",
                description:
                  "Ganzmetall-Bauweise, optional BRS-Rettungssystem und modernste Avionik sorgen für maximale Sicherheit bei jedem Flug.",
              },
              {
                icon: Wrench,
                title: "Schweizer Service",
                description:
                  "Lokaler Service und Wartung direkt in der Schweiz. Kurze Wege, persönliche Betreuung und schnelle Verfügbarkeit von Ersatzteilen.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-brand-600/40 hover:bg-neutral-900 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-600/20 flex items-center justify-center mb-6 group-hover:bg-brand-600/30 transition-colors">
                  <feature.icon className="h-6 w-6 text-brand-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Configurator CTA - Red gradient band */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Red gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.4)_100%)]" />
        {/* Subtle diagonal lines */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,0.05) 40px, rgba(255,255,255,0.05) 41px)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-white/70">
              Online Konfigurator
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Gestalten Sie Ihr Traumflugzeug
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Wählen Sie Ihr Modell, die Farbe, Avionik und Ausstattung. Unser
              Konfigurator hilft Ihnen, Ihre individuelle
              Wunschkonfiguration zusammenzustellen.
            </p>
            <div className="mt-10">
              <Button
                href="/konfigurator"
                size="lg"
                className="bg-white text-brand-700 hover:bg-neutral-100 shadow-xl shadow-black/30"
              >
                Konfigurator öffnen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section className="py-24 lg:py-32 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <SectionHeading
                align="left"
                label="Kontakt"
                title="Bereit für Ihr nächstes Abenteuer?"
                description="Vereinbaren Sie einen Termin für eine persönliche Beratung oder einen Probeflug. Wir freuen uns auf Sie."
              />
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button href="/kontakt">Kontakt aufnehmen</Button>
                <Button href="/service" variant="outline">
                  Service & Wartung
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800"
            >
              {/* Red top bar */}
              <div className="h-1 bg-brand-600 rounded-full mb-6" />
              <div className="space-y-6">
                {[
                  {
                    icon: Plane,
                    title: "Probeflug",
                    text: "Erleben Sie Sling Aircraft aus erster Hand",
                  },
                  {
                    icon: Users,
                    title: "Persönliche Beratung",
                    text: "Individuelle Betreuung von der Konfiguration bis zur Auslieferung",
                  },
                  {
                    icon: Wrench,
                    title: "Full Service",
                    text: "Wartung, Reparatur und Ersatzteile direkt in der Schweiz",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-600/15 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-brand-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm text-neutral-400">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

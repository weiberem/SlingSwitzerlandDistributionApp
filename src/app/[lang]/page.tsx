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
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
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
              Dream. Build. <span className="text-brand-500">Fly.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 text-lg sm:text-xl text-neutral-400 max-w-2xl leading-relaxed"
            >
              Ihr Traum vom eigenen Flugzeug beginnt hier. Als offizieller
              Sling Aircraft Händler in der Schweiz begleiten wir Sie vom
              ersten Kit-Teil bis zum ersten Flug.
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
      <section id="flugzeuge" className="py-24 lg:py-32 bg-neutral-950 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Unsere Flugzeuge"
            title="Für jeden Piloten das Richtige"
            description="Von sportlichen Zweisitzern bis zum komfortablen Viersitzer-Tourer: Die Sling-Familie bietet für jedes Bedürfnis das perfekte Flugzeug."
          />

          <div className="mt-16 space-y-8">
            {aircraft.map((plane, index) => (
              <motion.div
                key={plane.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="group relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-brand-600/50 transition-all duration-500 hover:shadow-xl hover:shadow-brand-600/10">
                  {/* Red top accent */}
                  <div className="h-1 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-700 opacity-60 group-hover:opacity-100 transition-opacity" />

                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Video left */}
                    <div className="h-64 lg:h-auto lg:min-h-[320px] relative overflow-hidden">
                      <YouTubeBackground
                        videoId={plane.video.videoId}
                        startSeconds={plane.video.startSeconds}
                        endSeconds={plane.video.endSeconds}
                      />
                      <div className="absolute inset-0 bg-brand-600/0 group-hover:bg-brand-600/10 transition-colors duration-500 z-10" />
                      {/* Video link overlay */}
                      <a
                        href={`https://www.youtube.com/watch?v=${plane.video.videoId}&t=${plane.video.startSeconds}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-4 left-4 z-20 inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-sm text-sm font-medium text-white hover:bg-brand-600/80 rounded-lg transition-all border border-white/10 hover:border-brand-500"
                      >
                        Video ansehen
                        <ChevronRight className="h-4 w-4" />
                      </a>
                    </div>

                    {/* Content right */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white group-hover:text-brand-400 transition-colors">
                        {plane.name}
                      </h3>
                      <p className="text-sm text-brand-500 font-medium mt-1">
                        {plane.tagline}
                      </p>

                      <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
                        {plane.description}
                      </p>

                      {/* Quick Specs Grid */}
                      <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-3">
                        {plane.quickSpecs.map((qs) => (
                          <div key={qs.label} className="text-center bg-neutral-800/50 rounded-lg py-2.5 px-1">
                            <div className="text-brand-500 font-bold text-lg leading-tight">
                              {qs.value}
                            </div>
                            <div className="text-[10px] font-semibold text-neutral-300 uppercase">
                              {qs.unit}
                            </div>
                            <div className="text-[9px] text-neutral-500 uppercase mt-0.5">
                              {qs.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                        <a
                          href={plane.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-medium text-brand-500 hover:text-brand-400 gap-2 transition-all"
                        >
                          Detaillierte Informationen
                          <ChevronRight className="h-4 w-4" />
                        </a>
                        <a
                          href="https://slingaircraft.com/technical-documents/aircraft-manuals/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-medium text-neutral-400 hover:text-white gap-2 transition-all"
                        >
                          Aircraft Manuals
                          <ChevronRight className="h-4 w-4" />
                        </a>
                        <a
                          href="https://slingaircraft.com/aircraft/sling-kits/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-medium text-neutral-400 hover:text-brand-400 gap-2 transition-all"
                        >
                          Bauanleitung ansehen
                          <ChevronRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sling Section - with transparent red bar */}
      <section id="ueber-uns" className="relative py-24 lg:py-32 bg-black text-white overflow-hidden scroll-mt-24">
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

      {/* EAS & Eigenbau Regulation */}
      <section id="service" className="py-24 lg:py-32 bg-neutral-950 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-brand-500">
                Eigenbau in der Schweiz
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Bauen Sie Ihr eigenes Flugzeug
              </h2>
              <p className="mt-4 text-neutral-400 leading-relaxed">
                In der Schweiz fallen Sling Flugzeuge in die <strong className="text-white">Sonderkategorie
                «Experimental»</strong> – das Schweizer Äquivalent zur internationalen
                Homebuilt-Kategorie. Sie werden als Kit nach der Eigenbau-Regel
                (51%) gebaut und unter Aufsicht des BAZL (Bundesamt für
                Zivilluftfahrt) zugelassen. Die EAS begleitet den gesamten
                Prozess – von der Projektbeurteilung bis zur Verkehrszulassung.
              </p>
              <p className="mt-4 text-neutral-400 leading-relaxed">
                <strong className="text-white">Brauchen Sie Unterstützung beim Bau?</strong>{" "}
                Wir helfen Ihnen gerne – kontaktieren Sie uns für individuelle Baubegleitung.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://experimental.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-500 transition-colors"
                >
                  EAS erfahren
                  <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="https://www.bazl.admin.ch/de/entwicklung-herstellung-musterzulassung-anderungen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 text-white font-semibold rounded-lg hover:border-brand-600 transition-colors"
                >
                  BAZL Regulierung
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              {/* Projekt-Ablauf */}
              <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800">
                <div className="h-1 bg-brand-600 rounded-full mb-6" />
                <h3 className="text-lg font-bold text-white mb-2">
                  Ihr Sling Projekt in der Schweiz
                </h3>
                <p className="text-xs text-neutral-400 mb-6">
                  Ein bewährtes Kit-Flugzeug – hundertfach gebaut, proven design. Ihr Boost fürs Fliegerabenteuer.
                </p>
                <div className="space-y-6">
                  {[
                    { step: "1", title: "Beratung & Modellwahl", desc: "Persönliche Beratung – wir finden gemeinsam das passende Modell für Ihre Bedürfnisse und Ziele." },
                    { step: "2", title: "Vorbereitung & EAS-Anmeldung", desc: "EAS-Mitgliedschaft und Projektanmeldung. Ingenieur-Beurteilung und Freigabe. Den idealen Bauplatz vorbereiten – keine Angst, viele Sling wurden in ganz normalen Garagen gebaut!" },
                    { step: "3", title: "Kit bestellen & liefern", desc: "Bestellung ab Werk in Südafrika. Door-to-door Lieferung in 14–20 Tagen kann von uns organisiert werden. Sie können auch Teilbereiche separat bestellen (Empennage, Flügel, Rumpf, Canopy, Finishing Kit) – so nutzen Sie Ihren Platz optimal." },
                    { step: "4", title: "Bauen – mit voller Unterstützung", desc: "Sie bauen Ihr Flugzeug selbst (51%-Regel). Ein EAS-Bauberater wird Ihnen zugewiesen. Brauchen Sie mehr Hilfe? Verschiedene Dienstleistungen verfügbar in Absprache mit EAS/BAZL. Detaillierte Bauanleitungen und Videos zu jedem Schritt. Passende Werkzeuge und Zubehör beraten wir gerne." },
                    { step: "5", title: "Schulung während dem Bau", desc: "Tageskurse organisiert durch die EAS – einige freiwillig je nach Vorkenntnissen, einige Pflicht (z.B. wenn Sie das Flugzeug selbst warten möchten). So sind Sie bestens vorbereitet." },
                    { step: "6", title: "Abnahme & Flugversuche", desc: "Koordiniert durch EAS und BAZL. Saubere Abnahmeprozedur für den sicheren Betrieb Ihres Flugzeugs." },
                    { step: "7", title: "Verkehrszulassung & Abheben!", desc: "BAZL erteilt die Zulassung. Ihr Flugzeug ist eingetragen – und Sie heben ab! Willkommen in der Sling-Familie." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center shrink-0 text-sm font-bold text-white">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                        <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bauanleitung Link */}
                <div className="mt-8 pt-6 border-t border-neutral-800">
                  <a
                    href="https://slingaircraft.com/aircraft/sling-kits/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-brand-500 hover:text-brand-400 transition-all"
                  >
                    Beispiel-Bauanleitungen ansehen
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Vorteile Eigenbau */}
              <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800">
                <h4 className="font-semibold text-white text-sm mb-3">
                  Vorteile Eigenbau
                </h4>
                <div className="space-y-2">
                  {[
                    "Mehr Freiheit – Konfiguration ganz nach Ihren Wünschen",
                    "Bewährtes Kit – hundertfach gebaut, proven design",
                    "Projekt mit Kollegen oder als Haltergemeinschaft möglich",
                    "Rotax-Motoren – kein Avgas nötig (Mogas/UL91 kompatibel)",
                    "Optionales BRS Rettungssystem (ballistischer Fallschirm)",
                    "Long Range Tanks & O₂-Systeme nach Wunsch",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 shrink-0" />
                      <span className="text-xs text-neutral-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* EAS Info kompakt */}
              <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800">
                <h4 className="font-semibold text-white text-sm mb-2">
                  EAS – Experimental Aviation of Switzerland
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Seit 1963 begleitet die EAS rund 500 Mitglieder beim Eigenbau.
                  Ca. 130 fliegende und 120 weitere Flugzeuge im Bau. Ihr Verein
                  für technische Beurteilung, Bauberatung, Flugversuche und Zulassung.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Configurator CTA - Red gradient band */}
      <section id="konfigurator" className="relative py-24 lg:py-32 overflow-hidden scroll-mt-24">
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

      {/* Partners */}
      <section className="py-24 lg:py-32 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Unsere Partner"
            title="Starkes Netzwerk für Ihr Projekt"
            description="Sling Aircraft Switzerland arbeitet mit erfahrenen Spezialisten zusammen, damit Ihr Projekt von A bis Z professionell betreut ist."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Evolaris Aviation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800 hover:border-brand-600/40 transition-all duration-500"
            >
              <div className="h-1 bg-brand-600 rounded-full mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">
                Evolaris Aviation
              </h3>
              <p className="text-sm text-brand-500 font-medium mb-4">
                Offizielle AMO für Sling Aircraft Switzerland
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                Evolaris Aviation ist unsere offizielle Unterhaltorganisation
                (AMO) und unterstützt bei der Wartung, Instandhaltung und
                Inbetriebnahme von Rotax-Motoren. Auch Erbauer, die ihr
                Flugzeug nach Fertigstellung nicht selbst warten möchten,
                sind bei Evolaris bestens aufgehoben.
              </p>
              <div className="space-y-2 mb-6">
                {[
                  "Rotax-Motorenwartung & Inbetriebnahme",
                  "Jährliche Inspektionen & Kontrollen",
                  "Wartung für Eigenbau-Flugzeuge",
                  "Offizielle AMO-Zertifizierung",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 shrink-0" />
                    <span className="text-xs text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://evolaris-aviation.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-500 hover:text-brand-400 transition-all"
              >
                evolaris-aviation.ch
                <ChevronRight className="h-4 w-4" />
              </a>
            </motion.div>

            {/* Midwest Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800 hover:border-brand-600/40 transition-all duration-500"
            >
              <div className="h-1 bg-brand-600 rounded-full mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">
                Midwest Panel
              </h3>
              <p className="text-sm text-brand-500 font-medium mb-4">
                Avionik-Spezialist für Sling Aircraft
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                Midwest Panel verfügt über die umfangreichste Erfahrung mit
                Avionik-Setups für Sling Flugzeuge weltweit. Sie bieten
                komplette Avionik-Suiten inklusive vorgefertigtem Kabelbaum,
                Panel und allen Komponenten – abgestimmt auf Ihr Sling-Modell
                und sofort einbaubereit.
              </p>
              <div className="space-y-2 mb-6">
                {[
                  "Komplette Garmin Avionik-Suiten für Sling",
                  "Vorgefertigte Kabelbäume (Plug & Play)",
                  "Custom Panel-Fertigung",
                  "Grösste Sling-Avionik-Erfahrung weltweit",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 shrink-0" />
                    <span className="text-xs text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://midwestpanel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-500 hover:text-brand-400 transition-all"
              >
                midwestpanel.com
                <ChevronRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section id="kontakt" className="py-24 lg:py-32 bg-neutral-950 scroll-mt-24">
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

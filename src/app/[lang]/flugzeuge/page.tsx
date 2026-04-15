"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Clock, ChevronRight, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import YouTubeBackground from "@/components/ui/YouTubeBackground";
import { aircraft } from "@/data/aircraft";

export default function FlugzeugePage() {
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
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-brand-400">
              Unsere Flotte
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Sling Aircraft Flugzeuge
            </h1>
            <p className="mt-4 text-lg text-neutral-300 max-w-2xl leading-relaxed">
              Vier aussergewöhnliche Modelle für unterschiedlichste Bedürfnisse.
              Jedes einzelne ein Meisterwerk südafrikanischer Ingenieurskunst.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Aircraft Grid */}
      <section className="py-24 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
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
                  className="group block bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden hover:border-brand-600/50 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-500"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-span-2 h-64 lg:h-auto relative overflow-hidden min-h-[200px]">
                      <YouTubeBackground
                        videoId={plane.video.videoId}
                        startSeconds={plane.video.startSeconds}
                        endSeconds={plane.video.endSeconds}
                      />
                    </div>

                    <div className="lg:col-span-3 p-8 lg:p-10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h2 className="text-2xl font-bold text-white group-hover:text-brand-500 transition-colors">
                            {plane.name}
                          </h2>
                          <p className="text-brand-500 font-medium mt-1">
                            {plane.tagline}
                          </p>
                        </div>
                        <div className="text-right hidden sm:block">
                          <span className="text-sm text-neutral-400">
                            Preis auf Anfrage
                          </span>
                        </div>
                      </div>

                      <p className="text-neutral-400 leading-relaxed mb-6">
                        {plane.description}
                      </p>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                        {plane.specs.slice(0, 4).map((spec) => (
                          <div
                            key={spec.label}
                            className="bg-neutral-800 rounded-lg p-3"
                          >
                            <div className="text-xs text-neutral-400 mb-1">
                              {spec.label}
                            </div>
                            <div className="text-sm font-semibold text-white">
                              {spec.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-neutral-400">
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {plane.seats} Sitze
                          </span>
                        </div>
                        <span className="flex items-center text-sm font-semibold text-brand-500 group-hover:gap-3 gap-2 transition-all">
                          Mehr erfahren
                          <ChevronRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-neutral-400 mb-6">
              Noch unsicher? Konfigurieren Sie Ihr Wunschflugzeug online.
            </p>
            <Button href="/konfigurator">
              Zum Konfigurator
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

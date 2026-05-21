"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Shield,
  Wrench,
  Award,
  Plane,
  ChevronRight,
  Star,
  Users,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import HeroVideo from "@/components/home/HeroVideo";
import { aircraft } from "@/data/aircraft";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

export default function HomeClient({
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const t = dict.home;
  const tc = dict.contact;
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <HeroVideo />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(196,20,24,0.12)_0%,_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-600 to-transparent z-10" />

        <div className="absolute top-0 right-0 w-[600px] h-full overflow-hidden pointer-events-none z-10">
          <div className="absolute -top-20 -right-20 w-[200px] h-[120%] bg-brand-600/10 rotate-12 transform origin-top-right" />
          <div className="absolute -top-20 right-20 w-[3px] h-[120%] bg-brand-600/30 rotate-12 transform origin-top-right" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 lg:pt-28 pb-32 lg:pb-40">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05]"
            >
              Dream. Build. <span className="text-brand-500">Fly.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600/15 border border-brand-600/30 text-sm text-brand-400">
                <Star className="h-4 w-4 text-brand-500" />
                {t.heroBadge}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-8 text-lg sm:text-xl text-neutral-300 max-w-2xl leading-relaxed"
            >
              {t.heroDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button href="#kontakt" size="lg">
                {t.heroCtaPrimary}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button href="#flugzeuge" variant="outline" size="lg">
                {t.heroCtaSecondary}
              </Button>
            </motion.div>
          </div>
        </div>

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

      <div className="h-1.5 bg-brand-600" />

      {/* Aircraft Showcase */}
      <section
        id="flugzeuge"
        className="py-24 lg:py-32 bg-neutral-950 scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label={dict.aircraft.label}
            title={dict.aircraft.title}
            description={dict.aircraft.description}
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
                  <div className="h-1 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-700 opacity-60 group-hover:opacity-100 transition-opacity" />

                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image left */}
                    <div className="h-64 lg:h-auto lg:min-h-[320px] relative overflow-hidden">
                      <Image
                        src={plane.image}
                        alt={plane.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-brand-600/0 group-hover:bg-brand-600/10 transition-colors duration-500 z-10" />
                    </div>

                    {/* Content right */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white group-hover:text-brand-400 transition-colors">
                        {plane.name}
                      </h3>
                      <p className="text-sm text-brand-500 font-medium mt-1">
                        {plane.tagline}
                      </p>

                      <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-3">
                        {plane.quickSpecs.map((qs) => (
                          <div
                            key={qs.label}
                            className="text-center bg-neutral-800/50 rounded-lg py-2.5 px-1"
                          >
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

                      <div className="mt-6 flex flex-wrap gap-3">
                        <a
                          href="#kontakt"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-lg hover:bg-brand-500 shadow-lg shadow-brand-600/20 transition-all"
                        >
                          {t.sendInquiry}
                          <ArrowRight className="h-4 w-4" />
                        </a>
                        <a
                          href={plane.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-700 bg-neutral-800/40 text-white text-sm font-semibold rounded-lg hover:border-brand-500 hover:bg-neutral-800 hover:text-brand-400 transition-all"
                        >
                          {t.details}
                          <ChevronRight className="h-4 w-4" />
                        </a>
                        <a
                          href="https://slingaircraft.com/technical-documents/aircraft-manuals/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-700 bg-neutral-800/40 text-white text-sm font-semibold rounded-lg hover:border-brand-500 hover:bg-neutral-800 hover:text-brand-400 transition-all"
                        >
                          {t.manuals}
                          <ChevronRight className="h-4 w-4" />
                        </a>
                        <a
                          href="https://slingaircraft.com/aircraft/sling-kits/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-700 bg-neutral-800/40 text-white text-sm font-semibold rounded-lg hover:border-brand-500 hover:bg-neutral-800 hover:text-brand-400 transition-all"
                        >
                          {t.buildGuide}
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

      {/* Why Sling Section */}
      <section
        id="ueber-uns"
        className="relative py-24 lg:py-32 bg-black text-white overflow-hidden scroll-mt-24"
      >
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-brand-600/60" />
        <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-brand-600/20" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label={dict.whySling.label}
            title={dict.whySling.title}
            description={dict.whySling.description}
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: dict.whySling.design,
                description: dict.whySling.designDesc,
              },
              {
                icon: Shield,
                title: dict.whySling.safety,
                description: dict.whySling.safetyDesc,
              },
              {
                icon: Wrench,
                title: dict.whySling.swiss,
                description: dict.whySling.swissDesc,
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
      <section
        id="service"
        className="py-24 lg:py-32 bg-neutral-950 scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label={t.buildLabel}
            title={t.buildTitle}
            description={t.buildDescription}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800">
              <div className="h-1 bg-brand-600 rounded-full mb-6" />
              <h3 className="text-lg font-bold text-white mb-2">
                {t.projectTitle}
              </h3>
              <p className="text-xs text-neutral-400 mb-6">
                {t.projectDescription}
              </p>
              <div className="space-y-2">
                {t.projectSteps.map((item) => (
                  <details key={item.step} className="group">
                    <summary className="flex gap-4 items-center cursor-pointer list-none py-3 px-3 rounded-xl hover:bg-neutral-800/50 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center shrink-0 text-sm font-bold text-white">
                        {item.step}
                      </div>
                      <h4 className="font-semibold text-white text-sm flex-1">
                        {item.title}
                      </h4>
                      <ChevronRight className="h-4 w-4 text-neutral-500 group-open:rotate-90 transition-transform duration-200" />
                    </summary>
                    <div className="ml-16 pb-3 pr-8">
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </details>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800">
                <a
                  href="https://slingaircraft.com/aircraft/sling-kits/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-500 hover:text-brand-400 transition-all"
                >
                  {t.exampleBuildGuides}
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800">
              <h4 className="font-semibold text-white text-sm mb-3">
                {t.advantagesTitle}
              </h4>
              <div className="space-y-2">
                {t.advantages.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 shrink-0" />
                    <span className="text-xs text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800">
              <h4 className="font-semibold text-white text-sm mb-3">
                {t.easTitle}
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                {t.easDescription}
              </p>
              <a
                href="https://experimental.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-brand-500 hover:text-brand-400 transition-all"
              >
                {t.easCta}
                <ChevronRight className="h-3 w-3" />
              </a>
            </div>

            <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800">
              <h4 className="font-semibold text-white text-sm mb-3">
                {t.bazlTitle}
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                {t.bazlDescription}
              </p>
              <a
                href="https://www.bazl.admin.ch/de/entwicklung-herstellung-musterzulassung-anderungen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-brand-500 hover:text-brand-400 transition-all"
              >
                {t.bazlCta}
                <ChevronRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Configurator CTA */}
      <section
        id="konfigurator"
        className="relative py-24 lg:py-32 overflow-hidden scroll-mt-24"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.4)_100%)]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,0.05) 40px, rgba(255,255,255,0.05) 41px)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-white/70">
              {t.configuratorLabel}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {t.configuratorTitle}
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              {t.configuratorDescription}
            </p>
            <div className="mt-10">
              <Button
                href="#kontakt"
                size="lg"
                className="bg-white text-brand-700 hover:bg-neutral-100 shadow-xl shadow-black/30"
              >
                {t.configuratorCta}
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
            label={t.partnersLabel}
            title={t.partnersTitle}
            description={t.partnersDescription}
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
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
                {t.evolarisRole}
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                {t.evolarisDescription}
              </p>
              <div className="space-y-2 mb-6">
                {t.evolarisFeatures.map((item) => (
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
                {t.midwestRole}
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                {t.midwestDescription}
              </p>
              <div className="space-y-2 mb-6">
                {t.midwestFeatures.map((item) => (
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

      {/* Contact Section with integrated form */}
      <section
        id="kontakt"
        className="py-24 lg:py-32 bg-neutral-950 scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label={dict.contactTeaser.label}
            title={t.contactTitle}
            description={t.contactDescription}
          />

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800"
              >
                <div className="h-1 bg-brand-600 rounded-full mb-6" />
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {tc.sent}
                    </h2>
                    <p className="text-neutral-400 max-w-md mx-auto">
                      {tc.sentDesc}
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-sm text-brand-500 font-medium hover:text-brand-400"
                    >
                      {tc.sendAnother}
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-white mb-6">
                      {tc.form}
                    </h2>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSubmitted(true);
                      }}
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-neutral-300 mb-1.5">
                            {tc.firstName} *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-neutral-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-neutral-800 text-white placeholder-neutral-500"
                            placeholder="Max"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-neutral-300 mb-1.5">
                            {tc.lastName} *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-neutral-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-neutral-800 text-white placeholder-neutral-500"
                            placeholder="Muster"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-1.5">
                          {tc.email} *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-neutral-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-neutral-800 text-white placeholder-neutral-500"
                          placeholder="max.muster@beispiel.ch"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-1.5">
                          {tc.phone}
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded-lg border border-neutral-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-neutral-800 text-white placeholder-neutral-500"
                          placeholder="+41 79 000 00 00"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-1.5">
                          {tc.subject} *
                        </label>
                        <select
                          required
                          className="w-full px-4 py-3 rounded-lg border border-neutral-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-neutral-800 text-white"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            {tc.selectSubject}
                          </option>
                          <option value="purchase">{tc.purchase}</option>
                          <option value="testflight">{tc.testflight}</option>
                          <option value="configurator">
                            {tc.configDiscuss}
                          </option>
                          <option value="kit-support">{t.kitSupport}</option>
                          <option value="service">{tc.serviceInquiry}</option>
                          <option value="parts">{tc.parts}</option>
                          <option value="other">{tc.other}</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-1.5">
                          {t.aircraftModel}
                        </label>
                        <select
                          className="w-full px-4 py-3 rounded-lg border border-neutral-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-neutral-800 text-white"
                          defaultValue=""
                        >
                          <option value="">{t.noSpecificModel}</option>
                          {aircraft.map((a) => (
                            <option key={a.id} value={a.id}>
                              {a.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-1.5">
                          {tc.message} *
                        </label>
                        <textarea
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-neutral-800 text-white placeholder-neutral-500 resize-none"
                          placeholder={tc.messagePlaceholder}
                        />
                      </div>

                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          required
                          id="privacy"
                          className="mt-1 h-4 w-4 rounded border-neutral-700 text-brand-600 focus:ring-brand-500 bg-neutral-800"
                        />
                        <label
                          htmlFor="privacy"
                          className="text-sm text-neutral-400"
                        >
                          {tc.privacy} *
                        </label>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full sm:w-auto"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        {tc.send}
                      </Button>
                    </form>
                  </>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-6"
              >
                <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800">
                  <h3 className="font-bold text-white mb-4">
                    {tc.contactData}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-neutral-400">
                      <div className="w-10 h-10 rounded-lg bg-brand-600/15 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-brand-500" />
                      </div>
                      <div>
                        <div className="text-xs text-neutral-400">
                          {t.address}
                        </div>
                        <div className="font-medium">
                          Flugplatzstrasse, 3603 Thun
                        </div>
                      </div>
                    </div>
                    <a
                      href="mailto:info@slingaircraftswitzerland.ch"
                      className="flex items-center gap-3 text-neutral-400 hover:text-brand-500 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-brand-600/15 flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5 text-brand-500" />
                      </div>
                      <div>
                        <div className="text-xs text-neutral-400">
                          {tc.email}
                        </div>
                        <div className="font-medium">
                          info@slingaircraftswitzerland.ch
                        </div>
                      </div>
                    </a>
                    <div className="flex items-center gap-3 text-neutral-400">
                      <div className="w-10 h-10 rounded-lg bg-brand-600/15 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-brand-500" />
                      </div>
                      <div>
                        <div className="text-xs text-neutral-400">
                          {t.locations}
                        </div>
                        <div className="font-medium">
                          Flugplatzstrasse Thun & Hangar 7 Zweisimmen
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800">
                  <h3 className="font-bold text-white mb-4">
                    {tc.availability}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-neutral-400" />
                      <div className="text-sm">
                        <span className="text-neutral-400">{tc.monFri}: </span>
                        <span className="font-medium text-neutral-300">
                          08:00 - 18:00
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-neutral-400" />
                      <div className="text-sm">
                        <span className="text-neutral-400">{tc.sat}: </span>
                        <span className="font-medium text-neutral-300">
                          {tc.byAppointment}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-neutral-400" />
                      <div className="text-sm">
                        <span className="text-neutral-400">{tc.sun}: </span>
                        <span className="font-medium text-neutral-300">
                          {tc.closed}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-xl p-6 text-white">
                  <h3 className="font-bold mb-2">{tc.bookTestflight}</h3>
                  <p className="text-sm text-brand-100 mb-4">
                    {t.bookTestflightDesc}
                  </p>
                  <a
                    href="mailto:info@slingaircraftswitzerland.ch"
                    className="inline-flex items-center gap-2 text-sm font-semibold bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
                  >
                    <Plane className="h-4 w-4" />
                    {dict.contactTeaser.cta}
                  </a>
                </div>

                <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800">
                  <div className="space-y-5">
                    {[
                      {
                        icon: Plane,
                        title: dict.contactTeaser.testflight,
                        text: dict.contactTeaser.testflightDesc,
                      },
                      {
                        icon: Users,
                        title: dict.contactTeaser.consulting,
                        text: dict.contactTeaser.consultingDesc,
                      },
                      {
                        icon: Wrench,
                        title: dict.contactTeaser.fullService,
                        text: dict.contactTeaser.fullServiceDesc,
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-brand-600/15 flex items-center justify-center shrink-0">
                          <item.icon className="h-4 w-4 text-brand-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-sm">
                            {item.title}
                          </h4>
                          <p className="text-xs text-neutral-400">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

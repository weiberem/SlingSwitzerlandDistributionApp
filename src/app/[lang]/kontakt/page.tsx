"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import Button from "@/components/ui/Button";

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);

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
              Kontakt
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Sprechen Sie mit uns
            </h1>
            <p className="mt-6 text-lg text-neutral-300 leading-relaxed">
              Ob Kaufinteresse, Service-Anfrage oder einfach eine Frage: Wir
              sind für Sie da und freuen uns auf Ihre Nachricht.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800 shadow-sm"
              >
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Nachricht gesendet!
                    </h2>
                    <p className="text-neutral-400 max-w-md mx-auto">
                      Vielen Dank für Ihre Nachricht. Wir melden uns in der
                      Regel innerhalb von 24 Stunden bei Ihnen.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-sm text-brand-500 font-medium hover:text-brand-400"
                    >
                      Weitere Nachricht senden
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-white mb-6">
                      Kontaktformular
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
                            Vorname *
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
                            Nachname *
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
                          E-Mail *
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
                          Telefon
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded-lg border border-neutral-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-neutral-800 text-white placeholder-neutral-500"
                          placeholder="+41 79 000 00 00"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-1.5">
                          Betreff *
                        </label>
                        <select
                          required
                          className="w-full px-4 py-3 rounded-lg border border-neutral-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-neutral-800 text-white"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Bitte wählen...
                          </option>
                          <option value="purchase">
                            Kaufinteresse / Beratung
                          </option>
                          <option value="testflight">Probeflug</option>
                          <option value="configurator">
                            Konfiguration besprechen
                          </option>
                          <option value="kit-support">
                            Kit-Bau Unterstützung
                          </option>
                          <option value="service">
                            Service & Wartung
                          </option>
                          <option value="parts">Ersatzteile</option>
                          <option value="other">Sonstiges</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-1.5">
                          Flugzeugmodell
                        </label>
                        <select
                          className="w-full px-4 py-3 rounded-lg border border-neutral-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-neutral-800 text-white"
                          defaultValue=""
                        >
                          <option value="">Kein bestimmtes Modell</option>
                          <option value="sling-2">Sling 2</option>
                          <option value="sling-tsi">Sling TSi</option>
                          <option value="sling-high-wing">Sling High Wing</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-1.5">
                          Nachricht *
                        </label>
                        <textarea
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-neutral-800 text-white placeholder-neutral-500 resize-none"
                          placeholder="Wie können wir Ihnen helfen?"
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
                          Ich habe die Datenschutzerklärung gelesen und bin mit
                          der Verarbeitung meiner Daten einverstanden. *
                        </label>
                      </div>

                      <Button type="submit" size="lg" className="w-full sm:w-auto">
                        <Send className="mr-2 h-4 w-4" />
                        Nachricht senden
                      </Button>
                    </form>
                  </>
                )}
              </motion.div>
            </div>

            {/* Contact Info */}
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
                    Kontaktdaten
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="tel:+41000000000"
                      className="flex items-center gap-3 text-neutral-400 hover:text-brand-500 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-brand-600/15 flex items-center justify-center shrink-0">
                        <Phone className="h-5 w-5 text-brand-500" />
                      </div>
                      <div>
                        <div className="text-xs text-neutral-400">Telefon</div>
                        <div className="font-medium">+41 (0) 00 000 00 00</div>
                      </div>
                    </a>
                    <a
                      href="mailto:info@slingaircraftswitzerland.ch"
                      className="flex items-center gap-3 text-neutral-400 hover:text-brand-500 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-brand-600/15 flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5 text-brand-500" />
                      </div>
                      <div>
                        <div className="text-xs text-neutral-400">E-Mail</div>
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
                        <div className="text-xs text-neutral-400">Standort</div>
                        <div className="font-medium">Schweiz</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800">
                  <h3 className="font-bold text-white mb-4">
                    Erreichbarkeit
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-neutral-400" />
                      <div className="text-sm">
                        <span className="text-neutral-400">Mo - Fr: </span>
                        <span className="font-medium text-neutral-300">
                          08:00 - 18:00
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-neutral-400" />
                      <div className="text-sm">
                        <span className="text-neutral-400">Sa: </span>
                        <span className="font-medium text-neutral-300">
                          Nach Vereinbarung
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-neutral-400" />
                      <div className="text-sm">
                        <span className="text-neutral-400">So: </span>
                        <span className="font-medium text-neutral-300">
                          Geschlossen
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-xl p-6 text-white">
                  <h3 className="font-bold mb-2">Probeflug buchen</h3>
                  <p className="text-sm text-brand-100 mb-4">
                    Erleben Sie Sling Aircraft aus erster Hand. Vereinbaren Sie
                    einen unverbindlichen Probeflug.
                  </p>
                  <a
                    href="tel:+41000000000"
                    className="inline-flex items-center gap-2 text-sm font-semibold bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    Jetzt anrufen
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

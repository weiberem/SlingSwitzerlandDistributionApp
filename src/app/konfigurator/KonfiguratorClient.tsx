"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plane,
  Paintbrush,
  Gauge,
  Armchair,
  Shield,
  Zap,
  Check,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Download,
  Send,
} from "lucide-react";
import { aircraft, formatPrice } from "@/data/aircraft";
import { configuratorCategories } from "@/data/configurator";
import Button from "@/components/ui/Button";
import { clsx } from "clsx";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Paintbrush,
  Gauge,
  Armchair,
  Shield,
  Zap,
};

const steps = [
  { id: "model", label: "Modell", icon: Plane },
  ...configuratorCategories.map((cat) => ({
    id: cat.id,
    label: cat.name,
    icon: iconMap[cat.icon] || Gauge,
  })),
  { id: "summary", label: "Zusammenfassung", icon: Check },
];

export default function KonfiguratorClient() {
  const searchParams = useSearchParams();
  const preselectedModel = searchParams.get("model");

  const [currentStep, setCurrentStep] = useState(0);
  const [selectedModel, setSelectedModel] = useState<string | null>(
    preselectedModel
  );
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string[]>
  >({});
  const [showInquiry, setShowInquiry] = useState(false);

  useEffect(() => {
    if (preselectedModel && aircraft.find((a) => a.id === preselectedModel)) {
      setSelectedModel(preselectedModel);
    }
  }, [preselectedModel]);

  const selectedAircraft = aircraft.find((a) => a.id === selectedModel);

  const toggleOption = useCallback(
    (categoryId: string, optionId: string) => {
      setSelectedOptions((prev) => {
        const current = prev[categoryId] || [];
        const category = configuratorCategories.find(
          (c) => c.id === categoryId
        );

        // For exterior (paint), only allow one selection
        if (categoryId === "exterior") {
          return { ...prev, [categoryId]: [optionId] };
        }

        if (current.includes(optionId)) {
          return {
            ...prev,
            [categoryId]: current.filter((id) => id !== optionId),
          };
        }
        return { ...prev, [categoryId]: [...current, optionId] };
      });
    },
    []
  );

  const totalPrice = (() => {
    let base = selectedAircraft?.basePrice || 0;
    let optionsTotal = 0;
    for (const cat of configuratorCategories) {
      const selected = selectedOptions[cat.id] || [];
      for (const opt of cat.options) {
        if (selected.includes(opt.id)) {
          optionsTotal += opt.price;
        }
      }
    }
    return base + optionsTotal;
  })();

  const optionsPrice = totalPrice - (selectedAircraft?.basePrice || 0);

  const canProceed =
    currentStep === 0 ? selectedModel !== null : true;

  const nextStep = () => {
    if (currentStep < steps.length - 1 && canProceed) {
      setCurrentStep((s) => s + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    }
  };

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-brand-950 to-neutral-900" />
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
            <p className="mt-2 text-neutral-400">
              Schritt für Schritt zu Ihrem Traumflugzeug
            </p>
          </motion.div>
        </div>
      </section>

      {/* Step Indicator */}
      <div className="sticky top-20 z-40 bg-white border-b border-neutral-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 py-3 overflow-x-auto">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = index === currentStep;
              const isCompleted = index < currentStep;
              return (
                <button
                  key={step.id}
                  onClick={() => {
                    if (index === 0 || selectedModel) setCurrentStep(index);
                  }}
                  className={clsx(
                    "flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all",
                    isActive
                      ? "bg-brand-50 text-brand-600"
                      : isCompleted
                        ? "text-brand-500 hover:bg-brand-50"
                        : "text-neutral-400"
                  )}
                >
                  <div
                    className={clsx(
                      "w-6 h-6 rounded-full flex items-center justify-center text-xs",
                      isActive
                        ? "bg-brand-600 text-white"
                        : isCompleted
                          ? "bg-brand-100 text-brand-600"
                          : "bg-neutral-100 text-neutral-400"
                    )}
                  >
                    {isCompleted ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <StepIcon className="h-3 w-3" />
                    )}
                  </div>
                  <span className="hidden sm:inline">{step.label}</span>
                  {index < steps.length - 1 && (
                    <ChevronRight className="h-3 w-3 text-neutral-300 ml-1" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 bg-neutral-50 min-h-[60vh]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Options */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {/* Step 0: Model Selection */}
                {currentStep === 0 && (
                  <motion.div
                    key="model"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                      Wählen Sie Ihr Modell
                    </h2>
                    <p className="text-neutral-500 mb-8">
                      Welches Sling-Modell passt zu Ihnen?
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {aircraft.map((plane) => (
                        <button
                          key={plane.id}
                          onClick={() => setSelectedModel(plane.id)}
                          className={clsx(
                            "text-left rounded-xl border-2 overflow-hidden transition-all duration-300",
                            selectedModel === plane.id
                              ? "border-brand-500 shadow-lg shadow-brand-500/10"
                              : "border-neutral-200 hover:border-neutral-300"
                          )}
                        >
                          <div
                            className={`h-32 bg-gradient-to-br ${plane.heroColor} flex items-center justify-center relative`}
                          >
                            <Plane className="h-12 w-12 text-white/30" />
                            {selectedModel === plane.id && (
                              <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white flex items-center justify-center">
                                <Check className="h-4 w-4 text-brand-600" />
                              </div>
                            )}
                          </div>
                          <div className="p-4 bg-white">
                            <h3 className="font-bold text-neutral-900">
                              {plane.name}
                            </h3>
                            <p className="text-xs text-neutral-500 mt-1">
                              {plane.tagline}
                            </p>
                            <div className="mt-2 text-sm font-semibold text-brand-600">
                              ab {formatPrice(plane.basePrice)}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Category Steps */}
                {currentStep > 0 &&
                  currentStep < steps.length - 1 &&
                  (() => {
                    const category =
                      configuratorCategories[currentStep - 1];
                    if (!category) return null;
                    const CategoryIcon = iconMap[category.icon] || Gauge;

                    return (
                      <motion.div
                        key={category.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <CategoryIcon className="h-6 w-6 text-brand-600" />
                          <h2 className="text-2xl font-bold text-neutral-900">
                            {category.name}
                          </h2>
                        </div>
                        <p className="text-neutral-500 mb-8">
                          {category.description}
                        </p>
                        <div className="space-y-3">
                          {category.options.map((option) => {
                            const isSelected = (
                              selectedOptions[category.id] || []
                            ).includes(option.id);
                            return (
                              <button
                                key={option.id}
                                onClick={() =>
                                  toggleOption(category.id, option.id)
                                }
                                className={clsx(
                                  "w-full text-left p-5 rounded-xl border-2 transition-all duration-300 bg-white",
                                  isSelected
                                    ? "border-brand-500 shadow-md shadow-brand-500/10"
                                    : "border-neutral-200 hover:border-neutral-300"
                                )}
                              >
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-3">
                                      <div
                                        className={clsx(
                                          "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                                          isSelected
                                            ? "bg-brand-600 border-brand-600"
                                            : "border-neutral-300"
                                        )}
                                      >
                                        {isSelected && (
                                          <Check className="h-3 w-3 text-white" />
                                        )}
                                      </div>
                                      <h3 className="font-semibold text-neutral-900">
                                        {option.name}
                                      </h3>
                                    </div>
                                    <p className="text-sm text-neutral-500 mt-1 ml-8">
                                      {option.description}
                                    </p>
                                  </div>
                                  <div className="text-right ml-4">
                                    <span
                                      className={clsx(
                                        "text-sm font-semibold",
                                        option.price === 0
                                          ? "text-green-600"
                                          : "text-neutral-900"
                                      )}
                                    >
                                      {option.price === 0
                                        ? "Inklusive"
                                        : `+ ${formatPrice(option.price)}`}
                                    </span>
                                  </div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    );
                  })()}

                {/* Summary Step */}
                {currentStep === steps.length - 1 && (
                  <motion.div
                    key="summary"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                      Ihre Konfiguration
                    </h2>
                    <p className="text-neutral-500 mb-8">
                      Überprüfen Sie Ihre Auswahl und senden Sie eine Anfrage.
                    </p>

                    {/* Model */}
                    {selectedAircraft && (
                      <div className="bg-white rounded-xl border border-neutral-200 p-6 mb-6">
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedAircraft.heroColor} flex items-center justify-center`}
                          >
                            <Plane className="h-8 w-8 text-white/40" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-neutral-900">
                              {selectedAircraft.name}
                            </h3>
                            <p className="text-sm text-neutral-500">
                              {selectedAircraft.tagline}
                            </p>
                          </div>
                          <div className="ml-auto text-right">
                            <span className="text-xs text-neutral-500">
                              Basispreis
                            </span>
                            <div className="font-bold text-neutral-900">
                              {formatPrice(selectedAircraft.basePrice)}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Selected Options */}
                    {configuratorCategories.map((cat) => {
                      const selected = selectedOptions[cat.id] || [];
                      const selectedOpts = cat.options.filter((o) =>
                        selected.includes(o.id)
                      );
                      if (selectedOpts.length === 0) return null;
                      const CatIcon = iconMap[cat.icon] || Gauge;

                      return (
                        <div
                          key={cat.id}
                          className="bg-white rounded-xl border border-neutral-200 p-6 mb-4"
                        >
                          <div className="flex items-center gap-2 mb-4">
                            <CatIcon className="h-4 w-4 text-brand-600" />
                            <h4 className="font-semibold text-neutral-900">
                              {cat.name}
                            </h4>
                          </div>
                          <div className="space-y-3">
                            {selectedOpts.map((opt) => (
                              <div
                                key={opt.id}
                                className="flex items-center justify-between"
                              >
                                <div className="flex items-center gap-2">
                                  <Check className="h-4 w-4 text-brand-500" />
                                  <span className="text-sm text-neutral-700">
                                    {opt.name}
                                  </span>
                                </div>
                                <span className="text-sm font-medium text-neutral-900">
                                  {opt.price === 0
                                    ? "Inkl."
                                    : formatPrice(opt.price)}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}

                    {/* Inquiry Button */}
                    {!showInquiry ? (
                      <div className="flex gap-4 mt-8">
                        <Button onClick={() => setShowInquiry(true)} size="lg">
                          <Send className="mr-2 h-4 w-4" />
                          Anfrage senden
                        </Button>
                        <Button
                          onClick={() => {
                            if (typeof window !== "undefined") {
                              window.print();
                            }
                          }}
                          variant="outline"
                          size="lg"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          PDF drucken
                        </Button>
                      </div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-xl border border-neutral-200 p-6 mt-8"
                      >
                        <h3 className="text-lg font-bold text-neutral-900 mb-4">
                          Anfrage senden
                        </h3>
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            alert(
                              "Vielen Dank! Ihre Konfiguration wurde gesendet. Wir melden uns in Kürze bei Ihnen."
                            );
                            setShowInquiry(false);
                          }}
                          className="space-y-4"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-neutral-700 mb-1">
                                Vorname *
                              </label>
                              <input
                                type="text"
                                required
                                className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-neutral-700 mb-1">
                                Nachname *
                              </label>
                              <input
                                type="text"
                                required
                                className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">
                              E-Mail *
                            </label>
                            <input
                              type="email"
                              required
                              className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">
                              Telefon
                            </label>
                            <input
                              type="tel"
                              className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">
                              Nachricht
                            </label>
                            <textarea
                              rows={3}
                              className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all resize-none"
                              placeholder="Haben Sie besondere Wünsche oder Fragen?"
                            />
                          </div>
                          <div className="flex gap-3">
                            <Button type="submit" size="md">
                              Anfrage absenden
                            </Button>
                            <Button
                              variant="ghost"
                              onClick={() => setShowInquiry(false)}
                            >
                              Abbrechen
                            </Button>
                          </div>
                        </form>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-neutral-200">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className={clsx(
                    "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all",
                    currentStep === 0
                      ? "text-neutral-300 cursor-not-allowed"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                  )}
                >
                  <ChevronLeft className="h-4 w-4" />
                  Zurück
                </button>
                {currentStep < steps.length - 1 && (
                  <button
                    onClick={nextStep}
                    disabled={!canProceed}
                    className={clsx(
                      "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all",
                      canProceed
                        ? "bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/25"
                        : "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                    )}
                  >
                    Weiter
                    <ChevronRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Right: Price Summary (Sticky) */}
            <div className="lg:col-span-1">
              <div className="sticky top-36">
                <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm">
                  <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
                    Preisübersicht
                  </h3>

                  {selectedAircraft ? (
                    <>
                      <div className="flex items-center gap-3 mb-6 pb-6 border-b border-neutral-100">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${selectedAircraft.heroColor} flex items-center justify-center`}
                        >
                          <Plane className="h-6 w-6 text-white/40" />
                        </div>
                        <div>
                          <div className="font-bold text-neutral-900">
                            {selectedAircraft.name}
                          </div>
                          <div className="text-xs text-neutral-500">
                            {selectedAircraft.seats} Sitze
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-sm">
                          <span className="text-neutral-500">Basispreis</span>
                          <span className="font-medium text-neutral-900">
                            {formatPrice(selectedAircraft.basePrice)}
                          </span>
                        </div>
                        {optionsPrice > 0 && (
                          <div className="flex justify-between text-sm">
                            <span className="text-neutral-500">Optionen</span>
                            <span className="font-medium text-neutral-900">
                              + {formatPrice(optionsPrice)}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="pt-4 border-t border-neutral-200">
                        <div className="flex justify-between items-end">
                          <span className="text-sm font-medium text-neutral-500">
                            Gesamtpreis
                          </span>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-neutral-900">
                              {formatPrice(totalPrice)}
                            </div>
                            <span className="text-xs text-neutral-400">
                              inkl. Optionen, exkl. MwSt.
                            </span>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <Plane className="h-12 w-12 text-neutral-200 mx-auto mb-3" />
                      <p className="text-sm text-neutral-400">
                        Wählen Sie ein Modell um zu beginnen
                      </p>
                    </div>
                  )}
                </div>

                {selectedAircraft && (
                  <p className="text-xs text-neutral-400 mt-4 text-center">
                    Preise sind unverbindlich. Änderungen vorbehalten.
                    Verbindliches Angebot auf Anfrage.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

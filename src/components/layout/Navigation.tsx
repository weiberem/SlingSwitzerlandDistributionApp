"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Plane, ChevronDown, Globe } from "lucide-react";
import { aircraft } from "@/data/aircraft";
import { clsx } from "clsx";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

const localeLabels: Record<Locale, string> = {
  de: "DE",
  fr: "FR",
  it: "IT",
};

export default function Navigation({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: `/${lang}`, label: dict.nav.home },
    {
      href: `/${lang}/flugzeuge`,
      label: dict.nav.aircraft,
      children: aircraft.map((a) => ({
        href: `/${lang}/flugzeuge/${a.id}`,
        label: a.name,
      })),
    },
    { href: `/${lang}/konfigurator`, label: dict.nav.configurator },
    { href: `/${lang}/ueber-uns`, label: dict.nav.about },
    { href: `/${lang}/service`, label: dict.nav.service },
    { href: `/${lang}/kontakt`, label: dict.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Get the path without the locale prefix for language switching
  const pathWithoutLocale = pathname.replace(/^\/(de|fr|it)/, "") || "/";

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-brand-600/30"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-600 text-white transition-colors duration-300">
              <Plane className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight leading-tight text-white">
                Sling Switzerland
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-brand-400">
                {dict.nav.dealer}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() =>
                  link.children && setActiveDropdown(link.href)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={clsx(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-1",
                    pathname === link.href
                      ? "text-brand-400 bg-brand-500/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                  {link.children && <ChevronDown className="h-3 w-3" />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.children && activeDropdown === link.href && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-neutral-900 rounded-xl shadow-xl shadow-black/40 border border-neutral-700 overflow-hidden"
                    >
                      <div className="p-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-neutral-300 hover:text-white hover:bg-brand-600/20 rounded-lg transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Language Switcher */}
            <div
              className="relative ml-2"
              onMouseEnter={() => setShowLangMenu(true)}
              onMouseLeave={() => setShowLangMenu(false)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-all">
                <Globe className="h-3.5 w-3.5" />
                {localeLabels[lang]}
                <ChevronDown className="h-3 w-3" />
              </button>
              <AnimatePresence>
                {showLangMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-1 w-32 bg-neutral-900 rounded-xl shadow-xl shadow-black/40 border border-neutral-700 overflow-hidden"
                  >
                    <div className="p-1">
                      {(["de", "fr", "it"] as Locale[]).map((l) => (
                        <Link
                          key={l}
                          href={`/${l}${pathWithoutLocale}`}
                          className={clsx(
                            "block px-4 py-2 text-sm rounded-lg transition-colors",
                            l === lang
                              ? "text-brand-400 bg-brand-600/10"
                              : "text-neutral-300 hover:text-white hover:bg-white/5"
                          )}
                        >
                          {l === "de"
                            ? "Deutsch"
                            : l === "fr"
                              ? "Français"
                              : "Italiano"}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href={`/${lang}/konfigurator`}
              className="ml-3 px-5 py-2.5 text-sm font-semibold rounded-lg bg-brand-600 text-white hover:bg-brand-500 shadow-lg shadow-brand-600/30 transition-all duration-300"
            >
              {dict.nav.cta}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-brand-600/20"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={clsx(
                      "block px-4 py-3 text-base font-medium rounded-lg transition-colors",
                      pathname === link.href
                        ? "text-brand-400 bg-brand-500/10"
                        : "text-neutral-300 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-neutral-500 hover:text-brand-400 rounded-lg"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Language Switcher */}
              <div className="flex gap-2 px-4 pt-4 border-t border-neutral-800 mt-4">
                {(["de", "fr", "it"] as Locale[]).map((l) => (
                  <Link
                    key={l}
                    href={`/${l}${pathWithoutLocale}`}
                    className={clsx(
                      "px-4 py-2 text-sm rounded-lg font-medium transition-colors",
                      l === lang
                        ? "bg-brand-600 text-white"
                        : "text-neutral-400 hover:text-white bg-neutral-800"
                    )}
                  >
                    {localeLabels[l]}
                  </Link>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href={`/${lang}/konfigurator`}
                  className="block w-full text-center px-5 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-500 transition-colors"
                >
                  {dict.nav.cta}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

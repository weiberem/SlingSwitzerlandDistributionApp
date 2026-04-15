"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Plane, ChevronDown } from "lucide-react";
import { aircraft } from "@/data/aircraft";
import { clsx } from "clsx";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/flugzeuge",
    label: "Flugzeuge",
    children: aircraft.map((a) => ({
      href: `/flugzeuge/${a.id}`,
      label: a.name,
    })),
  },
  { href: "/konfigurator", label: "Konfigurator" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/service", label: "Service" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

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

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className={clsx(
                "flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-300",
                isScrolled
                  ? "bg-brand-600 text-white"
                  : "bg-white/20 text-white backdrop-blur-sm"
              )}
            >
              <Plane className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span
                className={clsx(
                  "text-lg font-bold tracking-tight leading-tight transition-colors duration-300",
                  isScrolled ? "text-neutral-900" : "text-white"
                )}
              >
                Sling Switzerland
              </span>
              <span
                className={clsx(
                  "text-[10px] font-medium uppercase tracking-[0.2em] transition-colors duration-300",
                  isScrolled ? "text-brand-600" : "text-white/70"
                )}
              >
                Authorized Dealer
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
                      ? isScrolled
                        ? "text-brand-600 bg-brand-50"
                        : "text-white bg-white/20"
                      : isScrolled
                        ? "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                        : "text-white/80 hover:text-white hover:bg-white/10"
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
                      className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl shadow-black/10 border border-neutral-100 overflow-hidden"
                    >
                      <div className="p-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-neutral-600 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
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

            <Link
              href="/konfigurator"
              className={clsx(
                "ml-4 px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300",
                isScrolled
                  ? "bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/25"
                  : "bg-white text-neutral-900 hover:bg-white/90 shadow-lg shadow-black/10"
              )}
            >
              Jetzt konfigurieren
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={clsx(
              "lg:hidden p-2 rounded-lg transition-colors",
              isScrolled
                ? "text-neutral-900 hover:bg-neutral-100"
                : "text-white hover:bg-white/10"
            )}
            aria-label={isOpen ? "Menü schliessen" : "Menü öffnen"}
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
            className="lg:hidden bg-white border-t border-neutral-100 shadow-xl"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={clsx(
                      "block px-4 py-3 text-base font-medium rounded-lg transition-colors",
                      pathname === link.href
                        ? "text-brand-600 bg-brand-50"
                        : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
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
                          className="block px-4 py-2 text-sm text-neutral-500 hover:text-brand-600 rounded-lg"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/konfigurator"
                  className="block w-full text-center px-5 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors"
                >
                  Jetzt konfigurieren
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

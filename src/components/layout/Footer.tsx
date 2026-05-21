import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export default function Footer({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const footerLinks = {
    flugzeuge: [
      { href: `/${lang}#flugzeuge`, label: "Sling 2" },
      { href: `/${lang}#flugzeuge`, label: "Sling TSi" },
      { href: `/${lang}#flugzeuge`, label: "Sling High Wing" },
      {
        href: "https://slingaircraftconfig.app",
        label: dict.nav.configurator,
        external: true,
      },
    ],
    unternehmen: [
      { href: `/${lang}#ueber-uns`, label: dict.footer.about },
      { href: `/${lang}#service`, label: dict.footer.serviceAndMaintenance },
      { href: `/${lang}#kontakt`, label: dict.nav.contact },
    ],
    rechtliches: [
      { href: `/${lang}/impressum`, label: dict.footer.imprint },
      { href: `/${lang}/datenschutz`, label: dict.footer.privacy },
      { href: `/${lang}/agb`, label: dict.footer.terms },
    ],
  };

  return (
    <footer className="bg-black text-neutral-400 border-t border-neutral-800">
      {/* Red accent bar */}
      <div className="h-1 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-700" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-neutral-800">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={`/${lang}`} className="inline-block mb-6">
              <Image
                src="/logos/SlingSwitzerlandLogo.jpg"
                alt="Sling Aircraft Switzerland"
                width={180}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              {dict.footer.description}
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-neutral-500">
                    {dict.home.airfield} LSZW
                  </div>
                  <div>Flugplatzstrasse, 3603 Thun</div>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-neutral-500">
                    {dict.home.airfield} Zweisimmen
                  </div>
                  <div>Hangar 7, 3770 Zweisimmen</div>
                </div>
              </div>
              <a
                href="mailto:info@slingaircraftswitzerland.ch"
                className="flex items-center gap-3 text-sm hover:text-brand-400 transition-colors"
              >
                <Mail className="h-4 w-4 text-brand-500" />
                info@slingaircraftswitzerland.ch
              </a>
              <a
                href="https://instagram.com/sling_aircraft_switzerland"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm hover:text-brand-400 transition-colors"
              >
                <InstagramIcon className="h-4 w-4 text-brand-500" />
                @sling_aircraft_switzerland
              </a>
            </div>
          </div>

          {/* Flugzeuge */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {dict.footer.aircraft}
            </h3>
            <ul className="space-y-3">
              {footerLinks.flugzeuge.map((link) => (
                <li key={link.label}>
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-brand-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm hover:text-brand-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {dict.footer.company}
            </h3>
            <ul className="space-y-3">
              {footerLinks.unternehmen.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {dict.footer.legal}
            </h3>
            <ul className="space-y-3">
              {footerLinks.rechtliches.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} Sling Aircraft Switzerland.{" "}
            {dict.footer.rights}
          </p>
          <p className="text-xs text-neutral-500">
            {dict.footer.dealerOf}{" "}
            <span className="text-brand-500 font-medium">
              The Airplane Factory (TAF)
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

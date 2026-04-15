import Link from "next/link";
import { Plane, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  flugzeuge: [
    { href: "/flugzeuge/sling-2", label: "Sling 2" },
    { href: "/flugzeuge/sling-4", label: "Sling 4" },
    { href: "/flugzeuge/sling-tsi", label: "Sling TSi" },
    { href: "/flugzeuge/sling-high-wing", label: "Sling High Wing" },
    { href: "/konfigurator", label: "Konfigurator" },
  ],
  unternehmen: [
    { href: "/ueber-uns", label: "Über uns" },
    { href: "/service", label: "Service & Wartung" },
    { href: "/kontakt", label: "Kontakt" },
  ],
  rechtliches: [
    { href: "/impressum", label: "Impressum" },
    { href: "/datenschutz", label: "Datenschutz" },
    { href: "/agb", label: "AGB" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-neutral-800">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-600 text-white">
                <Plane className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight leading-tight">
                  Sling Switzerland
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-brand-400">
                  Authorized Dealer
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Offizieller Sling Aircraft Händler für die Schweiz. Verkauf,
              Service und Wartung von Sling Flugzeugen.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+41000000000"
                className="flex items-center gap-3 text-sm hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-brand-500" />
                +41 (0) 00 000 00 00
              </a>
              <a
                href="mailto:info@slingaircraftswitzerland.ch"
                className="flex items-center gap-3 text-sm hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-brand-500" />
                info@slingaircraftswitzerland.ch
              </a>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-brand-500 shrink-0" />
                <span>Schweiz</span>
              </div>
            </div>
          </div>

          {/* Flugzeuge */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Flugzeuge
            </h3>
            <ul className="space-y-3">
              {footerLinks.flugzeuge.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Unternehmen
            </h3>
            <ul className="space-y-3">
              {footerLinks.unternehmen.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
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
              Rechtliches
            </h3>
            <ul className="space-y-3">
              {footerLinks.rechtliches.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
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
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Sling Aircraft Switzerland. Alle
            Rechte vorbehalten.
          </p>
          <p className="text-xs">
            Offizieller Händler von{" "}
            <span className="text-white font-medium">
              The Airplane Factory (TAF)
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

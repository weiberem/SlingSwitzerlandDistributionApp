# PROMPT: Sling Aircraft Switzerland – One-Pager Website
# Repo: https://github.com/weiberem/SlingSwitzerland.git
# Diesen Prompt in ein neues Claude Code Projekt einfügen.

Ich bin Rémy Weibel, offizieller Sling Aircraft Dealer für die Schweiz.
Standorte: Thun Airport + Zweisimmen.
Kontakt: info@slingaircraftswitzerland.ch

## Aufgabe
Erstelle eine professionelle One-Pager Dealer-Website für Sling Aircraft Switzerland.
Die Website wird auf Vercel gehostet unter den Domains slingaircraftswitzerland.ch und slingaircraft.ch.

## Design
- Farbschema: SCHWARZ / ROT / WEISS – dunkel und elegant wie die offizielle slingaircraft.com Website
- Transparente rote Balken und Akzente als Design-Elemente
- Premium-Look, modern, edel
- Logo: public/logos/SlingSwitzerlandLogo.jpg (weisse Schrift "Sling Aircraft Switzerland" auf schwarz mit Schweizer Kreuz)
  - AUSSCHLIESSLICH dieses Logo verwenden, nirgends ein anderes
  - Logo gross genug darstellen
  - Logo braucht einen schwarzen Verlauf-Hintergrund der sanft ausläuft, damit es keine harte Kante zum restlichen Hintergrund gibt (das Logo hat einen schwarzen Hintergrund im JPG)

## Hero-Bereich
- YouTube-Video LbO28tBc1hU als Fullscreen-Hintergrund in Dauerschleife
- Abschnitt 7 Sekunden bis 26 Sekunden loopen
- Stumm, autoplay, mit dunklem + rotem Overlay für Textlesbarkeit
- youtube-nocookie.com verwenden (Datenschutz)

## Sprachen
- Dreisprachig: Deutsch (DE), Französisch (FR), Italienisch (IT)
- Routing: /de/, /fr/, /it/ mit [lang]-Segment im App Router
- Sprachumschalter in der Navigation (Desktop + Mobile)
- Automatische Spracherkennung via Browser-Accept-Language

## Sektionen (alles auf einer Seite, smooth-scroll)
1. HERO – Video-Hintergrund, grosse Headline, CTA-Button zum Konfigurator
2. FLUGZEUGE – NUR diese 3 Modelle (KEIN Sling 4, der ist nicht mehr im Angebot):
   - Sling 2 / LSA: 2-Sitzer, Rotax 912iS (100 PS), Tiefdecker, Ganzmetall-Bauweise
   - Sling TSi: 4-Sitzer, Rotax 916iS (160 PS), Tiefdecker, Flaggschiff
   - Sling High Wing: 4-Sitzer, Rotax 916iS (160 PS), Hochdecker, Carbon-Composite-Rumpf
   - Pro Modell: YouTube-Video LbO28tBc1hU als Hintergrund mit unterschiedlichen Zeitabschnitten
   - KEINE PREISE anzeigen – nur "Preis auf Anfrage"
3. WARUM SLING – Vorteile: Preisgekröntes Design, Höchste Sicherheit (Ganzmetall, BRS optional), Schweizer Service
4. KONFIGURATOR CTA – Prominenter Bereich der zum externen Konfigurator verlinkt
   - Der Konfigurator ist eine SEPARATE App unter sling-configurator.vercel.app
   - Auf der Konfigurator-Seite der Website wird er per iframe eingebettet
   - "Vollbild öffnen" Button der den Konfigurator standalone öffnet
5. ÜBER UNS – Sling Aircraft Switzerland als offizieller Dealer, The Airplane Factory (TAF) Johannesburg
6. SERVICE – Wartung, Inspektion, Ersatzteile, Reparatur, BAZL-Zulassungsbegleitung
7. KONTAKT – Formular (Vorname, Nachname, Email, Telefon, Betreff-Dropdown, Nachricht, Datenschutz-Checkbox), Kontaktdaten, Probeflug-CTA

## Wichtige Geschäftsregeln
- KEINE PREISE auf der Website! Überall nur "Preis auf Anfrage"
- Nur Kit-Verkauf in der Schweiz (kein Ready-to-Fly, kein EASA Type Certificate)
- Alle Schweizer Zulassungen: Eigenbau 51%-Regel unter BAZL/EAS Aufsicht
- RTF ist in der Schweiz NICHT zulässig – das muss klar kommuniziert werden

## Technischer Stack
- Next.js (neueste Version, App Router) + TypeScript + Tailwind CSS
- Framer Motion für Animationen
- Lucide React für Icons
- next/image für optimierte Bilder
- Security Headers: HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- SEO: Sitemap.xml, robots.txt, Open Graph Tags, strukturierte Metadaten
- Responsive: Mobile-first, funktioniert perfekt auf allen Geräten

## Asset-Ordner erstellen
```
public/
  logos/                  ← SlingSwitzerlandLogo.jpg (bereits vorhanden)
  images/aircraft/        ← Flugzeugfotos
  images/gallery/         ← Galerie-Bilder
  images/team/            ← Team-Fotos
  videos/                 ← Optional lokales Video
  documents/              ← Allgemeine Dokumente
  documents/preislisten/  ← Preislisten-PDFs (intern)
```

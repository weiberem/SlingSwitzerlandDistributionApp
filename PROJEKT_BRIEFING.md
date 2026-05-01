# Projekt-Briefing: Sling Aircraft Switzerland – 2 Repos, 2 Seiten

## Übersicht

Ich bin der offizielle Sling Aircraft Dealer für die Schweiz (Rémy Weibel, Standort: Thun Airport + Zweisimmen). Ich brauche zwei separate Projekte, die zusammenarbeiten:

### Repo 1: Website (One-Pager)
- **Repo:** https://github.com/weiberem/SlingSwitzerland.git
- **Domain:** slingaircraftswitzerland.ch / slingaircraft.ch
- **Hosting:** Vercel
- **Zweck:** Professionelle Dealer-Website als One-Pager

### Repo 2: Konfigurator (Standalone)
- **Repo:** https://github.com/weiberem/SlingKitConfigurator.git
- **Domain:** sling-configurator.vercel.app (oder eigene Subdomain)
- **Hosting:** Vercel
- **Zweck:** Interaktiver Flugzeug-Kit-Konfigurator, auch standalone auf Messen nutzbar

---

## Website (One-Pager) – Anforderungen

### Design
- **Farbschema:** Schwarz / Rot / Weiss (wie offizielle Sling Aircraft Website)
- **Stil:** Dunkel, elegant, professionell, Premium-Look
- **Transparente rote Balken/Akzente** als Design-Elemente
- **Logo:** `/public/logos/SlingSwitzerlandLogo.jpg` (weisse Schrift auf schwarz, Schweizer Kreuz) – AUSSCHLIESSLICH dieses Logo verwenden
- **Logo-Darstellung:** Gross genug, mit schwarzem Verlauf-Hintergrund der sanft ausläuft (keine harte Kante zum restlichen Hintergrund)

### Hintergrund-Video
- YouTube-Video `LbO28tBc1hU` als Hero-Hintergrund in Dauerschleife (Abschnitt 7s–26s)
- Stumm, autoplay, mit dunklem Overlay für Lesbarkeit
- YouTube-nocookie.com für Datenschutz

### Sprachen
- **Dreisprachig:** Deutsch (DE), Französisch (FR), Italienisch (IT)
- Routing via `/de/`, `/fr/`, `/it/` mit `[lang]`-Segment
- Sprachumschalter in der Navigation
- Auto-Erkennung der Browser-Sprache via Proxy/Middleware

### Sektionen (One-Pager, alle auf einer Seite)
1. **Hero** – Video-Hintergrund, Headline, CTA zum Konfigurator
2. **Flugzeuge** – 3 Modelle (KEIN Sling 4, der ist nicht mehr im Angebot):
   - **Sling 2 / LSA** – 2-Sitzer, Rotax 912iS (100 PS), Tiefdecker, Ganzmetall
   - **Sling TSi** – 4-Sitzer, Rotax 916iS (160 PS), Tiefdecker, Flaggschiff
   - **Sling High Wing** – 4-Sitzer, Rotax 916iS (160 PS), Hochdecker, Composite-Rumpf
3. **Warum Sling** – Vorteile (Qualität, Sicherheit, Schweizer Service)
4. **Konfigurator CTA** – Link/Button zum externen Konfigurator
5. **Über uns** – Sling Switzerland, The Airplane Factory (TAF)
6. **Service** – Wartung, Ersatzteile, Zulassungsbegleitung (BAZL)
7. **Kontakt** – Formular, Kontaktdaten, Probeflug-Anfrage

### Wichtige Geschäftsregeln
- **KEINE Preise auf der Website anzeigen!** Stattdessen "Preis auf Anfrage"
- **Nur Kit-Verkauf** in der Schweiz (kein RTF, kein EASA Type Certificate)
- Alle Schweizer Zulassungen basieren auf der **Eigenbau 51%-Regel unter BAZL/EAS**
- Konfigurator wird **per iframe eingebettet** (von sling-configurator.vercel.app)
- Konfigurator muss auch **standalone auf Messen** nutzbar sein

### Kontaktdaten
- **Dealer:** Rémy Weibel
- **E-Mail:** info@slingaircraftswitzerland.ch (oder rw.a3r0@gmail.com)
- **Standorte:** Thun Airport, Zweisimmen
- **Land:** Schweiz

### Technischer Stack
- Next.js (App Router) + TypeScript + Tailwind CSS
- Framer Motion für Animationen
- Lucide React für Icons
- Security Headers (HSTS, X-Frame-Options, CSP etc.)
- SEO: Sitemap, robots.txt, Open Graph, Meta-Tags

### Asset-Ordner
```
public/
  logos/              ← SlingSwitzerlandLogo.jpg
  images/aircraft/    ← Flugzeugfotos
  images/gallery/     ← Galerie
  images/team/        ← Team-Fotos
  videos/             ← Optional: lokales Video
  documents/          ← Dokumente, PDFs
  documents/preislisten/ ← Preislisten (intern)
```

---

## Konfigurator (Standalone) – Anforderungen

### Zweck
- Interaktiver Kit-Konfigurator für Sling Flugzeuge
- Kunden wählen Modell + Optionen, sehen Zusammenfassung
- Auch standalone auf Messen nutzbar (Tablet/Laptop)
- Wird per iframe in die Website eingebettet

### Modelle (3 Stück, KEIN Sling 4)
1. **Sling 2 / LSA** – Rotax 912iS (100 PS)
2. **Sling TSi** – Rotax 916iS (160 PS)
3. **Sling High Wing** – Rotax 916iS (160 PS)

### Echte Optionen (aus Preislisten-Daten)
Die echten Preise und Optionen liegen in `data_sling2.py`, `data_tsi.py`, `data_highwing.py`.
**Preislogik (VERTRAULICH):**
- Alle Preise in den Datendateien sind Sling-Listenpreise (USD ex-works)
- Dealer Provision: 6%, Dealer Markup: 10% → Kundenfaktor: 1.166
- Der Kunde sieht NIE die Listenpreise, nur die aufgeschlagenen Endkundenpreise

### Konfigurator-Kategorien
- **Propeller:** DUC 3-Blatt, DUC 4-Blatt, MT Manual, MT SLPC
- **Avionik:** Garmin G3X Touch, GTR 205, GTN 750Xi/650Xi, Autopilot, GTX 45R, ELT, LED
- **Sicherheit:** BRS/Magnum Fallschirm, Vorinstallation
- **Sauerstoff:** Mountain High, Aithre 2/4-Platz
- **Bremsen:** Matco, Beringer
- **Kraftstoff:** Long Range Tanks
- **Finish:** Nietloch-Verfüllung, Lackierung, Streifen
- **Quickbuild:** Alle Vormontage-Optionen
- **Werkzeug:** Builder Tool Kit
- **Versand:** Info zu Fracht (ca. CHF 6'800 SA→CH)

### Messe-Modus / Magic-Code System
- URL-Parameter für verschiedene Preisansichten:
  - `?mode=standard` → Reguläre Kundenpreise (default)
  - `?mode=messe` → Messepreise (z.B. 2% Rabatt)
  - `?mode=dealer` → Dealer-Ansicht (Einkaufspreise, nur für internen Gebrauch)
- Oder Magic-Code-System: `?code=XXXX` für spezielle Ansichten
- Standard (ohne Parameter) = normale Kundenpreise

### iframe-Kompatibilität
- Muss in iframe einbettbar sein (kein X-Frame-Options: DENY)
- Responsiv für verschiedene iframe-Grössen
- Standalone-Modus für direkte Nutzung (Messe)

### Anfrage-Funktion
- Konfiguration kann als Anfrage gesendet werden
- PDF-Export/Druck der Konfiguration
- E-Mail-Benachrichtigung an Dealer

---

## Preislisten-Daten (Referenz)

### Sling 2 / LSA
- Airframe Kit: USD 51'780
- Motor: Rotax 912iS – P.O.A.
- Propeller: DUC 3-Blatt (USD 4'114) / DUC 4-Blatt (USD 13'086)
- Avionik: Garmin G3X + G5 (USD 15'426), GTR 205 (USD 4'923), Autopilot (USD 4'615)
- BRS: Magnum 601 komplett (USD 8'580)
- Quickbuild verfügbar

### Sling TSi
- Airframe Kit: USD 77'268
- Motor: Rotax 916iS (160 PS) – USD 50'756 (via Aerotec AG, Grenchen)
- Propeller: DUC 4-Blatt (USD 13'086) / MT Manual (USD 20'331) / MT SLPC (USD 29'025)
- Avionik: Garmin G3X + G5 (USD 15'426), Autopilot (USD 5'450), GTX 45R (USD 5'628)
- BRS: USD 22'646
- Sauerstoff: Mountain High 4-Platz (USD 5'600) / Aithre 4-Platz (USD 9'645)
- Quickbuild verfügbar

### Sling High Wing
- Airframe Kit: USD 103'420
- Motor: Rotax 916iS (160 PS) – USD 50'756
- Rumpf: Carbon-Composite Mittelteil (einteilig gebondet)
- Propeller/Avionik: gleiche Optionen wie TSi
- BRS: USD 22'646
- Quickbuild verfügbar

### Versand
- Fracht SA → Schweiz (door-to-door): ca. CHF 6'800 (CHF 6'000 Spediteur + CHF 800 Koordination)
- Transitzeit: 14–20 Tage
- Kein Zoll auf Flugzeugkits in der Schweiz

---

## Wichtige Hinweise
- RTF in der Schweiz NICHT zulässig (kein EASA TC) → nur Kits
- Alle Preise USD, exkl. Steuern, Zoll und Fracht
- Der Kunde sieht NIE die Einkaufspreise (Dealer-Markup automatisch aufgeschlagen)
- "P.O.A." / "Preis auf Anfrage" für Positionen ohne festen Preis
- Preisquellen: Sling Aircraft Quotation März 2026, Aerotec AG Okt 2025, RS Flight Systems Jul 2025, Aithre Inc. Dez 2025

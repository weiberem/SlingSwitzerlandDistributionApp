# PROMPT: Sling Aircraft Switzerland – Kit-Konfigurator
# Repo: https://github.com/weiberem/SlingKitConfigurator.git
# Diesen Prompt in ein neues Claude Code Projekt einfügen.

Ich bin Rémy Weibel, offizieller Sling Aircraft Dealer für die Schweiz.
Erstelle einen interaktiven Sling Aircraft Kit-Konfigurator als Standalone-Webapp.

## Zwei Einsatzzwecke
1. STANDALONE auf Messen: Direkt im Browser auf Tablet/Laptop öffnen (sling-configurator.vercel.app)
2. EINGEBETTET auf der Dealer-Website slingaircraftswitzerland.ch per iframe

## Design
- Farbschema: SCHWARZ / ROT / WEISS – passend zur Hauptwebsite
- Dunkel, elegant, professionell
- Logo: public/logos/SlingSwitzerlandLogo.jpg – AUSSCHLIESSLICH dieses Logo
- Logo gross genug mit schwarzem Verlauf-Hintergrund (sanft auslaufend)
- Muss in einem iframe gut aussehen UND standalone als Fullscreen

## iframe-Kompatibilität
- KEIN X-Frame-Options: DENY – muss einbettbar sein
- Responsiv für verschiedene iframe-Grössen
- Standalone: eigene Navigation/Header
- Im iframe: kompakterer Header oder Header ausblendbar via URL-Parameter ?embed=true

## Tech Stack
- Next.js (neueste Version, App Router) + TypeScript + Tailwind CSS
- Framer Motion für Animationen
- Vercel Hosting

---

## 3 Flugzeug-Modelle (KEIN Sling 4!)

### Modell 1: Sling 2 / LSA
- 2-Sitzer, Tiefdecker, Ganzmetall
- Motor: Rotax 912iS (100 PS)
- Airframe Kit Sektionen:
  - Empennage (Tail) Kit – USD 1 (Platzhalter)
  - Wing Kit (Tricycle) – USD 1
  - Fuselage Kit (Tricycle) – USD 1
  - Undercarriage Kit (Tricycle) – USD 1
  - Canopy, Dash & Finishing Kit – USD 1
- Kit Total: USD 1 (Platzhalter)
- Engine Section:
  - Firewall Forward & Fuel System Kit 912iS – USD 1
  - Rotax 912iS Engine (100 hp) – P.O.A.
  - Leather Upholstery, Interior Panels & Carpets – USD 1
- Propeller:
  - DUC Inconel FLASH 3-blade – USD 1
  - DUC Flashblack-3-R 4-blade composite – USD 1
- Avionik:
  - Garmin G3X Touch EFIS + G5 Backup – USD 1
  - Garmin GTR 205 VHF Radio + Intercom – USD 1
  - Garmin GTN 650Xi GPS/NAV/COMM – P.O.A.
  - Garmin Autopilot (via G3X Touch) – USD 1
  - Artex ELT 345 (406 MHz) – USD 1
  - WHELEN LED Landing Light (per unit) – USD 1
  - Sling LED Wingtip & Tail Strobe/Nav – USD 1
- Sauerstoff:
  - Mountain High O2 System 2-Place – P.O.A.
  - Aithre Turbo O2 Maker 2-Place – P.O.A.
- Sicherheit:
  - Magnum 601 Ballistic Parachute komplett – USD 1
  - Magnum 601 hardware only (no cables) – USD 1
  - Parachute Cable & Mount Pre-Fit – USD 1
- Bremsen:
  - Matco Dual Toe Hydraulic Brakes – USD 1
- Kraftstoff:
  - Long Range Fuel Tanks – USD 1
- Finish:
  - Metallic or Red paint – P.O.A.
  - Special colour scheme per extra colour – P.O.A.
  - Stripe per element – P.O.A.
- Quickbuild:
  - Empennage pre-assembled – USD 1
  - Fuel Tanks Standard – USD 1
  - Fuel Tanks Long Range add-on – USD 1
  - Wings (flaps, ailerons, tanks) – USD 1
  - Fuselage pre-assembled – USD 1
  - Undercarriage assembled & fitted – USD 1
  - Wooden crating & loading – USD 1
  - Container packing per container – USD 1
- Werkzeug:
  - Sling Aircraft Builder Tool Kit – USD 1

### Modell 2: Sling TSi
- 4-Sitzer, Tiefdecker, Ganzmetall
- Motor: Rotax 916iS Turbo (160 PS)
- Airframe Kit Sektionen:
  - Empennage (Tail) Kit – USD 1
  - Wing Kit – USD 1
  - Fuselage Kit – USD 1
  - Undercarriage Kit – USD 1
  - Canopy, Dash & Finishing Kit – USD 1
- Kit Total: USD 1 (Platzhalter)
- Engine Section:
  - Firewall Forward & Fuel System Kit 916iS – USD 1
  - Rotax 916iS Engine (160 hp turbo) – USD 1
  - Leather Upholstery & Carpets – USD 1
- Propeller:
  - DUC Flashblack-3-R 4-blade composite – USD 1
  - MT Propeller MTV-6 Manual Blue Vernier – USD 1
  - MT Propeller MTV-6 Single Lever Power Control (SLPC) – USD 1
- Avionik:
  - Garmin G3X Touch EFIS 10.6" + G5 Backup – USD 1
  - Garmin GTR 205 VHF Radio + GMA 245R Intercom – USD 1
  - Garmin GTN 750Xi GPS/NAV/COMM/MFD – P.O.A.
  - Garmin GTN 650Xi GPS/NAV/COMM – P.O.A.
  - Garmin Autopilot GMC 507 + 2x GSA 28 Servos – USD 1
  - Garmin GTX 45R Mode S Transponder – USD 1
  - Artex ELT 345 (406 MHz) – USD 1
  - Sling LED Wingtip & Tail Strobe/Nav – USD 1
  - Garmin Height Advisor GHA 15 – P.O.A.
  - ADS-B/FLARM Receiver AIR Traffic AT-1 – P.O.A.
  - Backup Battery TCW IBBS-12V-6AH – P.O.A.
- Sauerstoff:
  - Mountain High O2 System 4-Place – USD 1
  - Aithre Turbo O2 Maker 2-Place – P.O.A.
  - Aithre Turbo O2 Maker 4-Place full system – USD 1
- Sicherheit:
  - BRS Ballistic Parachute System komplett – USD 1
  - Parachute Cable & Mount Pre-Fit – USD 1
- Bremsen:
  - Matco Dual Toe Hydraulic Brakes – USD 1
  - Beringer Hand Brake Upgrade Tricycle – USD 1
  - Beringer Dual Toe Hydraulic Brakes Tricycle – USD 1
- Kraftstoff:
  - Long Range Fuel Tanks (+8 kg) – USD 1
- Finish:
  - Fill all standard rivet holes (EMPFOHLEN) – USD 1
  - Metallic or Red paint – P.O.A.
  - Special colour scheme – P.O.A.
  - Stripe per element – P.O.A.
- Quickbuild:
  - Empennage pre-assembled – USD 1
  - Fuel Tanks Standard – USD 1
  - Fuel Tanks Long Range add-on – USD 1
  - Wings (flaps, ailerons, tanks) – USD 1
  - Fuselage pre-assembled – USD 1
  - Undercarriage assembled & fitted – USD 1
  - Canopy with doors & glass – USD 1
  - Fill rivet holes on QB sections – USD 1
  - Wooden crating & loading – USD 1
  - Container packing per container – USD 1
- Werkzeug:
  - Sling Aircraft Builder Tool Kit – USD 1

### Modell 3: Sling High Wing
- 4-Sitzer, Hochdecker, Carbon-Composite-Rumpfmittelteil
- Motor: Rotax 916iS Turbo (160 PS)
- STOL-Fähigkeiten
- Airframe Kit Sektionen:
  - Empennage (Tail) Kit – USD 1
  - Wing Kit – USD 1
  - Fuselage Kit (composite centre fuselage) – USD 1
  - Undercarriage Kit – USD 1
  - Dash, Final Assembly & Finishing Kit – USD 1
- Kit Total: USD 1 (Platzhalter)
- Engine Section:
  - Firewall Forward & Fuel System Kit 916iS – USD 1
  - Rotax 916iS Engine (160 hp turbo) – USD 1
  - Leather Upholstery & Carpets – USD 1
- Propeller: gleiche Optionen wie TSi (DUC 4-blade, MT Manual, MT SLPC)
- Avionik: gleiche Optionen wie TSi (ohne Height Advisor, FLARM, Backup Battery)
- Sauerstoff: gleiche Optionen wie TSi
- Sicherheit:
  - BRS Ballistic Parachute System komplett – USD 1
  - Parachute Cable & Mount Pre-Fit – USD 1
- Bremsen:
  - Beringer Hand Brake Upgrade Tricycle – USD 1
  - Beringer Dual Toe Hydraulic Brakes Tricycle – USD 1
  - Beringer Dual Toe Hydraulic Brakes Taildragger – USD 1
- Kraftstoff: Long Range Fuel Tanks – USD 1
- Finish:
  - Fill all standard rivet holes (EMPFOHLEN) – USD 1
  - Metallic/Red paint – P.O.A.
  - Special colour – P.O.A.
  - Stripe – P.O.A.
- Quickbuild:
  - Empennage pre-assembled – USD 1
  - Fuel Tanks Standard – USD 1
  - Fuel Tanks Long Range add-on – USD 1
  - Wings (flaps, ailerons, tanks) – USD 1
  - Fuselage (rear fitted to carbon centre) – USD 1
  - Undercarriage assembled & fitted – USD 1
  - Doors and glass fitted – USD 1
  - Fill rivet holes on QB sections – USD 1
  - Wooden crating & loading – USD 1
  - Container packing per container – USD 1
- Werkzeug: Sling Aircraft Builder Tool Kit – USD 1

---

## ALLE Preise sind Platzhalter (USD 1)
Alle Preise oben sind bewusst USD 1 als Platzhalter. Die echten Preise werden SPÄTER eingepflegt.
- P.O.A. = "Price on Application" → im UI als "Preis auf Anfrage" anzeigen
- USD 1 = Platzhalter → im UI als "USD 1" anzeigen (wird später ersetzt)
- Die Preise müssen in einer zentralen Datendatei pro Modell liegen (z.B. data/sling2.ts, data/tsi.ts, data/highwing.ts), damit sie einfach aktualisiert werden können

## Preislogik (für SPÄTER vorbereiten, noch NICHT implementieren)
Die Architektur muss vorbereitet sein für:
- DEALER_PROVISION = 0.06 (6%)
- DEALER_MARKUP = 0.10 (10%)
- CUSTOMER_FACTOR = 1.166 (wird auf alle Listenpreise multipliziert)
- Der Kunde sieht NIE die Listenpreise, nur die aufgeschlagenen Endpreise
- Vorbereiten als Konstanten in einer config-Datei, aber aktuell noch NICHT anwenden (erst wenn echte Preise da sind)

## Messe-Modus / Magic-Code (für SPÄTER vorbereiten)
URL-Parameter-System vorbereiten:
- ?mode=standard → Reguläre Kundenpreise (Default)
- ?mode=messe → Messepreise (z.B. 2% Rabatt auf Gesamtpreis)
- ?mode=dealer → Dealer/Einkaufspreise (nur für internen Gebrauch)
- Oder: ?code=XXXX für Magic-Codes
- Aktuell nur die Struktur vorbereiten, noch keine verschiedenen Preise berechnen

---

## Konfigurator-Flow

### Schritt 1: Modell wählen
- 3 Karten mit den 3 Modellen
- Pro Modell: Name, Untertitel, Sitzanzahl, Motor
- YouTube-Video LbO28tBc1hU als Hintergrund pro Karte (verschiedene Zeitabschnitte)
- Klick wählt das Modell aus

### Schritt 2-N: Optionen konfigurieren (Kategorien)
- Pro Kategorie ein Schritt (Propeller, Avionik, Sicherheit, Sauerstoff, Bremsen, Kraftstoff, Finish, Quickbuild, Werkzeug)
- Jede Option: Name, Beschreibung, Preis (oder P.O.A.)
- Checkbox/Radio-Auswahl je nach Kategorie
- Manche Kategorien sind modellspezifisch (z.B. Sling 2 hat DUC 3-blade, TSi/HW nicht)
- Schritt-Indikator oben (welcher Schritt aktiv ist)
- Zurück/Weiter Navigation

### Schritt Final: Zusammenfassung
- Gewähltes Modell + alle gewählten Optionen auflisten
- Gesamtpreis berechnen und anzeigen
- "Anfrage senden" Button → Formular (Vorname, Nachname, Email, Telefon, Nachricht)
- "PDF drucken" Button → Browser-Druckfunktion
- "Konfiguration teilen" → URL mit Konfiguration als Query-Parameter (optional)

### Sidebar (Desktop)
- Sticky rechts: Gewähltes Modell, Preisübersicht, Gesamtpreis
- Aktualisiert sich live bei jeder Optionswahl

---

## Wichtige Geschäftsregeln
- RTF in der Schweiz NICHT zulässig (kein EASA Type Certificate)
- Nur Kit-Verkauf: Eigenbau 51%-Regel unter BAZL/EAS Aufsicht
- Hinweis im Konfigurator: "Alle Preise in USD, ex-works Tedderfield Airpark, Südafrika. Exkl. Steuern, Zoll und Fracht."
- Versandhinweis: "Fracht SA → Schweiz (door-to-door): ca. CHF 6'800. Transitzeit: 14–20 Tage. Kein Zoll auf Flugzeugkits."
- Schweizer Regulierung als Info-Box: "Ready-to-Fly (RTF) aircraft are NOT available for registration in Switzerland as Sling aircraft do not hold an EASA Type Certificate. All Swiss registrations are based on the amateur-built (Eigenbau) 51% rule under BAZL/EAS oversight."

## Datenstruktur
Erstelle pro Modell eine Datendatei (z.B. src/data/sling2.ts, src/data/tsi.ts, src/data/highwing.ts) mit dieser Struktur:

```typescript
export const AIRCRAFT = {
  name: string,
  subtitle: string,
  seats: number,
  engine: string,
  rtfNote: string,
  kitSections: Array<{ name: string, price: number | null, description: string }>,
  kitTotal: number,
  engineSection: Array<{ name: string, price: number | null, description: string }>,
  propellerOptions: Array<{ name: string, price: number | null, description: string }>,
  avionicsOptions: Array<{ ... }>,
  oxygenOptions: Array<{ ... }>,
  safetyOptions: Array<{ ... }>,
  brakeOptions: Array<{ ... }>,
  fuelOptions: Array<{ ... }>,
  finishOptions: Array<{ ... }>,
  quickbuild: Array<{ ... }>,
  tools: Array<{ ... }>,
  shippingNote: string,
}
```

Preis `null` = P.O.A. (Preis auf Anfrage)

## Asset-Ordner
```
public/
  logos/SlingSwitzerlandLogo.jpg
```

Das Logo muss noch in das Repo hochgeladen werden – erstelle den Ordner mit .gitkeep.

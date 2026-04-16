export interface ConfigOption {
  id: string;
  name: string;
  description: string;
  category: string;
  poa?: boolean; // Price on Application
}

export interface ConfigCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  options: ConfigOption[];
}

export const configuratorCategories: ConfigCategory[] = [
  {
    id: "propeller",
    name: "Propeller",
    description: "Propeller-Auswahl",
    icon: "Zap",
    options: [
      {
        id: "prop-duc-3blade",
        name: "DUC Inconel FLASH 3-Blatt (nur Sling 2)",
        description: "3-Blatt Inconel Propeller. Standard-Option für Sling 2.",
        category: "propeller",
      },
      {
        id: "prop-duc-4blade",
        name: "DUC Flashblack-3-R (4-Blatt Composite)",
        description: "4-Blatt Composite Propeller. Fixed Pitch.",
        category: "propeller",
      },
      {
        id: "prop-mt-manual",
        name: "MT Propeller MTV-6 – Manual Blue Vernier",
        description:
          "3-Blatt Constant Speed Composite, Nickel-Vorderkante. Manuelle Blue Vernier Steuerung. 75 Zoll.",
        category: "propeller",
      },
      {
        id: "prop-mt-slpc",
        name: "MT Propeller MTV-6 – Single Lever Power Control (SLPC)",
        description:
          "MT Propeller MTV-6 mit RS Flight Systems SLPC-System. Inkl. SCU 9iS, Governor, Kabelbaum, Front Panel V2.",
        category: "propeller",
      },
    ],
  },
  {
    id: "avionics",
    name: "Avionik",
    description: "Instrumente, Navigation und Kommunikation",
    icon: "Gauge",
    options: [
      {
        id: "av-g3x-g5",
        name: "Garmin G3X Touch EFIS (10.6\") + G5 Backup",
        description:
          "Dual GDU 460 Touchscreens + Garmin G5 Backup. Inkl. GSU 25C AHRS, GMU 11, GEA 24B, GA 35 GPS.",
        category: "avionics",
      },
      {
        id: "av-gtr205",
        name: "Garmin GTR 205 VHF Radio + Intercom",
        description: "VHF-Funkgerät mit Intercom, VHF-Antenne und Kabel.",
        category: "avionics",
      },
      {
        id: "av-gtn750xi",
        name: "Garmin GTN 750Xi GPS/NAV/COMM/MFD",
        description:
          "IFR Navigator mit SD Datacard, GA 35, RAMI AV-12, GAD 29.",
        category: "avionics",
        poa: true,
      },
      {
        id: "av-gtn650xi",
        name: "Garmin GTN 650Xi GPS/NAV/COMM",
        description: "IFR Navigator. Inkl. SD Datacard, GA 35, RAMI AV-12, GAD 29.",
        category: "avionics",
        poa: true,
      },
      {
        id: "av-autopilot",
        name: "Garmin Autopilot – GMC 507 + 2× GSA 28 Servos",
        description:
          "Vollständiger 2-Achsen-Autopilot. GMC 507 Control Panel, Roll- & Pitch-Servos, GAD 27.",
        category: "avionics",
      },
      {
        id: "av-transponder",
        name: "Garmin GTX 45R Mode S Transponder",
        description: "ADS-B Out/In Transponder mit Comant CI-105 Antenne.",
        category: "avionics",
      },
      {
        id: "av-elt",
        name: "Artex ELT 345 (406 MHz)",
        description:
          "406 MHz Notfallsender mit Einbaukit, Fernschalter und Antenne. FAA TSO-C126b.",
        category: "avionics",
      },
      {
        id: "av-led-lights",
        name: "Sling LED Wingtip & Tail Strobe/Nav System",
        description:
          "Triple LED Nav/Strobe-Lichter an Flügelspitzen und Heck.",
        category: "avionics",
      },
    ],
  },
  {
    id: "safety",
    name: "Sicherheit",
    description: "Rettungssysteme",
    icon: "Shield",
    options: [
      {
        id: "safety-brs-full",
        name: "BRS Rettungsfallschirm – Komplett",
        description:
          "Ballistischer Gesamtrettungsfallschirm inkl. Kabel, Halterungen und Befestigungen. Empfohlen für IFR/Bergfliegerei.",
        category: "safety",
      },
      {
        id: "safety-brs-prefit",
        name: "Fallschirm-Vorinstallation (ohne Fallschirm)",
        description:
          "Installiert alle Halterungen, Verkleidungen und Kabel für eine spätere BRS-Nachrüstung.",
        category: "safety",
      },
      {
        id: "safety-magnum-full",
        name: "Magnum 601 Rettungsfallschirm – Komplett (nur Sling 2)",
        description:
          "Kompletter Magnum Rettungsfallschirm inkl. Stahlkabel, Halterungen und Befestigungen. Ca. 14 kg Zusatzgewicht.",
        category: "safety",
      },
    ],
  },
  {
    id: "oxygen",
    name: "Sauerstoff",
    description: "Sauerstoffsysteme für Höhenflüge",
    icon: "Wind",
    options: [
      {
        id: "o2-mountain-high-4",
        name: "Mountain High O₂ System – 4 Plätze",
        description:
          "Komplettes 4-Platz Sauerstoffsystem. Empfohlen für Flüge über 10'000 ft MSL.",
        category: "oxygen",
      },
      {
        id: "o2-aithre-2",
        name: "Aithre Turbo O₂ Maker – 2 Plätze",
        description:
          "Elektrochemischer O₂-Generator – keine Flasche nötig. 12V, Panel-Taste, Altus Meso Sensor.",
        category: "oxygen",
        poa: true,
      },
      {
        id: "o2-aithre-4",
        name: "Aithre Turbo O₂ Maker – 4 Plätze (Komplettsystem)",
        description:
          "Twin Turbo O₂ Maker mit HealthView II, 152L Flasche, Shield EX CO-Detektor, 2× Illyrian II Wearables.",
        category: "oxygen",
      },
    ],
  },
  {
    id: "brakes",
    name: "Bremsen",
    description: "Bremssystem-Optionen",
    icon: "Disc",
    options: [
      {
        id: "brake-matco-toe",
        name: "Matco Dual Toe Hydraulik-Bremsen",
        description:
          "Individuelle Fussbremsen anstelle der Standard-T-Pedal-Handbremse.",
        category: "brakes",
      },
      {
        id: "brake-beringer-hand",
        name: "Beringer Handbremsen-Upgrade",
        description: "Premium Beringer Handbremssystem.",
        category: "brakes",
      },
      {
        id: "brake-beringer-toe",
        name: "Beringer Dual Toe Hydraulik-Bremsen",
        description: "Premium Beringer Fussbremssystem.",
        category: "brakes",
      },
    ],
  },
  {
    id: "fuel",
    name: "Kraftstoff",
    description: "Tankoptionen",
    icon: "Fuel",
    options: [
      {
        id: "fuel-longrange",
        name: "Long Range Tanks",
        description:
          "Erweiterte Reichweite. Ca. 40 L zusätzliche Kapazität. Ca. +8 kg.",
        category: "fuel",
      },
    ],
  },
  {
    id: "finish",
    name: "Finish & Lackierung",
    description: "Oberflächenbehandlung und Lackierung",
    icon: "Paintbrush",
    options: [
      {
        id: "finish-rivet-fill",
        name: "Nietloch-Verfüllung – EMPFOHLEN",
        description:
          "Flush-Riveted Finish. Verbessert Optik und reduziert Luftwiderstand erheblich.",
        category: "finish",
      },
      {
        id: "finish-metallic",
        name: "Metallic- oder Rot-Lackierung",
        description: "Anstelle der Standard-Lackierung.",
        category: "finish",
        poa: true,
      },
      {
        id: "finish-special-color",
        name: "Sonderfarbschema (pro Zusatzfarbe)",
        description: "Individuelles Farbschema nach Wunsch.",
        category: "finish",
        poa: true,
      },
      {
        id: "finish-stripe",
        name: "Streifen auf Rumpf, Flügeln oder Spats",
        description: "Dekorativer Streifen pro Element.",
        category: "finish",
        poa: true,
      },
    ],
  },
  {
    id: "quickbuild",
    name: "Quickbuild",
    description: "Werks-Vormontage zur Reduktion der Bauzeit",
    icon: "Wrench",
    options: [
      {
        id: "qb-empennage",
        name: "Leitwerk – vormontiert",
        description: "Leitwerk werksseitig vormontiert. Reduziert die Bauzeit erheblich.",
        category: "quickbuild",
      },
      {
        id: "qb-fuel-standard",
        name: "Kraftstofftanks – Standard vormontiert",
        description: "Vorversiegelte und montierte Standard-Tanks.",
        category: "quickbuild",
      },
      {
        id: "qb-fuel-longrange",
        name: "Kraftstofftanks – Long Range Zusatz",
        description: "Long Range Tank Vormontage-Zusatz.",
        category: "quickbuild",
      },
      {
        id: "qb-wings",
        name: "Flügel – Klappen, Querruder & Tanks",
        description: "Flügel-Unterbaugruppe.",
        category: "quickbuild",
      },
      {
        id: "qb-fuselage",
        name: "Rumpf vormontiert",
        description: "Rumpf werksseitig vormontiert. Fahrwerk und Steuerung durch Bauherrn.",
        category: "quickbuild",
      },
      {
        id: "qb-undercarriage",
        name: "Fahrwerk montiert & eingebaut",
        description: "Fahrwerk montiert und am Rumpf befestigt.",
        category: "quickbuild",
      },
      {
        id: "qb-crating",
        name: "Holzverschalung & Verladung",
        description: "Exportverpackung für Quickbuild-Kit.",
        category: "quickbuild",
      },
      {
        id: "qb-container",
        name: "Container-Verpackung (pro Container)",
        description: "Professionelle Containerverpackung am Tedderfield Airpark.",
        category: "quickbuild",
      },
    ],
  },
  {
    id: "tools",
    name: "Werkzeug",
    description: "Empfohlenes Werkzeug für den Bau",
    icon: "Hammer",
    options: [
      {
        id: "tools-kit",
        name: "Sling Aircraft Empfohlenes Werkzeug-Set",
        description:
          "Kuratiertes Werkzeugset für den Sling Kit-Bau. Empfohlen für Erstbauer.",
        category: "tools",
      },
    ],
  },
];

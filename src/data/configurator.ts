export interface ConfigOption {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  exclusive?: string[];
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
    id: "exterior",
    name: "Exterieur",
    description: "Farbe und Lackierung",
    icon: "Paintbrush",
    options: [
      {
        id: "paint-white",
        name: "Alpine Weiss",
        description: "Klassisches Weiss mit dezenten Akzenten",
        price: 0,
        category: "exterior",
      },
      {
        id: "paint-silver",
        name: "Swiss Silver",
        description: "Metallic-Silber mit Perlmutteffekt",
        price: 4500,
        category: "exterior",
      },
      {
        id: "paint-blue",
        name: "Glacier Blue",
        description: "Elegantes Gletscherblau",
        price: 5200,
        category: "exterior",
      },
      {
        id: "paint-red",
        name: "Swiss Red",
        description: "Lebhaftes Rot mit Metallic-Finish",
        price: 5200,
        category: "exterior",
      },
      {
        id: "paint-black",
        name: "Midnight Black",
        description: "Tiefes Schwarz mit Hochglanzlackierung",
        price: 5800,
        category: "exterior",
      },
      {
        id: "paint-custom",
        name: "Individuelle Lackierung",
        description: "Ihr Wunschdesign nach Absprache",
        price: 8500,
        category: "exterior",
      },
    ],
  },
  {
    id: "avionics",
    name: "Avionik",
    description: "Instrumente und Navigation",
    icon: "Gauge",
    options: [
      {
        id: "avionics-basic",
        name: "Garmin G3X Touch (Basis)",
        description: "10.6\" Touchscreen PFD/MFD, GPS, COM",
        price: 0,
        category: "avionics",
      },
      {
        id: "avionics-dual",
        name: "Garmin G3X Touch Dual",
        description: "Zwei 10.6\" Touchscreens für maximale Übersicht",
        price: 12500,
        category: "avionics",
      },
      {
        id: "avionics-autopilot",
        name: "Garmin GFC 500 Autopilot",
        description: "2-Achsen-Autopilot mit Höhenvorwahl",
        price: 18000,
        category: "avionics",
      },
      {
        id: "avionics-transponder",
        name: "Garmin GTX 345 Transponder",
        description: "ADS-B In/Out mit FLARM-Integration",
        price: 6800,
        category: "avionics",
      },
      {
        id: "avionics-audio",
        name: "Garmin GMA 245 Audio Panel",
        description: "Bluetooth-Audio mit Musikwiedergabe",
        price: 3200,
        category: "avionics",
      },
    ],
  },
  {
    id: "interior",
    name: "Interieur",
    description: "Kabine und Komfort",
    icon: "Armchair",
    options: [
      {
        id: "interior-standard",
        name: "Standard-Ausstattung",
        description: "Hochwertige Stoffsitze und Verkleidungen",
        price: 0,
        category: "interior",
      },
      {
        id: "interior-leather",
        name: "Leder-Ausstattung",
        description: "Premium-Leder in Schwarz oder Cognac",
        price: 7500,
        category: "interior",
      },
      {
        id: "interior-heated",
        name: "Sitzheizung",
        description: "Elektrische Sitzheizung für Pilot und Copilot",
        price: 2800,
        category: "interior",
      },
      {
        id: "interior-soundproofing",
        name: "Premium Schalldämmung",
        description: "Erweiterte Schalldämmung für ruhigeren Flug",
        price: 4200,
        category: "interior",
      },
      {
        id: "interior-carpet",
        name: "Premium Teppich",
        description: "Hochwertiger Kabinenteppich in Anthrazit",
        price: 1500,
        category: "interior",
      },
    ],
  },
  {
    id: "safety",
    name: "Sicherheit",
    description: "Sicherheitsausstattung",
    icon: "Shield",
    options: [
      {
        id: "safety-brs",
        name: "BRS Rettungssystem",
        description: "Ballistisches Gesamtrettungssystem",
        price: 15000,
        category: "safety",
      },
      {
        id: "safety-lights",
        name: "LED Landescheinwerfer",
        description: "Hochleistungs-LED für verbesserte Sicht",
        price: 2200,
        category: "safety",
      },
      {
        id: "safety-strobe",
        name: "LED Strobes & Nav-Lights",
        description: "Komplettes LED-Beleuchtungspaket",
        price: 1800,
        category: "safety",
      },
      {
        id: "safety-elt",
        name: "ELT 406 MHz",
        description: "Notfallsender mit GPS-Position",
        price: 3500,
        category: "safety",
      },
    ],
  },
  {
    id: "performance",
    name: "Performance",
    description: "Leistungsoptimierung",
    icon: "Zap",
    options: [
      {
        id: "perf-prop-cs",
        name: "Constant-Speed-Propeller",
        description: "Automatische Propellerblattverstellung",
        price: 9500,
        category: "performance",
      },
      {
        id: "perf-retract",
        name: "Einziehbares Fahrwerk",
        description: "Elektrisch einziehbares Hauptfahrwerk",
        price: 14000,
        category: "performance",
      },
      {
        id: "perf-wheel-fairings",
        name: "Radverkleidungen",
        description: "Aerodynamische Radverkleidungen",
        price: 2500,
        category: "performance",
      },
      {
        id: "perf-fuel",
        name: "Zusatztank",
        description: "Erweiterte Kraftstoffkapazität (+60 Liter)",
        price: 4800,
        category: "performance",
      },
    ],
  },
];

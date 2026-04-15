export interface AircraftSpec {
  label: string;
  value: string;
}

export interface AircraftVideo {
  videoId: string;
  startSeconds: number;
  endSeconds: number;
}

export interface Aircraft {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  seats: number;
  specs: AircraftSpec[];
  basePrice: number;
  currency: string;
  heroColor: string;
  features: string[];
  video: AircraftVideo;
}

export const aircraft: Aircraft[] = [
  {
    id: "sling-2",
    name: "Sling 2",
    tagline: "Der perfekte Einstieg in die Fliegerei",
    description:
      "Ein leichter, zweisitziger Tiefdecker, der begeistert. Ideal für Sportpiloten und Flugschulen.",
    longDescription:
      "Der Sling 2 ist ein zweisitziger Tiefdecker in Ganzmetallbauweise, der durch seine hervorragenden Flugeigenschaften und sein attraktives Design besticht. Mit dem Rotax 912 iS Motor bietet er eine wirtschaftliche und zuverlässige Leistung. Der Sling 2 eignet sich perfekt als Schulungsflugzeug, für Reisen zu zweit oder einfach zum Spass am Fliegen.",
    seats: 2,
    specs: [
      { label: "Motor", value: "Rotax 912 iS (100 PS)" },
      { label: "Reisegeschwindigkeit", value: "120 kts / 222 km/h" },
      { label: "Reichweite", value: "1'050 km" },
      { label: "Leergewicht", value: "390 kg" },
      { label: "Max. Abfluggewicht", value: "700 kg" },
      { label: "Steigrate", value: "1'000 ft/min" },
      { label: "Spannweite", value: "9.5 m" },
      { label: "Dienstgipfelhöhe", value: "14'500 ft" },
    ],
    basePrice: 195000,
    currency: "CHF",
    heroColor: "from-neutral-900 to-neutral-800",
    video: { videoId: "LbO28tBc1hU", startSeconds: 7, endSeconds: 20 },
    features: [
      "Ganzmetall-Bauweise",
      "Rotax 912 iS Einspritzmotor",
      "Garmin G3X Touch Avionik",
      "Einziehbares Fahrwerk optional",
      "Hervorragende Sicht aus dem Cockpit",
      "Niedrige Betriebskosten",
    ],
  },
  {
    id: "sling-4",
    name: "Sling 4",
    tagline: "Viersitziger Komfort für Reisen",
    description:
      "Der viersitzige Tourer für Familien und Reisende. Komfortabel, zuverlässig und wirtschaftlich.",
    longDescription:
      "Der Sling 4 bietet den Komfort eines viersitzigen Reiseflugzeugs zu einem Bruchteil der üblichen Kosten. Mit grosszügigem Gepäckraum und einer Reichweite von über 1'800 km ist er der ideale Begleiter für Wochenendausflüge und Ferienreisen. Seine stabile Ganzmetallkonstruktion und der bewährte Rotax 914 Turbomotor garantieren Sicherheit und Leistung.",
    seats: 4,
    specs: [
      { label: "Motor", value: "Rotax 914 UL Turbo (115 PS)" },
      { label: "Reisegeschwindigkeit", value: "125 kts / 232 km/h" },
      { label: "Reichweite", value: "1'835 km" },
      { label: "Leergewicht", value: "480 kg" },
      { label: "Max. Abfluggewicht", value: "920 kg" },
      { label: "Steigrate", value: "800 ft/min" },
      { label: "Spannweite", value: "9.5 m" },
      { label: "Gepäckraum", value: "100 Liter" },
    ],
    basePrice: 285000,
    currency: "CHF",
    heroColor: "from-brand-950 to-neutral-900",
    video: { videoId: "LbO28tBc1hU", startSeconds: 20, endSeconds: 35 },
    features: [
      "4 komfortable Sitzplätze",
      "Grosszügiger Gepäckraum",
      "Rotax 914 Turbomotor",
      "Garmin G3X Touch Avionik",
      "Hervorragende Reichweite",
      "Niedrige Betriebskosten",
    ],
  },
  {
    id: "sling-tsi",
    name: "Sling TSi",
    tagline: "Höchste Leistung, modernste Technologie",
    description:
      "Das Flaggschiff mit turbogeladenem Motor und modernster Avionik. Performance trifft Eleganz.",
    longDescription:
      "Der Sling TSi setzt neue Massstäbe in der Klasse der leichten Reiseflugzeuge. Mit dem turbogeladenen Rotax 915 iS Motor erreicht er Reisegeschwindigkeiten von über 140 Knoten und bietet dabei den Komfort einer Premium-Kabine. Die hochmoderne Garmin Avionik und das elegante Design machen den TSi zum ultimativen Reiseflugzeug für anspruchsvolle Piloten.",
    seats: 4,
    specs: [
      { label: "Motor", value: "Rotax 915 iS Turbo (141 PS)" },
      { label: "Reisegeschwindigkeit", value: "140 kts / 259 km/h" },
      { label: "Reichweite", value: "1'950 km" },
      { label: "Leergewicht", value: "510 kg" },
      { label: "Max. Abfluggewicht", value: "920 kg" },
      { label: "Steigrate", value: "1'200 ft/min" },
      { label: "Spannweite", value: "9.5 m" },
      { label: "Dienstgipfelhöhe", value: "23'000 ft" },
    ],
    basePrice: 345000,
    currency: "CHF",
    heroColor: "from-brand-900 to-brand-800",
    video: { videoId: "LbO28tBc1hU", startSeconds: 35, endSeconds: 50 },
    features: [
      "Rotax 915 iS Turbomotor",
      "Garmin G3X Touch Dual-Screen",
      "Constant-Speed-Propeller",
      "Premium-Innenausstattung",
      "Höchste Reisegeschwindigkeit der Klasse",
      "Einziehbares Fahrwerk",
    ],
  },
  {
    id: "sling-high-wing",
    name: "Sling High Wing",
    tagline: "Vielseitigkeit ohne Grenzen",
    description:
      "Der Hochdecker für maximale Vielseitigkeit. Ideal für Buschflüge, Ausbildung und Beobachtung.",
    longDescription:
      "Der Sling High Wing vereint die bewährte Sling-Qualität mit den Vorteilen eines Hochdeckers. Die hervorragende Sicht nach unten, der einfache Ein- und Ausstieg sowie die robusten Fahrwerksbeine machen ihn zum perfekten Begleiter für Flugschulen, Vermessungsflüge und Abenteuer abseits befestigter Pisten. Sein gutmütiges Flugverhalten und die niedrigen Betriebskosten überzeugen.",
    seats: 2,
    specs: [
      { label: "Motor", value: "Rotax 912 iS (100 PS)" },
      { label: "Reisegeschwindigkeit", value: "110 kts / 204 km/h" },
      { label: "Reichweite", value: "900 km" },
      { label: "Leergewicht", value: "400 kg" },
      { label: "Max. Abfluggewicht", value: "750 kg" },
      { label: "Steigrate", value: "900 ft/min" },
      { label: "Spannweite", value: "9.9 m" },
      { label: "Startstrecke", value: "180 m" },
    ],
    basePrice: 215000,
    currency: "CHF",
    heroColor: "from-neutral-800 to-brand-950",
    video: { videoId: "LbO28tBc1hU", startSeconds: 50, endSeconds: 65 },
    features: [
      "Hochdecker-Design",
      "Exzellente Sicht nach unten",
      "Robustes Buschfahrwerk",
      "Einfacher Ein-/Ausstieg",
      "STOL-Fähigkeiten",
      "Ideal für Flugschulen",
    ],
  },
];

export function getAircraftById(id: string): Aircraft | undefined {
  return aircraft.find((a) => a.id === id);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("de-CH", {
    style: "currency",
    currency: "CHF",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

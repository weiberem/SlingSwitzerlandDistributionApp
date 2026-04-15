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
      "Ein leichter, zweisitziger Tiefdecker in Ganzmetallbauweise. Ideal für Sportpiloten, Flugschulen und Reisen zu zweit.",
    longDescription:
      "Der Sling 2 ist ein zweisitziger Tiefdecker, der durch seine hervorragenden Flugeigenschaften und sein attraktives Design besticht. Mit dem bewährten Rotax 912 iS Motor bietet er wirtschaftliche und zuverlässige Leistung bei niedrigen Betriebskosten. Der Sling 2 eignet sich perfekt als Schulungsflugzeug, für Reisen zu zweit oder einfach zum Spass am Fliegen. Die Ganzmetallkonstruktion sorgt für Langlebigkeit und einfache Wartung.",
    seats: 2,
    specs: [
      { label: "Motor", value: "Rotax 912 iS Sport (100 PS)" },
      { label: "Reisegeschwindigkeit", value: "120 kts" },
      { label: "Reichweite", value: "ca. 1'050 km" },
      { label: "Max. Abfluggewicht (MTOW)", value: "600 kg (LSA)" },
      { label: "Leergewicht", value: "ca. 390 kg" },
      { label: "Kraftstoffkapazität", value: "120 Liter" },
      { label: "Spannweite", value: "9.5 m" },
      { label: "Länge", value: "6.6 m" },
    ],
    heroColor: "from-neutral-900 to-neutral-800",
    video: { videoId: "LbO28tBc1hU", startSeconds: 7, endSeconds: 20 },
    features: [
      "Ganzmetall-Bauweise (Aluminium)",
      "Rotax 912 iS Einspritzmotor",
      "Garmin G3X Touch Avionik",
      "Einziehbares Fahrwerk optional",
      "Hervorragende Sicht aus dem Cockpit",
      "Niedrige Betriebskosten",
      "Kit-Bau oder Fertigflugzeug",
    ],
  },
  {
    id: "sling-tsi",
    name: "Sling TSi",
    tagline: "Das Flaggschiff – Performance trifft Komfort",
    description:
      "Das Spitzenmodell mit turbogeladenem Rotax 915 iS und modernster Garmin-Avionik. Höchste Leistung in seiner Klasse.",
    longDescription:
      "Der Sling TSi setzt neue Massstäbe in der Klasse der leichten Reiseflugzeuge. Mit dem turbogeladenen Rotax 915 iS Motor erreicht er Reisegeschwindigkeiten von über 140 Knoten und beeindruckt mit einer Dienstgipfelhöhe von bis zu 23'000 Fuss. Die hochmoderne Garmin-Avionik, der Constant-Speed-Propeller und die Premium-Kabine machen den TSi zum ultimativen Reiseflugzeug für anspruchsvolle Piloten.",
    seats: 4,
    specs: [
      { label: "Motor", value: "Rotax 915 iS Turbo (141 PS)" },
      { label: "Reisegeschwindigkeit", value: "140+ kts" },
      { label: "Reichweite", value: "ca. 1'900 km" },
      { label: "Max. Abfluggewicht (MTOW)", value: "920 kg" },
      { label: "Dienstgipfelhöhe", value: "23'000 ft" },
      { label: "Steigrate", value: "ca. 1'200 ft/min" },
      { label: "Spannweite", value: "9.5 m" },
      { label: "Propeller", value: "Constant-Speed" },
    ],
    heroColor: "from-brand-900 to-brand-800",
    video: { videoId: "LbO28tBc1hU", startSeconds: 20, endSeconds: 40 },
    features: [
      "Rotax 915 iS Turbomotor (141 PS)",
      "Garmin G3X Touch Dual-Screen",
      "Constant-Speed-Propeller",
      "Premium-Innenausstattung",
      "Höchste Reisegeschwindigkeit der Klasse",
      "Einziehbares Fahrwerk",
      "Dienstgipfelhöhe bis 23'000 ft",
    ],
  },
  {
    id: "sling-high-wing",
    name: "Sling High Wing",
    tagline: "Vielseitigkeit und Übersicht",
    description:
      "Der Hochdecker für maximale Vielseitigkeit. Hervorragende Sicht, einfacher Ein-/Ausstieg und gutmütiges Flugverhalten.",
    longDescription:
      "Der Sling High Wing vereint die bewährte Sling-Qualität mit den Vorteilen eines Hochdeckers. Die hervorragende Sicht nach unten, der einfache Ein- und Ausstieg sowie die robusten Fahrwerksbeine machen ihn zum perfekten Begleiter für Flugschulen, Beobachtungsflüge und Abenteuer abseits befestigter Pisten. Sein gutmütiges Flugverhalten und die niedrigen Betriebskosten überzeugen sowohl Flugschüler als auch erfahrene Piloten.",
    seats: 2,
    specs: [
      { label: "Motor", value: "Rotax 912 iS (100 PS)" },
      { label: "Reisegeschwindigkeit", value: "110 kts" },
      { label: "Reichweite", value: "ca. 900 km" },
      { label: "Max. Abfluggewicht (MTOW)", value: "750 kg" },
      { label: "Leergewicht", value: "ca. 400 kg" },
      { label: "Startstrecke", value: "ca. 180 m" },
      { label: "Spannweite", value: "9.9 m" },
      { label: "Bauweise", value: "Ganzmetall" },
    ],
    heroColor: "from-neutral-800 to-brand-950",
    video: { videoId: "LbO28tBc1hU", startSeconds: 40, endSeconds: 55 },
    features: [
      "Hochdecker-Design",
      "Exzellente Sicht nach unten",
      "Robustes Buschfahrwerk",
      "Einfacher Ein-/Ausstieg",
      "STOL-Fähigkeiten",
      "Ideal für Flugschulen",
      "Kit-Bau oder Fertigflugzeug",
    ],
  },
];

export function getAircraftById(id: string): Aircraft | undefined {
  return aircraft.find((a) => a.id === id);
}

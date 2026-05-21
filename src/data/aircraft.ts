export interface AircraftSpec {
  label: string;
  value: string;
}

export interface AircraftVideo {
  videoId: string;
  startSeconds: number;
  endSeconds: number;
}

export interface QuickSpec {
  value: string;
  unit: string;
  label: string;
}

export interface Aircraft {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  seats: number;
  specs: AircraftSpec[];
  quickSpecs: QuickSpec[];
  heroColor: string;
  features: string[];
  video: AircraftVideo;
  externalUrl: string;
  image: string;
}

export const aircraft: Aircraft[] = [
  {
    id: "sling-tsi",
    name: "Sling TSi",
    tagline: "4-Seat Touring Aircraft | Rotax 916iS",
    description:
      "Viersitziger Tiefdecker mit turbogeladenem Rotax 916iS (160 PS). Das Flaggschiff für anspruchsvolle Piloten.",
    longDescription:
      "Der Sling TSi setzt neue Massstäbe in der Klasse der leichten Reiseflugzeuge. Mit dem turbogeladenen Rotax 916iS Motor (160 PS) und Constant-Speed-Propeller erreicht er beeindruckende Reisegeschwindigkeiten. Die hochmoderne Garmin-Avionik, die Premium-Kabine in Leder und die Möglichkeit zur Single Lever Power Control (SLPC) machen den TSi zum ultimativen Reiseflugzeug. In der Schweiz als Kit nach der Eigenbau-Regel (51%) unter BAZL-Aufsicht zugelassen. Benötigen Sie Unterstützung beim Bau? Wir helfen Ihnen gerne – kontaktieren Sie uns.",
    seats: 4,
    specs: [
      { label: "Motor", value: "Rotax 916iS Turbo (160 PS)" },
      { label: "Bauweise", value: "Ganzmetall (Aluminium)" },
      { label: "Konfiguration", value: "Tiefdecker, Tricycle" },
      { label: "Kraftstoff", value: "198 L (Standard)" },
      { label: "Spannweite", value: "9.5 m" },
      { label: "Propeller", value: "MT MTV-6 Constant-Speed" },
      { label: "MTOW", value: "920 kg" },
      { label: "Zulassung CH", value: "Eigenbau (51%-Regel)" },
    ],
    quickSpecs: [
      { value: "430", unit: "KG", label: "Useful Load" },
      { value: "1,000", unit: "NM", label: "Max Range" },
      { value: "940", unit: "FPM", label: "Climb Rate" },
      { value: "155", unit: "KTAS", label: "Cruise Speed" },
      { value: "28", unit: "LT/HR", label: "Fuel Burn" },
      { value: "4", unit: "SEATS", label: "Max Persons" },
    ],
    heroColor: "from-brand-900 to-brand-800",
    video: { videoId: "LbO28tBc1hU", startSeconds: 20, endSeconds: 40 },
    externalUrl: "https://slingaircraft.com/aircraft/sling-tsi/",
    image: "/images/aircraft/sling-tsi/sling-tsi_01.jpg",
    features: [
      "Rotax 916iS Turbomotor (160 PS)",
      "Garmin G3X Touch Dual-Screen + G5 Backup",
      "MT Propeller mit Single Lever Power Control (SLPC)",
      "Garmin GTX 45R ADS-B Transponder",
      "BRS Rettungsfallschirm optional",
      "Premium-Lederausstattung",
      "Aithre / Mountain High Sauerstoffsystem optional",
      "Quickbuild-Optionen verfügbar",
    ],
  },
  {
    id: "sling-high-wing",
    name: "Sling High Wing",
    tagline: "4-Seat High-Wing | Rotax 916iS | STOL",
    description:
      "Viersitziger Hochdecker mit Rotax 916iS (160 PS) und Carbon-Composite-Rumpf. Hervorragende Sicht und STOL-Fähigkeiten.",
    longDescription:
      "Der Sling High Wing vereint modernste Bauweise mit den Vorteilen eines Hochdeckers. Mit einem einteiligen Carbon-Composite-Rumpf, dem Rotax 916iS Turbomotor (160 PS) und vier Sitzen bietet er Vielseitigkeit für anspruchsvolle Einsätze. Die hervorragende Sicht nach unten, die robusten Fahrwerksbeine und die STOL-Fähigkeiten machen ihn ideal für Bergfliegerei, Beobachtungsflüge und Abenteuer. In der Schweiz als Kit nach der Eigenbau-Regel (51%) unter BAZL-Aufsicht zugelassen. Benötigen Sie Unterstützung beim Bau? Wir helfen Ihnen gerne – kontaktieren Sie uns.",
    seats: 4,
    specs: [
      { label: "Motor", value: "Rotax 916iS Turbo (160 PS)" },
      { label: "Bauweise", value: "Composite-Rumpf / Metall-Flügel" },
      { label: "Konfiguration", value: "Hochdecker, Tricycle" },
      { label: "Kraftstoff", value: "198 L (Standard)" },
      { label: "Spannweite", value: "9.9 m" },
      { label: "Propeller", value: "MT MTV-6 Constant-Speed" },
      { label: "MTOW", value: "920 kg" },
      { label: "Zulassung CH", value: "Eigenbau (51%-Regel)" },
    ],
    quickSpecs: [
      { value: "490", unit: "KG", label: "Useful Load" },
      { value: "900", unit: "NM", label: "Max Range" },
      { value: "679", unit: "FPM", label: "Climb Rate" },
      { value: "145", unit: "KTAS", label: "Cruise Speed" },
      { value: "28", unit: "LT/HR", label: "Fuel Burn" },
      { value: "4", unit: "SEATS", label: "Max Persons" },
    ],
    heroColor: "from-neutral-800 to-brand-950",
    video: { videoId: "LbO28tBc1hU", startSeconds: 40, endSeconds: 55 },
    externalUrl: "https://slingaircraft.com/aircraft/sling-hw/",
    features: [
      "Rotax 916iS Turbomotor (160 PS)",
      "Carbon-Composite-Rumpfmittelteil",
      "Garmin G3X Touch Dual-Screen + G5 Backup",
      "MT Propeller mit Single Lever Power Control (SLPC)",
      "BRS Rettungsfallschirm optional",
      "Exzellente Sicht nach unten",
      "STOL-Fähigkeiten",
      "Quickbuild-Optionen verfügbar",
    ],
  },
  {
    id: "sling-2",
    name: "Sling 2",
    tagline: "2-Seat Trainer & Touring Aircraft",
    description:
      "Zweisitziger Tiefdecker mit Rotax 912iS. Ideal als Trainingsflugzeug, für Reisen zu zweit und den Einstieg in die Fliegerei.",
    longDescription:
      "Der Sling 2 ist ein zweisitziger Tiefdecker in Ganzmetallbauweise, angetrieben vom bewährten Rotax 912iS (100 PS). Er besticht durch hervorragende Flugeigenschaften, niedrige Betriebskosten und ein attraktives Design. In der Schweiz wird der Sling 2 als Kit nach der Eigenbau-Regel (51%) unter BAZL-Aufsicht gebaut und zugelassen. Benötigen Sie Unterstützung beim Bau? Wir helfen Ihnen gerne – kontaktieren Sie uns.",
    seats: 2,
    specs: [
      { label: "Motor", value: "Rotax 912iS (100 PS)" },
      { label: "Bauweise", value: "Ganzmetall (Aluminium)" },
      { label: "Konfiguration", value: "Tiefdecker, Tricycle" },
      { label: "Kraftstoff", value: "120 L (Standard)" },
      { label: "Spannweite", value: "9.5 m" },
      { label: "Länge", value: "6.6 m" },
      { label: "MTOW", value: "600 kg" },
      { label: "Zulassung CH", value: "Eigenbau (51%-Regel)" },
    ],
    quickSpecs: [
      { value: "280", unit: "KG", label: "Useful Load" },
      { value: "830", unit: "NM", label: "Max Range" },
      { value: "875", unit: "FPM", label: "Climb Rate" },
      { value: "117", unit: "KTAS", label: "Cruise Speed" },
      { value: "15", unit: "LT/HR", label: "Fuel Burn" },
      { value: "2", unit: "SEATS", label: "Max Persons" },
    ],
    heroColor: "from-neutral-900 to-neutral-800",
    video: { videoId: "LbO28tBc1hU", startSeconds: 7, endSeconds: 20 },
    externalUrl: "https://slingaircraft.com/aircraft/sling-2/",
    features: [
      "Ganzmetall-Bauweise (Aluminium)",
      "Rotax 912iS Einspritzmotor (100 PS)",
      "Garmin G3X Touch + G5 Backup Avionik",
      "Garmin Autopilot optional",
      "Magnum 601 Rettungsfallschirm optional",
      "Long Range Tanks optional",
      "Quickbuild-Optionen verfügbar",
      "Eigenbau-Zulassung in der Schweiz (BAZL)",
    ],
  },
];

export function getAircraftById(id: string): Aircraft | undefined {
  return aircraft.find((a) => a.id === id);
}

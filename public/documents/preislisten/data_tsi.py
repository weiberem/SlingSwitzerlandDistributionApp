# ============================================================
# SLING TSi – PREISLISTE KONFIGURATION
# Quelle: Sling Aircraft Quotation March 2026
# Alle Preise in USD, exkl. MwSt / Steuern
# Anpassen: NUR diese Datei für TSi-Preisänderungen
# ============================================================

AIRCRAFT = {
    "name": "Sling TSi",
    "subtitle": "4-Seat Touring Aircraft | Rotax 916iS | Low-Wing",
    "rtf_note": (
        "Ready-to-Fly (RTF) aircraft are NOT available for registration in Switzerland "
        "as Sling aircraft do not hold an EASA Type Certificate. "
        "All Swiss registrations are based on the amateur-built (Eigenbau) 51% rule "
        "under BAZL/EAS oversight."
    ),
    "rtf_price": 282270,  # Info only

    # ── AIRFRAME KIT SECTIONS ──────────────────────────────
    "kit_sections": [
        ("Empennage (Tail) Kit",        5173.00,
         "Complete tail kit incl. horizontal & vertical stabilisers, rudder, elevators, "
         "trim tab, composite tips, Trim Servo Unit, hardware & manual."),
        ("Wing Kit",                    20233.00,
         "Complete wings incl. main spars, flaps, ailerons, fuel tanks, composite wingtips, "
         "LED landing lights (4×), AOA hoses, fuel level senders, non-slip wing walk."),
        ("Fuselage Kit",                21592.00,
         "Complete forward/mid/rear fuselage incl. centre spar, seats, all controls, "
         "firewall, engine mount, electric flap actuator, Firex foam, autopilot mounts."),
        ("Undercarriage Kit",           13268.00,
         "Main & front gear, front suspension, bearings, axles, full hydraulic brake system, "
         "6-ply aviation tyres & tubes."),
        ("Canopy, Dash & Finishing Kit",17002.00,
         "Complete canopy kit incl. frames, windscreen, doors, windows, leather dashboard, "
         "instrument panel face, custom canopy lock, nose cowling, wheel spats, fairings."),
    ],
    "kit_total": 77268.00,

    # ── ENGINE & FIREWALL FORWARD ──────────────────────────
    # Rotax price: EUR 46,996.40 (exkl. MwSt) per Aerotec invoice Oct 2025
    # Incl.: engine, 2× fuel pumps, 2× pump service kit, oil pump fittings,
    #        external alternator, freight & customs, engine logbook
    # EUR/USD rate used: 1.08  → USD 50756
    "engine_section": [
        ("Firewall Forward & Fuel System Kit – 916iS", 7693.68,
         "Engine mount hardware, fuel lines, fuel selector, all FWF components for 916iS."),
        ("Rotax 916iS Engine (160 hp turbo)", 50756,
         "Rotax 916iS (160 hp), without type certificate (UNF) for experimental/amateur-built. "
         "Incl. 2× fuel pumps, fuel pump service kits, oil pump fittings, external alternator, "
         "freight to Switzerland and engine logbook. "
         "Source: Aerotec AG, Grenchen (EASA Part-145, Rotax Service Center). Installation not included."),
        ("Leather Upholstery & Carpets",  7690.00,
         "Full leather upholstery kit, seat covers, carpets, map pockets, stick boots."),
    ],

    # ── PROPELLER OPTIONS ──────────────────────────────────
    # MT Prop base price from Sling pricelist March 2026
    # RS SCU system: EUR 8,050 (incl. all components + shipping) per RS Flight Systems
    #   quote 2487, Jul 2025. EUR/USD 1.08 → USD 8694
    # MT Prop + SCU: USD 20,330.80 (prop) + USD 8694 (SCU) = USD 29025
    # Note: Sling list price for "MT Prop with SCU" (USD 25,690) covers prop + governor only.
    #       Full SLPC with SCU 9iS, Front Panel, wiring = sourced separately.
    "propeller_options": [
        ("DUC Flashblack-3-R (4-blade composite)",          13086.25,
         "4-blade composite propeller. Fixed pitch option."),
        ("MT Propeller MTV-6 – Manual Blue Vernier Control", 20330.80,
         "3-blade constant speed composite propeller, nickel leading edge. "
         "Manual Blue Vernier control. 75 inch."),
        ("MT Propeller MTV-6 – Single Lever Power Control (SLPC)", 29025,
         "MT Propeller MTV-6 (3-blade, nickel leading edge) with full RS Flight Systems SLPC system. "
         "Includes: SCU 9iS main unit (automatic RPM regulation), Propeller Governor 915iS/916iS, "
         "pre-fabricated wiring harness, SCU Front Panel V2 with engine parameter display, "
         "mounting hardware and tools. "
         "Source: RS Flight Systems GmbH, Germany (quote 2487, Jul 2025)."),
    ],

    # ── AVIONICS OPTIONS ───────────────────────────────────
    "avionics_options": [
        # Standard Garmin G3X Suite
        ("Garmin G3X Touch EFIS (10.6\") + G5 Backup",     15425.84,
         "Dual GDU 460 10.6\" touchscreens + Garmin G5 certified backup. "
         "Incl. GSU 25C AHRS, GMU 11 magnetometer, GEA 24B engine monitor, GA 35 GPS antenna."),
        ("Garmin GTR 205 VHF Radio + GMA 245R Intercom",    5676.52,
         "VHF comm radio with 4-place Bluetooth intercom, VHF antenna & cable."),
        ("Garmin GTN 750Xi GPS/NAV/COMM/MFD",               None,
         "Price on application. Full IFR navigator, replaces GTR 205. "
         "Incl. SD Datacard, GA 35, RAMI AV-12, GAD 29."),
        ("Garmin Autopilot – GMC 507 + 2× GSA 28 Servos",   5450.35,
         "Full 2-axis autopilot. GMC 507 control panel, roll & pitch servos, GAD 27."),
        ("Garmin GTX 45R Mode S Transponder",                5628.30,
         "ADS-B Out/In transponder with Comant CI-105 antenna and GA 35."),
        ("Garmin GTN 650Xi GPS/NAV/COMM",                   None,
         "Price on application. Full IFR navigator. Incl. SD Datacard, GA 35, RAMI AV-12, GAD 29."),
        ("Artex ELT 345 (406 MHz)",                         1242.05,
         "406 MHz ELT with install kit, remote switch, whip antenna. FAA TSO-C126b."),
        ("Sling LED Wingtip & Tail Strobe / Nav Light System", 698.88,
         "Triple LED nav/strobe lights on wingtips and tail. FAR 23 compliant."),
        ("Garmin Height Advisor GHA 15",                    None,
         "Price on application. CFIT alerting system, integrates with G3X."),
        ("ADS-B/FLARM Receiver (AIR Traffic AT-1)",         None,
         "Price on application. ARINC-429, integrates with GTN 750Xi / G3X."),
        ("Backup Battery (TCW IBBS-12V-6AH)",               None,
         "Price on application. Li-FePO4, 12V 6Ah. Keeps avionics alive on alternator failure."),
    ],

    # ── OXYGEN SYSTEMS ────────────────────────────────────
    # Aithre 4-Place price: USD 9,645 after USD 1,150 upgrade discount per Aithre
    # invoice 1032, Dec 2025 (incl. international FedEx shipping).
    # 2-Place: subset of 4-place system, priced on application.
    "oxygen_options": [
        ("Mountain High Oxygen System – 4-Place", 5600.00,
         "Complete 4-place O2 system. Recommended for all flights above 10,000 ft MSL. "
         "Incl. regulator, masks/cannulas and O2 bottle. Installation not included."),
        ("Aithre Turbo O2 Maker – 2-Place (onboard generator)", None,
         "Price on application. Electrochemical O2 generator — no bottle required. "
         "12V, panel button, Altus Meso altitude/O2 sensor. Single unit covers 2 occupants. "
         "Ideal for occasional high-altitude flights."),
        ("Aithre Turbo O2 Maker – 4-Place (2× units, full system)", 9645,
         "Complete 4-place Aithre system. Twin Turbo O2 Makers with O2 injection (4-place config). "
         "Includes: HealthView II data bridge + ATD-11 AirAvionics screen, "
         "152L EX O2 bottle with adjustable flow regulator & tank transducer, "
         "Aithre Shield EX 3.0 CO detector, 2× Illyrian II haptic safety wearables, "
         "dual USB power ports, boom cannula adaptors (L+R). "
         "Source: Aithre Inc., USA (invoice 1032, Dec 2025)."),
    ],

    # ── SAFETY OPTIONS ────────────────────────────────────
    "safety_options": [
        ("BRS Ballistic Parachute System – Sling TSi", 22646.10,
         "Complete BRS whole-aircraft parachute. Incl. cables, mounts, brackets. "
         "~22 kg additional weight. Strongly recommended for IFR/mountain flying."),
        ("Parachute Cable & Mount Pre-Fit (without chute)", 1730.00,
         "Installs all brackets/skins/cables in readiness for future BRS installation."),
    ],

    # ── BRAKE OPTIONS ─────────────────────────────────────
    "brake_options": [
        ("Matco Dual Toe Hydraulic Brakes (replaces standard)", 1517.56,
         "Individual toe brakes instead of centre hand brake T-pedals."),
        ("Beringer Hand Brake Upgrade – Tricycle",              3350.00,
         "Premium Beringer hand brake system."),
        ("Beringer Dual Toe Hydraulic Brakes – Tricycle",       4610.00,
         "Premium Beringer toe brake system."),
    ],

    # ── FUEL OPTIONS ──────────────────────────────────────
    "fuel_options": [
        ("Long Range Fuel Tanks (parts swap-out, +8 kg)", 2795.00,
         "Extended range tanks. Standard: 198 L (52 US gal). "
         "Long range adds approx. 40 L additional capacity."),
    ],

    # ── FINISH OPTIONS ────────────────────────────────────
    "finish_options": [
        ("Fill all standard rivet holes – RECOMMENDED",    1240.00,
         "Flush riveted finish. Significantly improves aesthetics and reduces drag. Highly recommended."),
        ("Metallic or Red paint (instead of standard)",    None,
         "Price on application (P.O.A.)."),
        ("Special colour scheme per extra colour",         None,
         "P.O.A."),
        ("Stripe on fuselage, wings or spats (per stripe)",None,
         "P.O.A."),
    ],

    # ── QUICKBUILD PRICES (factory pre-assembly) ─────────
    "quickbuild": [
        ("Empennage – pre-assembled",                           2070.93,
         "Empennage pre-assembled at factory. Reduces build time significantly."),
        ("Fuel Tanks – Standard",                               1695.00,
         "Pre-sealed and assembled fuel tanks."),
        ("Fuel Tanks – Long Range (add-on to standard)",        1695.00,
         "Long range tank pre-assembly add-on."),
        ("Wings – flaps, ailerons & fuel tanks (not assembled)",4563.00,
         "Wing sub-assembly. Note: fuel tanks listed separately."),
        ("Fuselage (undercarriage & controls not fitted)",      6475.00,
         "Fuselage pre-assembled. Undercarriage and controls fitted by builder."),
        ("Undercarriage (assembled & fitted to fuselage)",       885.00,
         "Undercarriage assembled and fitted."),
        ("Canopy with doors & glass (excl. windscreen & dash)", 2322.00,
         "Canopy assembly pre-fitted."),
        ("Fill rivet holes on pre-assembled sections",          1240.00,
         "Flush rivet fill on QB sections."),
        ("Wooden crating & loading for QB kit",                 3380.00,
         "Export crating for quickbuild kit. Required for shipping."),
        ("Container packing – per container",                   2100.00,
         "Professional container packing at Tedderfield."),
    ],

    # ── TOOLS ─────────────────────────────────────────────
    "tools": [
        ("Sling Aircraft Recommended Builder Tool Kit", 2040.00,
         "Curated toolkit for Sling kit construction. Highly recommended for first-time builders."),
    ],

    # ── SHIPPING NOTE ─────────────────────────────────────
    "shipping_note": (
        "All prices are ex-works Tedderfield Airpark, South Africa. "
        "Crating/packaging is NOT included in kit prices and must be ordered separately (see Quickbuild section). "
        "Shipping can be arranged by the customer or through the dealer. "
        "Dealer-arranged shipping (SA → Switzerland, door-to-door): approx. CHF 6,800 "
        "(CHF 6,000 freight + CHF 800 coordination). Transit time: 14–20 days."
    ),
}

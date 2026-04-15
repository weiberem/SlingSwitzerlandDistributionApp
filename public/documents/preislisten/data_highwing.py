# ============================================================
# SLING HIGH WING – PREISLISTE KONFIGURATION
# Quelle: Sling Aircraft Quotation March 2026
# Alle Preise in USD, exkl. MwSt / Steuern
# Anpassen: NUR diese Datei für High Wing-Preisänderungen
# ============================================================

AIRCRAFT = {
    "name": "Sling High Wing",
    "subtitle": "4-Seat High-Wing Aircraft | Rotax 916iS | STOL Capability",
    "rtf_note": (
        "Ready-to-Fly (RTF) aircraft are NOT available for registration in Switzerland "
        "as Sling aircraft do not hold an EASA Type Certificate. "
        "All Swiss registrations are based on the amateur-built (Eigenbau) 51% rule "
        "under BAZL/EAS oversight."
    ),
    "rtf_price": 325270,  # Info only

    # ── AIRFRAME KIT SECTIONS ──────────────────────────────
    "kit_sections": [
        ("Empennage (Tail) Kit",       5290.00,
         "Complete tail kit incl. horizontal & vertical stabilisers, rudder, elevators, "
         "hinges, control connectors, trim tab, composite tips, Trim Servo Unit with clevis kit."),
        ("Wing Kit",                   20233.00,
         "Complete wing kit incl. assembled main spars, flaps, ailerons, fuel tanks, "
         "composite wingtips, locking fuel caps, 4× LED landing lights, AOA hoses, "
         "fuel level senders. Pitot tube NOT included."),
        ("Fuselage Kit",               56355.00,
         "Complete fuselage incl. composite fibre centre fuselage (one-piece bonded), "
         "assembled centre spar, front & rear seats, all controls, firewall, engine mount, "
         "steps, electric flap actuator, Garmin autopilot mounts, full air & heater system."),
        ("Undercarriage Kit",          13268.00,
         "Main & front gear, front suspension, bearings, axles, full hydraulic brake system, "
         "6-ply aviation tyres & tubes."),
        ("Dash, Final Assembly & Finishing Kit", 8274.00,
         "Complete dash kit in leather, air vents, instrument panel face, nose cowling, "
         "wheel spats for all 3 wheels, composite fairings, pushrod assemblies."),
    ],
    "kit_total": 103420.00,

    # ── ENGINE & FIREWALL FORWARD ──────────────────────────
    "engine_section": [
        ("Firewall Forward & Fuel System Kit – 916iS", 7693.68,
         "Engine mount hardware, fuel lines, fuel selector, all FWF components for 916iS."),
        ("Rotax 916iS Engine (160 hp turbo)", 50756,
         "Rotax 916iS (160 hp), without type certificate (UNF) for experimental/amateur-built. "
         "Incl. 2× fuel pumps, fuel pump service kits, oil pump fittings, external alternator, "
         "freight to Switzerland and engine logbook. "
         "Source: Aerotec AG, Grenchen. Installation not included."),
        ("Leather Upholstery & Carpets", 8610.00,
         "Full leather upholstery kit, seat covers, carpets, map pockets, stick boots."),
    ],

    # ── PROPELLER OPTIONS ──────────────────────────────────
    "propeller_options": [
        ("DUC Flashblack-3-R (4-blade composite)",          13086.25,
         "4-blade composite propeller."),
        ("MT Propeller MTV-6 – Manual Blue Vernier Control", 20330.80,
         "3-blade constant speed composite, nickel leading edge, manual control."),
        ("MT Propeller MTV-6 – Single Lever Power Control (SLPC)", 29025,
         "MT Propeller MTV-6 with full RS Flight Systems SLPC system. "
         "Incl. SCU 9iS, Governor, pre-fabricated wiring harness, Front Panel V2, "
         "mounting hardware. Source: RS Flight Systems GmbH (quote 2487, Jul 2025)."),
    ],

    # ── AVIONICS OPTIONS ───────────────────────────────────
    "avionics_options": [
        ("Garmin G3X Touch EFIS (10.6\") + G5 Backup",      15425.84,
         "Dual GDU 460 10.6\" touchscreens + Garmin G5 certified backup. "
         "Incl. GSU 25C AHRS, GMU 11 magnetometer, GEA 24B engine monitor, GA 35 GPS antenna."),
        ("Garmin GTR 205 VHF Radio + GMA 245R Intercom",     5676.52,
         "VHF comm radio with 4-place Bluetooth intercom, VHF antenna & cable."),
        ("Garmin GTN 750Xi GPS/NAV/COMM/MFD",               None,
         "P.O.A. Full IFR navigator. Incl. SD Datacard, GA 35, RAMI AV-12, GAD 29."),
        ("Garmin Autopilot – GMC 507 + 2× GSA 28 Servos",    5450.35,
         "Full 2-axis autopilot. GMC 507 control panel, roll & pitch servos."),
        ("Garmin GTX 45R Mode S Transponder",                 5628.30,
         "ADS-B Out/In transponder with Comant CI-105 antenna."),
        ("Garmin GTN 650Xi GPS/NAV/COMM",                    None,
         "P.O.A. Full IFR navigator."),
        ("Artex ELT 345 (406 MHz)",                          1242.05,
         "406 MHz ELT with install kit, remote switch, whip antenna."),
        ("Sling LED Wingtip & Tail Strobe / Nav Light System", 698.88,
         "Triple LED nav/strobe lights on wingtips and tail."),
    ],

    # ── OXYGEN SYSTEMS ────────────────────────────────────
    "oxygen_options": [
        ("Mountain High Oxygen System – 4-Place", 5600.00,
         "Complete 4-place O2 system. Recommended for flight above 10,000 ft MSL."),
        ("Aithre Turbo O2 Maker – 2-Place (onboard generator)", None,
         "P.O.A. Electrochemical O2 generator, no bottle required. 12V, panel button."),
        ("Aithre Turbo O2 Maker – 4-Place (2× units, full system)", 9645,
         "Complete 4-place Aithre system. Twin Turbo O2 Makers, HealthView II + ATD-11 screen, "
         "152L EX O2 bottle, CO detector, 2× Illyrian II haptic wearables, boom cannulas. "
         "Source: Aithre Inc. (invoice 1032, Dec 2025)."),
    ],

    # ── SAFETY OPTIONS ────────────────────────────────────
    "safety_options": [
        ("BRS Ballistic Parachute System – Sling High Wing", 22646.10,
         "Complete BRS whole-aircraft parachute incl. cables, mounts, brackets. ~25 kg."),
        ("Parachute Cable & Mount Pre-Fit (without chute)",   2135.00,
         "Pre-installs all brackets/skins/cables for future BRS installation."),
    ],

    # ── BRAKE OPTIONS ─────────────────────────────────────
    "brake_options": [
        ("Beringer Hand Brake System Upgrade – Tricycle",     3350.00,
         "Premium Beringer hand brake system for tricycle configuration."),
        ("Beringer Dual Toe Hydraulic Brakes – Tricycle",     4610.00,
         "Premium Beringer toe brake system, tricycle."),
        ("Beringer Dual Toe Hydraulic Brakes – Taildragger",  6895.00,
         "Premium Beringer toe brake system, taildragger configuration."),
    ],

    # ── FUEL OPTIONS ──────────────────────────────────────
    "fuel_options": [
        ("Long Range Fuel Tanks (parts swap-out, +8 kg)", 2795.00,
         "Extended range tanks. Standard: 198 L (52 US gal) wet tanks in wings."),
    ],

    # ── FINISH OPTIONS ────────────────────────────────────
    "finish_options": [
        ("Fill all standard rivet holes – RECOMMENDED",    1820.50,
         "Flush riveted finish. Significantly improves aesthetics and reduces drag."),
        ("Metallic or Red paint (instead of standard)",    None, "P.O.A."),
        ("Special colour scheme per extra colour",         None, "P.O.A."),
        ("Stripe on fuselage, wings or spats (per stripe)",None, "P.O.A."),
    ],

    # ── QUICKBUILD PRICES ────────────────────────────────
    "quickbuild": [
        ("Empennage – pre-assembled",                           2950.00,
         "Empennage pre-assembled at factory."),
        ("Fuel Tanks – Standard",                               1695.00,
         "Pre-sealed and assembled standard fuel tanks."),
        ("Fuel Tanks – Long Range (add-on to standard)",        1695.00,
         "Long range tank pre-assembly add-on."),
        ("Wings – flaps, ailerons & fuel tanks (not assembled)",4563.00,
         "Wing sub-assembly."),
        ("Fuselage (rear fitted to carbon fibre centre, u/c & controls not fitted)", 3605.00,
         "Fuselage pre-assembled."),
        ("Undercarriage (assembled & fitted to fuselage)",      1345.00,
         "Undercarriage assembled and fitted."),
        ("Doors and glass fitted (excl. windscreen & dashboard)",1720.00,
         "Door assembly pre-fitted."),
        ("Fill rivet holes on pre-assembled sections",          1820.50,
         "Flush rivet fill on QB sections."),
        ("Wooden crating & loading for QB kit",                 3300.00,
         "Export crating for quickbuild kit."),
        ("Container packing – per container",                   2100.00,
         "Professional container packing at Tedderfield."),
    ],

    # ── TOOLS ─────────────────────────────────────────────
    "tools": [
        ("Sling Aircraft Recommended Builder Tool Kit", 2040.00,
         "Curated toolkit for Sling kit construction."),
    ],

    # ── SHIPPING NOTE ─────────────────────────────────────
    "shipping_note": (
        "All prices are ex-works Tedderfield Airpark, South Africa. "
        "Crating/packaging is NOT included in kit prices and must be ordered separately. "
        "Shipping can be arranged by the customer or through the dealer. "
        "Dealer-arranged shipping (SA → Switzerland, door-to-door): approx. CHF 6,800 "
        "(CHF 6,000 freight + CHF 800 coordination). Transit time: 14–20 days."
    ),
}

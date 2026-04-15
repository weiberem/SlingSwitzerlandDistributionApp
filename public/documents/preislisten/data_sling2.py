# ============================================================
# SLING 2 / LSA – PREISLISTE KONFIGURATION
# Quelle: Sling Aircraft Quotation March 2026
# Alle Preise in USD, exkl. MwSt / Steuern
# Anpassen: NUR diese Datei für Sling 2-Preisänderungen
# ============================================================

AIRCRAFT = {
    "name": "Sling 2 / LSA",
    "subtitle": "2-Seat Trainer & Touring Aircraft | Rotax 912iS | Low-Wing",
    "rtf_note": (
        "Ready-to-Fly (RTF) aircraft are NOT available for registration in Switzerland "
        "as Sling aircraft do not hold an EASA Type Certificate. "
        "All Swiss registrations are based on the amateur-built (Eigenbau) 51% rule "
        "under BAZL/EAS oversight."
    ),
    "rtf_price": 189847,  # Info only

    # ── AIRFRAME KIT SECTIONS ──────────────────────────────
    "kit_sections": [
        ("Empennage (Tail) Kit",         4058.00,
         "Complete tail kit incl. horizontal & vertical stabilisers, rudder, elevators, "
         "Trim Servo Unit with clevis kit, hardware & manual."),
        ("Wing Kit (Tricycle)",          14324.00,
         "Complete wings incl. assembled main spars, flaps, ailerons, fuel tanks, "
         "composite wingtips, locking fuel caps, pitot tube hoses, standard landing lights, "
         "fuel level senders, non-slip wing walk. Pitot tube NOT included."),
        ("Fuselage Kit (Tricycle)",      15740.00,
         "Complete forward/mid/rear fuselage incl. centre spar, rear spar, seats, all controls, "
         "firewall, engine mount, electric flap actuator, Garmin autopilot mounts."),
        ("Undercarriage Kit (Tricycle)", 8882.00,
         "Main & front gear, front suspension, bearings, axles, full hydraulic brake system, "
         "6-ply aviation tyres & tubes."),
        ("Canopy, Dash & Finishing Kit", 8776.00,
         "Complete canopy kit incl. front/main canopy frames, acrylic glass, closing skins, "
         "leather dashboard, instrument panel face, custom canopy lock, wheel spats, fairings."),
    ],
    "kit_total": 51780.00,

    # ── ENGINE & FIREWALL FORWARD ──────────────────────────
    "engine_section": [
        ("Firewall Forward & Fuel System Kit – 912iS", 7593.97,
         "Engine mount hardware, fuel lines, all FWF components for 912iS."),
        ("Rotax 912iS Engine (100 hp) with engine mount fitted", None,
         "Price on application (P.O.A.). Without type certificate version."),
        ("Leather Upholstery, Interior Panels & Carpets", 3665.00,
         "Upholstery kit, interior side panels, carpets."),
    ],

    # ── PROPELLER OPTIONS ──────────────────────────────────
    "propeller_options": [
        ("DUC Inconel FLASH 3-blade propeller",   4113.50,
         "3-blade Inconel propeller. Standard option for Sling 2."),
        ("DUC Flashblack-3-R (4-blade composite)", 13086.25,
         "4-blade composite propeller upgrade."),
    ],

    # ── AVIONICS OPTIONS ───────────────────────────────────
    "avionics_options": [
        ("Garmin G3X Touch EFIS (primary) + G5 Backup",   15425.84,
         "G3X Touch multifunction display + Garmin G5 backup. "
         "Incl. GSU 25C AHRS, GMU 11 magnetometer, GEA 24B engine monitor."),
        ("Garmin GTR 205 VHF Radio + intercom",             4923.03,
         "VHF comm radio with internal intercom, VHF antenna, cable and fittings."),
        ("Garmin GTN 650Xi GPS/NAV/COMM",                  None,
         "P.O.A. Full IFR navigator. Replaces GTR 205."),
        ("Garmin Autopilot (operated via G3X Touch)",       4614.78,
         "Autopilot system integrated with G3X. Roll & pitch servos."),
        ("Artex ELT 345 (406 MHz)",                        1242.05,
         "406 MHz ELT with install kit."),
        ("WHELEN LED Landing Light (single, per unit)",      582.07,
         "LED upgrade per wing. Standard is halogen."),
        ("Sling LED Wingtip & Tail Strobe / Nav System",     665.60,
         "Triple LED nav/strobe lights."),
    ],

    # ── OXYGEN SYSTEMS ────────────────────────────────────
    # Sling 2 is a 2-seater – 2-place systems only relevant
    "oxygen_options": [
        ("Mountain High Oxygen System – 2-Place", None,
         "P.O.A. Recommended for flight above 10,000 ft MSL."),
        ("Aithre Turbo O2 Maker – 2-Place (onboard generator)", None,
         "P.O.A. Electrochemical O2 generator. No bottle required. "
         "12V, panel button, Altus Meso sensor."),
    ],

    # ── SAFETY OPTIONS ────────────────────────────────────
    "safety_options": [
        ("Magnum 601 Ballistic Parachute – complete (incl. cables)", 8580.00,
         "Complete whole-aircraft parachute incl. steel cables, mounts, brackets & fittings. "
         "~14 kg additional weight."),
        ("Magnum 601 Ballistic Parachute – hardware only (no cables)", 6066.38,
         "Parachute and hardware without steel cables."),
        ("Parachute Cable & Mount Pre-Fit (without chute)", 1100.00,
         "Pre-installs all brackets/skins/cables for future parachute installation."),
    ],

    # ── BRAKE OPTIONS ─────────────────────────────────────
    "brake_options": [
        ("Matco Dual Toe Hydraulic Brakes (replaces standard T-pedals)", 1517.56,
         "Individual toe brakes instead of centre brake."),
    ],

    # ── FUEL OPTIONS ──────────────────────────────────────
    "fuel_options": [
        ("Long Range Fuel Tanks (parts swap-out)", 2665.00,
         "Extended range tanks. Standard: 150 L (39 US gal) wet tanks."),
    ],

    # ── FINISH OPTIONS ────────────────────────────────────
    "finish_options": [
        ("Metallic or Red paint (instead of standard)",    None, "P.O.A."),
        ("Special colour scheme per extra colour",         None, "P.O.A."),
        ("Stripe on fuselage, wings or spats (per stripe)",None, "P.O.A."),
    ],

    # ── QUICKBUILD PRICES ────────────────────────────────
    "quickbuild": [
        ("Empennage – pre-assembled",                           1943.25,
         "Empennage pre-assembled at factory."),
        ("Fuel Tanks – Standard",                               1798.44,
         "Pre-sealed and assembled standard fuel tanks."),
        ("Fuel Tanks – Long Range (add-on to standard)",        1798.44,
         "Long range tank pre-assembly add-on."),
        ("Wings – flaps, ailerons & fuel tanks (not assembled)",3608.00,
         "Wing sub-assembly."),
        ("Fuselage (undercarriage & controls not fitted)",      4735.00,
         "Fuselage pre-assembled."),
        ("Undercarriage (assembled & fitted to fuselage)",       863.00,
         "Undercarriage assembled and fitted."),
        ("Wooden crating & loading for QB kit",                 3300.00,
         "Export crating for quickbuild kit."),
        ("Container packing – per container",                   2100.00,
         "Professional container packing at Tedderfield."),
    ],

    # ── TOOLS ─────────────────────────────────────────────
    "tools": [
        ("Sling Aircraft Recommended Builder Tool Kit", 1812.42,
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

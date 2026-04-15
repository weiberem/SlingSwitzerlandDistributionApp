#!/usr/bin/env python3
"""
Sling Aircraft Switzerland – Customer Price List Generator
==========================================================
Usage:
    python generate_pricelist.py data_tsi.py
    python generate_pricelist.py data_highwing.py
    python generate_pricelist.py data_sling2.py
    python generate_pricelist.py  # generates all three

Output: PDFs in ./output/ folder
Dependencies: reportlab  (pip install reportlab)

PRICING LOGIC (not visible to customers):
  Customer price = Sling list price × (1 + DEALER_PROVISION) × (1 + DEALER_MARKUP)
  DEALER_PROVISION = 0.06  (6% per dealer agreement)
  DEALER_MARKUP    = 0.10  (10% additional mark-up)
  Combined factor  = 1.06 × 1.10 = 1.166  (~16.6% on all priced items)
  Items with price=None remain "Price on Application" (P.O.A.)
"""

# ── PRICING PARAMETERS (adjust here only) ─────────────────
DEALER_PROVISION = 0.06   # 6% per Dealer Agreement
DEALER_MARKUP    = 0.10   # 10% additional mark-up
CUSTOMER_FACTOR  = (1 + DEALER_PROVISION) * (1 + DEALER_MARKUP)  # = 1.166

import importlib.util
import sys
import os
from datetime import datetime
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, KeepTogether
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT

# ── PAGE SETUP ────────────────────────────────────────────
PAGE_W, PAGE_H = A4
MARGIN = 18 * mm

# ── BRAND COLOURS ─────────────────────────────────────────
C_DARK    = colors.HexColor("#1A1A2E")   # Dark navy
C_RED     = colors.HexColor("#C0392B")   # Sling red
C_MID     = colors.HexColor("#2E4057")   # Mid blue
C_LIGHT   = colors.HexColor("#EBF0F5")   # Light grey-blue bg
C_RULE    = colors.HexColor("#C0392B")   # Section rule
C_TEXT    = colors.HexColor("#1A1A2E")
C_MUTED   = colors.HexColor("#666666")
C_WHITE   = colors.white
C_YELLOW  = colors.HexColor("#FFF3CD")
C_GREEN   = colors.HexColor("#D4EDDA")
C_ORANGE  = colors.HexColor("#FFE0B2")

# ── STYLES ────────────────────────────────────────────────
def make_styles():
    s = {}

    s["title"] = ParagraphStyle(
        "title", fontName="Helvetica-Bold", fontSize=22,
        textColor=C_WHITE, alignment=TA_LEFT, spaceAfter=2
    )
    s["subtitle"] = ParagraphStyle(
        "subtitle", fontName="Helvetica", fontSize=10,
        textColor=colors.HexColor("#AABDD0"), alignment=TA_LEFT, spaceAfter=0
    )
    s["date"] = ParagraphStyle(
        "date", fontName="Helvetica", fontSize=8,
        textColor=colors.HexColor("#AABDD0"), alignment=TA_RIGHT
    )
    s["section"] = ParagraphStyle(
        "section", fontName="Helvetica-Bold", fontSize=9,
        textColor=C_WHITE, alignment=TA_LEFT,
        leftIndent=4, spaceBefore=0, spaceAfter=0
    )
    s["item"] = ParagraphStyle(
        "item", fontName="Helvetica-Bold", fontSize=9,
        textColor=C_TEXT, alignment=TA_LEFT, leading=12
    )
    s["desc"] = ParagraphStyle(
        "desc", fontName="Helvetica", fontSize=7.5,
        textColor=C_MUTED, alignment=TA_LEFT, leading=10
    )
    s["price"] = ParagraphStyle(
        "price", fontName="Helvetica-Bold", fontSize=9,
        textColor=C_MID, alignment=TA_RIGHT
    )
    s["poa"] = ParagraphStyle(
        "poa", fontName="Helvetica-Oblique", fontSize=8.5,
        textColor=C_MUTED, alignment=TA_RIGHT
    )
    s["total_label"] = ParagraphStyle(
        "total_label", fontName="Helvetica-Bold", fontSize=10,
        textColor=C_WHITE, alignment=TA_LEFT, leftIndent=4
    )
    s["total_price"] = ParagraphStyle(
        "total_price", fontName="Helvetica-Bold", fontSize=10,
        textColor=C_WHITE, alignment=TA_RIGHT
    )
    s["note"] = ParagraphStyle(
        "note", fontName="Helvetica", fontSize=7.5,
        textColor=C_MUTED, alignment=TA_LEFT, leading=10
    )
    s["note_bold"] = ParagraphStyle(
        "note_bold", fontName="Helvetica-Bold", fontSize=7.5,
        textColor=C_TEXT, alignment=TA_LEFT, leading=10
    )
    s["footer"] = ParagraphStyle(
        "footer", fontName="Helvetica", fontSize=7,
        textColor=C_MUTED, alignment=TA_CENTER
    )
    s["warning"] = ParagraphStyle(
        "warning", fontName="Helvetica-Bold", fontSize=8,
        textColor=C_RED, alignment=TA_LEFT, leading=11
    )
    s["rtf_note"] = ParagraphStyle(
        "rtf_note", fontName="Helvetica-Oblique", fontSize=8,
        textColor=colors.HexColor("#7B1818"), alignment=TA_LEFT, leading=11
    )
    return s

ST = make_styles()

# ── HELPERS ───────────────────────────────────────────────
def customer_price(val):
    """Apply 6% provision + 10% markup to raw Sling list price."""
    if val is None:
        return None
    return val * CUSTOMER_FACTOR

def fmt_usd(val):
    """Format customer price — rounded to nearest 5 USD."""
    rounded = round(val / 5) * 5
    return f"USD {rounded:,}"

def price_cell(raw_val):
    """raw_val = Sling list price; markup applied here, customer never sees list price."""
    cp = customer_price(raw_val)
    if cp is None:
        return Paragraph("P.O.A.", ST["poa"])
    return Paragraph(fmt_usd(cp), ST["price"])

def section_header(title, bg=C_MID):
    data = [[Paragraph(title.upper(), ST["section"]), ""]]
    t = Table(data, colWidths=[PAGE_W - 2*MARGIN - 20*mm, 20*mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), bg),
        ("ROWBACKGROUNDS", (0,0), (-1,-1), [bg]),
        ("TOPPADDING",    (0,0), (-1,-1), 5),
        ("BOTTOMPADDING", (0,0), (-1,-1), 5),
        ("LEFTPADDING",   (0,0), (0,-1), 6),
        ("RIGHTPADDING",  (-1,0), (-1,-1), 6),
    ]))
    return t

def option_row(name, desc, price_val, bg=None):
    row = [
        [Paragraph(name, ST["item"]), Paragraph(desc, ST["desc"])],
        [price_cell(price_val)]
    ]
    left = [Paragraph(name, ST["item"]), Spacer(1, 2), Paragraph(desc, ST["desc"])]
    data = [[left, price_cell(price_val)]]
    w_left  = PAGE_W - 2*MARGIN - 32*mm
    w_right = 32*mm
    t = Table(data, colWidths=[w_left, w_right])
    style = [
        ("VALIGN",        (0,0), (-1,-1), "TOP"),
        ("TOPPADDING",    (0,0), (-1,-1), 5),
        ("BOTTOMPADDING", (0,0), (-1,-1), 5),
        ("LEFTPADDING",   (0,0), (0,-1), 4),
        ("RIGHTPADDING",  (-1,0), (-1,-1), 4),
        ("LINEBELOW",     (0,0), (-1,-1), 0.3, colors.HexColor("#DDDDDD")),
    ]
    if bg:
        style.append(("BACKGROUND", (0,0), (-1,-1), bg))
    t.setStyle(TableStyle(style))
    return t

def kit_section_table(sections, kit_total):
    """Builds the airframe kit breakdown table."""
    col_w = [PAGE_W - 2*MARGIN - 32*mm, 32*mm]
    rows = []
    for name, price, desc in sections:
        rows.append([
            [Paragraph(name, ST["item"]), Spacer(1,2), Paragraph(desc, ST["desc"])],
            Paragraph(fmt_usd(customer_price(price)), ST["price"])
        ])
    # Total row
    rows.append([
        Paragraph("TOTAL AIRFRAME KIT", ST["total_label"]),
        Paragraph(fmt_usd(customer_price(kit_total)), ST["total_price"])
    ])

    t = Table(rows, colWidths=col_w)
    style = [
        ("VALIGN",        (0,0), (-1,-1), "TOP"),
        ("TOPPADDING",    (0,0), (-1,-1), 5),
        ("BOTTOMPADDING", (0,0), (-1,-1), 5),
        ("LEFTPADDING",   (0,0), (0,-1), 4),
        ("RIGHTPADDING",  (-1,0), (-1,-1), 4),
        ("LINEBELOW",     (0,0), (-1,-2), 0.3, colors.HexColor("#DDDDDD")),
        # Total row styling
        ("BACKGROUND",    (0,-1), (-1,-1), C_MID),
        ("TOPPADDING",    (0,-1), (-1,-1), 6),
        ("BOTTOMPADDING", (0,-1), (-1,-1), 6),
        ("LINEABOVE",     (0,-1), (-1,-1), 1, C_DARK),
    ]
    t.setStyle(TableStyle(style))
    return t

def quickbuild_table(items):
    col_w = [PAGE_W - 2*MARGIN - 32*mm, 32*mm]
    rows = []
    for name, price, desc in items:
        rows.append([
            [Paragraph(name, ST["item"]), Spacer(1,2), Paragraph(desc, ST["desc"])],
            Paragraph(fmt_usd(customer_price(price)), ST["price"])
        ])
    t = Table(rows, colWidths=col_w)
    t.setStyle(TableStyle([
        ("VALIGN",        (0,0), (-1,-1), "TOP"),
        ("TOPPADDING",    (0,0), (-1,-1), 5),
        ("BOTTOMPADDING", (0,0), (-1,-1), 5),
        ("LEFTPADDING",   (0,0), (0,-1), 4),
        ("RIGHTPADDING",  (-1,0), (-1,-1), 4),
        ("LINEBELOW",     (0,0), (-1,-1), 0.3, colors.HexColor("#DDDDDD")),
        ("ROWBACKGROUNDS",(0,0), (-1,-1), [C_WHITE, C_LIGHT]),
    ]))
    return t

# ── HEADER BANNER ─────────────────────────────────────────
def header_banner(aircraft_name, subtitle, date_str):
    data = [[
        [
            Paragraph(f"SLING {aircraft_name.upper()} – PRICE LIST", ST["title"]),
            Paragraph(subtitle, ST["subtitle"]),
        ],
        Paragraph(f"Valid: {date_str}<br/>All prices in USD<br/>Excl. taxes, duties &amp; freight", ST["date"])
    ]]
    t = Table(data, colWidths=[PAGE_W - 2*MARGIN - 45*mm, 45*mm])
    t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (-1,-1), C_DARK),
        ("VALIGN",        (0,0), (-1,-1), "MIDDLE"),
        ("TOPPADDING",    (0,0), (-1,-1), 12),
        ("BOTTOMPADDING", (0,0), (-1,-1), 12),
        ("LEFTPADDING",   (0,0), (0,-1), 12),
        ("RIGHTPADDING",  (-1,0), (-1,-1), 10),
    ]))
    return t

# ── LOGO PLACEHOLDER ──────────────────────────────────────
# If you have SlingSwitzerlandLogo.jpg, place it in the same folder as this script
# and it will be used automatically.

# ── MAIN GENERATOR ────────────────────────────────────────
def generate_pdf(data_module_path, output_dir="output"):
    spec = importlib.util.spec_from_file_location("aircraft_data", data_module_path)
    mod  = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    ac   = mod.AIRCRAFT

    os.makedirs(output_dir, exist_ok=True)
    safe_name = ac["name"].replace(" ", "_").replace("/", "_")
    out_path  = os.path.join(output_dir, f"Sling_{safe_name}_Pricelist_CH.pdf")
    date_str  = datetime.now().strftime("%B %Y")

    doc = SimpleDocTemplate(
        out_path, pagesize=A4,
        leftMargin=MARGIN, rightMargin=MARGIN,
        topMargin=MARGIN, bottomMargin=MARGIN + 8*mm,
        title=f"Sling {ac['name']} – Price List Switzerland",
        author="Sling Aircraft Switzerland",
        subject=f"Customer Price List – {ac['name']}"
    )

    story = []

    # ── HEADER
    story.append(header_banner(ac["name"], ac["subtitle"], date_str))
    story.append(Spacer(1, 6))

    # ── SWISS REGULATORY NOTE
    warn_data = [[
        Paragraph("SWITZERLAND / LIECHTENSTEIN – REGULATORY NOTE", ST["warning"]),
        Paragraph(ac["rtf_note"], ST["rtf_note"])
    ]]
    warn_t = Table(warn_data, colWidths=[55*mm, PAGE_W - 2*MARGIN - 55*mm])
    warn_t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (-1,-1), colors.HexColor("#FFF5F5")),
        ("VALIGN",        (0,0), (-1,-1), "TOP"),
        ("TOPPADDING",    (0,0), (-1,-1), 6),
        ("BOTTOMPADDING", (0,0), (-1,-1), 6),
        ("LEFTPADDING",   (0,0), (0,-1), 6),
        ("RIGHTPADDING",  (-1,0), (-1,-1), 6),
        ("BOX",           (0,0), (-1,-1), 0.8, C_RED),
    ]))
    story.append(warn_t)
    story.append(Spacer(1, 8))

    # ── 1. AIRFRAME KIT
    story.append(KeepTogether([
        section_header("1  |  Airframe Kit  –  Individual Sections"),
        Spacer(1, 2),
        kit_section_table(ac["kit_sections"], ac["kit_total"]),
    ]))
    story.append(Spacer(1, 8))

    # ── 2. ENGINE & FIREWALL FORWARD
    story.append(section_header("2  |  Engine, Firewall Forward & Upholstery"))
    story.append(Spacer(1, 2))
    for name, price, desc in ac["engine_section"]:
        story.append(option_row(name, desc, price))
    story.append(Spacer(1, 8))

    # ── 3. PROPELLER OPTIONS
    story.append(section_header("3  |  Propeller Options"))
    story.append(Spacer(1, 2))
    for i, (name, price, desc) in enumerate(ac["propeller_options"]):
        bg = C_LIGHT if i % 2 == 0 else C_WHITE
        story.append(option_row(name, desc, price, bg=bg))
    story.append(Spacer(1, 8))

    # ── 4. AVIONICS
    story.append(section_header("4  |  Avionics Options", bg=colors.HexColor("#1A4E7A")))
    story.append(Spacer(1, 2))
    for i, (name, price, desc) in enumerate(ac["avionics_options"]):
        bg = C_LIGHT if i % 2 == 0 else C_WHITE
        story.append(option_row(name, desc, price, bg=bg))
    story.append(Spacer(1, 8))

    # ── 5. OXYGEN SYSTEMS
    story.append(section_header("5  |  Oxygen Systems", bg=colors.HexColor("#1A6B4A")))
    story.append(Spacer(1, 2))
    for i, (name, price, desc) in enumerate(ac["oxygen_options"]):
        bg = C_GREEN if i % 2 == 0 else C_WHITE
        story.append(option_row(name, desc, price, bg=bg))
    story.append(Spacer(1, 8))

    # ── 6. SAFETY
    story.append(section_header("6  |  Safety – Ballistic Parachute"))
    story.append(Spacer(1, 2))
    for i, (name, price, desc) in enumerate(ac["safety_options"]):
        story.append(option_row(name, desc, price, bg=C_ORANGE if i == 0 else C_WHITE))
    story.append(Spacer(1, 8))

    # ── 7. BRAKES
    story.append(section_header("7  |  Brake Configuration Options"))
    story.append(Spacer(1, 2))
    for name, price, desc in ac["brake_options"]:
        story.append(option_row(name, desc, price))
    story.append(Spacer(1, 8))

    # ── 8. FUEL OPTIONS
    story.append(section_header("8  |  Fuel System Options"))
    story.append(Spacer(1, 2))
    for name, price, desc in ac["fuel_options"]:
        story.append(option_row(name, desc, price))
    story.append(Spacer(1, 8))

    # ── 9. FINISH
    story.append(section_header("9  |  Paint & Finish Options"))
    story.append(Spacer(1, 2))
    for name, price, desc in ac["finish_options"]:
        story.append(option_row(name, desc, price))
    story.append(Spacer(1, 8))

    # ── 10. TOOLS
    story.append(section_header("10  |  Builder Tools"))
    story.append(Spacer(1, 2))
    for name, price, desc in ac["tools"]:
        story.append(option_row(name, desc, price))
    story.append(Spacer(1, 8))

    # ── 11. QUICKBUILD
    story.append(KeepTogether([
        section_header("11  |  Quickbuild (Factory Pre-Assembly) – Additional Costs"),
        Spacer(1, 4),
        Paragraph(
            "Quickbuild options reduce your on-site build time significantly. "
            "Each item below is an ADDITIONAL cost on top of the standard kit price. "
            "51% amateur-built rule compliance is maintained (Empennage, Undercarriage "
            "and Instrument Panel excluded from QB to preserve owner-built status).",
            ST["note"]
        ),
        Spacer(1, 4),
        quickbuild_table(ac["quickbuild"]),
    ]))
    story.append(Spacer(1, 8))

    # ── 12. SHIPPING & DELIVERY
    story.append(section_header("12  |  Shipping & Delivery"))
    story.append(Spacer(1, 4))
    ship_data = [[Paragraph(ac["shipping_note"], ST["note"])]]
    ship_t = Table(ship_data, colWidths=[PAGE_W - 2*MARGIN])
    ship_t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (-1,-1), C_LIGHT),
        ("TOPPADDING",    (0,0), (-1,-1), 8),
        ("BOTTOMPADDING", (0,0), (-1,-1), 8),
        ("LEFTPADDING",   (0,0), (-1,-1), 8),
        ("RIGHTPADDING",  (0,0), (-1,-1), 8),
        ("BOX",           (0,0), (-1,-1), 0.5, C_MID),
    ]))
    story.append(ship_t)
    story.append(Spacer(1, 8))

    # ── 13. DEALER SERVICES (SWITZERLAND)
    story.append(section_header("13  |  Dealer Services – Sling Aircraft Switzerland", bg=C_DARK))
    story.append(Spacer(1, 4))

    services = [
        ("Included with Kit Purchase (in dealer margin)",
         C_GREEN,
         [
             ("P1", "Initial consultation & configuration advisory"),
             ("P2", "Order processing & Sling communication"),
             ("P3", "Import coordination & customs"),
             ("P4", "Kit receipt & incoming inspection support (5h included)"),
             ("P5", "Technical availability: Sling 24/7 support (technical@slingaircraft.com) "
                    "is free for all customers. Dealer advisory included up to 5h per kit purchase. "
                    "Additional hours billed at standard rate (see optional services)."),
         ]),
        ("Optional – Book as Needed",
         C_LIGHT,
         [
             ("S1", "BAZL/EAS building permit advisory – flat rate 5h (CHF 725)"),
             ("S2", "Technical advisory – per hour (CHF 145/h)"),
             ("S3", "Support block 5h (CHF 725)"),
             ("S4", "Support block 10h (CHF 1,450)"),
             ("S5", "Support block 20h (CHF 2,900)"),
             ("S6", "Demo flight – Sling TSi at Thun/Zweisimmen (complimentary)"),
             ("S7", "Ferry flight – per hour + expenses (CHF 145/h)"),
         ]),
        ("Customer Self-Service (no charge)",
         colors.HexColor("#E8F5E9"),
         [
             ("—", "Organise own freight from SA"),
             ("—", "Submit BAZL/EAS building permit directly: acceptance@experimental.ch"),
             ("—", "Technical questions directly to Sling: technical@slingaircraft.com"),
             ("—", "Registration & airworthiness via EAS or alternative authority (e.g. PH-reg)"),
         ]),
    ]

    for group_title, bg, items in services:
        rows = [[Paragraph(group_title, ST["note_bold"]), ""]]
        for code, desc in items:
            rows.append([
                Paragraph(f"<b>{code}</b>  {desc}", ST["note"]),
                ""
            ])
        t = Table(rows, colWidths=[PAGE_W - 2*MARGIN - 4, 2])
        style = [
            ("BACKGROUND",    (0,0), (-1,-1), bg),
            ("TOPPADDING",    (0,0), (-1,-1), 3),
            ("BOTTOMPADDING", (0,0), (-1,-1), 3),
            ("LEFTPADDING",   (0,0), (-1,-1), 8),
            ("BACKGROUND",    (0,0), (-1,0), colors.HexColor("#37474F") if "Included" in group_title
                                          else colors.HexColor("#1565C0") if "Optional" in group_title
                                          else colors.HexColor("#2E7D32")),
        ]
        if "Included" in group_title or "Optional" in group_title:
            style.append(("TEXTCOLOR", (0,0), (-1,0), C_WHITE))
            rows[0][0].style = ST["note_bold"]
        t.setStyle(TableStyle(style))
        story.append(t)
        story.append(Spacer(1, 3))

    story.append(Spacer(1, 8))

    # ── FOOTER NOTE
    footer_text = (
        f"Sling Aircraft Switzerland  |  slingaircraft.ch  |  Thun Airport + Zweisimmen  |  "
        f"Dealer: Rémy Weibel  |  Prices ex-works Tedderfield, SA – {date_str}  |  "
        "All prices in USD, excl. taxes, duties &amp; freight.  "
        "Prices subject to change without notice. Individual quotes available on request."
    )
    story.append(HRFlowable(width="100%", thickness=0.5, color=C_RULE))
    story.append(Spacer(1, 3))
    story.append(Paragraph(footer_text, ST["footer"]))

    # ── BUILD
    doc.build(story)
    print(f"  Generated: {out_path}")
    return out_path


# ── ENTRY POINT ───────────────────────────────────────────
if __name__ == "__main__":
    script_dir = os.path.dirname(os.path.abspath(__file__))

    if len(sys.argv) > 1:
        targets = [os.path.join(script_dir, sys.argv[1])]
    else:
        targets = [
            os.path.join(script_dir, "data_tsi.py"),
            os.path.join(script_dir, "data_highwing.py"),
            os.path.join(script_dir, "data_sling2.py"),
        ]

    output_dir = os.path.join(script_dir, "output")
    print(f"Generating {len(targets)} price list(s)...")
    for t in targets:
        generate_pdf(t, output_dir)
    print("Done.")

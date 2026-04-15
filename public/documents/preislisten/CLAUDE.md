# CLAUDE.md – Sling Aircraft Switzerland | Instruktionen für Claude Code

## Projekt-Übersicht
Dieses Repo enthält den Preislisten-Generator für **Sling Aircraft Switzerland**.
Ziel: Professionelle Kunden-PDFs (Preislisten) automatisch generieren und auf der Website publizieren.

## Repo-Struktur
```
sling_pricelist/
├── CLAUDE.md                          ← diese Datei
├── README.md
├── requirements.txt                   ← pip install -r requirements.txt
├── generate_pricelist.py              ← PDF-Generator (Layout/Design)
├── data_tsi.py                        ← Sling TSi Preise & Optionen
├── data_highwing.py                   ← Sling High Wing Preise & Optionen
├── data_sling2.py                     ← Sling 2 / LSA Preise & Optionen
├── output/                            ← Generierte PDFs
│   ├── Sling_Sling_TSi_Pricelist_CH.pdf
│   ├── Sling_Sling_High_Wing_Pricelist_CH.pdf
│   └── Sling_Sling_2___LSA_Pricelist_CH.pdf
└── .github/
    └── workflows/
        └── generate_pdfs.yml          ← Auto-generiert PDFs bei jedem Push
```

---

## Häufige Aufgaben für Claude Code

### 1. Preise aktualisieren
Editiere NUR die entsprechende `data_*.py` Datei:
- Sling TSi → `data_tsi.py`
- High Wing → `data_highwing.py`
- Sling 2   → `data_sling2.py`

Danach PDFs neu generieren:
```bash
cd sling_pricelist
python generate_pricelist.py
```

### 2. Einzelnes Modell neu generieren
```bash
python generate_pricelist.py data_tsi.py
```

### 3. Alle PDFs neu generieren
```bash
python generate_pricelist.py
```

### 4. PDFs auf Website publizieren
Die generierten PDFs liegen in `output/`. Je nach Website-Plattform:

**Statische Website (z.B. Hugo, Jekyll, plain HTML):**
```bash
cp output/*.pdf ../website/static/downloads/
# Dann Link in HTML: <a href="/downloads/Sling_Sling_TSi_Pricelist_CH.pdf">Download TSi Pricelist</a>
```

**WordPress:**
- PDFs als Media hochladen via WP-CLI:
```bash
wp media import output/*.pdf --path=/var/www/html --allow-root
```
- Oder via REST API falls WP-CLI nicht verfügbar

**Beliebige Website mit FTP/SFTP:**
```bash
sftp user@server << EOF
put output/Sling_Sling_TSi_Pricelist_CH.pdf /public_html/downloads/
put output/Sling_Sling_High_Wing_Pricelist_CH.pdf /public_html/downloads/
put output/Sling_Sling_2___LSA_Pricelist_CH.pdf /public_html/downloads/
EOF
```

---

## Pricing-Logik (VERTRAULICH – nicht im PDF sichtbar)
```python
DEALER_PROVISION = 0.06   # 6% per Dealer Agreement Sling Aircraft
DEALER_MARKUP    = 0.10   # 10% zusätzlicher Mark-up
CUSTOMER_FACTOR  = 1.06 × 1.10 = 1.166
```
**Alle Preise in `data_*.py` sind Sling-Listenpreise (USD ex-works).**
Der Generator rechnet den `CUSTOMER_FACTOR` automatisch drauf.
Der Kunde sieht NIE die Listenpreise — nur die aufgeschlagenen Endkundenpreise.

Um Markup zu ändern: nur `DEALER_MARKUP` in `generate_pricelist.py` anpassen.

---

## Datenstruktur `data_*.py`
Jede Datei exportiert ein `AIRCRAFT` Dict:

```python
AIRCRAFT = {
    "name":              str,          # Modellname
    "subtitle":          str,          # Kurzbeschreibung
    "rtf_note":          str,          # CH Regulatorischer Hinweis
    "rtf_price":         float,        # RTF-Preis (nur intern, nicht im PDF)
    "kit_sections":      list,         # [(name, usd_price, description), ...]
    "kit_total":         float,        # Summe Airframe Kit
    "engine_section":    list,         # Motor, FWF, Polster
    "propeller_options": list,
    "avionics_options":  list,
    "oxygen_options":    list,
    "safety_options":    list,         # BRS Fallschirm
    "brake_options":     list,
    "fuel_options":      list,
    "finish_options":    list,
    "quickbuild":        list,         # Werks-Vormontagepakete
    "tools":             list,
    "shipping_note":     str,          # Versandhinweis
}
```

Preis `None` = "P.O.A." (Price on Application) im PDF.

---

## Preisquellen (Referenz)
| Position | Quelle | Datum |
|----------|--------|-------|
| Sling Kit-Preise | Sling Aircraft Quotation | März 2026 |
| Rotax 916iS | Aerotec AG, Grenchen (Rechnung 114186) | Okt 2025 |
| RS Flight Systems SCU | RS Flight Systems Offerte 2487 | Jul 2025 |
| Aithre O2 System | Aithre Inc. Invoice 1032 | Dez 2025 |
| Avionik Garmin | Air Team Europe Invoice 25FAV02004 | Mai 2025 |

---

## Wichtige Hinweise
- **RTF in CH NICHT zulässig** (kein EASA TC) → nur Kits verkaufbar
- Alle Preise USD, exkl. Steuern, Zoll und Fracht
- Fracht: ca. CHF 6'800 (CHF 6'000 Spediteur + CHF 800 Koordination Dealer)
- **Kein Zoll** auf Flugzeugkits in die Schweiz (HS-Code Luftfahrzeugteile)
- Dealer: Rémy Weibel, Thun Airport + Zweisimmen
- Kontakt: rw.a3r0@gmail.com

---

## Setup (einmalig)
```bash
git clone https://github.com/[dein-repo]/sling-switzerland.git
cd sling-switzerland/sling_pricelist
pip install -r requirements.txt
python generate_pricelist.py
```

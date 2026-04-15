# Sling Aircraft Switzerland – Price List Generator

Generates professional customer-facing PDF price lists for each Sling aircraft model.  
PDFs are published on the Sling Aircraft Switzerland website.

## Structure

```
sling_pricelist/
├── generate_pricelist.py   # PDF generator – shared for all models (do not edit for price changes)
├── data_tsi.py             # Sling TSi prices & options
├── data_highwing.py        # Sling High Wing prices & options
├── data_sling2.py          # Sling 2 / LSA prices & options
├── output/                 # Generated PDFs (git-ignored or committed as releases)
└── README.md
```

## Usage

```bash
# Install dependency
pip install reportlab

# Generate all three price lists
python generate_pricelist.py

# Generate a single model
python generate_pricelist.py data_tsi.py
python generate_pricelist.py data_highwing.py
python generate_pricelist.py data_sling2.py
```

PDFs are written to `./output/`.

## Updating Prices

**To update prices for one model → edit only that model's data file:**

| Change | Edit file |
|--------|-----------|
| Sling TSi prices | `data_tsi.py` |
| Sling High Wing prices | `data_highwing.py` |
| Sling 2 / LSA prices | `data_sling2.py` |
| PDF layout / styling | `generate_pricelist.py` |
| Add a new aircraft model | Create `data_newmodel.py` following existing structure |

## Data File Structure

Each `data_*.py` file exports a single `AIRCRAFT` dict with these keys:

```python
AIRCRAFT = {
    "name":              str,        # Aircraft name
    "subtitle":          str,        # Short description
    "rtf_note":          str,        # Swiss regulatory warning text
    "rtf_price":         float,      # RTF price (info only, not shown as orderable)
    "kit_sections":      list,       # [(name, price_usd, description), ...]
    "kit_total":         float,
    "engine_section":    list,       # [(name, price_usd_or_None, description), ...]
    "propeller_options": list,
    "avionics_options":  list,
    "oxygen_options":    list,
    "safety_options":    list,
    "brake_options":     list,
    "fuel_options":      list,
    "finish_options":    list,
    "quickbuild":        list,
    "tools":             list,
    "shipping_note":     str,
}
```

Use `None` as price for any item that is "Price on Application" (P.O.A.).

## Notes

- All prices are in **USD**, ex-works Tedderfield Airpark, South Africa
- Taxes, duties and freight are **excluded** (as per Sling standard)
- This list is for customers – **dealer margins are not visible**
- RTF prices shown for information only with a clear regulatory warning
- Source: Sling Aircraft quotations, March 2026

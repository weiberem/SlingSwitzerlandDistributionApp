#!/bin/bash
# ============================================================
# setup_repo.sh – Sling Aircraft Switzerland
# Einmalig ausführen um das Git Repo zu initialisieren
# ============================================================
# Verwendung:
#   chmod +x setup_repo.sh
#   ./setup_repo.sh
#
# Danach:
#   cd sling_pricelist
#   claude   ← startet Claude Code
# ============================================================

set -e

echo "================================================"
echo "  Sling Aircraft Switzerland – Repo Setup"
echo "================================================"
echo ""

# 1. Python dependency
echo "→ Installiere reportlab..."
pip install reportlab --quiet
echo "  ✓ reportlab installiert"
echo ""

# 2. Generiere PDFs einmalig
echo "→ Generiere Preislisten-PDFs..."
cd sling_pricelist
python generate_pricelist.py
cd ..
echo "  ✓ PDFs generiert in sling_pricelist/output/"
echo ""

# 3. Git initialisieren
if [ ! -d ".git" ]; then
    echo "→ Initialisiere Git Repo..."
    git init
    git add .
    git commit -m "Initial commit: Sling Aircraft Switzerland price list generator

    - Sling TSi, High Wing, Sling 2 / LSA
    - Alle Preise in USD mit 16.6% Dealer-Aufschlag
    - Automatischer PDF-Generator via reportlab
    - GitHub Actions Workflow für auto-generierte PDFs
    - CLAUDE.md für Claude Code Instruktionen"
    echo "  ✓ Git Repo initialisiert"
else
    echo "  ℹ Git Repo existiert bereits"
fi
echo ""

# 4. GitHub Remote (optional)
echo "→ GitHub Remote einrichten (optional):"
echo "  Falls du ein GitHub Repo hast, führe aus:"
echo ""
echo "  git remote add origin https://github.com/DEIN-USERNAME/sling-switzerland.git"
echo "  git branch -M main"
echo "  git push -u origin main"
echo ""

# 5. Claude Code starten
echo "→ Claude Code starten:"
echo "  cd sling_pricelist"
echo "  claude"
echo ""
echo "================================================"
echo "  Setup abgeschlossen!"
echo "  PDFs sind bereit in: sling_pricelist/output/"
echo "================================================"

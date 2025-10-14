# Pediatric Anesthesia Calculator

## Project Overview
A standalone web-based calculator for pediatric anesthetists to calculate drug dosages, airway equipment sizes, and fluid requirements. Built as a single HTML file with embedded CSS and JavaScript for easy deployment.

## Purpose
- Calculate anesthetic drug doses based on patient parameters (age/weight/height)
- Recommend appropriate airway equipment sizes (ETT, LMA, i-gel)
- Calculate fluid requirements (maintenance and resuscitation)
- Provide quick reference for standard dilutions and dose ranges

## Current State
✅ Fully functional standalone application
- Single `index.html` file containing all code
- Deployed and accessible via web server on port 5000
- Dark mode implemented with localStorage persistence

## Features

### Patient Input
- Age (years), Weight (kg), Height (cm) inputs
- Real-time calculations on input

### Drug Database (23 medications)
**Induction Agents:**
- Propofol, Thiopentone, Ketamine

**Muscle Relaxants:**
- Vecuronium, Rocuronium, Atracurium, Succinylcholine

**Analgesics:**
- Fentanyl, Morphine, Tramadol, Paracetamol (IV)

**Adjuncts/Sedatives:**
- Midazolam, Lidocaine (Xylocard)

**Steroids:**
- Dexamethasone, Hydrocortisone

**Antiemetics:**
- Ondansetron, Metoclopramide

**Emergency/Anticholinergic:**
- Atropine, Ephedrine, Adrenaline

**Reversal Agents:**
- Neostigmine, Glycopyrrolate, Sugammadex

### Drug Calculation Features
- Color-coded categories for easy identification
- Automatic dose calculation using appropriate parameter (weight/age)
- Volume calculation based on standard dilutions
- Editable dose and concentration values
- Display of dose ranges for reference
- Min/max dose enforcement where applicable

### Airway Equipment
- ETT size (uncuffed and cuffed) based on age
- ETT depth calculation
- LMA size based on weight
- i-gel size based on weight

### Fluid Requirements
- Maintenance fluid (4-2-1 rule)
- Fluid bolus (10 mL/kg)
- Estimated blood volume (70 mL/kg)
- Maximum allowable blood loss (30%)

### User Interface
- Responsive design for mobile and desktop
- Dark mode with toggle
- Professional medical interface
- Color-coded drug categories
- Print-friendly styling
- Warning notice for clinical judgment

## Technical Stack
- Pure HTML5, CSS3, JavaScript (ES6)
- No external dependencies
- LocalStorage for dark mode preference
- CSS Grid/Flexbox for layout

## Deployment
- Python HTTP server serving static files on port 5000
- Accessible via webview
- Can be deployed as standalone HTML file to any static hosting

## Recent Changes (October 14, 2025)
- Initial implementation completed
- All 23 essential pediatric anesthetic drugs added
- Airway equipment and fluid calculators implemented
- Dark mode functionality added
- Professional medical UI with color-coded categories
- Editable dosage and dilution features implemented

## Files
- `index.html` - Main application file (standalone, all-in-one)
- `test.html` - Simple test page for manual testing

## Usage
1. Enter patient information (age, weight, height)
2. View calculated equipment sizes and fluid requirements
3. Review drug doses and volumes automatically calculated
4. Edit doses or dilutions as needed using "Edit Dose/Dilution" buttons
5. Toggle dark mode for comfortable viewing in different environments

## Safety Notice
This calculator is for reference only. Always verify calculations and use clinical judgment. Dosages may need adjustment based on patient condition and local protocols.
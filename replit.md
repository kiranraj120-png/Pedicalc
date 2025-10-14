# Pediatric Anesthesia Calculator

## Project Overview
A standalone web-based calculator for pediatric anesthetists to calculate drug dosages, airway equipment sizes, and fluid requirements. Built as a single HTML file with embedded CSS and JavaScript for easy deployment.

## Purpose
- Calculate anesthetic drug doses based on patient parameters (age/weight)
- Recommend appropriate airway equipment sizes (ETT, LMA, i-gel)
- Calculate fluid requirements (maintenance and resuscitation)
- Provide quick reference for standard dilutions and dose ranges

## Current State
✅ Fully functional standalone application
- Single `index.html` file containing all code
- Deployed and accessible via web server on port 5000
- Dark mode implemented with localStorage persistence
- Responsive design for mobile and desktop use

## Features

### Patient Input
- Age (years) - used for airway equipment sizing
- Weight (kg) - used for drug calculations, airway equipment, and fluid requirements
- Real-time calculations on input change

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
- Displays **total dose in mg or mcg** (not per kg)
- Automatic dose calculation using appropriate parameter (weight/age)
- Volume calculation based on standard dilutions
- Editable dose (per kg) and concentration values with clear placeholders
- Display of dose ranges for reference
- Min/max dose enforcement where applicable
- Small text showing the formula used (e.g., "Using: 2.5 mg/kg")

### Airway Equipment
- ETT size (uncuffed and cuffed) based on age
- ETT depth calculation (3x ETT size)
- LMA size based on weight
- i-gel size based on weight

### Fluid Requirements
- Maintenance fluid (4-2-1 rule)
- Fluid bolus (10 mL/kg)
- Estimated blood volume (70 mL/kg)
- Maximum allowable blood loss (30% of EBV)
  - Includes hemoglobin-based formula reference: EBV × (Hb_initial - Hb_target) / Hb_initial

### User Interface
- Responsive design for mobile and desktop
- Dark mode with toggle (☀️/🌙 button)
- Professional medical interface
- Color-coded drug categories (8 distinct colors)
- Print-friendly styling
- Warning notice for clinical judgment
- Placeholder text in all input fields for better UX

## Technical Stack
- Pure HTML5, CSS3, JavaScript (ES6)
- No external dependencies
- LocalStorage for dark mode preference
- CSS Grid/Flexbox for responsive layout
- CSS custom properties (variables) for theming

## Deployment
- Python HTTP server serving static files on port 5000
- Accessible via webview
- Can be deployed as standalone HTML file to any static hosting service

## Recent Changes (October 14, 2025)
- ✅ Fixed drug dose display to show total dose in mg/mcg (removed per kg from total dose display)
- ✅ Removed height parameter (not needed for pediatric calculations)
- ✅ Updated max allowable blood loss to reference hemoglobin formula
- ✅ Enhanced placeholder text in edit inputs ("Dose per kg" and "Concentration")
- ✅ Added CSS styling for better placeholder visibility in both light and dark modes
- ✅ Initial implementation completed with all 23 essential pediatric anesthetic drugs
- ✅ Professional medical UI with color-coded categories
- ✅ Dark mode functionality with localStorage persistence

## Files
- `index.html` - Main application file (standalone, all-in-one)
- `test.html` - Simple test page
- `test_patient.html` - Test instructions with expected values

## Usage
1. Enter patient information (age and weight)
2. View calculated equipment sizes and fluid requirements
3. Review drug doses (total in mg/mcg) and volumes automatically calculated
4. Click "Edit Dose/Dilution" to customize:
   - Dose per kg (e.g., 2.5 mg/kg)
   - Concentration (e.g., 10 mg/mL)
5. Toggle dark mode using the button in the header
6. Print or save for clinical reference

## Safety Notice
This calculator is for reference only. Always verify calculations and use clinical judgment. Dosages may need adjustment based on patient condition and local protocols.

## Medical Accuracy Notes
- ETT sizing uses standard pediatric formulas
- Fluid calculations follow 4-2-1 rule
- Drug dosing based on standard pediatric anesthesia ranges
- Max allowable blood loss references hemoglobin-based calculation
- All values should be verified against local protocols
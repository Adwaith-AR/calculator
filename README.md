# 🧮 Modern Grid Calculator

An elegant, minimalist web-based calculator crafted using semantic HTML5 structures and advanced CSS Grid properties. This project showcases a dark-mode user interface inspired by contemporary mobile operating systems, utilizing fluid hover animations, rigid layout containers, and responsive component scaling.

---

## 📱 Project Overview

This repository contains the front-end user interface for a standard mathematical calculator. The primary objective of this project is to demonstrate clean layout separation between control flow elements (operators/symbols) and numerical input sets without relying on heavy external UI frameworks. 

By leveraging native **CSS Grid** and **Flexbox**, the interface achieves a strict alignment that remains consistent across varied viewport configurations, providing a solid foundation for upcoming JavaScript logical operations.

---

## ✨ Features Breakdown

### 🎨 Dark-Mode Aesthetic
* **Main Canvas:** A warm wheat-colored background (`background: wheat;`) provides high-contrast isolation for the central application module.
* **Component Monochromes:** Uses deep charcoal tones (`#000`, `#262626`, `#333333`) to separate the display output monitor from the functional input hardware keys.

### 📐 Structural Layout Precision
* **Two-Column Core Grid:** The keypad splits dynamically into a structural layout where operator symbols occupy the left column, and numbers populate the right grid.
* **Proportional Scaling:** The main container relies on relative viewport dimensions (`60vh` height and `20vw` width) to ensure the interface maintains its geometric footprint.

### ⚡ Dynamic Micro-Interactions
* **Feedback States:** Interactive buttons feature a smooth `100ms` transition curve that triggers subtle color shifting alongside physical scale amplification (`scale: 1.08`) upon user cursor hovering.
* **Ergonomic Targets:** High border-radius values (`border-radius: 100px;`) convert standard block buttons into ergonomic circular and pill-shaped touch/click targets.

---

## 🛠️ Technology Stack & Architectures

The architecture relies strictly on vanilla web technologies to optimize load performance and keep the codebase lightweight:

* **HTML5 Markup:** Semantic layout definition using nested `div` containers categorized explicitly by utility (`#text_container`, `#keypad_container`).
* **CSS3 Styling Engine:** Employs advanced positioning modules:
  * **Flexbox:** Utilized on the global body to perfectly center the application matrix vertically and horizontally.
  * **CSS Grid:** Employed independently inside the structural sub-containers to arrange structural button layers precisely without structural overlap.

---

## 📂 Repository File Structure

```text
├── index.html   # Main application structure, inputs, and button DOM nodes.
└── style.css    # Layout rules, grid definitions, color palettes, and animations.
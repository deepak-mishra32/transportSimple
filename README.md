# 🧭 Trip Timeline Visualizer (Angular)

An interactive Angular application that visualizes multi-city trips on a timeline.  
Users can input a series of trips with start and end points, and the app intelligently renders the journey using lines and levels based on trip continuity and repetition.

---

## 🚀 Features

- 📝 Add trips using Start and End point inputs
- 🔄 Detects continued, non-continued, and repeated trips
- 📊 Renders trips on a multi-level timeline:
  - **Level 1**: Straight lines for continued or non-continued trips (with arrows)
  - **Level 2**: Curved paths for repeated pickup/drop locations
- 🧠 Auto-adjusts layout based on the number of trips
- 🎯 Minimal and responsive SVG-based design

---

## 🛠️ Built With

- [Angular 17](https://angular.io/)
- TypeScript
- SVG for dynamic visualization

---

## 📦 Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/deepak-mishra32/transportSimple.git
   cd transportSimple
   ```

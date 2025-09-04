# 🚗 Async Race

📌 **Repository:** [https://github.com/StepanHovsepyan7/async-race](https://github.com/StepanHovsepyan7/async-race)  
📌 **Deployment:** [https://async-race-fast.vercel.app/](https://async-race-fast.vercel.app/)  
📌 **Self-score:** 370 / 400 pts  

---

## 📖 Project Description

**Async Race** is a Single Page Application (SPA) built with **React + TypeScript**.  
It allows users to:

- 🚘 Create, update, delete cars  
- 🎨 Choose car colors  
- 🏁 Start & stop engines  
- ⚡ Run races with animations  
- 🏆 Track winners  

---

## 🛠️ Tech Stack

🟦 TypeScript (strict mode)  
📦 Redux Toolkit / Zustand / custom hooks  
🎨 CSS, responsive layout (≥730px)  
📏 ESLint (Airbnb config) + Prettier  

---

## 📦 Installation

🏗️ Basic Structure (75 / 80)

 Two views: Garage & Winners (10)

 Garage view implemented (30)

 Winners view implemented (10)

 State persists between views (25/30) → works, but some cases (e.g. after long race) may reset

🚘 Garage View (85 / 90)

 CRUD for cars (20)

 Color selection (10)

 Random car creation (20)

 Car management buttons (10)

 Pagination (10)

 Extra: empty garage / auto-navigate (15/20) → works, but navigation sometimes delayed

🏆 Winners View (45 / 50)

 Winners displayed (15)

 Pagination (10)

 Winners table (15)

 Sorting by wins & time (5/10) → basic sorting works, but not perfect edge cases

🏎️ Race (155 / 170)

 Start engine animation (20)

 Stop engine animation (20)

 Responsive animations ≥730px (30)

 Start race button (10)

 Reset race button (15)

 Winner announcement (5)

 Button states handled (20)

 Actions during race handled (35/50) → some actions blocked, but not all scenarios

🎨 Code Quality (10 / 10)

 Prettier setup (5)

 ESLint setup (5)


Clone and run the Front-end from the repository run on http://localhost:3001:  
```bash
git clone https://github.com/StepanHovsepyan7/async-race.git
cd async-race
npm install
npm start

Clone and run the backend from the official repository run on http://localhost:3000:  
```bash
git clone https://github.com/mikhama/async-race-api.git
cd async-race-api
npm install
npm start

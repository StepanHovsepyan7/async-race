# 🚗 Async Race

📌 **Repository:** [https://github.com/StepanHovsepyan7/async-race](https://github.com/StepanHovsepyan7/async-race)  
📌 **Deployment:** [https://your-deployed-link.com](https://your-deployed-link.com)  
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

```bash
git clone https://github.com/StepanHovsepyan7/async-race.git
cd async-race
npm install
npm start



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




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

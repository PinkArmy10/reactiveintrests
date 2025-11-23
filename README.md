Hobbies React Project

A single-page React application showcasing hobbies and photo collections with a carousel and accordion layout. The app features client-side routing using React Router and styling powered by Tailwind CSS. It also includes a newsletter signup and a navigation bar linking to an external project.
Features

    Responsive layout with Tailwind CSS

    Accordion component to display hobbies descriptions

    Carousel component to display photos with captions

    Navigation bar with active link highlighting

    Newsletter sign-up form component

    External links to other projects opening in new tabs

    Fully client-side routed with React Router v6

Built With

    React 18+

    React Router DOM

    Tailwind CSS

    JavaScript (ES6+)

    Create React App (bootstrapped)

Getting Started
Prerequisites

    Node.js (v14 or higher recommended)

    npm (comes bundled with Node.js) or yarn package manager

Installation

    Clone this repository (or download the source):

bash
git clone https://github.com/your-username/hobbies-react-app.git
cd hobbies-react-app

Install dependencies including React Router and Tailwind CSS:

bash
npm install react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Configure Tailwind:

    In tailwind.config.js, ensure this:

js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

In src/index.css, add:

    css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

Verify Tailwind's CSS import is in src/index.js or src/App.js:

    js
    import './index.css';

Running the App

Start the development server:

bash
npm start

Open http://localhost:3000 in a web browser to view the app. The page hot-reloads on changes.
Available Scripts

    npm start - Runs the app in development mode.

    npm run build - Builds the app for production to the build folder.

    npm test - Launches the test runner in interactive watch mode (if tests exist).

    npm run eject - Ejects from Create React App configuration (one-way operation).

Project Structure Overview

    src/components - Reusable components like Accordion, Carousel, Header, Footer, Letter, Layout.

    src/App.js - Main app setup including React Router routes and page components.

    src/index.css - Tailwind CSS imports and custom styles.

    public/images - Images used in the carousel and header.

Notes

    The Layout component hosts the navigation bar and renders routed page content via React Router's <Outlet>.

    Navigation highlights the current page using useLocation hook.

    External links open in new tabs.

    Components are styled using Tailwind’s utility classes for responsive layout and design.

    The newsletter sign-up does not include backend integration by default and would need further extension for production use.

Learn More

    Read the React documentation

    Explore the React Router documentation

    Learn about Tailwind CSS

License

This project is open source and available under the MIT License.
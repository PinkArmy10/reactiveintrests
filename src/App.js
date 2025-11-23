import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Accordion from "./components/Accordion";
import Carousel from "./components/Carousel";
import Header from "./components/Header.js";
import Footer from "./components/Footer";
import Letter from "./components/Letter.js";
import "./App.css";


const accordionData = [
  {
    title: "Photography",
    content:
      "Some of my favorite photos i have taken over the years, are of nature and landscapes. The Natutal world has so many beautiful scenes to capture. This includes widlife, mountans and stary skies.",
  },
  {
    title: "Creations",
    content:
      "I love to create things with my hands. From woodworking projects to DIY home decor, crafting allows me to do something productive with my hands and see tangible results.",
  },
  {
    title: "Reading",
    content: "I love to read books across various genres, including Sci-Fi, Fantasy, and other random Fiction. Reading expands my knowledge and provides a great escape from everyday life.",
  },
];


const carouselData = [
  {
    image: "/images/Bridge.jpg",
    description: "A bridge I made for shop class, and won the competition.",
  },
  {
    image: "/images/ChopingBoard.jpg",
    description: "A chopping board I made for home, using different types of wood.",
  },
  {
    image: "/images/CowBoys.jpg",
    description: "A photo I took while working on a ranch in Utah.",
  },
  {
    image: "/images/Lourve.jpg",
    description: "A photo of the project i made to replicate the Lourve in Paris.",
  },
  {
    image: "/images/NightCity.jpg",
    description: "A night photo I took of the Santorini skyline & pier during a trip.",
  },
  {
    image: "/images/NightSky.jpg",
    description: "A starry night sky photo I took while working on a ranch in Utah.",
  },
  {
    image: "/images/Parthenon.jpg",
    description: "A photo I took of the Parthenon in Athens, Greece.",
  },
  {
    image: "/images/PegGame.jpg",
    description: "A peg game I made. It was a fun intoductory project to woodworking.",
  },
  {
    image: "/images/Table.jpg",
    description: "A table I made for my home using partical board.",
  },
  {
    image: "/images/Eagle_Feast.jpg",
    description: "A photo of the circle of life, I took of the Utah landscape during a trip.",
  },
  {
    image: "/images/Frozen_Forest.jpg",
    description: "A photo I took of a frozen forest during winter in Utah.",
  },
  {
    image: "/images/Ridges.jpg",
    description: "A photo I took of the Mountans of Utah during a winter trip.",
  }
];


const HomePage = () => (
  <main className="flex-grow p-4 max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row gap-8">
      <section className="md:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Hobbies</h2>
        {accordionData.map((item, index) => (
          <Accordion key={index} title={item.title} content={item.content} />
        ))}
      </section>
      <section className="md:w-2/3">
        <h2 className="text-2xl font-semibold mb-4">Photos</h2>
        <Carousel items={carouselData} />
      </section>
    </div>
  </main>
);

function App() {
  return (
    <Router>
      <Header
        fontFamily="'Great Vibes', cursive"
        backgroundPic="../images/Panorama.jpg"
      />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>

      <div className="w-full">
        <div className="max-w-6xl mx-auto p-4">
          <Letter />
        </div>
      </div>

      <Footer
        year={new Date().getFullYear()}
        siteName="Timo Matis - Reactive Interests of a Web Dev Student"
        links={[
          {
            href: "https://github.com/PinkArmy10",
            label: "GitHub",
            className: "text-blue-400",
          },
          {
            href: "https://www.linkedin.com/in/timo-matis-2981b6251",
            label: "LinkedIn",
            className: "text-pink-400",
          },
        ]}
      />
    </Router>
  );
}

export default App;
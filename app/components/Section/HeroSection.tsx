import React from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('../assets/img/Herosection.jpg')", // Put image in public folder
      }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black opacity-30" />

      {/* Text Content */}
      <div className="relative z-10 text-white max-w-3xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Share Your Knowledge with the World
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Reach thousands of students with our powerful tools to create,
          publish, and manage your online course in minutes.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/features"
            className="px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-blue-600 transition"
          >
            Explore Instructor Features
          </Link>
          <Link
            to="/signup"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Start Creating Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

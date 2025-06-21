import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bgImage from "app/assets/img/StudyTogether.png";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-25"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Animated Content */}
      <motion.div
        className="relative z-10 text-white max-w-[85%] px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Share Your Knowledge with the World
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 leading-relaxed px-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          StudyTogether helps you build smart study groups, manage tasks, and
          get AI-powered assistance to stay on track and succeed. Join a
          community of learners and make your study sessions more engaging and
          productive.
        </motion.p>

        {/* Animated Buttons */}
        <div className="flex justify-center gap-6 flex-wrap">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/features"
              className="px-7 py-3 text-base md:text-lg border border-white text-white rounded-md hover:bg-white hover:text-blue-600 transition"
            >
              Explore Instructor Features
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/signup"
              className="px-7 py-3 text-base md:text-lg bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Start Creating Now
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

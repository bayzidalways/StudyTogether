import React from "react";
import { motion } from "framer-motion";

const courses = [
  {
    title: "AI-Powered Productivity",
    desc: "Learn how AI tools like ChatGPT & Midjourney can help you study smarter.",
    image: "public/features/AI.webp",
  },
  {
    title: "Team Task Management",
    desc: "Master the Kanban board and assign tasks in collaborative groups.",
    image: "public/features/TeamTask.jpg",
  },
  {
    title: "Collaborative Note-Taking",
    desc: "Take clean, synchronized notes with your team and never miss a detail.",
    image: "public/features/NotesTaking.png",
  },
  {
    title: "Gamify Your Learning",
    desc: "Earn streaks and badges while studying to stay consistent and motivated.",
    image: "public/features/Gamification.webp",
  },
  {
    title: "Smart Study Matching",
    desc: "Get automatically paired with peers from your course and schedule.",
    image: "public/features/StudySmart.jpg",
  },
  {
    title: "Live Chat + AI Tutor",
    desc: "Ask your questions in real-time and get help instantly with AI.",
    image: "public/features/ChatBot.webp",
  },
  {
    title: "Focus Rooms & Pomodoro",
    desc: "Join virtual study rooms with timers to stay focused and avoid distractions.",
    image: "public/features/Focus.avif",
  },
  {
    title: "Shared Resource Library",
    desc: "Upload, share, and access study materials like PDFs, videos, and slides with your group.",
    image: "public/features/Sharing.jpeg",
  },
];

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
    },
  }),
};

export default function FeaturedCourses() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[85%] mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-black font-bold mb-12"
        >
          Explore Our <span className="text-blue-600">Featured Topics</span>
        </motion.h2>

        <div className="grid  sm:grid-cols-2 gap-8 lg:grid-cols-4">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm">{course.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

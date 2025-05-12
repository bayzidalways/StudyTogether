import React from "react";

const courses = [
  {
    title: "AI-Powered Productivity",
    desc: "Learn how AI tools like ChatGPT & Midjourney can help you study smarter.",
    image: "https://source.unsplash.com/500x300/?ai,technology",
  },
  {
    title: "Team Task Management",
    desc: "Master the Kanban board and assign tasks in collaborative groups.",
    image: "https://source.unsplash.com/500x300/?team,project",
  },
  {
    title: "Collaborative Note-Taking",
    desc: "Take clean, synchronized notes with your team and never miss a detail.",
    image: "https://source.unsplash.com/500x300/?note,students",
  },
  {
    title: "Gamify Your Learning",
    desc: "Earn streaks and badges while studying to stay consistent and motivated.",
    image: "https://source.unsplash.com/500x300/?learning,gamification",
  },
  {
    title: "Smart Study Matching",
    desc: "Get automatically paired with peers from your course and schedule.",
    image: "https://source.unsplash.com/500x300/?students,group",
  },
  {
    title: "Live Chat + AI Tutor",
    desc: "Ask your questions in real-time and get help instantly with AI.",
    image: "https://source.unsplash.com/500x300/?chat,help",
  },
];

export default function FeaturedCourses() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Explore Our <span className="text-blue-600">Featured Topics</span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 group"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm">{course.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

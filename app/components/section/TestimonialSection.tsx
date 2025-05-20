import React, { useState } from "react";

interface Testimonial {
  name: string;
  title: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "俊杰",
    title: "Software Engineer",
    text: "StudyTogether gave me the tools to organize my study sessions, collaborate with peers, and stay consistent. I feel more confident academically than ever!",
    image: "/personal-img/img1.jpg",
  },
  {
    name: "John Smith",
    title: "Tech Mentor",
    text: "As a study mentor, I found the real-time task boards and note-sharing features super effective. It’s like Trello and Notion for students, all-in-one!",
    image: "/personal-img/img2.png",
  },
  {
    name: "Alice Johnson",
    title: "Language Instructor",
    text: "I recommend StudyTogether to all my students. The platform keeps them engaged with AI assistance and gamification features that actually work.",
    image: "/personal-img/img3.jpg",
  },
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  const prevTestimonial = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gray-100 from-blue-50 via-white to-blue-50">
      <div className="max-w-[85%]  mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
            What Our Users Are Saying
          </h2>
          <p className="text-gray-500 text-base">
            Hear directly from students and mentors using StudyTogether
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center ">
          {/* Image block */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={current.image}
              alt={current.name}
              className="rounded-xl shadow-lg  object-cover w-full max-w-md h-[420px] bg-gray-100"
            />
          </div>

          {/* Testimonial Text Block */}
          <div className="w-full md:w-1/2 bg-white p-8 rounded-xl shadow-xl relative">
            <div className="flex flex-col items-center md:items-start">
              <img
                src={current.image}
                alt={current.name}
                className="w-14 h-14 rounded-full border-2 border-blue-500 shadow-md mb-4"
              />
              <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                “{current.text}”
              </p>
              <h4 className="text-blue-600 font-semibold text-xl">
                {current.name}
              </h4>
              <span className="text-gray-500 text-sm">{current.title}</span>
            </div>

            {/* Arrows */}
            <div className="absolute bottom-6 right-6 flex space-x-3">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-blue-100 text-black hover:bg-blue-700 flex items-center justify-center shadow transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-blue-100 text-black hover:bg-blue-700 flex items-center justify-center shadow transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

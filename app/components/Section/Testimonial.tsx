import React, { useState } from "react";

interface Testimonial {
  name: string;
  title: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jane Doe",
    title: "Marketing Expert",
    text: "LearnPro gave me the tools to share my marketing knowledge with over 5,000 students. The platform made it easy to structure my course and track student progress.",
    image: "https://example.com/jane-doe.jpg", // Replace with actual image URL
  },
  {
    name: "John Smith",
    title: "Tech Guru",
    text: "As an instructor on LearnPro, I was able to reach a global audience. The intuitive course builder allowed me to create engaging content in no time.",
    image: "https://example.com/john-smith.jpg", // Replace with actual image URL
  },
  {
    name: "Alice Johnson",
    title: "Language Instructor",
    text: "LearnPro's features like interactive quizzes and analytics really enhanced my teaching experience. My students love the platform!",
    image: "https://example.com/alice-johnson.jpg", // Replace with actual image URL
  },
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-12 px-4 flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
          className="w-full h-auto"
        />
      </div>
      <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md text-center">
        <img
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
          className="w-12 h-12 rounded-full mx-auto mb-4"
        />
        <p className="text-lg font-bold mb-2">
          {testimonials[currentIndex].name} - {testimonials[currentIndex].title}
        </p>
        <p className="text-gray-600 mb-4">{testimonials[currentIndex].text}</p>
        <div className="flex justify-center">
          <button
            onClick={prevTestimonial}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
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
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
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
    </section>
  );
};

export default TestimonialSection;

import React from "react";

interface Step {
  number: number;
  title: string;
  description: string;
  arrowColor: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Sign Up",
    description:
      "Register as an instructor on LearnPro and access our powerful course creation tools.",
    arrowColor: "blue-500",
  },
  {
    number: 2,
    title: "Build Your Course",
    description:
      "Upload videos, create quizzes, and add supplemental materials like PDFs or presentations",
    arrowColor: "pink-500",
  },
  {
    number: 3,
    title: "Publish Your Course",
    description: "Publish, and start teaching learners from all over the world",
    arrowColor: "green-500",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-12 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Start in 3 Easy Steps
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center w-full md:w-1/3"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full mb-4 text-white">
              <span className="text-2xl font-bold">{step.number}</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{step.description}</p>
            {index < steps.length - 1 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke={step.arrowColor}
                className="w-8 h-8 -rotate-45"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 15l6-6m0 0l-6-6m6 6H3"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

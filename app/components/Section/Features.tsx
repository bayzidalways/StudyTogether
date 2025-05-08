import React from "react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 text-pink-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21v-6m0 0v-6m0 6h6m-6 0H6"
        />
      </svg>
    ),
    title: "Intuitive Course Builder",
    description:
      "Easily structure your course with video lessons, assignments and using our drag - and - drop interface",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 text-green-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    ),
    title: "Engage Learners",
    description:
      "Interactive quizzes, student discussions, and detailed analytics to track performance and engagement",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 text-purple-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75m-9.75 0a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm0 0v5.25m0 5.25h5.25M12 18h.008v.008H12V18zm0 0h5.25m0 0v5.25M12 21h.008v.008H12v-.008z"
        />
      </svg>
    ),
    title: "Global Reach",
    description:
      "Your courses can be accessed by students worldwide. We handle the technical details",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 text-yellow-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h19.5M2.25 12h19.5m-19.5 9h19.5"
        />
      </svg>
    ),
    title: "Flexible Pricing",
    description:
      "Choose to offer your course for free or monetize it with competitive pricing options",
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-12 px-4 text-center">
      <h2 className="text-3xl font-bold text-white mb-8">
        Why Choose StudyTogether?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-center"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="bg-indigo-900 text-white py-12 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Share Your Knowledge?
      </h2>
      <p className="text-lg mb-6 border-2 border-indigo-300 p-4 mx-auto max-w-2xl">
        Join thousands of successful instructors on LearnPro and turn your
        passion into profit. We provide the tools and support you need to create
        engaging courses in any subject, from marketing to design and
        programming.
      </p>
      <a
        href="#"
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-md"
      >
        Start Creating Your Course Today!
      </a>
    </section>
  );
};

export default CallToAction;

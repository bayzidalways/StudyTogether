import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to <span className="text-yellow-300">Study Smarter</span> with
          Your Team?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-blue-100">
          Join thousands of students already using StudyTogether to collaborate,
          stay focused, and achieve their academic goals.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/signup"
            className="px-6 py-3 bg-yellow-400 text-blue-800 font-semibold rounded-md hover:bg-yellow-300 transition"
          >
            Get Started Free
          </Link>
          <Link
            to="/features"
            className="px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-blue-600 transition"
          >
            Explore Features
          </Link>
        </div>
      </div>
    </section>
  );
}

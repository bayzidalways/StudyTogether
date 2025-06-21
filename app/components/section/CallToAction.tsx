import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="py-36 bg-[#1E2560] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Ready to <span className="text-yellow-300">Study Smarter</span> with
          Your Team?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-lg md:text-xl mb-8 text-blue-100"
        >
          Join thousands of students already using StudyTogether to collaborate,
          stay focused, and achieve their academic goals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <Link
            to="/signup"
            className="px-6 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-md shadow-md hover:bg-yellow-300 transition-transform duration-300 hover:scale-105"
          >
            Get Started Free
          </Link>
          <Link
            to="/features" 
            className="px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-blue-700 transition-transform duration-300 hover:scale-105"
          >
            Explore Features
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

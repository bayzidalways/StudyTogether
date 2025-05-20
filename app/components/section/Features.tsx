import { GraduationCap, Users, Brain, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
    title: "AI-Powered Assistance",
    desc: "Get smart answers to academic questions instantly with our built-in AI tutor.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Smart Group Matching",
    desc: "Form study groups automatically based on your schedule, course, and skills.",
  },
  {
    icon: <Brain className="w-8 h-8 text-blue-600" />,
    title: "Real-Time Tools",
    desc: "Collaborate using task boards, shared notes, and live messaging — all in one place.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Secure & Student-Friendly",
    desc: "Built with privacy and ease of use in mind. Only students, no distractions.",
  },
];

export default function Features() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[85%] mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
          Why Choose <span className="text-blue-600">StudyTogether?</span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded aspect-square flex flex-col items-center justify-center p-6 shadow hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

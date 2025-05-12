import { GraduationCap, Users, Brain, ShieldCheck } from "lucide-react";

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Why Choose <span className="text-blue-600">StudyTogether?</span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

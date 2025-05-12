import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Sign Up",
    desc: "Create your free account using your student email and set up your profile.",
  },
  {
    number: "2",
    title: "Build Your Group",
    desc: "Use smart matching or create a group manually based on your course.",
  },
  {
    number: "3",
    title: "Start Collaborating",
    desc: "Assign tasks, take notes, and chat with your team in real time.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          How It Works – <span className="text-blue-600">3 Easy Steps</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
            >
              <div className="text-blue-600 font-bold text-2xl mb-2">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>

              {/* Arrow between cards */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-[-28px] top-1/2 transform -translate-y-1/2">
                  <ArrowRight className="text-blue-500 w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

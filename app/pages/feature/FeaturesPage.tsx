import {
  GraduationCap,
  Users,
  Brain,
  ShieldCheck,
  MessageSquare,
  BadgeCheck,
  LayoutGrid,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
    title: "AI-Powered Academic Coach",
    desc: "Get real-time help with assignments, task suggestions, and learning resources using our built-in AI assistant powered by Hugging Face.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Smart Group Matching",
    desc: "We auto-match you into study groups based on your university, courses, learning style, and available time slots.",
  },
  {
    icon: <Brain className="w-8 h-8 text-blue-600" />,
    title: "Real-Time Collaboration Tools",
    desc: "Use live task boards (Kanban), group chat, and collaborative notes to organize your team and stay productive.",
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
    title: "Integrated Live Chat",
    desc: "Discuss tasks and notes instantly with your team. No need to switch between apps — everything happens here.",
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-blue-600" />,
    title: "Gamified Learning",
    desc: "Earn badges and rewards for completing group goals, helping peers, and staying consistent. Learning can be fun too!",
  },
  {
    icon: <LayoutGrid className="w-8 h-8 text-blue-600" />,
    title: "Unified Dashboard",
    desc: "See all your group tasks, progress, schedules, and updates in one beautiful dashboard — built for student teams.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Student-Only Environment",
    desc: "No distractions. We verify students and protect your privacy so you can focus on what really matters — learning together.",
  },
];

export default function Features() {
  return (
    <section className="py-36 bg-[#1E1919] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-6 text-blue-400"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          All-in-One Features for Smarter Studying
        </motion.h2>

        <p className="text-center text-white max-w-3xl mx-auto mb-14 text-base md:text-lg">
          StudyTogether brings your whole group project experience into one
          place — powered by AI, real-time collaboration, and student-first
          design.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg border border-gray-100 p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
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

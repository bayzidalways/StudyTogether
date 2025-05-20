// app/pages/support/SupportPage.tsx

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, HelpCircle } from "lucide-react";

export default function SupportPage() {
  const [faqIndex, setFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How can I reset my password?",
      answer: "Go to your account settings and click on 'Reset Password'.",
    },
    {
      question: "How do I join a study group?",
      answer:
        "Go to the groups section and click 'Join' next to the group that matches your course and interests.",
    },
    {
      question: "Can I use this platform on mobile?",
      answer: "Yes! The StudyTogether platform is fully responsive.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use end-to-end encryption and secure Firebase authentication.",
    },
  ];

  return (
    <div className="bg-[#1E1919] py-36 text-white min-h-screen  px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Need Help?</h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          We're here to support you. Whether you're facing technical issues,
          need guidance, or just have questions — our team is always ready.
        </p>
      </motion.div>

      {/* Contact Options */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {[
          {
            title: "Email Support",
            icon: <Mail size={30} />,
            description: "Get in touch with us via email 24/7.",
            action: "support@studytogether.ai",
          },
          {
            title: "Live Chat",
            icon: <HelpCircle size={30} />,
            description: "Chat with our support agents in real-time.",
            action: "Available 9am–6pm",
          },
          {
            title: "Phone",
            icon: <Phone size={30} />,
            description: "Call us directly for urgent matters.",
            action: "+880-1234-567890",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="p-6 rounded-xl bg-[#111] hover:bg-[#1a1a1a] border border-gray-700 transition-all"
            whileHover={{ scale: 1.05 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="mb-4 text-indigo-500">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 mb-2">{item.description}</p>
            <p className="text-sm text-gray-300 italic">{item.action}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* FAQ Accordion */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mb-20 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] border border-gray-700 rounded-lg"
            >
              <button
                onClick={() => setFaqIndex(i === faqIndex ? null : i)}
                className="w-full text-left p-4 flex justify-between items-center"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <span>{i === faqIndex ? "-" : "+"}</span>
              </button>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: i === faqIndex ? "auto" : 0 }}
                className="overflow-hidden px-4 text-gray-400"
              >
                <p className="pb-4">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Support Form */}
      <motion.div
        className="bg-[#1a1a1a] rounded-xl p-8 max-w-3xl mx-auto border border-gray-700"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-6">Still need help?</h2>
        <form className="space-y-6">
          <div>
            <label className="block mb-1">Your Name</label>
            <input
              type="text"
              className="w-full p-3 bg-black border border-gray-600 rounded-md text-white"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="w-full p-3 bg-black border border-gray-600 rounded-md text-white"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-1">Your Message</label>
            <textarea
              className="w-full p-3 bg-black border border-gray-600 rounded-md text-white h-32"
              placeholder="Describe your issue"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 transition text-white py-2 px-6 rounded-md font-medium"
          >
            Submit Ticket
          </button>
        </form>
      </motion.div>
    </div>
  );
}

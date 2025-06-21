import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Globe,
  MessageCircle,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function ContactCardsPage() {
  const contacts = [
    {
      title: "Email Support",
      icon: <Mail size={48} />,
      description:
        "Have questions or need help? Drop us an email and we’ll respond within 24 hours. Our support team is trained to address a wide range of inquiries, from technical issues to general questions about our services.",
      contactLabel: "Email:",
      contactInfo: "support@studytogether.ai",
      cta: "Send us a message anytime.",
      details: [
        "Our support team is available 24/7 to assist you with any questions or concerns.",
        "We typically respond to all emails within 24 hours, though response times may be longer during peak periods.",
      ],
    },
    {
      title: "Phone Support",
      icon: <Phone size={48} />,
      description:
        "Prefer to talk? Call us directly during our working hours for instant support. Our knowledgeable staff can help you with account setup, technical issues, or any other questions you may have.",
      contactLabel: "Phone:",
      contactInfo: "+880-1234-567890",
      cta: "We’re just a call away!",
      details: [
        "Our phone support is available Monday through Friday, 9 AM to 6 PM GMT+6.",
        "For faster service, please have your account information ready when you call.",
      ],
    },
    {
      title: "Office Location",
      icon: <MapPin size={48} />,
      description:
        "You're always welcome! Visit our head office for any direct communication or appointments. Our modern facility is equipped to handle all types of inquiries and meetings.",
      contactLabel: "Address:",
      contactInfo: "123 University Ave, City, Country",
      cta: "Find us on Google Maps.",
      details: [
        "Our office is located on the ground floor of the Tech Tower, near the main entrance.",
        "We offer free parking for visitors and are easily accessible by public transportation.",
      ],
    },
    {
      title: "Working Hours",
      icon: <Clock size={48} />,
      description:
        "Our team is available throughout the weekdays. Feel free to contact during office hours. We strive to provide the best possible service during our operational hours.",
      contactLabel: "Hours:",
      contactInfo: "9 AM - 6 PM (GMT+6), Mon - Fri",
      cta: "We respect your time.",
      details: [
        "Our office is closed on weekends and public holidays.",
        "For urgent matters outside of our working hours, please use our emergency contact form.",
      ],
    },
    {
      title: "Live Chat",
      icon: <MessageCircle size={48} />,
      description:
        "Need immediate assistance? Chat with our support team in real-time. Our chat service is available during business hours and is a great way to get quick answers to your questions.",
      contactLabel: "Chat:",
      contactInfo: "Click the chat icon below",
      cta: "Start a conversation now!",
      details: [
        "Our live chat feature is available on all pages of our website during business hours.",
        "Chat transcripts are automatically saved to your account for future reference.",
      ],
    },
    {
      title: "Feedback & Suggestions",
      icon: <Mail size={48} />,
      description:
        "We value your input! Send us your feedback, suggestions, or ideas for improvement. Your insights help us enhance our services and create a better experience for all users.",
      contactLabel: "Email:",
      contactInfo: "feedback@studytogether.ai",
      cta: "Your opinion matters to us!",
      details: [
        "We review all feedback and suggestions carefully and use them to inform our product development roadmap.",
        "While we can't respond to every message, we appreciate every contribution.",
      ],
    },
  ];

  const socialMedia = [
    {
      platform: "Twitter",
      icon: <Twitter size={24} />,
      url: "https://twitter.com/studytogetherai",
    },
    {
      platform: "Facebook",
      icon: <Facebook size={24} />,
      url: "https://facebook.com/studytogetherai",
    },
    {
      platform: "Instagram",
      icon: <Instagram size={24} />,
      url: "https://instagram.com/studytogetherai",
    },
    {
      platform: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://linkedin.com/company/studytogetherai",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#1E1919] py-36 min-h-screen text-white px-6 sm:px-12 lg:px-24">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-5xl font-bold mb-6"
      >
        Contact Us
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center text-xl text-gray-400 mb-20 max-w-3xl mx-auto"
      >
        We're here to help you succeed. Whether you have a question, need
        support, or just want to say hello, we're ready to assist you in any way
        we can.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-14 max-w-7xl mx-auto mb-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {contacts.map((contact, idx) => (
          <motion.div
            key={idx}
            className="bg-[#111] rounded-2xl p-10 border border-gray-700 cursor-pointer hover:bg-[#222] transition-all duration-300 shadow-xl"
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 12px 30px rgba(100, 100, 255, 0.5)",
            }}
          >
            <div className="text-indigo-500 mb-6">{contact.icon}</div>
            <h3 className="text-3xl font-bold mb-4">{contact.title}</h3>
            <p className="text-gray-300 text-lg mb-5">{contact.description}</p>
            <div className="mb-4">
              <span className="text-indigo-400 font-semibold text-lg">
                {contact.contactLabel}
              </span>{" "}
              <span className="italic text-gray-100 text-lg">
                {contact.contactInfo}
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-4">{contact.cta}</p>
            <ul className="space-y-2 text-gray-400 mt-6">
              {contact.details?.map((detail, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#111] rounded-2xl p-10 border border-gray-700 shadow-xl mb-24"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-[#222] border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-[#222] border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-[#222] border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="How can we help you?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-[#222] border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center"
                >
                  <span>Send Message</span>
                  <i className="fa-solid fa-paper-plane ml-2"></i>
                </button>
              </form>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
              <p className="text-gray-300 mb-8">
                We're available through multiple channels to serve you better.
                Feel free to reach out using the method that's most convenient
                for you.
              </p>
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-indigo-400">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  {socialMedia.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-[#222] flex items-center justify-center text-gray-300 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-indigo-400">
                  Business Hours
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM (GMT+6)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>Closed</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-[#111] rounded-2xl p-10 border border-gray-700 shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Visit Our Office
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="rounded-xl overflow-hidden h-[400px] relative">
                <img
                  src="https://picsum.photos/800/600"
                  alt="Office Location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">
                      Our Headquarters
                    </h3>
                    <p className="text-gray-300">
                      123 University Ave, City, Country
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Why Visit Us?</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-indigo-500 mt-1 mr-3"></i>
                  <span>
                    Meet our team in person and get a tour of our facilities
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-indigo-500 mt-1 mr-3"></i>
                  <span>
                    Attend workshops and training sessions held at our venue
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-indigo-500 mt-1 mr-3"></i>
                  <span>
                    Participate in community events and networking opportunities
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-indigo-500 mt-1 mr-3"></i>
                  <span>Experience our technology and services firsthand</span>
                </li>
              </ul>
              <div className="mt-8">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <span>View on Google Maps</span>
                  <i className="fa-solid fa-map-marker-alt ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

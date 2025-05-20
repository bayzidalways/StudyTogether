import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SendHorizonal, MessageCircleCode, X } from "lucide-react";

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "user" | "ai"; text: string }[]
  >([]);
  const [input, setInput] = useState("");

 const handleSend = async () => {
  if (!input.trim()) return;

  const userMessage = { role: "user" as const, text: input };
  setMessages((prev) => [...prev, userMessage]);
  setInput("");

  // Show typing placeholder
  setMessages((prev) => [...prev, { role: "ai", text: "Typing..." }]);

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:5173", // Change this for production
        "X-Title": "StudyTogether Chat Widget",
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3.3-8b-instruct:free",
        messages: [
          { role: "user", content: input },
        ],
      }),
    });

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content ?? "🤖 No response.";

    setMessages((prev) => [
      ...prev.slice(0, -1), // Remove "Typing..."
      { role: "ai", text: reply },
    ]);
  } catch (error) {
    console.error("❌ AI error:", error);
    setMessages((prev) => [
      ...prev.slice(0, -1),
      { role: "ai", text: "❌ Failed to fetch response. Try again." },
    ]);
  }
};


  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="w-80 h-[480px] bg-white shadow-xl border border-gray-300 rounded-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b bg-gray-100">
              <div className="flex items-center space-x-2">
                <MessageCircleCode className="text-blue-600" />
                <h2 className="text-sm font-semibold text-gray-800">
                  AI Study Assistant
                </h2>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5 text-gray-500 hover:text-red-500" />
              </button>
            </div>

            {/* Message List */}
            <div className="flex-1 overflow-y-auto px-4 py-2 bg-white space-y-2 text-sm">
              {messages.length === 0 ? (
                <p className="text-center text-gray-400 mt-10 italic">
                  Ask a question about studying...
                </p>
              ) : (
                messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`max-w-[85%] px-3 py-2 border rounded-lg text-black ${
                      msg.role === "user"
                        ? "ml-auto bg-blue-100 border-blue-300"
                        : "mr-auto bg-gray-100 border-gray-300"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))
              )}
            </div>

            {/* Input Area */}
            <div className="p-3 border-t bg-gray-50 flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 px-3 py-2 border rounded-md text-sm text-black focus:outline-none focus:ring focus:border-blue-500"
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md"
              >
                <SendHorizonal className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-tr from-blue-600 to-indigo-600 hover:scale-105 text-white p-4 rounded-full shadow-xl"
          >
            <MessageCircleCode className="w-7 h-7" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIChatBot;

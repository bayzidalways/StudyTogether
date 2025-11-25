import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SendHorizonal, MessageCircleCode, X, Loader2 } from "lucide-react";
import { getGrokStream } from "../api/grok"; // Keep your Grok API import

interface Message {
  role: "user" | "ai";
  text: string;
}

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom (preserved from Grok implementation)
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Grok API streaming implementation (unchanged)
  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Add temporary AI message for typing indicator
    setMessages((prev) => [...prev, { role: "ai", text: "" }]);

    try {
      const fullHistory = [...messages, userMessage].map(m => ({
        role: m.role === "user" ? "user" : "assistant",
        content: m.text,
      }));

      const reader = await getGrokStream(fullHistory);
      if (!reader) throw new Error("No response from Grok");

      const decoder = new TextDecoder();
      let aiResponse = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n").filter(line => line.startsWith("data: "));

        for (const line of lines) {
          const data = line.replace("data: ", "");
          if (data === "[DONE]") continue;
          try {
            const parsed = JSON.parse(data);
            const content = parsed.choices[0]?.delta?.content || "";
            aiResponse += content;

            setMessages(prev => prev.map(msg =>
              msg.role === "ai" && msg.text === "" ? { ...msg, text: aiResponse } : msg
            ));
          } catch (err) {
            console.error("Error parsing Grok stream:", err);
          }
        }
      }

      // Final update if response is empty
      setMessages(prev => prev.map(msg =>
        msg.role === "ai" && msg.text === "" ? { ...msg, text: aiResponse || "I'm here to help with your studies!" } : msg
      ));

    } catch (error) {
      console.error("❌ Grok AI error:", error);
      setMessages(prev => prev.map(msg =>
        msg.role === "ai" && msg.text === "" ? { ...msg, text: "❌ Failed to connect. Try again!" } : msg
      ));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50"> {/* Original positioning */}
      <AnimatePresence>
        {isOpen ? (
          // Original chat window styling (w-80, h-[480px], simple white bg)
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="w-80 h-[480px] bg-white shadow-xl border border-gray-300 rounded-2xl flex flex-col overflow-hidden"
          >
            {/* Original Header (simple gray bg, no gradient) */}
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

            {/* Original Message List (simple white bg, smaller padding) */}
            <div className="flex-1 overflow-y-auto px-4 py-2 bg-white space-y-2 text-sm">
              {messages.length === 0 ? (
                // Original empty state (simple italic text)
                <p className="text-center text-gray-400 mt-10 italic">
                  Ask a question about studying...
                </p>
              ) : (
                messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`max-w-[85%] px-3 py-2 border rounded-lg text-black ${
                      msg.role === "user"
                        ? "ml-auto bg-blue-100 border-blue-300" // Original user bubble style
                        : "mr-auto bg-gray-100 border-gray-300" // Original AI bubble style
                    }`}
                  >
                    {msg.role === "ai" && msg.text === "" ? (
                      // Typing indicator (matches Grok implementation)
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                      </div>
                    ) : (
                      msg.text
                    )}
                  </div>
                ))
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Original Input Area (simple gray bg, no gradient) */}
            <div className="p-3 border-t bg-gray-50 flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 px-3 py-2 border rounded-md text-sm text-black focus:outline-none focus:ring focus:border-blue-500"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <SendHorizonal className="w-5 h-5" />}
              </button>
            </div>
          </motion.div>
        ) : (
          // Original floating button (simple gradient, no extra size)
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
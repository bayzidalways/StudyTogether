import React, { useState, useEffect } from "react";
import {
  Search,
  Globe,
  Lightbulb,
  Image,
  MoreHorizontal,
  Share2,
  Edit,
  Trash2,
  Menu,
  Send,
  Plus,
  Mic,
} from "lucide-react";

// Interface for history items
interface HistoryItem {
  id: number;
  text: string;
}

// Interface for messages
interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const AIAssistantSection = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [historyItems, setHistoryItems] = useState<HistoryItem[]>([]);
  const [currentHistoryId, setCurrentHistoryId] = useState<number | null>(null);

  const handleNewChat = () => {
    const newId = Date.now();
    setCurrentHistoryId(newId);
    setMessages([]);
    setHistoryItems((prev) => [
      { id: newId, text: "New conversation" },
      ...prev,
    ]);
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Toggle menu visibility for a specific history item
  const toggleMenu = (id: number) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  // Handle menu actions
  const handleShare = (item: HistoryItem) => {
    navigator.clipboard.writeText(item.text);
    alert(`✅ Copied to clipboard: "${item.text}"`);
    setOpenMenuId(null);
  };

  const handleRename = (item: HistoryItem) => {
    const newName = prompt("Enter a new name:", item.text);
    if (newName && newName.trim()) {
      setHistoryItems((prev) =>
        prev.map((el) => (el.id === item.id ? { ...el, text: newName } : el))
      );
    }
    setOpenMenuId(null);
  };

  const handleDelete = (item: HistoryItem) => {
    const confirmed = confirm("Are you sure you want to delete this?");
    if (confirmed) {
      setHistoryItems((prev) => prev.filter((el) => el.id !== item.id));
    }
    setOpenMenuId(null);
  };

  // Handle message sending with the provided API key
  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // If there's no current history, create one
    if (!currentHistoryId) {
      const newId = Date.now();
      setCurrentHistoryId(newId);
      setHistoryItems((prev) => [{ id: newId, text: inputValue }, ...prev]);
    }

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    const loadingId = messages.length + 2;
    setMessages((prev) => [
      ...prev,
      { id: loadingId, text: "🤖 Thinking...", isUser: false },
    ]);

    try {
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
            "HTTP-Referer": "http://localhost:5173",
            "X-Title": "StudyTogether AI Chatbot",
          },
          body: JSON.stringify({
            model: "meta-llama/llama-3.3-8b-instruct:free",
            messages: [{ role: "user", content: inputValue }],
          }),
        }
      );

      const data = await response.json();
      const reply = data?.choices?.[0]?.message?.content ?? "⚠️ No response.";

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === loadingId ? { ...msg, text: reply } : msg
        )
      );
    } catch (error) {
      console.error("❌ Error fetching from AI:", error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === loadingId
            ? { ...msg, text: "❌ Error getting response. Try again." }
            : msg
        )
      );
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex h-screen mx-auto text-black bg-gray-100">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center p-6 transition-all duration-300">
        {/* Sidebar Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 left-4 p-2 rounded-md bg-white shadow-md focus:outline-none z-10"
        >
          <Menu
            size={24}
            className="text-black hover:bg-gray-200 rounded-full p-1"
          />
        </button>

        <h1 className="text-3xl font-semibold mb-8">What can I help with?</h1>

        {/* Chat Area */}
        <div className="w-full max-w-5xl border flex-1 flex flex-col text-white p-4 mb-4 shadow-lg overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 p-3 rounded-lg max-w-[80%] ${
                message.isUser ? "ml-auto bg-blue-500" : "mr-auto bg-gray-700"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>

        {/* Search Bar Area */}
        <div className="w-full max-w-2xl bg-white rounded-full shadow-lg p-4 flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-200">
            <Plus size={24} className="text-black" />
          </button>
          <input
            type="text"
            placeholder="Ask anything"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 outline-none bg-transparent text-lg text-black"
          />
          <button
            onClick={handleSendMessage}
            className="p-2 rounded-full text-black hover:bg-gray-200"
          >
            <Send size={24} className="text-black" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200">
            <Search size={24} className="text-black" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200">
            <Mic size={24} className="text-black" />
          </button>
        </div>

        {/* Prompt Suggestions */}
        <div className="flex flex-wrap gap-4 mt-4 justify-center">
          <button className="px-4 py-2 bg-white rounded-full shadow-md flex items-center space-x-2 hover:bg-gray-200">
            <Globe
              size={24}
              className="text-black hover:bg-gray-300 rounded-full p-1"
            />
            <span>Search</span>
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow-md flex items-center space-x-2 hover:bg-gray-200">
            <Lightbulb
              size={24}
              className="text-black hover:bg-gray-300 rounded-full p-1"
            />
            <span>Reason</span>
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow-md flex items-center space-x-2 hover:bg-gray-200">
            <Search
              size={24}
              className="text-black hover:bg-gray-300 rounded-full p-1"
            />
            <span>Deep research</span>
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow-md flex items-center space-x-2 hover:bg-gray-200">
            <Image
              size={24}
              className="text-black hover:bg-gray-300 rounded-full p-1"
            />
            <span>Create image</span>
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow-md flex items-center space-x-2 hover:bg-gray-200">
            <MoreHorizontal
              size={24}
              className="text-black hover:bg-gray-300 rounded-full p-1"
            />
            <span>More</span>
          </button>
        </div>
      </div>

      {/* Right Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 mt-20 pt-6 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-black">History</h2>
          <div>
            <div className="flex justify-center mt-6">
              <button
                onClick={handleNewChat}
                className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
              >
                + New Chat
              </button>
            </div>
          </div>
        </div>
        <ul className="p-4 space-y-4">
          {historyItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between hover:bg-gray-100 p-2 rounded-md relative"
            >
              <span className="flex-1 truncate text-black">{item.text}</span>
              <div className="relative">
                <button
                  onClick={() => toggleMenu(item.id)}
                  className="p-1 rounded-full hover:bg-gray-200 focus:outline-none"
                >
                  <MoreHorizontal
                    size={18}
                    className="text-black hover:bg-gray-300 rounded-full p-1"
                  />
                </button>
                {openMenuId === item.id && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-20">
                    <button
                      onClick={() => handleShare(item)}
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100"
                    >
                      <Share2
                        size={16}
                        className="mr-2 text-black hover:bg-gray-300 rounded-full p-1"
                      />
                      Share
                    </button>
                    <button
                      onClick={() => handleRename(item)}
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100"
                    >
                      <Edit
                        size={16}
                        className="mr-2 text-black hover:bg-gray-300 rounded-full p-1"
                      />
                      Rename
                    </button>
                    <button
                      onClick={() => handleDelete(item)}
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      <Trash2
                        size={16}
                        className="mr-2 text-red-600 hover:bg-gray-300 rounded-full p-1"
                      />
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AIAssistantSection;

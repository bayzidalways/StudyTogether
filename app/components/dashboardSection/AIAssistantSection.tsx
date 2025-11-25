import React, { useState, useEffect, useRef } from "react";
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
import { getGrokResponse } from "../api/openrouter";

interface HistoryItem {
  id: number;
  title: string;
  messages: Message[];
}

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const AIAssistantSection = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [currentChatId, setCurrentChatId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Load history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("grok-chat-history");
    if (saved) {
      const parsed = JSON.parse(saved);
      setHistory(parsed);
      if (parsed.length > 0) {
        const latest = parsed[0];
        setCurrentChatId(latest.id);
        setMessages(latest.messages);
      }
    }
  }, []);

  // Save history on change
  useEffect(() => {
    if (history.length > 0) {
      localStorage.setItem("grok-chat-history", JSON.stringify(history));
    }
  }, [history]);

  const createNewChat = () => {
    const newId = Date.now();
    setCurrentChatId(newId);
    setMessages([]);
    setHistory((prev) => [
      {
        id: newId,
        title: "New Chat",
        messages: [],
      },
      ...prev,
    ]);
  };

  const switchChat = (chat: HistoryItem) => {
    setCurrentChatId(chat.id);
    setMessages(chat.messages);
  };

  const updateCurrentChatTitle = (title: string) => {
    setHistory((prev) =>
      prev.map((chat) =>
        chat.id === currentChatId ? { ...chat, title } : chat
      )
    );
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInputValue("");
    setIsLoading(true);

    // Create new chat if none exists
    if (!currentChatId) {
      const newId = Date.now();
      setCurrentChatId(newId);
      setHistory((prev) => [
        {
          id: newId,
          title:
            inputValue.slice(0, 40) + (inputValue.length > 40 ? "..." : ""),
          messages: newMessages,
        },
        ...prev,
      ]);
    } else {
      // Update messages in current chat
      setHistory((prev) =>
        prev.map((chat) =>
          chat.id === currentChatId ? { ...chat, messages: newMessages } : chat
        )
      );
    }

    // Add temporary assistant message
    const assistantMsgId = Date.now() + 1;
    const assistantMsg: Message = {
      id: assistantMsgId,
      text: "",
      isUser: false,
    };
    setMessages((prev) => [...prev, assistantMsg]);

    try {
      const reader = await getGrokResponse(
        newMessages
          .map((m) => ({
            role: m.isUser ? "user" : "assistant",
            content: m.text,
          }))
          .concat({ role: "user", content: inputValue })
      );

      if (!reader) throw new Error("No response stream");

      const decoder = new TextDecoder();
      let assistantContent = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk
          .split("\n")
          .filter((line) => line.startsWith("data: "));

        for (const line of lines) {
          const data = line.replace("data: ", "");
          if (data === "[DONE]") continue;
          try {
            const parsed = JSON.parse(data);
            const content = parsed.choices[0]?.delta?.content || "";
            assistantContent += content;

            setMessages((prev) =>
              prev.map((m) =>
                m.id === assistantMsgId ? { ...m, text: assistantContent } : m
              )
            );
          } catch {}
        }
      }

      // Save final assistant message
      const finalMessages = [
        ...newMessages,
        { ...assistantMsg, text: assistantContent },
      ];
      setMessages(finalMessages);

      setHistory((prev) =>
        prev.map((chat) =>
          chat.id === currentChatId
            ? { ...chat, messages: finalMessages }
            : chat
        )
      );

      // Auto-update title if it's still "New Chat"
      if (currentChatId) {
        const currentChat =
          history.find((c) => c.id === currentChatId) || history[0];
        if (
          currentChat?.title === "New Chat" ||
          currentChat?.title === "New conversation"
        ) {
          const firstUserMsg =
            finalMessages.find((m) => m.isUser)?.text || "Chat";
          updateCurrentChatTitle(
            firstUserMsg.slice(0, 40) + (firstUserMsg.length > 40 ? "..." : "")
          );
        }
      }
    } catch (error: any) {
      console.error("Grok API Error:", error);
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantMsgId
            ? { ...m, text: `Error: ${error.message || "Try again."}` }
            : m
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="flex h-screen bg-gray-100 text-black">
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <button
          onClick={toggleSidebar}
          className="absolute top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
        >
          <Menu size={24} />
        </button>

        <div className="flex-1 overflow-y-auto p-6 pt-20">
          {messages.length === 0 ? (
            <div className="text-center mt-20">
              <h1 className="text-4xl font-bold mb-8">Hi, I'm Grok</h1>
              <p className="text-xl text-gray-600">
                Ask me anything — powered by Grok 4.1 Fast
              </p>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-3xl px-5 py-3 rounded-2xl ${
                      msg.isUser
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    {msg.text || "..."}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-200 px-5 py-3 rounded-2xl">
                    <span className="animate-pulse">Thinking</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="p-6 bg-gray-100 border-t">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-full shadow-xl flex items-center p-4 gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Plus size={24} />
              </button>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask Grok anything..."
                className="flex-1 outline-none text-lg"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="p-2 hover:bg-gray-100 rounded-full disabled:opacity-50"
              >
                <Send
                  size={24}
                  className={inputValue.trim() ? "text-blue-600" : ""}
                />
              </button>
            </div>

            {/* Suggestion Pills */}
            {messages.length === 0 && (
              <div className="flex flex-wrap gap-3 justify-center mt-6">
                {[
                  "Explain quantum physics",
                  "Write a poem",
                  "Help me study",
                  "Make me laugh",
                ].map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setInputValue(s);
                    }}
                    className="px-4 py-2 bg-white rounded-full shadow hover:shadow-md transition"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 w-80 bg-white shadow-2xl transform transition-transform duration-300 z-40 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b">
          <button
            onClick={createNewChat}
            className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2"
          >
            <Plus size={20} /> New Chat
          </button>
        </div>

        <div className="overflow-y-auto h-full pb-20">
          {history.map((chat) => (
            <div
              key={chat.id}
              className={`p-4 hover:bg-gray-50 cursor-pointer border-l-4 transition ${
                currentChatId === chat.id
                  ? "border-blue-600 bg-blue-50"
                  : "border-transparent"
              }`}
              onClick={() => switchChat(chat)}
            >
              <div className="flex justify-between items-start">
                <p className="text-sm font-medium truncate flex-1">
                  {chat.title}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenMenuId(openMenuId === chat.id ? null : chat.id);
                  }}
                  className="p-1 hover:bg-gray-200 rounded"
                >
                  <MoreHorizontal size={16} />
                </button>
              </div>
              {openMenuId === chat.id && (
                <div className="mt-2 text-sm space-y-1">
                  <button className="block w-full text-left px-2 py-1 hover:bg-gray-200 rounded">
                    Rename
                  </button>
                  <button className="block w-full text-left px-2 py-1 text-red-600 hover:bg-red-50 rounded">
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIAssistantSection;

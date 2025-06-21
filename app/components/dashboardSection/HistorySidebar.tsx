import React, { useState } from "react";
import { MoreHorizontal, Share2, Edit, Trash2 } from "lucide-react";

export interface HistoryItem {
  id: number;
  text: string;
}

interface HistorySidebarProps {
  isSidebarOpen: boolean;
  historyItems: HistoryItem[];
  setHistoryItems: React.Dispatch<React.SetStateAction<HistoryItem[]>>;
}

export default function HistorySidebar({
  isSidebarOpen,
  historyItems,
  setHistoryItems,
}: HistorySidebarProps) {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const toggleMenu = (id: number) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  const handleShare = (item: HistoryItem) => {
    navigator.clipboard.writeText(item.text);
    alert(`✅ Copied to clipboard:\n"${item.text}"`);
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

  return (
    <div
      className={`fixed inset-y-0 right-0 w-64 mt-20 bg-white shadow-xl transform transition-transform duration-500 ease-in-out z-30 border-l ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-xl font-bold text-black">🕘 History</h2>
      </div>

      <div className="p-2 max-h-[calc(100vh-64px)] overflow-y-auto space-y-2">
        {historyItems.length === 0 ? (
          <p className="text-black text-center mt-10">No history yet</p>
        ) : (
          historyItems.map((item) => (
            <div
              key={item.id}
              className="p-3 rounded-lg hover:bg-gray-50 transition relative group"
            >
              <div className="flex items-center justify-between">
                <span className="text-black font-medium truncate max-w-[160px]">
                  {item.text}
                </span>
                <button
                  onClick={() => toggleMenu(item.id)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <MoreHorizontal size={18} className="text-black hover:bg-gray-200 rounded-full p-1" />
                </button>
              </div>

              {/* Action Menu */}
              {openMenuId === item.id && (
                <div className="absolute right-0 top-10 w-48 bg-white rounded-md shadow-xl z-50">
                  <button
                    onClick={() => handleShare(item)}
                    className="w-full flex items-center px-4 py-2 text-sm text-black hover:bg-gray-100"
                  >
                    <Share2 className="w-4 h-4 mr-2 text-blue-600 hover:bg-blue-100 rounded-full p-1" />
                    Share
                  </button>
                  <button
                    onClick={() => handleRename(item)}
                    className="w-full flex items-center px-4 py-2 text-sm text-black hover:bg-gray-100"
                  >
                    <Edit className="w-4 h-4 mr-2 text-green-600 hover:bg-green-100 rounded-full p-1" />
                    Rename
                  </button>
                  <button
                    onClick={() => handleDelete(item)}
                    className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4 mr-2 text-red-600 hover:bg-red-100 rounded-full p-1" />
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
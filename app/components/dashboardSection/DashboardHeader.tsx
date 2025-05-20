// src/components/DashboardHeader.tsx
import { Search, Filter, LayoutGrid, Plus, SortAsc } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
      {/* Left side: Title + Search */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-1">Smart Matching</h1>
        <p className="text-sm text-gray-500">AI-powered organization of your study content</p>
      </div>

      {/* Right: Search + Controls */}
      <div className="flex items-center gap-2 flex-wrap">
        {/* Search Box */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Controls */}
        <button className="flex items-center gap-1 px-3 py-2 bg-white border rounded-md hover:bg-gray-100 text-gray-700 text-sm">
          <SortAsc size={16} />
          Sort
        </button>
        <button className="flex items-center gap-1 px-3 py-2 bg-white border rounded-md hover:bg-gray-100 text-gray-700 text-sm">
          <LayoutGrid size={16} />
          View
        </button>
        <button className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
          <Plus size={16} />
          Create
        </button>
      </div>
    </div>
  );
}

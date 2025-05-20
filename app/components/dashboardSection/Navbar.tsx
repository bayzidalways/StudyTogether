import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Search,
  Bell,
  Cog,
  User,
  Settings,
  ChevronDown,
  LogOut,
} from "lucide-react";

interface NavbarProps {
  user: {
    name: string;
    email: string;
    avatarUrl: string;
  };
  onFilterToggle: () => void;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onFilterToggle, onLogout }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="bg-white border-b  border-gray-200 px-4 md:px-6 py-4 shadow-sm sticky top-0 z-50 w-full">
      <div className="flex  items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <div className="text-2xl font-bold text-blue-600 flex items-center">
            <i className="fa-solid fa-graduation-cap mr-2 text-blue-600" />
            <NavLink to="/">
              <img src="app/assets/img/logo.png" alt="StudyTogether" />
            </NavLink>
          </div>
        </div>

        {/* Middle: Search bar */}
        <div className="hidden md:flex flex-1 max-w-xl mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white text-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-sm"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>

        {/* Right: Icons and user menu */}
        <div className="flex items-center space-x-1 md:space-x-3">
          {/* Mobile Search */}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors text-black"
          >
            <Search size={28} />
          </button>

          {/* Notification */}
          <button className="relative p-2.5  rounded-full text-bold hover:bg-gray-100 transition-colors text-black">
            <Bell size={28} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Filter */}
          <button
            onClick={onFilterToggle}
            className="relative p-2.5  rounded-full text-bold hover:bg-gray-100 transition-colors text-black"
          >
            <Settings size={28} />
          </button>

          {/* User dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <img
                // src={user.avatarUrl}
                src="public/personal-img/img1.jpg"
                alt={user.name}
                className="w-9 h-9 rounded-full object-cover border border-gray-200"
              />
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-gray-800 leading-tight">
                  {user.name}
                </p>
                <p className="text-xs text-gray-500 leading-none">
                  {user.email}
                </p>
              </div>
              <ChevronDown size={18} className="text-gray-500" />
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg py-2 z-20 border border-gray-200 transform origin-top-right transition-all duration-200 scale-100 opacity-100">
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2.5 text-sm hover:bg-gray-100 transition-colors ${
                      isActive
                        ? "font-medium bg-gray-50 text-blue-600"
                        : "font-normal"
                    }`
                  }
                >
                  <User size={18} className="mr-3" /> My Profile
                </NavLink>
                <NavLink
                  to="/settings"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2.5 text-sm hover:bg-gray-100 transition-colors ${
                      isActive
                        ? "font-medium bg-gray-50 text-blue-600"
                        : "font-normal"
                    }`
                  }
                >
                  <Cog size={18} className="mr-3" /> Settings
                </NavLink>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2.5 text-sm hover:bg-gray-100 transition-colors ${
                      isActive
                        ? "font-medium bg-gray-50 text-blue-600"
                        : "font-normal"
                    }`
                  }
                >
                  <LogOut size={18} className="mr-3" /> Sign out
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      {showSearch && (
        <div className="md:hidden px-4 py-2 bg-white border-b border-gray-200">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 bg-white text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-sm"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

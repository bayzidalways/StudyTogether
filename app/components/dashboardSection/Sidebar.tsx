import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  Brain,
  MessageCircle,
  FileText,
  Target,
  ListCheck,
  Lightbulb,
  PenTool,
  ShieldCheck,
  Cog,
  LogOut,
  LayoutDashboard,
  Braces,
} from "lucide-react";
import React from "react"; // Import React

const mainMenu = [
  { label: "Home", icon: Home, to: "/dashboard" },
  { label: "AI Assistant", icon: Brain, to: "/ai-assistant" },
  { label: "Feedback", icon: MessageCircle, to: "/feedback" },
  { label: "Reports", icon: FileText, to: "/reports" },
  { label: "Goals", icon: Target, to: "/goals" },
  { label: "Surveys", icon: ListCheck, to: "/surveys" },
];

const teamsMenu = [
  { label: "Marketing", icon: Lightbulb, to: "/teams/marketing" },
  { label: "Design", icon: PenTool, to: "/teams/design" },
  { label: "Security", icon: ShieldCheck, to: "/teams/security" },
  { label: "Operations", icon: Cog, to: "/teams/operations" },
];

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const handleSignOut = () => {
    // Implement your sign out logic here, e.g., clearing auth tokens
    navigate("/"); // Redirect to login page after sign out
  };

  return (
    <aside className="w-64 h-screen fixed bg-gradient-to-b from-white to-blue-50 border-r z-40 shadow-md px-4 py-6 hidden md:flex flex-col flex-shrink-0">
      <div className=" ">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2">
            <LayoutDashboard size={30} className="text-blue-600" />
            <span className="text-2xl font-bold text-blue-600 tracking-wide">
              Dashboard
            </span>
          </div>
        </div>

        <nav className="space-y-2 mb-6">
          <p className="text-lg text-gray-400 uppercase font-semibold mb-2">
            Main
          </p>
          {mainMenu.map(({ label, icon: Icon, to }) => (
            <Link
              key={label}
              to={to}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-lg font-medium transition-colors ${
                isActive(to)
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`}
              aria-label={label}
            >
              <Icon size={22} />
              {label}
            </Link>
          ))}
        </nav>

        <nav className="space-y-2">
          <p className="text-lg text-gray-400 uppercase font-semibold mb-2">
            Teams
          </p>
          {teamsMenu.map(({ label, icon: Icon, to }) => (
            <Link
              key={label}
              to={to}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-lg font-medium transition-colors ${
                isActive(to)
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`}
              aria-label={label}
            >
              <Icon size={22} />
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t pt-24">
        <div className="flex items-center gap-3 mb-2">
          <img
            src="https://i.pravatar.cc/40?img=3"
            alt="User  Avatar"
            className="w-10 h-10 rounded-full object-cover border"
          />
          <div>
            <p className="text-md font-semibold text-gray-800">John Smith</p>
            <p className="text-sm text-gray-500">johnsmith@email.com</p>
          </div>
        </div>
        <button
          className="mt-4 flex mx-auto items-center gap-2 text-red-500 text-lg font-medium hover:text-red-600 transition-colors"
          onClick={handleSignOut}
          aria-label="Sign out"
        >
          <LogOut size={20} />
          Sign out
        </button>
      </div>
    </aside>
  );
}

// app/components/Header.tsx
import { Link, NavLink } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", to: "/" },
  { name: "Features", to: "/tasks" },
  { name: "Support", to: "/notes" },
  { name: "Contact Us", to: "/profile" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-md sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          StudyTogether
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `text-base font-medium ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          {/*Register Button */}
          <NavLink to="/signup">
            <Button
              className="bg-blue-600 text-white hover:bg-blue-700"
              variant="outline"
            >
              Register
            </Button>
          </NavLink>

          {/* Login / Logout Button */}
          <Button variant="outline" className="">
            Login
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className="block text-base font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}

          <Button variant="outline" className="w-full mt-2">
            Login
          </Button>
          <NavLink to="/signup" onClick={() => setMenuOpen(false)}>
            <Button variant="outline" className="w-full mt-2">
              Register
            </Button>
          </NavLink>
        </div>
      )}
    </header>
  );
}

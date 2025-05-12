import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", to: "/" },
  { name: "Features", to: "/features" },
  { name: "Support", to: "/support" },
  { name: "Contact", to: "/contact" },
];

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky
          ? "bg-white/90 backdrop-blur shadow-md text-gray-800"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          StudyTogether
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `text-base font-medium  transition duration-200 ${
                  isSticky
                    ? isActive
                      ? "text-blue-700"
                      : "text-gray-700 hover:text-blue-600"
                    : isActive
                    ? "text-white"
                    : "text-white hover:text-blue-200"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <Link
            to="/signup"
            className={`px-4 py-2 rounded-md font-medium transition duration-300 ${
              isSticky
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white text-blue-600 hover:bg-blue-100"
            }`}
          >
            Register
          </Link>

          <Link
            to="/login"
            className={`px-4 py-2 rounded-md border font-medium transition duration-300 ${
              isSticky
                ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                : "border-white text-white hover:bg-white hover:text-blue-600"
            }`}
          >
            Sign In
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden ${isSticky ? "text-gray-800" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-4 space-y-2 shadow-lg rounded-md">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="block text-base font-medium text-gray-700 hover:text-blue-600"
            >
              {item.name}
            </NavLink>
          ))}
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            <div className="w-full mt-2 text-center border border-blue-300 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50">
              Login
            </div>
          </Link>
          <Link to="/signup" onClick={() => setMenuOpen(false)}>
            <div className="w-full mt-2 text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Register
            </div>
          </Link>
        </div>
      )}
    </header>
  );
}

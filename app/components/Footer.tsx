import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t py-10 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top: Logo + Link Groups */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10 mb-10">
          {/* Logo & About */}
          <div>
            <div className="flex items-center mb-3">
              <img
                src="https://via.placeholder.com/100"
                alt="StudyTogether Logo"
                className="h-8 mr-2"
              />
              <span className="text-xl font-bold text-blue-600">
                StudyTogether
              </span>
            </div>
            <p className="max-w-xs text-gray-500">
              StudyTogether helps students collaborate in real-time, stay
              focused, and get AI-powered study assistance — all in one place.
            </p>
          </div>

          {/* Link Groups */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <h4 className="text-gray-800 font-semibold mb-2">Product</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-800 font-semibold mb-2">Resources</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    User Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Webinars
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-800 font-semibold mb-2">Company</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-800 font-semibold mb-2">Plans</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Personal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Start Up
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Organization
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t pt-6 space-y-4 md:space-y-0">
          {/* Language Selector */}
          <select className="border border-gray-300 px-3 py-2 rounded-md">
            <option>English</option>
            {/* Add more languages as needed */}
          </select>

          {/* Legal Links */}
          <div className="text-sm text-gray-500">
            &copy; 2025 StudyTogether, Inc. &middot;
            <a href="#" className="ml-2 hover:text-blue-600">
              Privacy
            </a>{" "}
            &middot;
            <a href="#" className="ml-2 hover:text-blue-600">
              Terms
            </a>{" "}
            &middot;
            <a href="#" className="ml-2 hover:text-blue-600">
              Sitemap
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-600">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="hover:text-blue-600">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="hover:text-blue-600">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className="hover:text-blue-600">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

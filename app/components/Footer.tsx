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
    <footer className="bg-white py-6 px-4 text-center">
      {/* Logo section */}
      <div className="mb-4">
        <img
          src="https://via.placeholder.com/100" // Replace this with actual logo URL
          alt="LearnPro Logo"
          className="h-8 inline-block mr-2"
        />
        <span className="text-lg font-bold text-indigo-500">StudyTogether</span>
      </div>
      {/* Link groups section */}
      <div className="flex justify-center mb-4">
        <div className="mr-16 ">
          <h3 className="text-gray-800 text-lg font-bold mb-2">Product</h3>

          <ul className="text-left">
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-500">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-500">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div className="mr-16">
          <h3 className="text-gray-800 text-lg font-bold mb-2">Resources</h3>
          <ul className="text-left">
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-500">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-500">
                User guides
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-500">
                Webinars
              </a>
            </li>
          </ul>
        </div>
        <div className="mr-16">
          <h3 className="text-gray-800 text-lg font-bold mb-2">Company</h3>
          <ul className="text-left">
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-500">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-500">
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-800 text-lg font-bold mb-2">
            Plans & Pricing
          </h3>
          <ul className="text-left">
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-500">
                Personal
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-500">
                Start up
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-500">
                Organization
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom section with language, copyright and social media */}
      <div className="flex justify-between items-center">
        <div>
          <select className="border border-gray-300 p-2 rounded">
            <option>English</option>
            {/* Add more language options as needed */}
          </select>
        </div>
        <div className="text-gray-600 text-sm">
          &copy; 2025 Brand, Inc. &middot;
          <a href="#" className="text-gray-600 hover:text-indigo-500 ml-1">
            Privacy
          </a>{" "}
          &middot;
          <a href="#" className="text-gray-600 hover:text-indigo-500 ml-1">
            Terms
          </a>{" "}
          &middot;
          <a href="#" className="text-gray-600 hover:text-indigo-500 ml-1">
            Sitemap
          </a>
        </div>
        <div className="flex">
          <a href="#" className="text-gray-600 hover:text-indigo-500 mr-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-indigo-500 mr-2">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-indigo-500 mr-2">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-indigo-500">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

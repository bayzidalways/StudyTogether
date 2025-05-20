import React from "react";
import { Twitter, Facebook, Linkedin, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="  bg-white border-t py-10 text-sm text-gray-600">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between gap-10 mb-10 max-w-[90%] mx-auto">
        {/* Logo + About */}
        <div>
          <div className="flex items-center mb-1">
            <img
              src="app/assets/img/logo.png"
              alt="StudyTogether"
              className="h-10 mr-3"
            />
          </div>
          <p className="max-w-xs text-gray-500">
            StudyTogether helps students collaborate in real-time, stay focused,
            and get AI-powered study assistance — all in one place.
          </p>
        </div>

        {/* Link Groups */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
          {[
            { title: "Product", links: ["Features", "Pricing"] },
            {
              title: "Resources",
              links: ["Blog", "User Guides", "Webinars"],
            },
            { title: "Company", links: ["About Us", "Contact"] },
            {
              title: "Plans",
              links: ["Personal", "Start Up", "Organization"],
            },
          ].map((group) => (
            <div key={group.title}>
              <h4 className="text-gray-800 font-semibold mb-2">
                {group.title}
              </h4>
              <ul className="space-y-1">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-blue-600">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t w-full"></div>
      <div className="flex flex-col  md:flex-row items-center justify-between max-w-[90%] mx-auto  pt-6 space-y-4 md:space-y-0">
        {/* Language Selector */}
        <select className="border border-gray-300 px-3 py-2 rounded-md text-sm">
          <option>English</option>
        </select>

        {/* Legal Links */}
        <div className="text-gray-500 text-sm text-center">
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

        {/* Social Icons */}
        <div className="flex space-x-4 text-gray-600 text-[20px]">
          <a href="#" className="hover:text-blue-600">
            <Twitter />
          </a>
          <a href="#" className="hover:text-blue-600">
            <Facebook />
          </a>
          <a href="#" className="hover:text-blue-600">
            <Linkedin />
          </a>
          <a href="#" className="hover:text-blue-600">
            <Youtube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { TbFilterBolt } from "react-icons/tb";
const FilterPanel = () => {
  return (
    <aside className="hidden lg:block w-72 fixed right-0 top-0 h-screen bg-white border-l border-gray-200 shadow-lg px-6 py-8 overflow-y-auto z-30">
      {/* Header */}
      <h3 className="text-2xl font-semibold mt-20 mb-8 text-blue-700 flex items-center">
        <span className="mr-2">
          <TbFilterBolt size={30} />
        </span>{" "}
        Filters
      </h3>

      {/* Filter Groups */}
      <div className="space-y-8">
        {/* File Type Filters */}
        <div>
          <p className="text-lg font-semibold text-gray-600 uppercase mb-4 tracking-wide">
            File Type
          </p>
          <div className="space-y-4 text-lg text-gray-700 ">
            {[
              "Study Documents",
              "Capture Moments",
              "Music Files",
              "Videos",
            ].map((label, index) => (
              <label
                key={index}
                className="flex items-center cursor-pointer hover:text-blue-600 transition-colors"
              >
                <input
                  type="checkbox"
                  className="mr-3 h-4 w-4  text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  defaultChecked={
                    label === "Study Documents" || label === "Capture Moments"
                  }
                />
                {label}
              </label>
            ))}
          </div>
        </div>

        {/* Study Partners Filters */}
        <div>
          <p className="text-lg font-semibold text-gray-600 uppercase mb-4 tracking-wide">
            Study Partners
          </p>
          <div className="space-y-4 text-lg text-gray-700">
            {["My Profile", "Study Team"].map((label, index) => (
              <label
                key={index}
                className="flex items-center cursor-pointer hover:text-blue-600 transition-colors"
              >
                <input
                  type="checkbox"
                  className="mr-3 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                {label}
              </label>
            ))}
          </div>
        </div>

        {/* You can add more sections like Tags, Date, etc. below */}
      </div>
    </aside>
  );
};

export default FilterPanel;

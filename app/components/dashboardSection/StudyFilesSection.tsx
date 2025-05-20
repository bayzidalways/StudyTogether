import React from "react";

interface StudyFile {
  name: string;
  description: string;
  icon: React.ElementType; // This works for react-icons
  imageUrl: string;
}

interface StudyFilesSectionProps {
  files: StudyFile[];
}

const StudyFilesSection: React.FC<StudyFilesSectionProps> = ({ files }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Study Files</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {files.map((file, index) => {
          const Icon = file.icon;
          return (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-center items-center mb-4 h-16">
                <Icon size={32} className="text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-center">{file.name}</h3>
              <p className="text-sm text-gray-600 text-center">
                {file.description}
              </p>
              {file.imageUrl && (
                <img
                  src={file.imageUrl}
                  alt={file.name}
                  className="mt-3 w-full h-32 object-cover rounded-md"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudyFilesSection;

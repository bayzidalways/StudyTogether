import React from "react";
import FilterPanel from "~/components/dashboardSection/FilterPanel";
// DashboardHeader Component
const DashboardHeader: React.FC = () => {
  return (
    <header className="flex justify-between items-center pb-6 border-b border-gray-200">
      <h1 className="text-3xl font-bold text-gray-900">Smart Matching</h1>
    </header>
  );
};

// MediaCategoryCard Component
interface MediaCategoryCardProps {
  type: "Music" | "Videos" | "Documents" | "Images";
}

const MediaCategoryCard: React.FC<MediaCategoryCardProps> = ({ type }) => {
  const getIcon = (mediaType: string) => {
    switch (mediaType) {
      case "Music":
        return "🎵";
      case "Videos":
        return "🎬";
      case "Documents":
        return "📄";
      case "Images":
        return "🖼️";
      default:
        return "📁";
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer flex flex-col items-center text-center">
      <div className="text-4xl mb-3">{getIcon(type)}</div>
      <h3 className="text-lg font-semibold text-gray-800">{type}</h3>
      <p className="text-sm text-gray-500">3,239 files</p>
      <p className="text-sm text-gray-500">58 MB</p>
    </div>
  );
};

// StudyFileCard Component
interface StudyFileCardProps {
  title: string;
  type: "video" | "music" | "image" | "doc";
}

const StudyFileCard: React.FC<StudyFileCardProps> = ({ title, type }) => {
  const getIcon = (fileType: string) => {
    switch (fileType) {
      case "video":
        return "📹";
      case "music":
        return "🎧";
      case "image":
        return "📸";
      case "doc":
        return "📝";
      default:
        return "📁";
    }
  };

const getFileImage = (fileType: string) => {
  const imageMap: Record<string, string> = {
    video: "https://picsum.photos/seed/video/200/150",
    music: "https://picsum.photos/seed/music/200/150",
    image: "https://picsum.photos/seed/image/200/150",
    doc: "https://picsum.photos/seed/document/200/150",
    default: "https://picsum.photos/seed/file/200/150"
  };

  return imageMap[fileType] || imageMap.default;
}; 

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer overflow-hidden">
      <div className="h-36 overflow-hidden">
        <img
          src={getFileImage(type)}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-2">
          <div className="text-xl">{getIcon(type)}</div>
          <h4 className="text-md font-medium text-gray-800">{title}</h4>
        </div>
        <p className="text-sm text-gray-500 capitalize">{type}</p>
      </div>
    </div>
  );
};



// Dashboard Page Component
export default function Dashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <div className="flex-1 px-6 py-6 ml-64">
        {" "}
        {/* Added margin-left to push content right */}
        <DashboardHeader />
        <section className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            AI Assistant
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            <MediaCategoryCard type="Music" />
            <MediaCategoryCard type="Videos" />
            <MediaCategoryCard type="Documents" />
            <MediaCategoryCard type="Images" />
          </div>
        </section>
        <section className="mt-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Your Study Files
            </h2>
            <span className="text-sm text-gray-500 hidden sm:block">
              Last updated 2 days ago
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            <StudyFileCard title="Important Notes" type="doc" />
            <StudyFileCard title="Study Playlist" type="music" />
            <StudyFileCard title="Study Mix" type="music" />
            <StudyFileCard title="Study Image" type="image" />
            <StudyFileCard title="Educational Movie" type="video" />
            <StudyFileCard title="Study Plan" type="doc" />
            <StudyFileCard title="Study Group Photo" type="image" />
            <StudyFileCard title="Lecture Recording" type="video" />
            <StudyFileCard title="Research Paper" type="doc" />
            <StudyFileCard title="Presentation Slides" type="doc" />
          </div>
        </section>
      </div>

      <div className="hidden lg:block w-72 border-l bg-white px-4 py-6">
        <FilterPanel />
      </div>
    </div>
  );
}

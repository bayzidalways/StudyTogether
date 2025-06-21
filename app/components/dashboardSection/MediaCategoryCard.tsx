// src/components/MediaCategoryCard.tsx
import { Music, Video, FileText, Image } from "lucide-react";
import type { JSX } from "react";

interface Props {
  type: "Music" | "Videos" | "Documents" | "Images";
}

const icons: Record<string, JSX.Element> = {
  Music: <Music size={32} />,
  Videos: <Video size={32} />,
  Documents: <FileText size={32} />,
  Images: <Image size={32} />,
};

const MediaCategoryCard: React.FC<Props> = ({ type }) => {
  return (
    <div className="bg-white border rounded-lg shadow-sm p-4 flex flex-col items-center justify-center text-center hover:shadow-md transition">
      <div className="text-blue-600 mb-2">{icons[type]}</div>
      <p className="font-semibold">{type}</p>
      <p className="text-sm text-gray-500">3,229 files · 58 MB</p>
    </div>
  );
};

export default MediaCategoryCard;

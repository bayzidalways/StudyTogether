// src/components/StudyFileCard.tsx
import { FileText, Music, Video, Image as ImageIcon } from "lucide-react";

interface Props {
  title: string;
  type: "video" | "music" | "doc" | "image";
}

const iconMap = {
  video: <Video size={18} />,
  music: <Music size={18} />,
  doc: <FileText size={18} />,
  image: <ImageIcon size={18} />,
};

const StudyFileCard: React.FC<Props> = ({ title, type }) => {
  return (
    <div className="bg-white border rounded-lg shadow hover:shadow-md transition p-3 relative">
      <div className="absolute top-2 left-2 text-blue-600">{iconMap[type]}</div>
      <div className="mt-8 text-center">
        <p className="text-sm font-semibold">{title}</p>
      </div>
    </div>
  );
};

export default StudyFileCard;

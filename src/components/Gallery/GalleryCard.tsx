import React from "react";
import { Link } from "react-router-dom";
import DifficultyLabel from "../DifficultyLabel/DifficultyLabel";

interface GalleryCardProps {
  card: any;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ card }) => {
  return (
    <>
      <Link to={""}>
        <div className="duration-250 relative block overflow-hidden rounded-lg bg-white shadow-[0_0_1px_rgba(20,21,26,0.1),0_7px_14px_rgba(71,77,87,0.08),0_3px_6px_rgba(20,21,26,0.08)] transition-shadow ease-in hover:shadow-[0_0_1px_rgba(20,21,26,0.1),0_16px_32px_rgba(71,77,87,0.16),0_8px_16px_rgba(20,21,26,0.16)]">
          <div className="z-5 font-500 absolute left-5 top-5 flex gap-2 font-sans text-sm text-white">
            {card.topic.map((topic: string) => (
              <div className="mb-1 mr-1 flex h-[28px] select-none items-center justify-center rounded-full bg-black px-3 py-[2px] text-xs font-semibold text-white">
                {topic}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start">
            <div
              className="mb-5 h-[200px] w-full bg-gray-500"
              style={{
                backgroundImage: "url()",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="font-600 mb-5 min-h-14 w-full px-5 text-xl">
              {card.title}
            </div>
            <div className="flex items-center px-5 pb-5">
              <DifficultyLabel
                label="Beginner"
                bgColor="rgba(2,192,118,0.2)"
                hoverColor="rgba(2,192,118,0.2)"
                dotColor="rgba(2,192,118,1)"
              />
              <div className="mb-2 flex items-center font-mono text-xs text-gray-400">
                {card.date}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default GalleryCard;

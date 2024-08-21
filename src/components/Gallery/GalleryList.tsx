import React from "react";
import { Link } from "react-router-dom";
import DifficultyLabel from "../DifficultyLabel/DifficultyLabel";

interface GalleryListProps {
  card: any;
}

const GalleryList: React.FC<GalleryListProps> = ({ card }) => {
  return (
    <>
      <Link to={""}>
        <div className="duration-250 relative block h-[180px] overflow-hidden rounded-2xl bg-white transition-shadow ease-in hover:shadow-[0_0_1px_rgba(20,21,26,0.1),0_8px_16px_rgba(71,77,87,0.16),0_4px_8px_rgba(20,21,26,0.16)]">
          <div className="z-5 font-500 absolute left-5 top-5 flex gap-2 font-sans text-sm text-white">
            {card.topic.map((topic: string, index: number) => (
              <div
                key={index}
                className="mb-1 mr-1 flex h-[28px] select-none items-center justify-center rounded-full bg-black px-3 py-[2px] text-xs font-semibold text-white"
              >
                {topic}
              </div>
            ))}
          </div>
          <div className="flex h-full w-full items-start">
            {/* img */}
            <div
              className="h-full w-[30%] rounded-2xl bg-gray-500"
              style={{
                backgroundImage: "url()",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            {/* text */}
            <div className="box-border flex h-full w-[70%] flex-col justify-between py-[2%]">
              <div className="font-600 max-h-8 w-full overflow-hidden truncate px-5 text-xl">
                {card.title}
              </div>
              <div className="font-600 text-md max-h-13 line-clamp-2 w-full overflow-hidden text-ellipsis px-5 text-gray-500">
                {card.detail}
              </div>
              <div className="flex items-center px-5">
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
        </div>
      </Link>
    </>
  );
};

export default GalleryList;

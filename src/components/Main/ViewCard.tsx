import React from "react";

interface ViewCardProps {
  card: any;
}

const ViewCard: React.FC<ViewCardProps> = ({ card }) => {
  return (
    <>
      <div className="w-[33.333333%] h-full rounded-xl overflow-hidden cursor-pointer shadow">
        <div
          className="w-full h-[60%] bg-gray-300"
          style={
            {
              // backgroundImage: "url()",
              // backgroundSize: "cover",
              // backgroundPosition: "center",
            }
          }
        ></div>
        <div className="px-5 py-4 h-[40%] bg-white flex flex-col justify-between">
          <div className="text-black font-300 h-[50px] overflow-hidden text-ellipsis whitespace-normal line-clamp-2">
            {card.title}
          </div>
          <div className="font-mono text-xs text-gray-400 h-[30%] flex items-center">
            {card.writer} - {card.date} - {card.comments || "No"} Comments
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCard;

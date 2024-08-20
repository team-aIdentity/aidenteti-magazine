import React from "react";

interface ViewCardProps {
  card: any;
}

const ViewCard: React.FC<ViewCardProps> = ({ card }) => {
  return (
    <>
      <div className="h-full w-[33.333333%] cursor-pointer overflow-hidden rounded-xl shadow">
        <div
          className="h-[60%] w-full bg-gray-300"
          style={
            {
              // backgroundImage: "url()",
              // backgroundSize: "cover",
              // backgroundPosition: "center",
            }
          }
        ></div>
        <div className="flex h-[40%] flex-col justify-between bg-white px-5 py-4">
          <div className="font-300 line-clamp-2 h-[50px] overflow-hidden text-ellipsis whitespace-normal text-black">
            {card.title}
          </div>
          <div className="flex h-[30%] items-center font-mono text-xs text-gray-400">
            {card.writer} - {card.date} - {card.comments || "No"} Comments
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCard;

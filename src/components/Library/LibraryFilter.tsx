import React from "react";
import DifficultyLabel from "../DifficultyLabel/DifficultyLabel";

const topicList = ["topic1", "topic2", "topic3", "topic4", "topic5", "topic6"];

const LibraryFilter = () => {
  return (
    <>
      <div className="mt-[80px] w-full px-[10vw] py-[5vh]">
        <h1 className="mb-8 font-serif text-3xl">Topics at Library</h1>
        <div className="flex w-full gap-4">
          <div className="flex w-[50%] flex-col gap-4">
            <span>Topics</span>
            <div className="flex flex-wrap gap-1">
              {topicList.map((topic) => (
                <div className="mb-2 mr-2 flex h-[28px] cursor-pointer select-none items-center justify-center rounded-full border border-transparent bg-gray-200 px-3 py-[2px] text-xs font-semibold text-gray-900 opacity-60 hover:bg-gray-100">
                  {topic}
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-[50%] flex-col gap-4">
            <span>Difficulty</span>
            <div className="flex flex-wrap gap-1">
              <DifficultyLabel
                label="Beginner"
                bgColor="rgba(2,192,118,0.2)"
                hoverColor="rgba(2,192,118,0.2)"
                dotColor="rgba(2,192,118,1)"
              />
              <DifficultyLabel
                label="Intermediate"
                bgColor="rgba(240,185,11,0.2)"
                hoverColor="rgba(240,185,11,0.3)"
                dotColor="rgba(240,185,11,1)"
              />
              <DifficultyLabel
                label="Advanced"
                bgColor="rgba(217,48,78,0.2)"
                hoverColor="rgba(217,48,78,0.3)"
                dotColor="rgba(217,48,78,1)"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-300 px-[10vw] py-[5vh]"></div>
    </>
  );
};

export default LibraryFilter;

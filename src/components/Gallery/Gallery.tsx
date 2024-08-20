import React from "react";
import PaginationContainer from "./PaginationContainer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import GalleryCard from "./GalleryCard";

// dummy list
const dummy = [
  {
    title: "What Are Smart Contracts and How Do They Work?",
    level: 0,
    date: "Aug 7, 2024",
    topic: ["topic1", "topic3"],
  },
  {
    title: "dummy2",
    level: 1,
    date: "Aug 7, 2024",
    topic: ["topic1"],
  },
  {
    title: "dummy3",
    level: 2,
    date: "Aug 7, 2024",
    topic: ["topic2", "topic3"],
  },
];

const Gallery = () => {
  return (
    <>
      <div className="h-auto w-full bg-gray-100 px-[10vw] py-[5vh]">
        {/* top */}
        <div className="mb-8 flex items-center justify-between">
          <div className="h-full font-serif text-2xl">
            Articles ({dummy.length})
          </div>
          <div>
            <Select defaultValue="publish">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="view">Most viewed</SelectItem>
                <SelectItem value="publish">Recently published</SelectItem>
                <SelectItem value="update">Recently updated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* middle */}
        <div className="mb-8 grid grid-cols-3 gap-4">
          {dummy.map((card) => (
            <GalleryCard card={card} />
          ))}
        </div>

        {/* bottom */}
        <PaginationContainer />
      </div>
    </>
  );
};

export default Gallery;

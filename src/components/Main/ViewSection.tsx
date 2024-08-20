import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import ViewCard from "./ViewCard";

interface ViewSectionProps {
  title: string;
  href: string;
}

interface IViewCardList {
  id: number;
  title: string;
  url?: string;
  writer: string;
  date: string;
  comments?: number;
}

const viewCardList: IViewCardList[] = [
  {
    id: 1,
    title:
      "어쩌구저쩌구 asdfjas lfjks;ladj f;lsjad faksj;fl kajs;fkl; asjdf;jasdfl;k jsfkljsdklfjkl",
    url: "",
    writer: "Admin",
    date: "June 2, 2024",
    comments: 2,
  },
  {
    id: 2,
    title: "블라블라",
    url: "",
    writer: "Admin",
    date: "July 20, 2024",
  },
  {
    id: 3,
    title: "흠",
    url: "",
    writer: "Admin",
    date: "Aug 10, 2024",
  },
];

const ViewSection: React.FC<ViewSectionProps> = ({ title, href }) => {
  return (
    <>
      <div className="flex h-[500px] flex-col items-center justify-center px-[10%]">
        <div className="h-full w-full">
          <div className="relative h-[30%]">
            <span className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 transform font-serif text-3xl">
              {title}
            </span>
            <Button
              variant="destructive"
              className="absolute right-0 top-[50%] -translate-y-1/2 transform bg-[#0B60B0] text-xs hover:bg-[#40A2D8]"
            >
              <Link to={href}>VIEW ALL BLOG</Link>
            </Button>
          </div>

          <div className="flex h-[70%] items-center justify-center gap-4">
            {viewCardList.map((card) => (
              <ViewCard card={card} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewSection;

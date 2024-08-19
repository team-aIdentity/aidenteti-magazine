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
      <div className="h-[500px] flex flex-col justify-center items-center px-[10%]">
        <div className="w-full h-full">
          <div className="relative h-[30%]">
            <span className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-3xl font-serif">
              {title}
            </span>
            <Button
              variant="destructive"
              className="bg-[#0B60B0] text-xs absolute top-[50%] right-0 transform -translate-y-1/2 hover:bg-[#40A2D8]"
            >
              <Link to={href}>VIEW ALL BLOG</Link>
            </Button>
          </div>

          <div className="h-[70%] flex items-center justify-center gap-4">
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

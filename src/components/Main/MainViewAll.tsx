import React from "react";
import ViewSection from "./ViewSection";

interface IViewList {
  title: string;
  href: string;
}

const viewList: IViewList[] = [
  {
    title: "Library",
    href: "/library",
  },
  {
    title: "Trend",
    href: "/trend",
  },
];

const MainViewAll = () => {
  return (
    <div className="py-[5%]">
      {viewList.map((view) => (
        <ViewSection title={view.title} href={view.href} />
      ))}
    </div>
  );
};

export default MainViewAll;

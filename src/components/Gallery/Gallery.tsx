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
import GalleryList from "./GalleryList";

// dummy list
const dummy = [
  {
    title:
      "What Are Smart Contracts and How Do They Work? asdf  asdfdsaf adsf asdf fasdf asdf",
    detail:
      "asdfasdf asdfasdfasdfasd lkjasl;dfj ;lkfj ;lakdsf;laskdfj; la;sldkfj;lksfj ;a;sdfk; lfjakl;sdfj ;lkasjdf;lkjas;ldf asd;flk ajls;df jlk;aj;k; asdfj;lka al;skdfj;la  l;aksjf;l k aslk;djf kl;asd ;kl asd;flk ;asljf ;lkasd fkl;jas f;lkasdfl; kjasdf;l k asdj;klf j;alfjl;k",
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

interface GalleryProps {
  isGallery: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ isGallery }) => {
  return (
    <>
      <div className="h-auto w-full px-[10vw] py-[5vh]">
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
        {isGallery ? (
          <>
            <div className="mb-8 grid grid-cols-3 gap-4">
              {dummy.map((card, index) => (
                <GalleryCard key={index} card={card} />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="mb-8 grid grid-cols-1 grid-rows-5 gap-4">
              {dummy.map((card, index) => (
                <GalleryList key={index} card={card} />
              ))}
            </div>
          </>
        )}

        {/* bottom */}
        <PaginationContainer />
      </div>
    </>
  );
};

export default Gallery;

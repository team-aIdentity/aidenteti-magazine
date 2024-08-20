import Gallery from "@/components/Gallery/Gallery";
import LibraryFilter from "@/components/Library/LibraryFilter";
import Navigation from "@/components/Navigation/Navigation";
import React from "react";

const LibraryPage = () => {
  return (
    <>
      <Navigation />

      <LibraryFilter />

      <Gallery />
    </>
  );
};

export default LibraryPage;

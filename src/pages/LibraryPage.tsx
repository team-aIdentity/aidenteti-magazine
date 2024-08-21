import Gallery from "@/components/Gallery/Gallery";
import GallerySelect from "@/components/Gallery/GallerySelect";
import LibraryFilter from "@/components/Library/LibraryFilter";
import Navigation from "@/components/Navigation/Navigation";
import React, { useState } from "react";

const LibraryPage = () => {
  const [isGallery, setIsGallery] = useState<boolean>(true);

  return (
    <>
      <Navigation />

      <LibraryFilter />

      <GallerySelect
        isGallery={isGallery}
        setIsGallery={setIsGallery}
        marginTop={"0px"}
      />

      <Gallery isGallery={isGallery} />
    </>
  );
};

export default LibraryPage;

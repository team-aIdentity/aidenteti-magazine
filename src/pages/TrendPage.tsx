import Gallery from "@/components/Gallery/Gallery";
import GallerySelect from "@/components/Gallery/GallerySelect";
import Navigation from "@/components/Navigation/Navigation";
import React, { useState } from "react";

const TrendPage = () => {
  const [isGallery, setIsGallery] = useState<boolean>(true);

  return (
    <>
      <Navigation />

      <GallerySelect
        isGallery={isGallery}
        setIsGallery={setIsGallery}
        marginTop="80px"
      />

      <Gallery isGallery={isGallery} />
    </>
  );
};

export default TrendPage;

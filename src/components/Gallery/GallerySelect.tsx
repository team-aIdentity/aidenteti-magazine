import React from "react";

interface GallerySelectProps {
  isGallery: boolean;
  setIsGallery: React.Dispatch<React.SetStateAction<boolean>>;
  marginTop: string;
}

const GallerySelect: React.FC<GallerySelectProps> = ({
  isGallery,
  setIsGallery,
  marginTop,
}) => {
  return (
    <div
      className={`mt-[${marginTop}] flex h-[40px] w-full items-center bg-gray-100 px-[10vw] py-[3vh]`}
    >
      <div className="font-300 font-500 mr-2 text-gray-600">Layout</div>
      <div
        className={`mr-1 h-[24px] w-[24px] cursor-pointer rounded-sm hover:bg-gray-200 bg-${isGallery ? "gray-200" : "transparent"}`}
        onClick={() => setIsGallery(true)}
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage: "url('/pictogram_gallery.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div
        className={`h-[24px] w-[24px] cursor-pointer rounded-sm hover:bg-gray-200 bg-${isGallery ? "transparent" : "gray-200"}`}
        onClick={() => setIsGallery(false)}
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage: "url('/pictogram_list.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );
};

export default GallerySelect;

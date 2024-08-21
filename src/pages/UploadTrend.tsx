import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useState } from "react";

const dummy = [
  {
    url: "/example1.jpeg",
  },
  {
    url: "/example2.jpeg",
  },
];

const UploadTrend = () => {
  const [title, setTitle] = useState<string>("제목을 입력하세요.");
  const [detail, setDetail] = useState<string>("본문을 입력하세요.");
  const [fileArr, setFileArr] = useState<File[] | null>();
  const [previewArr, setPreviewArr] = useState<string[]>([]);

  const handleFileArr = (fileList: FileList | null) => {
    if (!fileList) return;
    if (fileList?.length > 10) {
      alert("이미지는 10장 이내로");
      return;
    }
    const selectedFiles = Array.from(fileList || []);
    setFileArr(selectedFiles);
  };

  useEffect(() => {
    if (!fileArr) return;
    if (fileArr.length === 0) return;

    const previewsArray: string[] = [];

    fileArr.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        previewsArray.push(reader.result as string);

        if (previewsArray.length === fileArr.length) {
          setPreviewArr(previewsArray);
        }
      };
      reader.readAsDataURL(file);
    });
  }, [fileArr]);

  //   useEffect(() => {
  //     if (!fileArr) return;
  //     fileArr.map((file) => {
  //       changeToBase64(file.name);
  //     });
  //   }, [fileArr]);

  //   const changeToBase64 = (name: string) => {
  //     let reader = new FileReader();
  //     reader.onload = () => {

  //     };
  //   };

  return (
    <>
      {/* 입력창 */}
      <div className="flex justify-between">
        <div className="h-full w-[50%] p-1">
          <div className="flex flex-col gap-4">
            <label className="font-400 px-3 font-serif text-lg">Title</label>
            <Input
              value={title}
              className="text-lg"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="font-400 px-3 font-serif text-lg">Detail</label>
            <Textarea
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              className="h-[40vh] resize-none"
            />
            <label className="font-400 px-3 font-serif text-lg">Image</label>
            <Input
              type="file"
              multiple
              onChange={(e) => handleFileArr(e.target.files)}
            />
          </div>
        </div>

        {/* 미리보기 */}
        <div className="flex h-full w-[50%] flex-col justify-between gap-2 p-1">
          {/* images */}
          <div>
            <Carousel>
              <CarouselContent>
                {previewArr.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center overflow-hidden p-6">
                          <div className="flex h-full w-full items-center justify-center overflow-hidden">
                            <img src={src} />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hover:bg-transparent" />
              <CarouselNext className="hover:bg-transparent" />
            </Carousel>
          </div>
          {/* title */}
          <Input value={title} className="text-lg" disabled />
          {/* detail */}
          <Textarea value={detail} className="h-[20vh] resize-none" disabled />
        </div>
      </div>
    </>
  );
};

export default UploadTrend;

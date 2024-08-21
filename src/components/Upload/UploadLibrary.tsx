import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const UploadLibrary = () => {
  const [title, setTitle] = useState<string>("제목을 입력하세요.");
  const [markdown, setMarkdown] = useState<string>("본문을 입력하세요.");

  const insertText = (text: string) => {
    setMarkdown((prev) => prev + "\n" + text);
  };

  return (
    <>
      <div>
        {/* helper */}
        <div className="mb-8 flex h-[40px] w-full justify-between">
          <div className="flex gap-1">
            <Button
              variant="outline"
              onClick={() => insertText("<div style='fontSize: 24px'></div>")}
            >
              큰 제목
            </Button>
            <Button
              variant="outline"
              onClick={() => insertText("<div style='fontSize: 20px'></div>")}
            >
              중간 제목
            </Button>
            <Button variant="outline" onClick={() => insertText("<div></div>")}>
              본문
            </Button>
            <Button
              variant="outline"
              onClick={() => insertText("<div style='fontWeight: bold'></div>")}
            >
              굵은 글씨
            </Button>
            <Button
              variant="outline"
              onClick={() => insertText("<div style='color: red'></div>")}
            >
              붉은 글씨
            </Button>
            <Button variant="outline" onClick={() => insertText("![Image]()")}>
              이미지 삽입
            </Button>
            <Button variant="outline" onClick={() => insertText("[Link]()")}>
              링크 삽입
            </Button>
            <Button variant="outline" onClick={() => insertText("<br/>")}>
              개행
            </Button>
          </div>
          <Drawer>
            <DrawerTrigger>
              <Button
                variant="default"
                className="bg-gray-500 hover:bg-gray-400"
              >
                미리보기
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>{title}</DrawerTitle>
              </DrawerHeader>
              <div className="overflow-y-scroll p-6">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  children={markdown}
                  components={{
                    p: ({ node, ...props }) => <p {...props} />,
                  }}
                ></ReactMarkdown>
              </div>
              <DrawerFooter>
                <Button
                  variant="default"
                  className="bg-[#1b97da] hover:bg-[#40A2D8]"
                >
                  Save
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>

        {/* input */}
        <div className="flex flex-col gap-4">
          <label className="font-400 px-3 font-serif text-lg">Title</label>
          <Input
            value={title}
            className="text-lg"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="font-400 px-3 font-serif text-lg">Detail</label>
          <Textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="h-[50vh] resize-none"
          />
          <label className="font-400 px-3 font-serif text-lg">Topic</label>
        </div>
      </div>
    </>
  );
};

export default UploadLibrary;

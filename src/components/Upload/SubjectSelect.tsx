import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

interface SubjectSelectProps {
  setSubject: React.Dispatch<React.SetStateAction<string>>;
}

const SubjectSelect: React.FC<SubjectSelectProps> = ({ setSubject }) => {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div className="h-full font-serif text-2xl">Upload</div>
      <div className="flex gap-4">
        <Button variant="default" className="bg-[#1b97da] hover:bg-[#40A2D8]">
          Save
        </Button>
        <Select defaultValue="library" onValueChange={(e) => setSubject(e)}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="library">Library</SelectItem>
            <SelectItem value="trend">Trend</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SubjectSelect;

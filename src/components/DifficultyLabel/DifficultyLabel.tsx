import React from "react";

interface DifficultyLabelProps {
  label: string;
  bgColor: string;
  hoverColor: string;
  dotColor: string;
}

const DifficultyLabel: React.FC<DifficultyLabelProps> = ({
  label,
  bgColor,
  hoverColor,
  dotColor,
}) => {
  return (
    <div
      className={`mb-2 bg-[${bgColor}] hover:bg-[${hoverColor}] mr-2 flex inline-flex h-[28px] cursor-pointer select-none items-center justify-center rounded-md border border-transparent px-2 text-xs text-[#474d57]`}
    >
      <div className={`mr-2 h-[6px] w-[6px] rounded-md bg-[${dotColor}]`}></div>
      {label}
    </div>
  );
};

export default DifficultyLabel;

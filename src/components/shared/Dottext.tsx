import { DotTextProps } from "@/interface";
import React from "react";


const DotText = ({ text, bgColor }: DotTextProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className={`${bgColor} w-2 h-2 rounded`}></div>
      <span className="text-base font-medium">{text}</span>
    </div>
  );
};

export default DotText;

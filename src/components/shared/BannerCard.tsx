import { CardPropTypes } from "@/interface";
import { UsersRound } from "lucide-react";
import React from "react";


const BannerCard = ({ amount, text, value }: CardPropTypes) => {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-2xl">{amount}</span>
        <UsersRound className="text-blue-500 " />
      </div>
      <span className="text-base font-normal">{text}</span>
      <div className="flex items-center justify-between">
        <span className="text-base font-normal text-gray-300">{value}</span>
        <span className="text-base font-normal text-gray-300">
          +10% this week
        </span>
      </div>
    </div>
  );
};

export default BannerCard;

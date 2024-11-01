import React from "react";
import { Button } from "@/components/ui/button";
import { IconButtonProps } from "@/interface/interface";

const IconButton: React.FC<IconButtonProps> = ({ icon: Icon, text }) => {
  return (
    <div>
      <Button className="bg-white hover:bg-gray-50 text-black font-medium text-xs py-1 px-2">
        {Icon && <Icon className=" text-blue-600 text-3xl" />}
        {text}
      </Button>
    </div>
  );
};

export default IconButton;

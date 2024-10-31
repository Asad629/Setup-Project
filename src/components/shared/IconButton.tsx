import React from "react";
import { Button } from "@/components/ui/button";
import { IconButtonProps } from "@/interface";



const IconButton: React.FC<IconButtonProps> = ({ icon: Icon, text }) => {
  return (
    <div>
      <Button className="bg-white hover:bg-gray-50 text-black font-semibold text-base py-2 px-2">
        {Icon && <Icon className="mr-2 text-blue-600 text-3xl" />} 
        {text}
      </Button>
    </div>
  );
};

export default IconButton;



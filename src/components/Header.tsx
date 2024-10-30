import React from "react";
import Logo from "./common/Logo";
import SearchBar from "./common/SearchBar";
import IconButton from "./common/IconButton";
import { IoAddCircleSharp } from "react-icons/io5";
import { GiHeavyTimer } from "react-icons/gi";
import { Bell, Heart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <div className="w-full flex text-center border-b-2 py-4">
      <div className="w-1/5">
        <Logo />
      </div>
      <div className="flex gap-20">
        <SearchBar />
        <div className="flex text-center gap-6">
          <IconButton text="Create" icon={IoAddCircleSharp} />
          <IconButton text="Discover" icon={GiHeavyTimer} />
          <IconButton text="Favorites" icon={Heart} />

          <Bell className="mt-2"/>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Header;

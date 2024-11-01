import Logo from "@/components/shared/Logo";
import SearchBar from "@/components/shared/SearchBar";
import IconButton from "@/components/shared/IconButton";
import { Heart, Menu, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CiBellOn } from "react-icons/ci";
import { AiOutlineProduct } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto items-center justify-between mb-4 md:hidden lg:hidden sm:flex xs:flex">
        <Menu />
        <SearchBar />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-full flex text-center border-b-2 py-4 sm:hidden md:flex lg:flex xs:hidden">
        <div className="w-1/5">
          <Logo />
        </div>
        <div className="flex gap-80">
          <SearchBar />
          <div className="flex text-center gap-6">
            <IconButton text="Create" icon={Plus} />
            <IconButton text="Discover" icon={AiOutlineProduct} />
            <IconButton text="Favorites" icon={Heart} />
            <CiBellOn className="mt-2 text-blue-500 text-xl font-medium" />
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

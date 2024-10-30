import React from "react";
import { FaSearch } from "react-icons/fa"; 

function SearchBar() {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg h-[34px] w-[34rem] max-w-md">
      <div className="relative flex items-center w-full">
        <FaSearch className="absolute left-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-20 py-1 w-full outline-none placeholder-gray-500 rounded-lg"
        />
        <button className="absolute right-1 bg-blue-500 text-white px-4 py-1.5 rounded-tr-md rounded-br-md hover:bg-blue-600 -mr-1">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;

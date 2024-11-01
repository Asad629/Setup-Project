import { CiSearch } from "react-icons/ci";

function SearchBar() {
  return (
    <div className="flex mt-2 ml-12 items-center border border-gray-300 rounded-lg h-[34px] max-w-md md:w-64 lg:w-64">
      <div className="relative flex items-center w-full">
        <CiSearch className="absolute left-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-20 py-1 w-full outline-none placeholder-gray-500 rounded-lg"
        />
        <button className="absolute text-xs right-1 bg-blue-500 text-white px-2 py-2  rounded-tr-md rounded-br-md hover:bg-blue-600 -mr-1">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;

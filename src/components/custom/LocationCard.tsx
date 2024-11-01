import IconButton from "@/components/shared/IconButton";
import { CircleDot, MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LocationCard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col mb-4">
      <div className="flex justify-between items-center mb-4">
        <MoveLeft
          onClick={() => navigate(-1)}
          className="text-blue-600 cursor-pointer"
        />
        <IconButton text="Favorites" icon={CircleDot} />
      </div>
      <h1 className="font-medium text-gray-600 text-3xl ">
        SATOSHI - Sport Cluj
      </h1>
      <span className="text-base font-normal text-blue-400">
        Here is the information about all your events
      </span>
      <div className="flex flex-col gap-2 mt-4">
        <p className="flex gap-4">
          <span className="font-medium text-sm text-gray-600">Location:</span>
          <span className="font-medium text-sm text-gray-600">
            Romania, Cluj
          </span>
        </p>
        <p className="flex gap-4">
          <span className="font-medium text-sm text-gray-600">Date:</span>
          <span className="font-medium text-sm text-gray-600">Dec 1, 2025</span>
        </p>
        <p className="flex gap-4">
          <span className="font-medium text-sm text-gray-600">Price:</span>
          <span className="font-medium text-sm text-gray-600">1800 s</span>
        </p>
      </div>
    </div>
  );
};

export default LocationCard;

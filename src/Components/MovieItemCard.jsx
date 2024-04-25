// MovieItemCard.js
import React from "react";
import Person3Icon from "@mui/icons-material/Person3";

const MovieItemCard = ({ name, height, birthYear, onClick }) => {
  return (
    <div className="w-full  px-4 ">
      <div className="bg-white shadow-lg shadow-gray-200 hover:shadow-xl hover:shadow-gray-400 rounded-lg overflow-hidden mb-10">
        <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
          <h3 className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary">
            <Person3Icon className="w-6 h-6 m-2 text-[#eaa400]" />
            {name}
          </h3>
          <p className="text-sm text-[#767676] font-medium  mb-1">
            Height: {height}
          </p>
          <p className="text-sm text-[#767676] font-medium  mb-7">
            Birth Year: {birthYear}
          </p>
          <button
            onClick={() => onClick()}
            className="
              inline-block
              py-2
              px-7
              bg-blue-600 
              text-white border 
              border-blue-600
              rounded-full
              text-base text-body-color
              font-medium
              hover:border-[#E5E7EB] hover:bg-blue-500 hover:text-base hover:border hover:
            "
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieItemCard;

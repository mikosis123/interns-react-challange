import React from "react";

const MovieItemCard = ({ name, height, birthYear }) => {
  return (
    <div className="w-full  px-4 shadow-md-xl">
      <div className="bg-white rounded-lg overflow-hidden mb-10">
        <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
          <h3 className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary">
            {name}
          </h3>
          <p className="text-base text-body-color leading-relaxed mb-1">
            Height: {height}
          </p>
          <p className="text-base text-body-color leading-relaxed mb-7">
            Birth Year: {birthYear}
          </p>
          <button
            onClick={() => {}}
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

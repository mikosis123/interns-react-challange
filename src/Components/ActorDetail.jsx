import React from "react";
import Person3Icon from "@mui/icons-material/Person3";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import InfoIcon from "@mui/icons-material/Info";
import MovieIcon from "@mui/icons-material/Movie";
import StarsIcon from "@mui/icons-material/Stars";

const ActorDetail = ({ movie }) => {
  return (
    <div className="">
      <div className="flex flex-col md:h-screen h  gap-16 md:flex-row ">
        <h1 className=" mb-4 text-5xl mt-24 font-extrabold text-center text-[#eaa400]  ">
          {movie.name}
        </h1>
        <div className="">
          <div className="flex mt-8 ">
            <Person3Icon className="w-6 h-6 mt-1 mr-2 text-[#eaa400]" />
            <div className="flex flex-col">
              <h2 className="font-semibold text-xl ">Personal Information</h2>
              <div className="space-y-2 mt-4">
                <p className="flex items-center text-[#767676]">
                  <ArrowRightIcon className="w-4 h-4 mr-1 text-[#eaa400]" />
                  <span className="font-semibold mr-2">Birth Year: </span>
                  {"  "}
                  {movie.birth_year}
                </p>
                <p className="flex items-center text-[#767676]">
                  <ArrowRightIcon className="w-4 h-4 mr-1 text-[#eaa400]" />
                  <span className="font-semibold mr-2">Gender:</span>{" "}
                  {movie.gender}
                </p>
                <p className="flex items-center text-[#767676]">
                  <ArrowRightIcon className="w-4 h-4 mr-1 text-[#eaa400]" />
                  <span className="font-semibold mr-2">Eye Color:</span>{" "}
                  {movie.eye_color}
                </p>
                <p className="flex items-center text-[#767676]">
                  <ArrowRightIcon className="w-4 h-4 mr-1 text-[#eaa400]" />
                  <span className="font-semibold mr-2">Hair Color:</span>{" "}
                  {movie.hair_color}
                </p>
                <p className="flex items-center text-[#767676]">
                  <ArrowRightIcon className="w-4 h-4 mr-1 text-[#eaa400]" />
                  <span className="font-semibold mr-2">Skin Color:</span>{" "}
                  {movie.skin_color}
                </p>
                <p className="flex items-center text-[#767676]">
                  <ArrowRightIcon className="w-4 h-4 mr-1 text-[#eaa400]" />
                  <span className="font-semibold mr-2">Height:</span>{" "}
                  {movie.height} cm
                </p>
                <p className="flex items-center text-[#767676]">
                  <ArrowRightIcon className="w-4 h-4 mr-1 text-[#eaa400]" />
                  <span className="font-semibold mr-2">Mass:</span> {movie.mass}{" "}
                  kg
                </p>
              </div>
            </div>
          </div>
          <div className="flex ">
            <h2 className="font-semibold mt-6  text-xl mt-32  ">
              <InfoIcon className="w-6 h-6 mr-2 text-[#eaa400]" />
              Other Information
            </h2>
          </div>
          <p className="flex items-center mt-4 text-[#767676]">
            <ArrowRightIcon className="w-4 h-4  text-[#eaa400]" />
            <span className="font-semibold text-sm text-[#767676] ">
              Created:
            </span>
            {movie.created}
          </p>
          <p className="flex items-center mt-2 text-[#767676]">
            <ArrowRightIcon className="w-4 h-4  text-[#eaa400]" />
            <span className="font-semibold mr-2">Edited:</span>
            {movie.edited}
          </p>
          <div className="flex flex-col">
            <div className="flex ">
              <h2 className="font-semibold mt-6  text-xl mt-32  ">
                <MovieIcon className="w-6 h-6 mr-2 text-[#eaa400]" />
                List of Movies
              </h2>
            </div>
            <ul className="mt-4">
              {movie.films.map((film, index) => (
                <li className="text-sm  text-blue-700 " key={index}>
                  <ArrowRightIcon className="text-[#eaa400] " />
                  <a href={film}>{film}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex">
            <h3 className="font-semibold mt-4 text-xl">
              <StarsIcon className="text-[#eaa400] mr-2  " />
              List of Species
            </h3>
          </div>
          <ul className="mt-4">
            {movie.species.map((specie, index) => (
              <li key={index} className="flex item-center text-blue-700">
                <ArrowRightIcon className="text-[#eaa400] " />
                <a href={specie}>{specie}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ActorDetail;

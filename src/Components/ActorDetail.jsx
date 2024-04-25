import React from "react";
import Person3Icon from "@mui/icons-material/Person3";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import InfoIcon from "@mui/icons-material/Info";
import MovieIcon from "@mui/icons-material/Movie";
import StarsIcon from "@mui/icons-material/Stars";

const ActorDetail = ({ movie }) => {
  return (
    <div className="">
      <div className="flex flex-col gap-16 md:flex-row">
        <div className="flex space-x-4">
          <Person3Icon className="w-6 h-6 mt-1 text-[#eaa400]" />
          <div className="flex flex-col">
            <h2 className="font-semibold text-xl">Personal Information</h2>
            <div className="space-y-2 mt-4">
              <p className="flex items-center">
                <ArrowRightIcon className="w-4 h-4 mr-1 text-[#eaa400]" />
                <span className="font-semibold">Birth Year:</span>{" "}
                {movie.birth_year}
              </p>
              <p className="flex items-center">
                <ArrowRightIcon className="w-4 h-4 mr-1 text-[#eaa400]" />
                <span className="font-semibold">Gender:</span> {movie.gender}
              </p>
              <p className="flex items-center">
                <ArrowRightIcon className="w-4 h-4 mr-1 text-[#eaa400]" />
                <span className="font-semibold">Eye Color:</span>{" "}
                {movie.eye_color}
              </p>
              <p className="flex items-center">
                <ArrowRightIcon className="w-4 h-4 mr-1 text-[#eaa400]" />
                <span className="font-semibold">Hair Color:</span>{" "}
                {movie.hair_color}
              </p>
              <p className="flex items-center">
                <ArrowRightIcon className="w-4 h-4 mr-1 text-[#eaa400]" />
                <span className="font-semibold">Skin Color:</span>{" "}
                {movie.skin_color}
              </p>
              <p className="flex items-center">
                <ArrowRightIcon className="w-4 h-4 mr-1 text-[#eaa400]" />
                <span className="font-semibold">Height:</span> {movie.height} cm
              </p>
              <p className="flex items-center">
                <ArrowRightIcon className="w-4 h-4 mr-1 text-[#eaa400]" />
                <span className="font-semibold">Mass:</span> {movie.mass} kg
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <h1 className=" mb-4 text-6xl font-extrabold text-center text-[#eaa400]  ">
            {movie.name}
          </h1>
          <h2 className="font-semibold mt-16 mx-4 text-xl mt-32 ">
            <InfoIcon className="text-[#eaa400] mx-2  " />
            Other Information
          </h2>
          <p className="flex items-center mt-4">
            <span className="font-semibold">
              <ArrowRightIcon className="text-[#eaa400] " /> Created:
            </span>{" "}
            {movie.created}
          </p>
          <p className="flex items-center">
            <span className="font-semibold">
              <ArrowRightIcon className="text-[#eaa400] " /> Edited:
            </span>{" "}
            {movie.edited}
          </p>
          <h3 className="font-semibold mt-4 text-xl">
            <MovieIcon className="text-[#eaa400] mx-2 text-xl " /> Films
          </h3>
          <ul className="mt-4">
            {movie.films.map((film, index) => (
              <li className="text-sm " key={index}>
                <ArrowRightIcon className="text-[#eaa400] " />
                <a href={film}>{film}</a>
              </li>
            ))}
          </ul>
          <h3 className="font-semibold mt-4 text-xl">
            {" "}
            <StarsIcon className="text-[#eaa400] mx-2  " /> Species
          </h3>
          <ul className="mt-4">
            {movie.species.map((specie, index) => (
              <li key={index}>
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

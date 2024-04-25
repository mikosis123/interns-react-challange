import React from "react";
import Person3Icon from "@mui/icons-material/Person3";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import InfoIcon from "@mui/icons-material/Info";
import MovieIcon from "@mui/icons-material/Movie";
import StarsIcon from "@mui/icons-material/Stars";

const ActorDetail = ({ movie }) => {
  return (
    <div className="container ">
      <h1 className=" ">{movie.name}</h1>
      <div className="flex space-x-4">
        <div className="flex space-x-4">
          <Person3Icon className="w-6 h-6 mt-1" />
          <div className="flex flex-col">
            <h2 className="font-semibold">Personal Information</h2>
            <div className="space-y-2">
              <p className="flex items-center">
                <ArrowRightIcon className="w-4 h-4 mr-1" />
                <span className="font-semibold">Birth Year:</span>{" "}
                {movie.birth_year}
              </p>
              <p className="flex items-center">
                <ArrowRightIcon className="w-4 h-4 mr-1" />
                <span className="font-semibold">Gender:</span> {movie.gender}
              </p>
              <p className="flex items-center">
                <ArrowRightIcon className="w-4 h-4 mr-1" />
                <span className="font-semibold">Eye Color:</span>{" "}
                {movie.eye_color}
              </p>
              <p className="flex items-center">
                <ArrowRightIcon className="w-4 h-4 mr-1" />
                <span className="font-semibold">Hair Color:</span>{" "}
                {movie.hair_color}
              </p>
              <p className="flex items-center">
                <ArrowRightIcon className="w-4 h-4 mr-1" />
                <span className="font-semibold">Skin Color:</span>{" "}
                {movie.skin_color}
              </p>
              <p className="flex items-center">
                <ArrowRightIcon className="w-4 h-4 mr-1" />
                <span className="font-semibold">Height:</span> {movie.height} cm
              </p>
              <p className="flex items-center">
                <ArrowRightIcon className="w-4 h-4 mr-1" />
                <span className="font-semibold">Mass:</span> {movie.mass} kg
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <h2 className="font-semibold">
            <InfoIcon />
            Other Information
          </h2>
          <p className="flex items-center">
            <span className="font-semibold">
              <ArrowRightIcon /> Created:
            </span>{" "}
            {movie.created}
          </p>
          <p className="flex items-center">
            <span className="font-semibold">
              <ArrowRightIcon /> Edited:
            </span>{" "}
            {movie.edited}
          </p>
          <h3 className="font-semibold mt-4">
            <MovieIcon /> Films
          </h3>
          <ul>
            {movie.films.map((film, index) => (
              <li key={index}>
                <ArrowRightIcon />
                <a href={film}>{film}</a>
              </li>
            ))}
          </ul>
          <h3 className="font-semibold mt-4">
            {" "}
            <StarsIcon /> Species
          </h3>
          <ul>
            {movie.species.map((specie, index) => (
              <li key={index}>
                <ArrowRightIcon />
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

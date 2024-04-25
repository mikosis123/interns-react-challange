import React from "react";

const ActorDetail = ({ movie }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold mb-4">{movie.name}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="font-semibold">Personal Information</h2>
          <p>
            <span className="font-semibold">Birth Year:</span>{" "}
            {movie.birth_year}
          </p>
          <p>
            <span className="font-semibold">Gender:</span> {movie.gender}
          </p>
          <p>
            <span className="font-semibold">Eye Color:</span> {movie.eye_color}
          </p>
          <p>
            <span className="font-semibold">Hair Color:</span>{" "}
            {movie.hair_color}
          </p>
          <p>
            <span className="font-semibold">Skin Color:</span>{" "}
            {movie.skin_color}
          </p>
          <p>
            <span className="font-semibold">Height:</span> {movie.height} cm
          </p>
          <p>
            <span className="font-semibold">Mass:</span> {movie.mass} kg
          </p>
        </div>
        <div>
          <h2 className="font-semibold">Other Information</h2>
          <p>
            <span className="font-semibold">Created:</span> {movie.created}
          </p>
          <p>
            <span className="font-semibold">Edited:</span> {movie.edited}
          </p>
          <h3 className="font-semibold mt-4">Films</h3>
          <ul>
            {movie.films.map((film, index) => (
              <li key={index}>
                <a href={film}>{film}</a>
              </li>
            ))}
          </ul>
          <h3 className="font-semibold mt-4">Species</h3>
          <ul>
            {movie.species.map((specie, index) => (
              <li key={index}>
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

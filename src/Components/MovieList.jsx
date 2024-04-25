import React, { useEffect, useState } from "react";
import MovieItemCard from "./MovieItemCard";
import ActorDetail from "./ActorDetail";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://swapi.py4e.com/api/people/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setMovieList(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="w-[90%] text-center mx-auto">
      <h1 className="text-3xl font-bold text-center text-gray-800 p-6">
        MovieList
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
        {movieList.map((movie) => (
          <div key={movie.name}>
            <MovieItemCard
              name={movie.name}
              height={movie.height}
              birthYear={movie.birth_year}
              onClick={() => handleMovieClick(movie)}
            />
          </div>
        ))}
      </div>
      {selectedMovie && <ActorDetail movie={selectedMovie} />}
    </div>
  );
};

export default MovieList;

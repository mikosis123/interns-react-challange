import React, { useEffect, useState } from "react";
import MovieItemCard from "./MovieItemCard";
import ActorDetail from "./ActorDetail";
import MovieImage from "../Assets/movie ilustration.png";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://swapi.py4e.com/api/people/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setMovieList(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBackClick = () => {
    setSelectedMovie(null);
  };
  if (isLoading) {
    return (
      <div className="w-[90%] h-screen text-center mx-auto bg-gray-200">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-[90%] text-center mx-auto bg-gray-200">
      {selectedMovie ? (
        <div className="w-[90%]  mx-auto">
          <div>
            <button
              onClick={handleBackClick}
              className="
             flex justify-end mt-8
             ml-auto
            mt-4
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
              Back
            </button>
          </div>
          <div className="flex flex-col flex-col-reverse md:flex-row reverse justify-between items-center">
            <ActorDetail movie={selectedMovie} />
            <div className="">
              <img src={MovieImage} alt="movie" />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-4xl my-6   font-bold text-center text-[#eaa400] p-6">
            MovieList
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
        </div>
      )}
    </div>
  );
};

export default MovieList;

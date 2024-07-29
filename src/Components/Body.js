import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { MOVIE_API_URL } from "../utils/Constants"; // Import the API URL from constants
import { useDispatch, useSelector } from "react-redux";
import { setMovies, filterMovies } from "../utils/listSlice";

const Body = ({ onLogin, onClose, setShowAuth }) => {
  const dispatch = useDispatch();
  const movieList = useSelector((store) => store.movies.movieList);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getMovies();
  }, [dispatch]);

  const getMovies = async () => {
    try {
      const data = await fetch(MOVIE_API_URL);
      const json = await data.json();
      console.log(json);
      dispatch(setMovies(json.Search));
    } catch (err) {
      console.log("unable to fetch data");
    }
  };

  const handleClick = () => {
    console.log(searchText);
    dispatch(filterMovies(searchText));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(filterMovies(searchText));
    }
  };

  return (
    <div className="mt-16 md:mt-0 md:ml-80 bg-white h-full w-full md:w-3/4">
      {/* Headline */}
      <div className="m-8 bg-slate-300 pl-4 pr-2 md:py-2  bordere border-black pt-11 border rounded-md">
        <div className="font-bold text-lg">
          {" "}
          Welcome To <span className="text-red-500">WATCHLIST</span>
        </div>
        <div>
          a simple movie watchlist app that allows multiple users to search for
          movies, view details about them, and add/remove them from their
          personal watchlists
        </div>
      </div>
      {/* Search */}
      <div className="flex justify-center items-center my-8">
        <input
          className="px-5 w-5/6 border border-gray-400 p-2 rounded-l"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="border border-gray-400 px-5 py-2 rounded-r bg-gray-100"
          onClick={handleClick}
        >
          🔍
        </button>
      </div>
      {/* MovieContainer */}
      <div className="flex flex-wrap justify-center p-4">
        {movieList.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onLogin={onLogin}
            onClose={onClose}
            setShowAuth={setShowAuth}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;

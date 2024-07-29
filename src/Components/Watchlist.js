import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeMovie } from "../utils/watchlistSlice";

const Watchlist = () => {
  const user = useSelector((state) => state.auth.user);
  const watchlist = useSelector(
    (state) => state.watchlist.watchlists[user] || []
  );
  const dispatch = useDispatch();

  const handleRemove = (movieId) => {
    dispatch(removeMovie({ email: user, movieId }));
  };

  return (
    <div className="watchlist-container p-4 h-80 md:h-96 backdrop-blur-sm bg-white/30 md:bg-inherit overflow-y-auto">
      <ul>
        {watchlist.map((movie) => (
          <li key={movie.imdbID} className="mb-2">
            <div className="flex items-center bg-gray-300 p-2 rounded-md">
              <img
                className="h-10 w-10 object-cover rounded-md"
                alt={movie.Title}
                src={movie.Poster}
              />
              <div className="flex-1 ml-4">
                <p className=" text-black truncate">{movie.Title}</p>
              </div>
              <button
                className="bg-red-500 text-white p-2 rounded-full ml-auto"
                onClick={() => handleRemove(movie.imdbID)}
              >
                -
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Watchlist;

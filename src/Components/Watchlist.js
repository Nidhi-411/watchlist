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
            <div className="flex  w-1/ items-center bg-gray-300 p-2 rounded-md">
              <div className="w-1/6">
              <img
                className="h-10  object-cover rounded-md"
                alt={movie.Title}
                src={movie.Poster}
              />
              </div>
              <div className="flex-1 w-8/12 ml-4">
                <p className=" text-black   truncate">{movie.Title}</p>
              </div>
              <div className="w-1/12">
              <button
                className="bg-red-500  text-white p-2 rounded-full "
                onClick={() => handleRemove(movie.imdbID)}
              >
                -
              </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Watchlist;
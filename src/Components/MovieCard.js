
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie } from '../utils/watchlistSlice';


const MovieCard = ({ movie , setShowAuth }) => {
      const dispatch = useDispatch();
      const user = useSelector((state) => state.auth.user);
      

  const handleAddToWatchlist = () => {
    if(!user)
    {
       setShowAuth(true);  
    }
    else{
    dispatch(addMovie({ email: user, movie }));
    }
  };


  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md w-48 m-2">
      <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{movie.Title}</h3>
        <p className="text-sm text-gray-500">{movie.Year}</p>
        <p className="text-xs text-gray-400">{movie.Type}</p>
        <button onClick={handleAddToWatchlist}>Add to Watchlist</button>
      </div>
    </div>
  );
};

export default MovieCard;

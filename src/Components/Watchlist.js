import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeMovie } from '../utils/watchlistSlice';

const Watchlist = () => {
  const user = useSelector((state) => state.auth.user);
  const watchlist = useSelector((state) => state.watchlist.watchlists[user] || []);
  const dispatch = useDispatch();

  const handleRemove = (movieId) => {
    dispatch(removeMovie({ email: user, movieId }));
  };

  return (
    <div className="watchlist-container">
      <h2>My Watchlist</h2>
      <ul>
        {watchlist.map((movie) => (
          <li key={movie.id}>
            {movie.title}
            <button onClick={() => handleRemove(movie.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Watchlist;

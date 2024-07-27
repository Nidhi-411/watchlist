import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  watchlists: {},
};

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const { email, movie } = action.payload;
      if (!state.watchlists[email]) {
        state.watchlists[email] = [];
      }
      state.watchlists[email].push(movie);
    },
    removeMovie: (state, action) => {
      const { email, movieId } = action.payload;
      if (state.watchlists && state.watchlists[email]) {
        state.watchlists[email] = state.watchlists[email].filter(movie => movie.imdbID !== movieId);
      }
    },
    setWatchlist: (state, action) => {
      const { email, watchlist } = action.payload;
      state.watchlists[email] = watchlist;
    },
  },
});

export const { addMovie, removeMovie, setWatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;

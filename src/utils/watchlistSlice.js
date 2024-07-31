import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchlists: JSON.parse(localStorage.getItem('watchlists')) || {},
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      
      const { email, movie } = action.payload;
      if (!state.watchlists[email]) {
        state.watchlists[email] = [];
      }
      state.watchlists[email].push(movie);
      localStorage.setItem('watchlists', JSON.stringify(state.watchlists));
    },
    removeMovie: (state, action) => {
      const { email, movieId } = action.payload;
      if (state.watchlists && state.watchlists[email]) {
        state.watchlists[email] = state.watchlists[email].filter(
          (movie) => movie.imdbID !== movieId
        );
      }
      localStorage.setItem('watchlists', JSON.stringify(state.watchlists));
    },
    setWatchlist: (state, action) => {
      const { email, watchlist } = action.payload;
      state.watchlists[email] = watchlist;
      localStorage.setItem('watchlists', JSON.stringify(state.watchlists));
    },
  },
});

export const { addMovie, removeMovie, setWatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;

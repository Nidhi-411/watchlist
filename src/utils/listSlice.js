import { createSlice } from '@reduxjs/toolkit';


// Slice create karna
const listSlice = createSlice({
  name: 'movies',

  initialState : {
    allMovies: [], // API se aane wala initial data
    movieList: []  // Filtered data
  },

  reducers: {
    setMovies: (state, action) => {
      state.allMovies = action.payload;
      state.movieList = action.payload;
    },
    filterMovies: (state, action) => {
      if (state.allMovies) {
        console.log(action.payload);
        state.movieList = state.allMovies.filter(movie => 
          movie.Title && movie.Title.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
    },
    resetMovies: (state) => {
      state.movieList = state.allMovies;
    }
  }
});

export const { setMovies, filterMovies, resetMovies } = listSlice.actions;

export default listSlice.reducer;
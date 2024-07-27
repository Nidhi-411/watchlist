
import { configureStore } from "@reduxjs/toolkit";
import  listReducer from "./listSlice"
import authReducer from './authSlice';
import watchlistReducer from './watchlistSlice';
const store = configureStore({
    reducer: {
      movies: listReducer,
      auth: authReducer,
    watchlist: watchlistReducer,
    }
  });
  
  export default store;
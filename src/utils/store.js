
import { configureStore } from "@reduxjs/toolkit";
import  listReducer from "./listSlice"
const store = configureStore({
    reducer: {
      movies: listReducer,
    }
  });
  
  export default store;
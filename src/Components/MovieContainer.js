// MovieCardContainer.js
import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import MovieCard from './MovieCard';
import { MOVIE_API_URL } from '../utils/Constants'; // Import the API URL from constants

const MovieContainer = () => {
  const [movies, setMovies] = useState([]);
  
  useEffect ( ()=>{getMovies()}, []);

    const getMovies = async () => {
        try {
            console.log("try kiya ");
          //const response = await axios.get(MOVIE_API_URL);
           const data = await fetch(MOVIE_API_URL);
           console.log("hua nhi");
          const json = await data.json();
          console.log("Are ho to gya ");
          console.log(json);
          setMovies(json.Search);
  
        } catch (err) {
          console.log("unable to fetch data");
        }
      } ;
  
  return (
    
    <div className="flex flex-wrap justify-center p-4">
      { 
      movies.map( (movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))
      }
    </div>
    
  );
};

export default MovieContainer;

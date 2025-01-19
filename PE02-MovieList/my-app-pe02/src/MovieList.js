import React, { useState } from "react";  //importing react and hooks

// receiving an object of movies and onMovieClick as props
const Movielist = ({ movies, onMovieClick }) => {
    
    // using useState to track selected genre. Initial state is set at All Genres
    const [selectedGenre, setSelectedGenre] = useState("All Genres")

    // creating a list of genres including all genres
    // using spread operator to make shallow copy of the object and map() to create new array
    const genres = ["All Genres", ...new Set(movies.map((movie) => movie.genre))];

    const getFilteredMovies = () => {
        if (selectedGenre === "All Genres") {
          return movies; //show all movies list
        } //otherwise return filted genre
        return movies.filter((movie) => movie.genre === selectedGenre); 
      };
      
      // return the child component 
      return (
        <div>
          <label htmlFor="genre-select"></label>
          <select
            id="genre-select"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
    
          <ul className="list">
            {getFilteredMovies().map((movie) => (
              <li
                key={movie.title}
                className="item"
                onClick={() => onMovieClick(movie.title)}
              >
                <div className="title">{movie.title}</div>
                <div>{movie.genre}</div>
                <div>{movie.releaseYear}</div>
              </li>
            ))}
          </ul>
        </div>
      );
    };
   
export default Movielist;

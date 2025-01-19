import './App.css';
import React, { useState } from "react";
import MovieList from "./MovieList";  //child component

function App() {
  // Defining movies list in the parent component
  const [movies] = useState([
    {title: "Kung Fu Panda", genre: "Animation", releaseYear: 2008 },
    {title: "Meet Joe Black", genre: "Drama", releaseYear: 1998 },
    {title: "Big Fish", genre: "Adventure", releaseYear: 2003 },
    {title: "Avatar", genre: "Action", releaseYear: 2009 },
  ]);

  // movie click handler. Display a msg of which title is being selected with an alert pop-up
  const handleMovieClick = (title) => {
    alert(`You selected "${title}"`)
  };
  
  // returning child component with movie object and the event
  return (
    <div className="App">
      <h1>Movie List</h1>
      <MovieList movies={movies} onMovieClick={handleMovieClick} />
    </div>
  );
}

export default App;

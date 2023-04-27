import React from "react";
import { movies } from "../data";

function Movies() {
  const movielist = movies.map((movie) => (
    <div key = {movie.title}>
       <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <ul>
          <li>{movie.genres}</li>
        </ul>
    </div>
  ))
  return <div>
    <h1>Movies Page</h1>
    {movielist}
  </div>;
}

export default Movies;

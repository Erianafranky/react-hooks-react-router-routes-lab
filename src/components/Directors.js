import React from "react";
import { directors } from "../data";

function Directors() {
  const directorlist = directors.map((director) => (
    <div key = {director.name}>
       <h1>{director.name}</h1>
        <ul>
          <li>{director.movies}</li>
        </ul>
    </div>
  ))
  return <div>
    <h1>Directors Page</h1>
    {directorlist}
  </div>;
}

export default Directors;


import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({movies}) {
    // call useParams to access the `params` from the url
    const params=useParams();
    console.log(params);
    const movie = movies.find((movie)=>movie.id === parseInt(params.movieId))
  return (
    <div>
      <h3>{movie.title}</h3>
    </div>
  );
}


export default MovieShow;
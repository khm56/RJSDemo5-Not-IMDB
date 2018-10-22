import React, { Component } from "react";

// Components
import MovieCard from "./MovieCard";

class MoviesList extends Component {
  render() {
    let moviesList = this.props.movies.map((movie, idx) => (
      <MovieCard key={movie.name + idx} movie={movie} />
    ));
    return <div className="card-deck">{moviesList}</div>;
  }
}

export default MoviesList;

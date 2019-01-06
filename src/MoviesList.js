import React, { Component } from "react";

// Components
import MovieCard from "./MovieCard";

class MoviesList extends Component {
  render() {
    let moviesList = this.props.movies.map(movie => (
      <MovieCard movie={movie} />
    ));
    return <div className="row">{moviesList}</div>;
  }
}

export default MoviesList;

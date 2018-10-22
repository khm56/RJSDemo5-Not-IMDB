import React, { Component } from "react";
import { Link } from "react-router-dom";

class MovieCard extends Component {
  render() {
    const movie = this.props.movie;
    return (
      <div
        className="col-2"
        style={{
          margin: "20px",
          backgroundColor: "white",
          paddingTop: "7px"
        }}
      >
        <img
          className="card-img-top"
          style={{ maxHeight: "200px", margin: "auto" }}
          src={movie.image}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{movie.name}</h5>
          <Link
            to={`/movies/${movie.id}`}
            className="btn btn-outline-info"
            style={{ backgroundColor: "white" }}
          >
            More Details
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;

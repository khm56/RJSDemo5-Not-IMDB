import React, { Component } from "react";

class MovieCard extends Component {
  render() {
    const movie = this.props.movie;
    return (
      <div className="col-lg-2 col-md-6 col-12">
      <div
        className="card"
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
          <a
            href={`/movies/${movie.id}`}
            className="btn btn-outline-info"
            style={{ backgroundColor: "white" }}
          >
            More Details
          </a>
        </div>
      </div>
      </div>
    );
  }
}

export default MovieCard;

import React, { Component } from "react";
import data from "./data";

class MoviesDetails extends Component {
  render() {
    const movie = data[0];
    return (
      <div>
        <div
          className="card "
          style={{ width: "50%", margin: "auto", marginTop: "20px" }}
        >
          <h3 className="card-header">{movie.name}</h3>
          <img
            class="card-img-top"
            src={movie.image}
            alt=""
            style={{ width: "350px", margin: "auto" }}
          />
          <div class="card-body">
            <p class="card-text">{movie.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MoviesDetails;

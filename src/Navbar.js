import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-dark"
        style={{ backgroundColor: "#3d585b" }}
      >
        <a className="navbar-brand" href="/">
          Not IMDB
        </a>
        <div className="navbar">
          <a className="nav-item nav-link text-light" href="/mylist">
            My List
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;

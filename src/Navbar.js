import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-dark"
        style={{ backgroundColor: "#3d585b" }}
      >
        <Link className="navbar-brand" to="/">
          Not IMDB
        </Link>
        <div className="navbar">
          <NavLink className="nav-item nav-link text-light" to="/mylist">
            My List
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default Navbar;

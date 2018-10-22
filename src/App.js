import React, { Component } from "react";
import "./App.css";

// Data
import movies from "./data";

// Components
import Navbar from "./Navbar";
import MoviesList from "./MoviesList";
import MovieDetails from "./MovieDetails";
import MyList from "./MyList";

class App extends Component {
  render() {
    return (
      <div className="bg-light">
        <Navbar />
      </div>
    );
  }
}

export default App;

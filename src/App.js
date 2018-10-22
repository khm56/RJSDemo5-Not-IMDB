import React, { Component } from "react";
import { Route, Switch, Redirect, Link, NavLink } from "react-router-dom";
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
        <Switch>
          <Route
            path="/movie/:movieId"
            render={props => <MovieDetails {...props} />}
          />
          <Route path="/mylist" component={MyList} />
          <Route path="/" render={props => <MoviesList movies={movies} />} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;

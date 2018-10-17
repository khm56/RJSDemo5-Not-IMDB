import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesList from './MoviesList'
import MovieDetails from './MovieDetails'
import MyList from './MyList'
import data from './data'
import { BrowserRouter as Router, Route, Link, Switch, Redirect, NavLink } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="bg-light" >
        <nav className="navbar navbar-dark" style={{backgroundColor: "#3d585b"}}>
          <a className="navbar-brand" href="/home">Not IMDB</a>
          <div className="navbar">
            <NavLink className="nav-item nav-link text-light" to="/movies">Home</NavLink>
            <NavLink className="nav-item nav-link text-light" to="/mylist">My List</NavLink>
          </div>
        </nav>

        <Switch>
          <Route path="/not-found" render={props => <h1>Not found</h1>} />
          <Route path="/movies" render={props => <MoviesList movies={data} />} />
          <Route path="/movie/:movieId" render={props => <MovieDetails {...props}/>} />
          <Route path="/mylist" component={MyList}/>
          <Redirect to="/not-found" />

        </Switch>
        

        
      </div>
      
        
        
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesList from './MoviesList'
import MovieDetails from './MovieDetails'
import MyList from './MyList'
import data from './data'


class App extends Component {
  render() {
    return (
      <div className="bg-light" >
        <nav className="navbar navbar-dark" style={{backgroundColor: "#3d585b"}}>
          <a className="navbar-brand" href="/movies">Not IMDB</a>
          <div className="navbar">
            <a className="nav-item nav-link text-light" href="/movies">Home</a>
            <a className="nav-item nav-link text-light" href="/mylist">My List</a>
          </div>
        </nav>

        
      </div>
      
        
        
    );
  }
}

export default App;

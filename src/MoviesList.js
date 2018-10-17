import React, { Component } from 'react';
import illusionist from './illusionist.jpg'
import {Link} from 'react-router-dom';

class MoviesList extends Component {

	render() {
		let moviesList = this.props.movies.map(movie => {
			return (
				
			<div className="card" className="col-2" style={{margin: "20px", backgroundColor: "white", paddingTop: "7px"}}>
			  <img className="card-img-top" style={{maxHeight: "200px", margin: "auto"}} src={movie.image} alt="Card image cap"/>
			  <div className="card-body">
			    <h5 className="card-title">{movie.name}</h5>
			    <a href={`/movie/${movie.id}`} className="btn btn-outline-info" style={{backgroundColor: 'white'}} >More Details</a>
			  </div>
			</div>
			)
		})
		return (
				<div className="card-deck">
					{moviesList}
				</div>
			)
	}
}

export default MoviesList;
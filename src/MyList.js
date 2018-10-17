import React, { Component } from 'react';

import data from './data'

class MyList extends Component {

	render(){
		return (
			<div  style={{margin: 'auto', padding: '10px', width: "65%", }}>
				<h3>My List</h3>
				<table className="table table-hover" style={{backgroundColor: 'white'}}>
				  <thead style={{backgroundColor: '#3d585b'}}>
				    <tr style={{color: 'white'}}>
				      <th scope="col">title</th>
				      <th scope="col" style={{textAlign: "right"}}>status</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <th scope="row">{data[1].name}</th>
				      <td style={{textAlign: "right"}}>Watched</td>

				    </tr>
				    <tr>
				      <th scope="row">{data[3].name}</th>
				      <td style={{textAlign: "right"}}>Want to Watch</td>

				    </tr>

				    <tr>
				      <th scope="row">{data[4].name}</th>
				      <td style={{textAlign: "right"}}>Want to Watch</td>

				    </tr>
				  </tbody>
				</table>
			</div>

			)
	}

}

export default MyList;
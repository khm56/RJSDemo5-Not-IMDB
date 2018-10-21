presentation https://drive.google.com/file/d/1t23T8JKvvLETyPeXSaierahwElUf69Ff/view?usp=sharing

1 - in index.js file, add the following

    import { BrowserRouter } from 'react-router-dom';
    ...
    <BrowserRouter>
      <App />
    </BrowserRouter>), document.getElementById('root'));
    ...

2 - in App.js file add the route to mylist

    import {Route} from "react-router-dom";
    ...
    <Route path="/mylist" component={MyList}/>

3 - change the following line and add the NavLink import

    <a className="nav-item nav-link text-light" href="/mylist">My List</a>

to

    import {Route, NavLink} from "react-router-dom";
    ...
    <NavLink className="nav-item nav-link text-light" to="/mylist">My List</NavLink>

4 - change the other link too
  
 <NavLink className="nav-item nav-link text-light" to="/home">Home</NavLink>

5 - add the switch and the route to home

    import {Route, NavLink, switch} from "react-router-dom";

    <Switch>
          <Route path="/home" render={props => <MoviesList movies={data} />} />
          <Route path="/mylist" component={MyList}/>
    </Switch>

6 - go to MoviesList.js and change the following line
  
 <a href={`/movie/${movie.id}`} className="btn btn-outline-info" style={{backgroundColor: 'white'}} >More Details</a>
to
  
 import {Link} from 'react-router-dom';
...
<Link to={`/movie/${movie.id}`} params={{ movieId: movie.id }} className="btn btn-outline-info" style={{backgroundColor: 'white'}} >More Details</Link>

7- In App.js add a redirection if the page is not found

      import {Route, Switch, Redirect, NavLink } from "react-router-dom";
      ...

      <Switch>
          <Route path="/home" render={props => <MoviesList movies={data} />} />
          <Route path="/movie/:movieId" render={props => <MovieDetails {...props}/>} />
          <Route path="/mylist" component={MyList}/>
          <Route path="/not-found" render={props => <h1>Not found</h1>} />
          <Redirect to="/not-found" />
        </Switch>

presentation https://docs.google.com/presentation/d/1oinLmplCEw_zNcolTltn1gSCX6exBLSucOoXjYfxS4Y/

0. Demonstrate the different components (`MyList`, `MovieList`, `MovieDetail`)

1. Create a Router

`index.js`

```javascript
import { BrowserRouter } from 'react-router-dom';
...
<BrowserRouter>
    <App />
</BrowserRouter>), document.getElementById('root'));
...
```

2. Add a route to `mylist`

`App.js`

```javascript
import {Route} from "react-router-dom";
...
<Route path="/mylist" component={MyList}/>
```

3. Change the link in the navbar to a `Link` then to a `NavLink`

`Navbar.js`

```javascript
<a className="nav-item nav-link text-light" href="/mylist">
  My List
</a>
```

to

```javascript
import {Link} from "react-router-dom";
...
<Link className="nav-item nav-link text-light" to="/mylist">My List</Link>
```

to

```javascript
import {NavLink} from "react-router-dom";
...
<NavLink className="nav-item nav-Nav text-light" to="/mylist">My List</NavLink>
```

4. change the brand to a regular `Link`
   `Navbar.js`

```javascript
<Link className="navbar-brand" to="/">
  Not IMDB
</Link>
```

5. Add the switch and the route to home. Explain `render`. Explain the order in a switch. Explain `exact`.

`App.js`

```javascript
import { Route, Switch } from "react-router-dom";
...
<Switch>
  <Route path="/mylist" component={MyList} />
  <Route path="/" render={props => <MoviesList movies={movies} />} />
</Switch>;
```

6. Change the link on the card. Show what it's doing (changing the address).

`MovieCard.js`

```javascript
<a
  href={`/movie/${movie.id}`}
  className="btn btn-outline-info"
  style={{ backgroundColor: "white" }}
>
  More Details
</a>
```

to

```javascript
import {Link} from 'react-router-dom';
...

<Link to={`/movies/${movie.id}`} className="btn btn-outline-info" style={{backgroundColor: 'white'}} >More Details</Link>
```

7. Add a parametrized route

`App.js`

```javascript
<Switch>
  <Route path="/mylist" component={MyList} />
  <Route
    path="/movies/:movieId"
    render={props => <MovieDetails {...props} />}
  />
  <Route path="/" render={props => <MoviesList movies={movies} />} />
</Switch>
```

8. Use the param in the detail page

`MovieDetail.js`

```javascript
const movieId = this.props.match.params.movieId;
const movie = data[movieId - 1];
```

9. Add a redirect if the page is not found

`App.js`

```javascript
import { Route, Switch, Redirect } from "react-router-dom";
...

<Switch>
    <Route path="/mylist" component={MyList}/>
    <Route path="/movies/:movieId" render={props => <MovieDetails {...props}/>} />
    <Route path="/not-found" render={props => <h1>Not found</h1>} />
    <Route path="/" render={props => <MoviesList movies={data} />} />
    <Redirect to="/not-found" />
</Switch>
```

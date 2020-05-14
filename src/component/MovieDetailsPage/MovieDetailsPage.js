import React, { useState, useEffect, lazy, Suspense } from "react";
import { fetchMovieDetails } from "../../utils/apiRequest";
import { NavLink, Route, Switch } from "react-router-dom";
import { routes } from "../../utils/routes";

const activeStyle = {
  color: "brown",
};

const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

const MovieDetailsPage = (props) => {
  const [movieDetails, setMovieDetails] = useState({});

  const movieId = props.match.params.movieId;
  useEffect(() => {
    fetchMovieDetails(movieId).then((res) => {
      setMovieDetails(res);
    });
  }, [movieId]);

  const handleGoBack = () => {
    const { state } = props.location;
    if (state) {
      props.history.push(state.from);
      return;
    }
    props.history.push({
      pathname: routes.HOME,
      search: ``,
    });
  };

  return (
    <div>
      <button onClick={handleGoBack}>Go back</button>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
        <h2>{movieDetails.title}</h2>
        <p>User score: {movieDetails.vote_average}</p>
        <h3>Overview</h3>
        <p>{movieDetails.overview}</p>
        <h3>Genres</h3>
        <p>{movieDetails.status}</p>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink
              to={{
                pathname: `/movies/${movieId}/cast`,
                state: { from: props.location.state.from },
              }}
              exact
              activeStyle={activeStyle}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `/movies/${movieId}/reviews`,
                state: { from: props.location.state.from },
              }}
              activeStyle={activeStyle}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<p>...Loading</p>}>
        <Switch>
          <Route
            path={`${props.match.path}${routes.MOVIE_CAST}`}
            component={Cast}
          />
          <Route
            path={`${props.match.path}${routes.MOVIE_REVIEWS}`}
            component={Reviews}
          />
        </Switch>
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;

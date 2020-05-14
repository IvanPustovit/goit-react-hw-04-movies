import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect, Router } from "react-router-dom";
import Header from "./component/Header/Header";
import { routes } from "./utils/routes";

const Home = lazy(() => import("./component/HomePage/HomePage"));
const Movies = lazy(() => import("./component/MoviesPage/MoviesPage"));
const MovieDetails = lazy(() =>
  import("./component/MovieDetailsPage/MovieDetailsPage"),
);

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<p>...Loading</p>}>
        <Switch>
          <Route path={routes.HOME} exact component={Home} />
          <Route path={routes.MOVIE_DETAILS} component={MovieDetails} />
          <Route path={routes.MOVIES} component={Movies} />
          <Redirect to={routes.HOME} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;

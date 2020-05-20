import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./component/Header/Header";
import { routes } from "./utils/routes";
import Loader from "./component/Loader/Loader";

const Home = lazy(() => import("./component/HomePage/HomePage"));
const Movies = lazy(() => import("./component/MoviesPage/MoviesPage"));
const MovieDetails = lazy(() =>
  import("./component/MovieDetailsPage/MovieDetailsPage"),
);
const NotFound = lazy(() => import("./component/NotFound/NotFound"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={routes.HOME} exact component={Home} />
          <Route path={routes.MOVIE_DETAILS} component={MovieDetails} />
          <Route path={routes.MOVIES} component={Movies} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;

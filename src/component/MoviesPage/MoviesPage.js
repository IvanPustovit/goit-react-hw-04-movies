import React, { useState, useEffect } from "react";
import { fetchMoviesSearch } from "../../utils/apiRequest";
import { useLocation, useHistory, Link } from "react-router-dom";
import queryString from "query-string";

const MoviesPage = () => {
  const [nameMovie, setNameMovie] = useState("");
  const [MovieList, setMovieList] = useState([]);
  const [loader, setLoader] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const inputNameMovie = (e) => {
    if (e.target.value) {
      setNameMovie(e.target.value);
    }
  };

  const onSubmit = () => {
    setNameMovie("");
    setMovieList([]);
    setLoader(true);

    history.push({
      ...location,
      search: `?query=${nameMovie}`,
      state: MovieList,
    });
  };

  useEffect(() => {
    if (!location.search) {
      setNameMovie("");
      return;
    }
    const name = queryString.parse(location.search).query;
    fetchMoviesSearch(name)
      .then((res) => setMovieList(res.results))
      .then(() => setLoader(false));
  }, [location.search]);
  return (
    <>
      <div>
        <input type="text" value={nameMovie} onChange={inputNameMovie} />
        <button onClick={onSubmit}>Search</button>
      </div>
      <div>
        <ul>
          {loader && <p>...Loading</p>}
          {!loader &&
            MovieList.map((el) => (
              <li key={el.id}>
                <Link
                  to={{
                    pathname: `/movies/${el.id}`,
                    state: { from: location },
                  }}
                >
                  {el.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default MoviesPage;

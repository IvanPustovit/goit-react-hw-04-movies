import React, { useState, useEffect } from "react";
import { fetchHomePage } from "../../utils/apiRequest";
import { Link, useLocation } from "react-router-dom";

const HomePage = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState("");

  const location = useLocation();

  useEffect(() => {
    fetchHomePage()
      .then((res) => setMovie(res))
      .catch((error) => setError(error));
  }, []);

  return (
    <>
      <ul>
        {error && <>Something went wrong</>}
        {movie.map(({ id, title }) => (
          <li key={id}>
            <Link to={{ pathname: `/movies/${id}`, state: { from: location } }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;

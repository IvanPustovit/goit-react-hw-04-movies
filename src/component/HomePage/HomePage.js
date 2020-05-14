import React, { useState, useEffect } from "react";
import { fetchHomePage } from "../../utils/apiRequest";
import { Link, useLocation } from "react-router-dom";

const HomePage = () => {
  const [movie, setMovie] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchHomePage().then((res) => setMovie(res));
  }, []);

  return (
    <>
      <ul>
        {movie.map((el) => (
          <li key={el.id}>
            <Link
              to={{ pathname: `/movies/${el.id}`, state: { from: location } }}
            >
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;

import React, { useState, useEffect } from "react";
import { fetchCast } from "../../utils/apiRequest";

const Cast = (props) => {
  const [castInfo, setCastInfo] = useState([]);
  const movieId = props.match.params.movieId;

  useEffect(() => {
    fetchCast(movieId).then((res) => {
      setCastInfo(res.cast);
    });
  }, [movieId]);

  return (
    <div>
      <ul>
        {castInfo.map((el) => (
          <li key={el.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`}
              alt={el.name}
            />
            <h3>{el.name}</h3>
            <p>Character: {el.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;

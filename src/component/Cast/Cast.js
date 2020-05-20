import React, { useState, useEffect } from "react";
import { fetchCast } from "../../utils/apiRequest";
import { imgUrl } from "../../api";

const Cast = (props) => {
  const [casts, setCasts] = useState([]);
  const [error, setError] = useState("");
  const movieId = props.match.params.movieId;

  useEffect(() => {
    fetchCast(movieId)
      .then((res) => {
        setCasts(res.cast);
      })
      .catch((error) => setError(error));
  }, [movieId]);

  const styleImg = {
    width: "200px",
  };

  return (
    <div>
      <ul>
        {error && <>Something went wrong</>}
        {!error &&
          casts &&
          casts.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <img src={imgUrl + profile_path} alt={name} style={styleImg} />
              <h3>{name}</h3>
              <p>Character: {character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;

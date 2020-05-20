import React, { useEffect, useState } from "react";
import { fetchReviews } from "../../utils/apiRequest";

const Reviews = (props) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");

  const movieId = props.match.params.movieId;

  useEffect(() => {
    fetchReviews(movieId)
      .then((res) => setReviews(res.results))
      .catch((error) => setError(error));
  }, [movieId]);

  return (
    <div>
      {error && <>Something went wrong</>}
      {reviews.map(({ id, author, content }) => (
        <div key={id}>
          <h3>{author}</h3>
          <p>{content}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;

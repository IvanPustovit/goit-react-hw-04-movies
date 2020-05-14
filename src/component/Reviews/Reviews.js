import React, { useEffect, useState } from "react";
import { fetchReviews } from "../../utils/apiRequest";

const Reviews = (props) => {
  const [reviews, setReviews] = useState([]);
  const movieId = props.match.params.movieId;

  useEffect(() => {
    fetchReviews(movieId).then((res) => setReviews(res.results));
  }, [movieId]);

  return (
    <div>
      {reviews.map((el) => (
        <div key={el.id}>
          <h3>{el.author}</h3>
          <p>{el.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;

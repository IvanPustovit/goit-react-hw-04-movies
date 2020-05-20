import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <section>
        <div>
          <h1>Uh-oh.</h1>
          <h2>It looks like you’re lost.</h2>
        </div>

        <Link to="/">
          <span>Go To Homepage</span>
        </Link>
      </section>
    </div>
  );
};

export default NotFound;

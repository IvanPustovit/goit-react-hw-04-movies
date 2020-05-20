import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";
import { routes } from "../../utils/routes";

const activeStyle = {
  color: "brown",
};

const Header = () => {
  const { HOME, MOVIES } = routes;
  return (
    <header className="header">
      <NavLink to={HOME} className="home" exact activeStyle={activeStyle}>
        Home
      </NavLink>
      <NavLink to={MOVIES} className="home" activeStyle={activeStyle}>
        Movies
      </NavLink>
    </header>
  );
};

export default Header;

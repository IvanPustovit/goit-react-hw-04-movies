import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const activeStyle = {
  color: "brown",
};

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/" className="home" exact activeStyle={activeStyle}>
        Home
      </NavLink>
      <NavLink to="/movies" className="home" activeStyle={activeStyle}>
        Movies
      </NavLink>
    </header>
  );
};

export default Header;

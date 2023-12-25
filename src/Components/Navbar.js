import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <div>
        <nav>
          <NavLink to="/" exact="true">
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/post">Post</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

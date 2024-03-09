import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNavbar = () => {
  return (
    <nav className="header-nav">
      <NavLink to="/" className="header-nav-link">
        Товары
      </NavLink>
      <NavLink to="/about" className="header-nav-link">
        О проекте
      </NavLink>
    </nav>
  );
};

export default HeaderNavbar;

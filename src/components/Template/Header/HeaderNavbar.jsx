import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNavbar = () => {
  return (
    <nav className="header-nav">
      <NavLink to="/" className="header-nav-link">
        Главная
      </NavLink>
      <NavLink to="/products" className="header-nav-link">
        Товары
      </NavLink>
    </nav>
  );
};

export default HeaderNavbar;

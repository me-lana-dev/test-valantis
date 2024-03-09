import React from "react";
import "../../../assests/styles/header.css";
import { Link, useLocation } from "react-router-dom";
import HeaderNavbar from "./HeaderNavbar";

const HeaderTemplate = () => {
  const { pathname } = useLocation();
  return (
    <header className="header">
      <div className="header-logo">
        {pathname === "/" ? (
          <span>Logo</span>
        ) : (
          <Link to="/" className="logo logo-link" state={{ currentlink: "/" }}>
            Logo
          </Link>
        )}
      </div>
      <HeaderNavbar />
    </header>
  );
};

export default HeaderTemplate;

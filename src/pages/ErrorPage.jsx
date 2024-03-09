import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="page">
      <h1>404</h1>
      <p className="message">Такой страницы не существует</p>
      <p className="message">
        <Link to="/">На главную</Link>
      </p>
    </div>
  );
};

export default ErrorPage;

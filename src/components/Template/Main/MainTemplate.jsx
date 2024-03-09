import React from "react";
import { Outlet } from "react-router-dom";

const MainTemplate = () => {
  return (
    <main className="main">
      <Outlet />
    </main>
  );
};

export default MainTemplate;

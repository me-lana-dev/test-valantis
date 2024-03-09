import React from "react";
import cl from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={cl.loaderWrap}>
      <span className={cl.loader}></span>
    </div>
  );
};

export default Loader;

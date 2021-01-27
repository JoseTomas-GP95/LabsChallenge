import React from "react";
import "./Container.css";
import Search from "../search/Search";
import Cards from "../productos/Cards";

const Container = () => {
  return (
    <div className="container">
      <div className="container__search">
        <Search />
      </div>

      <div className="container__cards">
        <Cards />
      </div>
    </div>
  );
};

export default Container;
import React from 'react';
import "./Container.css";
import Sidebar from "../sidebar/Sidebar";
import Search from "../search/Search";

const Container = () => {
  return (
    <div className="container">
      <div className="container-white">
        <Sidebar />
        <Search />
      </div>
    </div>
  )
}

export default Container;
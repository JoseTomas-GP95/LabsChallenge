import React from "react";
import Container from "./components/productos/Container";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";


function App() {
  return (
    <div className="App">
      <div className="app__body">
        <Sidebar />
      <Container />
      </div>
    </div>
  );
}

export default App;

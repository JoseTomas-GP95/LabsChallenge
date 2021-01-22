import React from "react";
import "./Search.css";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";

function Search() {
  const style = {
    background: "linear-gradient(to right, #0083B0, #00B4DB)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 55,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  };

  return (
    <div className="search">
      <h2>Encuentra justamente lo que quieres tener con la ApiLibre</h2>
      <div className="search-icon">
        <TextField
          id="outlined-search"
          label="Buscador APILibre"
          type="search"
          variant="outlined"
        />
        <Button
          style={style}
          variant="contained"
          // color="primary"
          color="default"
          startIcon={<SearchIcon />}
        >
          Buscar
        </Button>
      </div>
    </div>
  );
}

export default Search;

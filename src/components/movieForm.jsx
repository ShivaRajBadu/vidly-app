import React from "react";
import { Navigate } from "react-router-dom";
const MovieForm = (props) => {
  return (
    <div>
      <h1>movie form{props}</h1>
      <button
        onClick={() => Navigate("/movies")}
        className="btn btn-primary btn-sm"
      >
        save
      </button>
    </div>
  );
};

export default MovieForm;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const MovieForm = () => {
  const params = useParams();
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    navigate("/movies");
  }
  return (
    <div>
      <h1>movie form : {params.id}</h1>
      <button onClick={handleClick} className="btn btn-primary">
        save
      </button>
    </div>
  );
};

export default MovieForm;

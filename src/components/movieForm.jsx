import React from "react";
import { useParams } from "react-router";

const MovieForm = (props) => {
  let params = useParams();
  return <h1>movie form{params.id}</h1>;
};

export default MovieForm;

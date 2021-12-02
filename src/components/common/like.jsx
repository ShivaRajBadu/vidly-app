import React from "react";

//input : liked: boolean
//output : onClick
const Like = (props) => {
  let classes = props.liked === true ? "fas fa-heart" : "far fa-heart";
  return (
    <i
      onClick={() => props.onClick(props.movies)}
      style={{ cursor: "pointer" }}
      className={classes}
    ></i>
  );
};

export default Like;

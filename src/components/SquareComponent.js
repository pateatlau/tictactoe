import React from "react";

import "./SquareComponent.css";

const SquareComponent = (props) => {
  let classes = props.disableSquare ? "square disable-square" : "square";
  classes += props.highlightSquare ? " highlighted" : "";

  return (
    <button className={classes} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default SquareComponent;

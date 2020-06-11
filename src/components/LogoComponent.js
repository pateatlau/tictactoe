import React from "react";

import TicTacToe from "./../TicTacToe.svg";
import "./LogoComponent.css";

const LogoComponent = () => {
  return (
    <div className="tic-tac-toe-logo-container">
      <img src={TicTacToe} className="tic-tac-toe-logo" alt="TicTacToe Logo" />
    </div>
  );
};

export default LogoComponent;

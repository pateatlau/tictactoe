import React from "react";
import { useSelector } from "react-redux";

import "./ResultComponent.css";

const ResultComponent = () => {
  console.log("RESULT COMPONENT: ");
  const { player1, player2, player1GamesWon, player2GamesWon } = useSelector(
    (state) => state.players
  );
  console.log("player1 =", player1);
  console.log("player2 =", player2);
  console.log("player1GamesWon =", player1GamesWon);
  console.log("player2GamesWon =", player2GamesWon);
  const winner =
    player1GamesWon >= player2GamesWon
      ? { number: 1, name: player1, symbol: "X" }
      : { number: 2, name: player2, symbol: "O" };

  return (
    <>
      <div className="left-column"></div>
      <div className="center-column">
        <div className="title">WINNER!</div>
        <div className="winning-player-box">
          <div className="winning-player-number">PLAYER {winner.number}</div>
          <div className="winning-player-name">{winner.name}</div>
          <div className="winning-player-symbol">{winner.symbol}</div>
        </div>
      </div>
      <div className="right-column"></div>
    </>
  );
};

export default ResultComponent;

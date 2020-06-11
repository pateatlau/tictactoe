import React from "react";

import BoardPlayerInfoScoresComponent from "./BoardPlayerInfoScoresComponent";
import "./BoardPlayerInfoComponent.css";

const BoardPlayerInfoComponent = ({
  maxWins,
  numberOfGamesWon,
  playerNumber,
  playerName,
  winner,
  isDraw,
  xIsNext,
}) => {
  const isWinner =
    (winner === "X" && playerNumber === "1") ||
    (winner === "O" && playerNumber === "2");

  const isYourTurn =
    ((playerNumber === "1" && xIsNext) || (playerNumber === "2" && !xIsNext)) &&
    !winner &&
    !isDraw;

  const isHighlightPlayerBox = isWinner || isYourTurn || isDraw;
  const playerBoxClasses = isHighlightPlayerBox
    ? "player-box highlight-player-box"
    : "player-box";

  return (
    <>
      <div className="highlighted">
        {isWinner && "WINNER"}
        {isDraw ? "DRAW" : ""}
        {isYourTurn && "Your Turn"}
      </div>
      <div className={playerBoxClasses}>
        <div className="player-number">Player {playerNumber}</div>
        <div className="player-name">{playerName}</div>
        <div className="player-symbol">{playerNumber === "1" ? "X" : "O"}</div>
      </div>
      <BoardPlayerInfoScoresComponent
        maxWins={maxWins}
        numberOfGamesWon={numberOfGamesWon}
      />
    </>
  );
};

export default BoardPlayerInfoComponent;

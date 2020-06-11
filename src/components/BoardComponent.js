import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { initGame, setGameOver, updatePlayerGamesWon } from "./../redux";
import BoardPlayerInfoComponent from "./BoardPlayerInfoComponent";
import SquareComponent from "./SquareComponent";
import { calculateWinner } from "../utils/helperFunctions";
import "./BoardComponent.css";

const BoardComponent = () => {
  const { player1, player2, player1GamesWon, player2GamesWon } = useSelector(
    (state) => state.players
  );

  const gameState = useSelector((state) => state.game);

  const dispatch = useDispatch();

  const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    const squares = [...boardSquares];

    if (calculateWinner(boardSquares) || squares[index]) {
      return;
    }

    squares[index] = xIsNext ? "X" : "O";
    setBoardSquares(squares);
    setXIsNext(!xIsNext);
  };

  // Create a render square function
  const renderSquare = (index) => {
    const highlightSquare =
      winner && winningPattern.some((square) => square === index);

    return (
      <SquareComponent
        value={boardSquares[index]}
        highlightSquare={highlightSquare}
        disableSquare={calculateWinner(boardSquares) || boardSquares[index]}
        onClick={() => handleClick(index)}
      />
    );
  };

  const winningPattern = calculateWinner(boardSquares);
  const winner = winningPattern ? winningPattern[0] : null;
  const isDraw = !winner && boardSquares.every((square) => square !== null);

  useEffect(() => {
    dispatch(initGame());
  }, []);

  useEffect(() => {
    const playersPayload = {
      player: winner === "X" ? 1 : 0,
      gamesWon: winner === "X" ? player1GamesWon + 1 : player2GamesWon + 1,
    };

    const gamePayload = {
      isGameOver: true,
    };

    if (winner) {
      dispatch(updatePlayerGamesWon(playersPayload));
    }

    if (isDraw || winner) {
      alert("Press OK to continue");
      dispatch(setGameOver(gamePayload));
    }
  }, [isDraw, winner]);

  return (
    <>
      <div className="left-column">
        <BoardPlayerInfoComponent
          maxWins={gameState.maxWins}
          numberOfGamesWon={player1GamesWon}
          playerNumber="1"
          playerName={player1}
          winner={winner}
          isDraw={isDraw}
          xIsNext={xIsNext}
        />
      </div>
      <div className="center-column">
        <div className="nested-container">
          <div className="row squares-row1">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="row squares-row2">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="row squares-row3">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      </div>
      <div className="right-column">
        <BoardPlayerInfoComponent
          maxWins={gameState.maxWins}
          numberOfGamesWon={player2GamesWon}
          playerNumber="2"
          playerName={player2}
          winner={winner}
          isDraw={isDraw}
          xIsNext={xIsNext}
        />
      </div>
    </>
  );
};

export default BoardComponent;

import React, { setState, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  initGame,
  setBoardSquares,
  setGameOver,
  updatePlayerGamesWon,
} from "./../redux";
import BoardPlayerInfoComponent from "./BoardPlayerInfoComponent";
import SquareComponent from "./SquareComponent";
import { calculateWinner } from "../utils/helperFunctions";
import "./BoardComponent.css";

const BoardComponent = () => {
  const { player1, player2, player1GamesWon, player2GamesWon } = useSelector(
    (state) => state.players
  );

  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  const gameState = useSelector((state) => state.game);
  //TODO: const boardSquares = gameState.boardSquares;
  console.log("BoardComponent: gameState = ", gameState);

  const dispatch = useDispatch();

  const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  console.log("BoardComponent: boardSquares = ", boardSquares);

  const handleClick = (index) => {
    console.log(index);

    // Copy our board state
    const squares = [...boardSquares];
    console.log("boardSquares", boardSquares);

    // If the index of the board is filled, return
    if (calculateWinner(boardSquares) || squares[index]) {
      return;
    }

    // Add X or O
    squares[index] = xIsNext ? "X" : "O";

    // Set the state of the board
    // TODO:
    // dispatch(setBoardSquares(squares));
    setBoardSquares(squares);

    // Set the state of the turn
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

  console.log(
    "JUST BEFORE CALLING WINNING PATTERN: BoardComponent: boardSquares = ",
    boardSquares
  );
  const winningPattern = calculateWinner(boardSquares);
  if (winningPattern) {
    setWinner(boardSquares[winningPattern[0]]);
  }

  if (!winner & boardSquares.every((square) => square !== null)) {
    setIsDraw(true);
  }

  console.log("isDraw = ", isDraw);

  console.log("winningPattern = ", winningPattern);
  console.log("winner = ", winner);

  useEffect(() => {
    console.log("useEffect dispatch initGAME");
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

    console.log("USEEFFECTTTTTT");

    if (isDraw || winner) {
      alert("DRAW OR WIN. Press OK to continue");
      dispatch(initGame());
    }

    if (winner) {
      dispatch(updatePlayerGamesWon(playersPayload));
      console.log("GAMESTATE.MAXWINS = ", gameState.maxWins);

      if (playersPayload.gamesWon === 1) {
        // gameState.maxWins) {
        // update game over
        dispatch(setGameOver(gamePayload));
      }
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

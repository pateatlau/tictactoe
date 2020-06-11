import React from "react";
import { useSelector } from "react-redux";

import PlayersComponent from "./PlayersComponent";
import GameComponent from "./GameComponent";
import "./MainComponent.css";
import ResultComponent from "./ResultComponent";

const MainComponent = () => {
  const playersState = useSelector((state) => state.players);
  const isGameOver = useSelector((state) => state.game.isGameOver);

  console.log("MAIN COMPONENT: ");
  console.log("isPlayersFormSubmitted = ", playersState.isPlayersFormSubmitted);
  console.log("player1 = ", playersState.user1);
  console.log("isGameOver = ", isGameOver);

  let componentToRender;

  if (!playersState.isPlayersFormSubmitted) {
    componentToRender = <PlayersComponent />;
  } else if (!isGameOver) {
    componentToRender = <GameComponent />;
  } else {
    componentToRender = <ResultComponent />;
  }

  return <div className="main-container">{componentToRender}</div>;
};

export default MainComponent;

import React from "react";

import "./BoardPlayerInfoScoresComponent.css";

const BoardPlayerInfoScoresComponent = ({ maxWins, numberOfGamesWon }) => {
  const tempArr = Array(maxWins).fill(null);

  return (
    <>
      <div className="scores-container">
        {tempArr.map((el, i) => (
          <div
            key={i}
            className={
              i < numberOfGamesWon ? "score highlighted" : "score dimmed"
            }
          ></div>
        ))}
      </div>
    </>
  );
};

export default BoardPlayerInfoScoresComponent;

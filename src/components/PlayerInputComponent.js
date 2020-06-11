import React from "react";

import "./PlayerInputComponent.css";

const PlayerInputComponent = ({ label, inputName, register, errors }) => {
  const PLAYER_NAME_MIN_LENGTH = 4;

  return (
    <>
      <div className="player-name-input-container">
        <label>
          {label}
          <br />
          <input
            autoFocus={inputName === "player1" ? true : false}
            type="text"
            name={inputName}
            className="player-name-input"
            ref={register({
              required: {
                value: true,
                message: "Name is required",
              },
              minLength: {
                value: PLAYER_NAME_MIN_LENGTH,
                message: `Name must be min. length of ${PLAYER_NAME_MIN_LENGTH}`,
              },
            })}
          />
        </label>
        {inputName === "player1" && errors.player1 && (
          <div className="error">{errors.player1.message}</div>
        )}
        {inputName === "player2" && errors.player2 && (
          <div className="error">{errors.player2.message}</div>
        )}
      </div>
    </>
  );
};

export default PlayerInputComponent;

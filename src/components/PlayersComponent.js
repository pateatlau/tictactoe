import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { initPlayers } from "../redux";
import "./PlayersComponent.css";
import PlayerInputComponent from "./PlayerInputComponent";

const PlayersComponent = () => {
  console.log("PLAYERS COMPONENT: ");
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const onSubmitForm = (formData) => {
    console.log("ONSUBMITFORM: The status of formData", formData);
    dispatch(initPlayers(formData));
  };

  return (
    <>
      <div className="left-column"></div>
      <div className="center-column">
        <div className="nested-container">
          <form className="players-form" onSubmit={handleSubmit(onSubmitForm)}>
            <div className="form-title-container">
              <span>Welcome to </span>
              <span className="game-name">TIC TAC TOE</span>
            </div>
            <PlayerInputComponent
              label="PLAYER 1"
              inputName="player1"
              register={register}
              errors={errors}
            />
            <PlayerInputComponent
              label="PLAYER 2"
              inputName="player2"
              register={register}
              errors={errors}
            />
            <div>
              <input type="submit" className="submit-button" value="Continue" />
            </div>
          </form>
        </div>
      </div>
      <div className="right-column"></div>
    </>
  );
};

export default PlayersComponent;

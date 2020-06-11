import { INIT_GAME, SET_BOARD_SQUARES, SET_GAME_OVER } from "./gameTypes";

export const initGame = (data) => {
  return {
    type: INIT_GAME,
    payload: data,
  };
};

export const setBoardSquares = (data) => {
  return {
    type: SET_BOARD_SQUARES,
    payload: data,
  };
};

export const setGameOver = (data) => {
  return {
    type: SET_GAME_OVER,
    payload: data,
  };
};

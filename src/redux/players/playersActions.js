import { INIT_PLAYERS, UPDATE_PLAYER_GAMES_WON } from "./playersTypes";

export const initPlayers = (data) => {
  return {
    type: INIT_PLAYERS,
    payload: data,
  };
};

export const updatePlayerGamesWon = (data) => {
  return {
    type: UPDATE_PLAYER_GAMES_WON,
    payload: data,
  };
};

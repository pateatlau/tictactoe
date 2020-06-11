import { INIT_PLAYERS, UPDATE_PLAYER_GAMES_WON } from "./playersTypes";

const initialState = {
  player1: "",
  player2: "",
  player1GamesWon: 0,
  player2GamesWon: 0,
  isPlayersFormSubmitted: false,
};

const playersReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_PLAYERS:
      return {
        ...state,
        player1: action.payload.player1,
        player2: action.payload.player2,
        player1GamesWon: 0,
        player2GamesWon: 0,
        isPlayersFormSubmitted: true,
      };

    case UPDATE_PLAYER_GAMES_WON:
      return action.payload.player === 1
        ? {
            ...state,
            player1GamesWon: action.payload.gamesWon,
          }
        : {
            ...state,
            player2GamesWon: action.payload.gamesWon,
          };

    default:
      return state;
  }
};

export default playersReducer;

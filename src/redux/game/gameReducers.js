import { INIT_GAME, SET_GAME_OVER, SET_BOARD_SQUARES } from "./gameTypes";
const initialState = {
  boardSquares: Array(9).fill(null),
  isGameOver: false,
  maxWins: 6,
};

const gameReducer = (state = initialState, action) => {
  console.log("GAMEREDUCER: state = ", state);
  console.log("GAMEREDUCER: action = ", action);

  switch (action.type) {
    case INIT_GAME:
      return {
        ...state,
        boardSquares: Array(9).fill(null),
      };

    case SET_BOARD_SQUARES:
      console.log("SET_BOARD_SQUARES");
      return {
        ...state,
        boardSquares: action.payload.boardSquares,
      };

    case SET_GAME_OVER:
      console.log("SET_GAME_OVER");
      return {
        ...state,
        isGameOver: action.payload.isGameOver,
      };

    default:
      return state;
  }
};

export default gameReducer;

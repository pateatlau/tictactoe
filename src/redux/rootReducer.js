import { combineReducers } from "redux";

import gameReducer from "./game/gameReducers";
import playersReducer from "./players/playersReducers";

const rootReducer = combineReducers({
  game: gameReducer,
  players: playersReducer,
});

export default rootReducer;

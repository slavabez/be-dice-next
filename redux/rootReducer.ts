import { combineReducers } from "@reduxjs/toolkit";
import connectionReducer from "./connectionSlice";
import userReducer from "./userSlice";
import roomReducer from "./roomSlice";

const rootReducer = combineReducers({
  connection: connectionReducer,
  user: userReducer,
  room: roomReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

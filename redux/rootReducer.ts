import { combineReducers } from "@reduxjs/toolkit";
import connectionReducer from "./connectionSlice";

const rootReducer = combineReducers({
  connection: connectionReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

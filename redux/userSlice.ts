import { createSlice } from "@reduxjs/toolkit";
import { User } from "../helpers/types";

export interface UserSlice {
  currentUser: User;
}

export const userSlice = createSlice({
  name: `user`,
  initialState: {
    currentUser: {
      name: "",
      avatar: {
        thumb: "",
        src: "",
        name: ""
      },
      color: {
        name: "",
        hex: ""
      }
    }
  },
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },

  }
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;

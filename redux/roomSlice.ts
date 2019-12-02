import { createSlice } from "@reduxjs/toolkit";
import { RollMessage, Room, User } from "../helpers/types";

export interface RoomState {
  rooms?: Room[];
  inRoom: boolean;
  roomName?: string;
  roomRolls?: RollMessage[];
  roomUsers?: User[];
}

export const roomSlice = createSlice({
  name: `room`,
  initialState: {},
  reducers: {
    joinRoom(state, action) {},
    leaveRoom(state) {},
    updateRoomList(state, action) {},

  }
});

export const { joinRoom, leaveRoom } = roomSlice.actions;

export default roomSlice.reducer;

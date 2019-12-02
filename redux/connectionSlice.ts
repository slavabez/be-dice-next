import { createSlice } from "@reduxjs/toolkit";
import SocketService from "../helpers/SocketService";

const socket = new SocketService();

export interface ConnectionState {
  isConnected: boolean;
  apiVersion?: string;
}

export const connectionSlice = createSlice({
  name: `connection`,
  initialState: {
    isConnected: false,
    apiVersion: "x.x.x"
  },
  reducers: {
    initConnect(state) {
      socket.init();
    },
    initDisconnect(state) {
      socket.stop();
    },
    setApiVersion(state, action) {
      state.apiVersion = action.payload;
    },
    setConnectionStatus(state, action) {
      state.isConnected = !!action.payload;
    },
    sendRegisterNewUser(_, action) {
      socket.registerUser(action.payload);
    },
    sendRestoreUser(_, action) {
      socket.restoreUser(action.payload);
    },
    sendCreateNewRoom(_, action) {
      socket.createARoom(action.payload);
    },
    sendJoinRoom(_, action) {
      socket.joinRoom(action.payload);
    },
    sendLeaveRoom(_, action) {
      socket.leaveRoom(action.payload);
    },
    sendANewRoll(_, action) {
      socket.sendARoll(action.payload);
    }
  }
});

export const {
  initConnect,
  initDisconnect,
  setApiVersion,
  setConnectionStatus,
  sendRegisterNewUser,
  sendRestoreUser,
  sendCreateNewRoom,
  sendJoinRoom,
  sendLeaveRoom,
  sendANewRoll
} = connectionSlice.actions;

export default connectionSlice.reducer;

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
    doRegisterNewUser(state, action) {

    }
  }
});

export const {
  initConnect,
  initDisconnect,
  setApiVersion,
  setConnectionStatus
} = connectionSlice.actions;

export default connectionSlice.reducer;

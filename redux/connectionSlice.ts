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
    doConnect(state) {
      socket.init();
    },
    doDisconnect(state) {
      socket.stop();
    },
    setApiVersion(state, action) {
      state.apiVersion = action.payload;
    },
    setConnectionStatus(state, action) {
      state.isConnected = !!action.payload;
    }
  }
});

export const {
  doConnect,
  doDisconnect,
  setApiVersion,
  setConnectionStatus
} = connectionSlice.actions;

export default connectionSlice.reducer;

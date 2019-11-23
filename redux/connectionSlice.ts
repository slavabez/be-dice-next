import { createSlice } from "@reduxjs/toolkit";
import SocketService from "../helpers/SocketService";

const socket = new SocketService();

export interface ConnectionState {
  isConnected: boolean;
  apiVersion?: string;
}

const connectionSlice = createSlice({
  name: `connection`,
  initialState: {
    isConnected: false,
    apiVersion: ""
  },
  reducers: {
    doConnect(state) {
      if (!state.isConnected) {
        socket.init();
        state.isConnected = true;
      }
    },
    doDisconnect(state) {
      if (state.isConnected) {
        socket.stop();
        state.isConnected = false;
      }
    },
    setApiVersion(state, action) {
      state.apiVersion = action.payload;
    }
  }
});

export const {
  doConnect,
  doDisconnect,
  setApiVersion
} = connectionSlice.actions;

export default connectionSlice.reducer;

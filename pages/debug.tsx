import React from "react";
import Layout from "../components/Layout";
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import SocketService from "../helpers/SocketService";

const initialState = {
  isConnected: false,
  user: null
};

const socketService = new SocketService();

const doConnect = createAction(`CONNECT`);
const doDisconnect = createAction(`DISCONNECT`);

const reducer = createReducer(initialState, {
  [doConnect.type]: state => {
    if (!state.isConnected) {
      socketService.init();
      return { isConnected: true, user: { ...state.user } };
    }
  },
  [doDisconnect.type]: state => {
    if (state.isConnected) {
      socketService.stop();
      return { isConnected: false, user: { ...state.user } };
    }
  }
});

const store = configureStore({
  reducer: reducer
});

const DebugPage = () => {
  return (
    <Layout>
      <div>
        <fieldset>
          <legend>Socket Redux actions</legend>
          <span>Status: {store.getState().isConnected.toString()}</span>
          <button
            onClick={() => {
              store.dispatch(doConnect());
            }}
          >
            Connect
          </button>
          <button
            onClick={() => {
              store.dispatch(doDisconnect());
            }}
          >
            Disconnect
          </button>
          <button>Register user</button>
          <button>Restore user</button>
          <button>Create a room</button>
        </fieldset>
      </div>
    </Layout>
  );
};

export default DebugPage;

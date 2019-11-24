import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import Layout from "../components/Layout";

import {
  doConnect,
  doDisconnect,
  setApiVersion
} from "../redux/connectionSlice";

const DebugContent = () => {
  const dispatch = useDispatch();
  const { isConnected, apiVersion } = useSelector(
    (state: RootState) => state.connection
  );

  return (
    <div>
      <fieldset>
        <legend>Socket Redux actions</legend>
        <span>Status: {isConnected.toString()}</span>
        <button
          onClick={() => {
            dispatch(doConnect());
          }}
        >
          Connect
        </button>
        <button
          onClick={() => {
            dispatch(doDisconnect());
          }}
        >
          Disconnect
        </button>
        <button>Register user</button>
        <button>Restore user</button>
        <button>Create a room</button>
      </fieldset>
    </div>
  );
};

export default () => (
  <Layout>
    <DebugContent />
  </Layout>
);

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import Layout from "../components/Layout";

import { doConnect, doDisconnect } from "../redux/connectionSlice";

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
        <br />
        <span>Version: {apiVersion}</span>
        <br />
        <h2>Connection</h2>
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
        <br/>
        <h2>User</h2>
        <button>Register user</button>
        <button>Restore user</button>
        <br/>
        <h2>Rooms</h2>
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

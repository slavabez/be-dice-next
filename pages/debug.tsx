import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import Layout from "../components/Layout";

import { initConnect, initDisconnect } from "../redux/connectionSlice";

const DebugContent = () => {
  const dispatch = useDispatch();
  const { isConnected, apiVersion } = useSelector(
    (state: RootState) => state.connection
  );
  const { currentUser } = useSelector((state: RootState) => state.user);
  const roomInfo = useSelector((state: RootState) => state.room);

  return (
    <div>
      <fieldset>
        <legend>Connection</legend>
        <span>Status: {isConnected.toString()}</span>
        <br />
        <span>Version: {apiVersion}</span>
        <br />
        <button
          onClick={() => {
            dispatch(initConnect());
          }}
        >
          Connect
        </button>
        <button
          onClick={() => {
            dispatch(initDisconnect());
          }}
        >
          Disconnect
        </button>
      </fieldset>

      <fieldset>
        <span>
          Current user: {JSON.stringify(currentUser)}
        </span>
        <legend>User actions</legend>
        <button>Register user</button>
        <button>Restore user</button>
      </fieldset>

      <fieldset>
        <legend>Room actions</legend>
        <span>Room List:</span>
        <br />
        <span>Current Room:</span>
        <br />
        <form>
          <input
            type="text"
            placeholder="room name"
            value="SampleRoom"
            onChange={() => {}}
          />
        </form>
        <button>Create a room</button>
        <button>Join a room</button>
        <button>Leave the room</button>
      </fieldset>
      <fieldset>
        <legend>In-room actions</legend>
        <span>Rolls: </span>
        <br />
        <span>Users: </span>
        <br />
        <button>Roll a die</button>
      </fieldset>
    </div>
  );
};

export default () => (
  <Layout>
    <DebugContent />
  </Layout>
);

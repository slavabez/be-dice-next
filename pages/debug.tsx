import React from "react";
import { connect } from "react-redux";
import Layout from "../components/Layout";

import { doConnect, doDisconnect } from "../redux/connectionSlice";

const mapDispatch = { doConnect, doDisconnect };

const DebugPage = ({ doConnect, doDisconnect }) => {
  return (
    <Layout>
      <div>
        <fieldset>
          <legend>Socket Redux actions</legend>
          <span>Status:</span>
          <button
            onClick={() => {
              doConnect();
            }}
          >
            Connect
          </button>
          <button
            onClick={() => {
              doDisconnect();
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

export default connect(null, mapDispatch)(DebugPage);

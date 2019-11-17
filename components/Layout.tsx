import React from "react";
import SocketService from "../helpers/SocketService";
import { GlobalState } from "../helpers/types";
import { GlobalContext } from "./Context";

const initialState: GlobalState = {
  socketService: new SocketService(),
  activeRoom: null,
  myUser: null,
  rooms: []
};

const Layout: React.FC = props => {
  return (
    <div>
      <GlobalContext.Provider value={initialState}>
        <header>This is a header</header>
        {props.children}
      </GlobalContext.Provider>
    </div>
  );
};

export default Layout;

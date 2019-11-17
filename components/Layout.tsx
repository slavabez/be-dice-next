import React from "react";
import SocketService from "../helpers/SocketService";
import { GlobalState } from "../helpers/types";
import { GlobalProvider } from "./Context";

const initialState: GlobalState = {
  socketService: new SocketService(),
  activeRoom: null,
  myUser: null,
  rooms: []
};

const Layout: React.FC = props => {
  console.log(`Layout rendering`, initialState);
  return (
    <GlobalProvider value={initialState}>
      <header>This is a header</header>
      {props.children}
    </GlobalProvider>
  );
};

export default Layout;

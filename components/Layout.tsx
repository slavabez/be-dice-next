import React, { createContext, useEffect } from "react";
import SocketService from "../helpers/SocketService";
import { GlobalContext } from "../helpers/types";

const initialState: GlobalContext = {
  socketService: new SocketService()
};

export const globalContext = createContext<GlobalContext>({});

const Layout: React.FC = props => {
  return (
    <div>
      <globalContext.Provider value={initialState}>
        <header>This is a header</header>
        {props.children}
      </globalContext.Provider>
    </div>
  );
};

export default Layout;

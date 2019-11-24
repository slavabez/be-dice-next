import React from "react";
import { Provider } from "react-redux";

import store from "../redux/store";

const Layout: React.FC = props => {
  return (
    <Provider store={store}>
      <header>This is a header</header>
      {props.children}
    </Provider>
  );
};

export default Layout;

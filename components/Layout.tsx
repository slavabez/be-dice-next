import React from "react";

const Layout: React.FC = props => {
  return (
    <div>
      <header>This is a header</header>
      {props.children}
    </div>
  );
};

export default Layout;

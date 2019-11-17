import React, { useContext } from "react";
import { GlobalContext } from "./Context";

const Landing: React.FC = () => {
  const global = useContext(GlobalContext);

  return (
    <section>
      <h1>Welcome page</h1>

    </section>
  );
};

export default Landing;

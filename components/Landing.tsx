import React, { useContext } from "react";
import { globalContext } from "./Layout";

const Landing: React.FC = () => {
  const global = useContext(globalContext);

  return (
    <section>
      <h1>Welcome page</h1>
      <button
        onClick={() => {
          global.socketService.init();
        }}
      >
        Init
      </button>
      <button
        onClick={() => {
          global.socketService.registerUser({
            name: `Slava`,
            id: `Yolooo`,
            avatar: `avatarrr`,
            color: `Yellow`
          });
        }}
      >
        Register
      </button>
    </section>
  );
};

export default Landing;

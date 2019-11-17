import React, { useContext } from "react";
import Layout from "../components/Layout";
import GlobalContext from "../components/Context";

const DebugPage = () => {
  const global = useContext(GlobalContext);
  console.log(`Debug page, context:`, global);
  return (
    <Layout>
      <div>
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
              avatar: {
                name: `Solo Yolo`,
                src: `url`,
                thumb: `thumb`
              },
              color: {
                hex: `somehex`,
                name: `color name`
              }
            });
          }}
        >
          Register
        </button>
        <button
          onClick={() => {
            global.socketService.restoreUser(
              `f035d26764c20d14cc1c8678294fea23:eaf1f78fe662e2b015999f3097fa6bc8526faf44c4c24c489e06da612e3abbe33e7949849a027dd53b85993ae19bf187e65e6685acb146f681e6d663e2c974a5b446cb8f075fd4d6f382d225a11f9f551324becd82fd2c4bf7812f09ae53e283e957d99cf5f468cdcd79b422e059e7ff10788edecbe8fcc9d1af73ac811a2fa09baed5ce10d1a3c9521eb43697ee68d9a79ff661df7de771f928c9a77551dd2860f7f81fde820ea016fa548e1f3e482b`
            );
          }}
        >
          Restore
        </button>
      </div>

    </Layout>
  );
};

export default DebugPage;

import React, { useContext } from "react";
import Layout, { globalContext } from "../components/Layout";
import Landing from "../components/Landing";

const IndexPage = () => {

  return (
    <Layout>
      <Landing />
    </Layout>
  );
};

export default IndexPage;

import Layout from "../components/layout/Layout";
import Banner13_5 from "../components/sections/Banner13_5";
import Brands1_11 from "../components/sections/Brands1_11";
import React from "react";

function Explore() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark light-hero-header"
      >
        <Banner13_5 />
        <Brands1_11 />
      </Layout>
    </>
  );
}

export default Explore;

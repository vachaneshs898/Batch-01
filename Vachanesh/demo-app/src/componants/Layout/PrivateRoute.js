import Footer from "componants/Footer";
import Header from "componants/Header";
import SidePanel from "componants/SidePanel";
import React from "react";
import { Outlet } from "react-router-dom";

function PrivateRoute() {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <SidePanel />
        <div style={{width: '70%'}}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PrivateRoute;

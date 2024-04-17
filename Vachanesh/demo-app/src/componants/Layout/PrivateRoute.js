import Footer from "componants/Footer";
import Header from "componants/Header";
import React from "react";
import { Outlet } from "react-router-dom";

function PrivateRoute() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default PrivateRoute;

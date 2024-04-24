import "./App.css";

import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "componants/Pages/Home";
import AboutUs from "componants/Pages/AboutUs";
import Users from "componants/Pages/Users";
import UserDetail from "componants/Pages/UserDetail";
import PrivateRoute from "componants/Layout/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Route>
    </Routes>
  );
}

export default App;

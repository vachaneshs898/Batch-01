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
        <Route path="/about" element={<AboutUs />}>
          <Route path="/about/demo" element={<div>this is me</div>} />
          <Route path="/about/demo1" element={<div>this is me1</div>} />
        </Route>
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Route>
    </Routes>
  );
}

export default App;

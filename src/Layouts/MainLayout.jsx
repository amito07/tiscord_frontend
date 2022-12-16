import React from "react";
import Login from "../Pages/Login";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "../routes/ProtectedRoutes/PrivateRoutes.js";
import Home from "../Pages/Home";

const MainLayout = () => {
  console.log("Hitttt");
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default MainLayout;

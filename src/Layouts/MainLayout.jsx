import React from "react";
import Login from "../Pages/Login";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "../routes/ProtectedRoutes/PrivateRoutes.js";
import Home from "../Pages/Home";
import Chat from '../Pages/Chat'

const MainLayout = () => {
  console.log("Hitttt");
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Route>
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default MainLayout;

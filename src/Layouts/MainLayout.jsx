import React from "react";
import Login from "../Components/Login";
import { Route, Routes, Navigate } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
};

export default MainLayout;

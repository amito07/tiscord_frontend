import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  let auth;
  if (sessionStorage && sessionStorage.getItem("token") !== undefined) {
    auth = sessionStorage.getItem("token");
  }
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;

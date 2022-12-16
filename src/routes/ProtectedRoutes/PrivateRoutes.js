import { Layout } from "antd";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const { Header, Content } = Layout;

const PrivateRoutes = () => {
  let auth;
  if (sessionStorage && sessionStorage.getItem("token") !== undefined) {
    auth = sessionStorage.getItem("token");
  }
  return auth ? (
    <>
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;

import React from "react";
import Login from "../Pages/Login";
import { Route, Routes, Navigate } from "react-router-dom";
import { Layout, Row } from "antd";
const { Footer, Content } = Layout;

const MainLayout = () => {
  return (
    <>
      <Layout>
        <Content>
          {" "}
          <Row justify="center">
            <div>
              <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Login />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
              </Routes>
            </div>
          </Row>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default MainLayout;

import React from "react";
import { Card, Col, Image, Row, Typography, Tabs } from "antd";
import LoginImage from "../../utils/images/login.png";
import LoginComponent from "../../Components/Authentication/LoginComponent";
import SignupComponent from "../../Components/Authentication/SignupComponent";

const { Title } = Typography;

const Login = () => {
  return (
    <div>
      <Row
        justify="space-around"
        gutter={[10, 10]}
        style={{ marginTop: "5em" }}
      >
        <Col xs={24} md={10}>
          <Image width="70%" preview={false} src={LoginImage} />
        </Col>
        <Col xs={24} md={12}>
          <Card style={{ justifyContent: "center" }}>
            <Title level={3}>Tiscord</Title>
            <Tabs
              defaultActiveKey="1"
              centered="true"
              size="large"
              tabBarGutter={100}
            >
              <Tabs.TabPane tab="Login" key="1">
                <LoginComponent />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Signup" key="2">
                <SignupComponent />
              </Tabs.TabPane>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Login;

import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { BaseAPI } from "../../../utils/ApiGateway";
import { useNavigate } from "react-router-dom";
import { Notification } from "../../../utils/Notification";

const LoginComponent = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    const result = await BaseAPI.post("/auth/login", values);
    console.log(result)
    if (result) {
      const formattedData = JSON.stringify(result?.data?.data)
      sessionStorage.setItem("token", result?.data?.data?.token);
      sessionStorage.setItem("userInfo", formattedData);

      navigate("/");
      Notification("Success", result?.data?.message, "success");
    }else{
      Notification("Error", "Something Went Wrong", "error");

    }
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginComponent;

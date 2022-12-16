import React from "react";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { BaseAPI } from "../../../utils/ApiGateway";
import { useNavigate } from "react-router-dom";
import { Notification } from "../../../utils/Notification";

const SignupComponent = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const singUpInfo = {
      name: values.username,
      email: values.email,
      password: values.password,
    };

    console.log(singUpInfo);
    try {
      const result = await BaseAPI.post("/auth/signup", singUpInfo);
      if (result) {
        sessionStorage.setItem("token", result?.data?.token);
        navigate("/")
        Notification("Success", "Sign Up Successfully", "success");
      }
    } catch (error) {
      console.log(error);
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
          type="email"
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Email Address"
        />
      </Form.Item>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
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
      <Form.Item
        name="repassword"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Re-Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignupComponent;

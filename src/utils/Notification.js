import { notification } from "antd";

export const Notification = (message, description, type) => {
  notification[type]({
    message: message,
    description: description,
  });
};
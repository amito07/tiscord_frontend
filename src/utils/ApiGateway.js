import axios from "axios";

export const BaseAPI = axios.create({
  baseURL: process.env.REACT_APP_BaseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${sessionStorage.getItem("token")}`
  },
});


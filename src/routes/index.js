import Home from "../Pages/Home";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <>
      <Route path="/" element={<Home />} />
    </>
  );
};

export default AppRoutes;

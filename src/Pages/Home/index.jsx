import React from "react";
import { useContext } from "react";
import { ChatContext } from "../../Context/ChatProvider";
import Navbar from "../../Components/Navbar";

const Home = () => {
  const { user } = useContext(ChatContext);
  console.log("Amit", user);
  return (
    <>
      <Navbar />
      <h1>Home</h1>
    </>
  );
};

export default Home;

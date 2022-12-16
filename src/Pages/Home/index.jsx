import React from "react";
import { useContext } from "react";
import { ChatContext } from "../../Context/ChatProvider";

const Home = () => {
  const { user } = useContext(ChatContext);
  console.log("Amit", user);
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default Home;

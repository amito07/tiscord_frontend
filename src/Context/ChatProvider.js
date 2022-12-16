import { createContext, useContext, useEffect, useState } from "react";

export const ChatContext = createContext();

const ChatProvider = ({ children }) => {

  const [user, setUser] = useState();
  useEffect(() => {
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    setUser(userInfo);

  }, []);
  return <ChatContext.Provider value={{user}}>{children}</ChatContext.Provider>;
};

export const ChatState = ()=>{
    return useContext(ChatContext)
}

export default ChatProvider;

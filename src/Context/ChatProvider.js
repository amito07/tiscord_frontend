import { createContext, useContext, useEffect, useState } from "react";

export const ChatContext = createContext();

const ChatProvider = ({ children }) => {

  const [user, setUser] = useState();
  useEffect(()=>{
    setUser(JSON.parse(sessionStorage.getItem("userInfo")))

  },[])
  return <ChatContext.Provider value={{user,setUser}}>{children}</ChatContext.Provider>;
};

export const ChatState = ()=>{
    return useContext(ChatContext)
}

export default ChatProvider;

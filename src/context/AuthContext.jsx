import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

// Create the user context
export const userContext = createContext();

const AuthContext = ({ children }) => {
  // State to store user information
  const [user, setUser] = useState(20);

  // Provide context data
  const contextData = {
    user,
    setUser,
  };

  return (
    <userContext.Provider value={contextData}>
      {children ? children : <Outlet />}
    </userContext.Provider>
  );
};

export default AuthContext;

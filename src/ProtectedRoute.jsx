import React from "react";
import { useContext } from "react";
// ./contexts/AuthContext
import { userContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
function ProtectedRoute({ children }) {
  const { user } = useContext(userContext);
  console.log(user)
  if (user == null) {
    return <Navigate to="/auth/sign-up" />;
  }
  return children;
  
} 
export default ProtectedRoute;
  
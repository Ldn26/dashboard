
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { MaterialTailwindControllerProvider } from "@/context";
import "../public/css/tailwind.css";
import ProtectedRoute from "./ProtectedRoute";
import AuthContext from "./context/AuthContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContext>
      <ThemeProvider>
        <MaterialTailwindControllerProvider>
          {/* <ProtectedRoute> */}


          <App />
          {/* </ProtectedRoute> */}
        </MaterialTailwindControllerProvider>
      </ThemeProvider>
</AuthContext>
    </BrowserRouter>
  </React.StrictMode>
);

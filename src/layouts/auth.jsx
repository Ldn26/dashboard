  import { Routes, Route } from "react-router-dom";
  import {
    ChartPieIcon,
    UserPlusIcon,
  } from "@heroicons/react/24/solid";
  import { SignIn, SignUp } from "@/pages/auth";
  export function Auth() {
    const navbarRoutes = [
      {
        name: "dashboard",
        path: "/dashboard/home",
        icon: ChartPieIcon,
      },

      {
        name: "sign up",
        path: "/auth/sign-up",
        icon: UserPlusIcon,
      },

    ];

    return (
      <div className="relative min-h-screen w-full">  
        <Routes>
        <Route path="/sign-up" element={ <SignUp/>} />
            <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
    );
  }

  Auth.displayName = "/src/layout/Auth.jsx";

  export default Auth;

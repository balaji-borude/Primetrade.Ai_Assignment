import React from "react";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import { Route, Routes } from "react-router";
import OpenRoutes from "./components/auth/OpenRoutes";
import PrivateRoutes from "./components/auth/PrivateRoutes";
import Dashboard from "./components/core/Dashboard";

import { ACCOUNT_TYPE } from "./constant/constant";

const App = () => {
  // const { user } = localStorage.getItem("user");
  const user = {
    role: "User",
  };

  return (
    <div className="flex flex-col justify-around h-screen">
      <Routes>
        <Route
          path="/"
          element={
       
              <Login />
          
          }
        />

        {/* Whole dahsboard route are private here  */}
        {/* <PrivateRoutes>
          <Dashboard />
        </PrivateRoutes> */}

        {user.role == ACCOUNT_TYPE.USER && (
          <>
            <Route path="dashboard/profile" />
          </>
        )}
        {user.role == ACCOUNT_TYPE.ADMIN && (
          <>
            <Route path="dashboard/profile" />
          </>
        )}


      </Routes>
    </div>
  );
};

export default App;

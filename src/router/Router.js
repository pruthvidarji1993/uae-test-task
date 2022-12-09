import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error from "../pages/Authentication/Error";
import Login from "../pages/Authentication/Login";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="*"
        exact
        element={
          <PublicRoute fullLayout>
            <Error />
          </PublicRoute>
        }
      />
      <Route
        path="/login"
        exact
        element={
          <PublicRoute fullLayout>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/"
        exact
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;

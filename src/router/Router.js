import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../component/common/loader";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Login = lazy(() => import("../pages/Authentication/Login"));
const Home = lazy(() => import("../pages/Home/Home"));
const Error = lazy(() => import("../pages/Authentication/Error"));

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="*"
        exact
        element={
          <Suspense fallback={<Loader />}>
            <PublicRoute fullLayout>
              <Error />
            </PublicRoute>
          </Suspense>
        }
      />
      <Route
        path="/login"
        exact
        element={
          <Suspense fallback={<Loader />}>
            <PublicRoute fullLayout>
              <Login />
            </PublicRoute>
          </Suspense>
        }
      />
      <Route
        path="/"
        exact
        element={
          <Suspense fallback={<Loader />}>
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRouter;

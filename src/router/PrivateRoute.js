import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.login.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated])

  return <MainLayout>{children}</MainLayout>;
};

export default PrivateRoute;

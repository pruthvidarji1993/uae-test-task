import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.login.isAuthenticated);

  // useeffect is listening for isAuthenticated changes if the user is unauthenticated then redirect to the login page
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])

  return <MainLayout>{children}</MainLayout>;
};

export default PrivateRoute;

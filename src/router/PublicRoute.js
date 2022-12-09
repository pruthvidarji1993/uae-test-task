import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FullLayout from "../layouts/FullLayout";

const PublicRoute = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.login.isAuthenticated);
  
  // useeffect is listening for isAuthenticated changes if the user is authenticated then redirect to the home page
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])
  return <FullLayout>{children}</FullLayout>;
};

export default PublicRoute;

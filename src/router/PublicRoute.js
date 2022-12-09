import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FullLayout from "../layouts/FullLayout";

const PublicRoute = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.login.isAuthenticated);
  
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated])
  return <FullLayout>{children}</FullLayout>;
};

export default PublicRoute;

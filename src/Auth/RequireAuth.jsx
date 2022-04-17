import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../Firebase/Firebase.config";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  if (!auth?.currentUser?.uid) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;

import React from "react";
import { Navigate } from "react-router-dom";

type protectRouteProps = {
  children: React.ReactElement;
};

const ProtectRoute: React.FC<protectRouteProps> = ({ children }) => {
  const isLogin = true;

  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectRoute;

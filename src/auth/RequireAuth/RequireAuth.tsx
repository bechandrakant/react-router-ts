import React, { FC, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Auth/AuthProvider";

interface Props {
  children: ReactNode;
}

const RequireAuth: FC<Props> = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return <>{children}</>;
};

export default RequireAuth;

import React from 'react';
import { Navigate } from "react-router-dom";
import { isLoggedIn } from './services/lsService';

const PrivateRoute = ({ children }: { children: React.ReactNode}) => {
  const currentUser = isLoggedIn();
  console.log('currentUser = ', currentUser)
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
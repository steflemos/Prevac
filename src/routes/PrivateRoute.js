import React from 'react';
import { useAuth } from '/Users/tiagosilva/Desktop/sitePrevac/Prevac/src/Pages/Login/AuthContext.js';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;

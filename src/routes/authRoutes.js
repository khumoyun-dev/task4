import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../utils/auth';
import Login from '../components/Login';
import Register from '../components/Register';

const AuthRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {!isAuthenticated && <Route exact path="/login" element={<Login />} />}
      {!isAuthenticated && <Route path="/register" element={<Register />} />}
      {isAuthenticated && <Navigate to="/admin-panel" replace />}
    </>
  );
};

export default AuthRoutes;

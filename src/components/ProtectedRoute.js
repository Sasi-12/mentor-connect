// src/components/ProtectedRoute.js
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return isAuthenticated ? children : <Navigate to="/login-signup" />;
};

export default ProtectedRoute;
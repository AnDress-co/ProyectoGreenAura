import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  console.log(useAuth())
  
  if (loading) return <p>Loading...</p>;
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}
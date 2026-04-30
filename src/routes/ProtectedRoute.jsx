import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()  
  
  if (loading) {
    return <div className="d-flex justify-content-center pt-5">
      <div className="spinner-border text-success text-center" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  }  
  
  if (!user) {
    return <Navigate to="/login" replace />
  }
  
  return children
}
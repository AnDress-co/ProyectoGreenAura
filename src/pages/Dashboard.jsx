import React from 'react'

import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className='text-center'>
      <h1>Welcome Admin</h1>
      <button onClick={handleLogout}>Cerrar Sesion</button>
    </div>
  )
}

export default Dashboard

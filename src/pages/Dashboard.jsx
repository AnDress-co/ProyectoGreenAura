import Navbar from '../components/Navbar';
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";


const Dashboard = () => {  

  const handleLogout = async () => {
    await signOut(auth);    
  };

  return (
    <>
      <Navbar />
      <div className='py-5 general-background text-center'>
        <h1 className='mt-5'>Welcome Admin Dashboard</h1>
        <button className='btn btn-danger' onClick={handleLogout}>Cerrar Sesion</button>
      </div>
    </>
  )
}

export default Dashboard

import { Link, useLocation } from 'react-router-dom'
import { CircleUserRound, SquareUserRound, UserX } from 'lucide-react'
import { signOut } from "firebase/auth";

import { auth } from "../firebase/config";
import Logo from '../assets/logo.png'

const Navbar = () => {
  const { pathname } = useLocation();
  const isLoggedIn = pathname.startsWith('/dashboard');

  const handleLogout = async () => {
    await signOut(auth);    
  };

  const navLinks = isLoggedIn ? [
    { to: '/dashboard', label: 'Panel de productos'},  
  ] : [
    { to: '/',               label: 'Inicio'           },
    { to: '/our-philosophy', label: 'Nuestra Filosofía' },
    { to: '/whats-new',     label: 'Promociones'       },
  ]

  const rightLinks = isLoggedIn ? [
    { to: '/profile', label: 'Mi perfil', icon: CircleUserRound }
  ] : [
    { to: '/login',   label: 'Iniciar Sesión', icon: CircleUserRound }
  ]

  return (
    <nav className="navbar navbar-expand-lg fixed-top color-navbar p-0">
      <div className="container-fluid">
        <h1 className="text-font fs-1">GreenAura
          <img src={Logo} style={{maxWidth: '50px'}} className='img-fluid' alt="Logo" />
        </h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse fw-medium" id="navbarNav">
          <div className='navbar-nav mx-md-auto'>
            {navLinks.map(({to, label}) => (
              <Link className="nav-link" key={to} to={to}>
                {label}
              </Link>
            ))}
          </div>
          <div className='navbar-nav'>
            {rightLinks.map(({to, label, icon: Icon}) => (
              label === 'Iniciar Sesión' ? 
              <Link className='nav-link d-flex align-items-center' key={to} to={to}>
                {Icon && <Icon />}
                {label}
              </Link> :
              <li className='nav-item dropdown m-2 me-5' key={to}>
                <Link className='nav-link dropdown-toggle d-flex align-items-center' to={to} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {Icon && <Icon />}
                  {label}
                </Link>
                <ul className='dropdown-menu'>
                  <li>
                    <Link className='dropdown-item fw-medium' to='/profile'>{Icon && <SquareUserRound />} Mi perfil</Link>
                  </li>
                  <li>
                    <Link className='dropdown-item fw-medium' to='/login' onClick={handleLogout}>{Icon && <UserX />} Cerrar sesión</Link>
                  </li>
                </ul>
              </li>             
            ))}
          </div>
        </div> 
      </div>
    </nav> 
  )
}

export default Navbar
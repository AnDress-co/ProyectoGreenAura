import { Link } from 'react-router-dom'
import { CircleUserRound } from 'lucide-react'

import Logo from '../assets/logo.png'

const Navbar = () => {
  return (    
    <nav className="navbar navbar-expand-lg navbar-custom p-0">
      <div className="container-fluid">
        <h1 className="text-font fs-1">GreenAura
          <img src={Logo} style={{maxWidth: '50px'}} className='img-fluid' alt="Logo" />
        </h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse fw-medium" id="navbarNav">
          <div className='navbar-nav mx-md-auto'>
            <Link className="nav-link" to="/">Inicio</Link>
            <Link className="nav-link" to="/our-philosophy">Nuestra Filosofía</Link>
            <Link className="nav-link" to="/promotions">Promociones</Link>
          </div>
          <div className='navbar-nav'>
            <Link className='nav-link d-flex align-items-center' to="/login">
              <CircleUserRound className='me-1' /> Iniciar Sesion
            </Link>
          </div>          
        </div>        
      </div>
    </nav>     
  )
}

export default Navbar
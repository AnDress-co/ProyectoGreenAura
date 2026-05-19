import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CircleUserRound, SquareUserRound, UserX } from 'lucide-react'
import { signOut } from "firebase/auth"
import { auth } from "../firebase/config"
import Logo from '../assets/logo.png'

const adminRoutes = ['/dashboard', '/profile', '/add-product', '/edit-product']

const Navbar = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const isLoggedIn = adminRoutes.some(route => pathname.startsWith(route))

  const handleLogout = async () => {
    await signOut(auth)
    navigate('/login')
  }

  const navLinks = isLoggedIn ? [
    { to: '/dashboard', label: 'Panel de productos' },
  ] : [
    { to: '/',               label: 'Inicio'            },
    { to: '/our-philosophy', label: 'Nuestra Filosofía'  },
    { to: '/whats-new',      label: 'Promociones'        },
  ]

  return (
    <nav className="navbar navbar-expand-lg fixed-top color-navbar p-0">
      <div className="container-fluid">
        <h1 className="text-font fs-1">GreenAura
          <img src={Logo} style={{ maxWidth: '50px' }} className='img-fluid' alt="Logo" />
        </h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse fw-medium" id="navbarNav">

          {/* Links centro */}
          <div className='navbar-nav mx-md-auto'>
            {navLinks.map(({ to, label }) => (
              <Link className="nav-link" key={to} to={to}>
                {label}
              </Link>
            ))}
          </div>

          {/* Links derecha */}
          <div className='navbar-nav'>
            {isLoggedIn ? (
              <li className='nav-item dropdown m-2 me-5'>
                <Link className='nav-link dropdown-toggle d-flex align-items-center gap-1' to="/profile" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <CircleUserRound />
                  Mi perfil
                </Link>
                <ul className='dropdown-menu'>
                  <li>
                    <Link className='dropdown-item fw-medium d-flex align-items-center gap-2' to='/profile'>
                      <SquareUserRound size={16} /> Mi perfil
                    </Link>
                  </li>
                  <li>
                    <button className='dropdown-item fw-medium d-flex align-items-center gap-2' onClick={handleLogout}>
                      <UserX size={16} /> Cerrar sesión
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <Link className='nav-link d-flex align-items-center gap-1' to='/login'>
                <CircleUserRound />
                Iniciar Sesión
              </Link>
            )}
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
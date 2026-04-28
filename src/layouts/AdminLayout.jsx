import { Link, useLocation, useNavigate} from 'react-router-dom'
import { LayoutDashboard, Package, Tag, User, LogOut } from 'lucide-react'
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import Logo from '../assets/logo.png'

const navLinks = [
  { to: '/admin-dashboard', label: 'Dashboard Public', icon: LayoutDashboard },
  { to: '/admin-products', label: 'Product Management', icon: Package },
  { to: '/admin-promotions', label: 'Promotions Management', icon: Tag },
]

const AdminLayout = ({ children }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
        await signOut(auth);
        navigate('/login')
    } catch (error) {
        console.error("Error al Cerrar sesión", error)
    }
  };

  return (
    <div className="admin-wrapper">
      {/* Sidebar */}
      <aside className="admin-sidebar d-flex flex-column justify-content-between py-4 px-3">
        {/* Logo */}
        <div>
          <div className="d-flex align-items-center gap-2 mb-5 px-2">
            <img src={Logo} alt="GreenAura Logo" style={{ maxWidth: '36px' }} />
            <span className="text-font fs-4 fw-semibold">GreenAura</span>
          </div>

          {/* Links */}
          <nav className="d-flex flex-column gap-2">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={`admin-nav-link d-flex align-items-center gap-3 px-3 py-2 rounded-3 ${pathname === to ? 'admin-nav-link--active' : ''}`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Inferior: Perfil y cierre de sesión */}
        <div className="admin-sidebar-footer border-top pt-4">
          <div className="d-flex align-items-center gap-3 px-2 mb-4">
            <div className="bg-golden rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
              <User size={20} className="text-dark" />
            </div>
            <div className="d-flex flex-column overflow-hidden">
              <span className="fw-bold small text-crema text-truncate">¡Hola, Admin!</span>
              <span className="text-white-50" style={{ fontSize: '0.7rem' }}>Panel de Control</span>
            </div>
          </div>

          <button 
            onClick={handleLogout}
            className="admin-nav-link d-flex align-items-center gap-3 px-3 py-2 rounded-3 border-0 bg-transparent w-100 text-start"
            style={{ cursor: 'pointer' }}
          >
            <LogOut size={18} />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="admin-main">
        {children}
      </main>

    </div>
  )
}

export default AdminLayout
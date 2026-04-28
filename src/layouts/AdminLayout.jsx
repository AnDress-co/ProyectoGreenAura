import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Package, Tag, CircleUserRound } from 'lucide-react'
import Logo from '../assets/logo.png'

const navLinks = [
  { to: '/admin-dashboard',              label: 'Dashboard Public',        icon: LayoutDashboard },
  { to: '/admin-products',     label: 'Product Management',      icon: Package         },
  { to: '/admin-promotions',   label: 'Promotions Management',              icon: Tag             },
]

const AdminLayout = ({ children }) => {
  const { pathname } = useLocation()

  return (
    <div className="admin-wrapper">

      {/* Sidebar */}
      <aside className="admin-sidebar d-flex flex-column justify-content-between py-4 px-3">

        {/* Logo */}
        <div>
          <div className="d-flex align-items-center gap-2 mb-5 px-2">
            <img src={Logo} alt="Logo" style={{ maxWidth: '36px' }} />
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

        {/* Mi Cuenta */}
        <Link to="/profile" className="admin-nav-link d-flex align-items-center gap-3 px-3 py-2 rounded-3">
          <CircleUserRound size={18} />
          <span>Mi Cuenta</span>
        </Link>

      </aside>

      {/* Contenido principal */}
      <main className="admin-main">
        {children}
      </main>

    </div>
  )
}

export default AdminLayout
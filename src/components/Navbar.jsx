import { Link } from 'react-router-dom'

const Navbar = () => {
  return (    
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">GreenAura</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Inicio</Link>
            <Link className="nav-link" to="/nuestra-filosofia">Nuestra Filosofía</Link>
            <Link className="nav-link" to="/novedades">Novedades</Link>
          </div>
        </div>
        <div>
          <button type="button" className="btn btn-success">Prueba</button>
        </div>
      </div>
    </nav>     
  )
}

export default Navbar
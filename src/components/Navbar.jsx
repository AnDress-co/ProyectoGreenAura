const Navbar = () => {
  return (    
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">GreenAura</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="#">Inicio</a>
            <a className="nav-link" href="#">Nuestra Filosofía</a>
            <a className="nav-link" href="#">Novedades</a>
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

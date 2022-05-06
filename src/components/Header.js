import { Link } from "react-router-dom"

const Header = () => {
  return (
      <div>
              <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm bg-black" id="mainNav">
      <div className="container">
          <a className="navbar-brand fw-bold text-white" href="#">Gobierno TI</a>
          <button className="navbar-toggler text-white bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <i className="bi-list text-white"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                  <li className="nav-item"><Link className="nav-link me-lg-3 text-white" to="/">Inicio</Link></li>
                  <li className="nav-item dropdown ">
                    <a className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Contenido</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#objetivos">Objetivos</a></li>
                      <li><a className="dropdown-item" href="#introduccion">Introduccion</a></li>
                      <li><a className="dropdown-item" href="#actividad">Actividad</a></li>
                      <li><a className="dropdown-item" href="#OptimizarProcesosTI">Optimización de recursos TI</a></li>
                      <li><a className="dropdown-item" href="#arquitecturCobit">Arquitectura Cobit</a></li>
                      <li><a className="dropdown-item" href="#computacionNube">Computación en la Nube</a></li>
                      <li><a className="dropdown-item" href="#cobit">Cobit</a></li>
                      <li><a className="dropdown-item" href="#itil">Itil</a></li>
                      <li><a className="dropdown-item" href="#conclusiones">Conclusiones</a></li>
                    </ul>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
      </div>
  )
}

export default Header
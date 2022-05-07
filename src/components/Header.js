/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom"

const Header = () => {
  return (
      <div>
              <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm bg-black" id="mainNav">
      <div className="container">
          <a className="navbar-brand fw-bold text-white" href="#">SBD Eje 2</a>
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
                    <li><a className="dropdown-item" href="#Presentadopor">Portada</a></li>
            <li><a className="dropdown-item" href="#objetivos">Objetivos</a></li>
            <li><a className="dropdown-item" href="#actividad">Instrucciones</a></li>
            <li><a className="dropdown-item" href="#Descripcion">Descripcion de la necesidad</a></li>
            <li><a className="dropdown-item" href="#Alcances">Alcances</a></li>
            <li><a className="dropdown-item" href="#Componentes">Componentes</a></li>
            <li><a className="dropdown-item" href="#Requerimientos">Requerimientos físicos y de software</a></li>
            <li><a className="dropdown-item" href="#Costes">Costes</a></li>
            <li><a className="dropdown-item" href="#Actividadesdesarrollo">Actividades de desarrollo con tiempos proyectados</a></li>
            <li><a className="dropdown-item" href="#Cronogramas">Cronogramas</a></li>
            <li><a className="dropdown-item" href="#Formaspago">Formas de pago</a></li>
            <li><a className="dropdown-item" href="#Condicionescomerciales">Condiciones comerciales</a></li>
            <li><a className="dropdown-item" href="#Tiempoentrega">Tiempo de entrega</a></li>
            <li><a className="dropdown-item" href="#softwareuso">Si se usaran herramientas de software, argumentar su uso</a></li>
            <li><a className="dropdown-item" href="#Procesos">Indicar cómo mejoraría la implementación de dicho sistema en el mejoramiento de la productividad, competitividad, procesos administrativos y procesos operativos del negocio.</a></li>
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
import React from 'react'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';

const navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/vistas/inicio"> <i className="fa-solid fa-house"></i> &nbsp; Actividades trabajador</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                    <Link className="nav-link" to="/vistas/inicio">Inicivcdo</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/vistas/registrar">Registrar actividad</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/vistas/consultar">Consultar</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default navbar
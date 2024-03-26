import React from 'react'
import { Link } from 'react-router-dom'

const inicio = () => {
  return (
    <div>
      <h1 id='titulo'>Módulo de registro y Consulta de actividades de los empleado</h1>    
      <div id='modulo' className="container text-center">
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Registro de actividades</h5>
                <p className="card-text">En está sección se encuentra un formulario para ingresar las actividades de los empleados</p>
                <a href="/vistas/registrar" className="btn btn-primary">Ir a registrar actividad</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Consulta de activididades</h5>
                <p className="card-text">En esta sección se visualizan todas las actividades realizadas por los empleados.</p>
                <a href="/vistas/consultar" className="btn btn-primary">Ir a consulta de actividades</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default inicio
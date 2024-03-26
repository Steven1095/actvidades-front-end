import React from 'react'

const consultar = () => {
  return (
    <div>
      <h1 id='titulo'>Consultar las actividades del empleado</h1>      
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12">
            <br></br>
            <h5>Consulte aquí todas las actividades realizadas por cada empleado</h5>
            <table id='tabla-consulta' className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nombres</th>
                  <th scope="col">Apellidos</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Actividad realizada</th>
                  <th scope="col">Hora de inicio</th>
                  <th scope="col">Hora de fin</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Soporte a los procesos que necesitan ser editados desde bases de datos </td>
                  <td>09:00 A.M.</td>
                  <td>09:30 P.M.</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>Soporte a los procesos que han sido bloqueados desde el firewall del servidor web</td>
                  <td>10:00 A.M.</td>
                  <td>10:30 P.M.</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Larry</td>
                  <td>Camarena</td>
                  <td>@twitter</td>
                  <td>Soporte técnico desde el usuario súper administrador</td>
                  <td>11:00 A.M.</td>
                  <td>11:30 P.M.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default consultar
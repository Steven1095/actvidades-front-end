import React from 'react'

const registrar = () => {
  return (
    <div>
        <h1 id='titulo'>Registrar las actividades del empleado</h1>
        <div className="container text-center">
           <div className="row">
              <div className="col-md-12">
                <br></br>
                <h5>Ingrese aquí todas las actividades realizadas por cada empleado</h5>
                <form id="form-registrar" className="row g-3 needs-validation" novalidate>
                  <div className="col-md-4">
                    <label for="validationCustom01" className="form-label">Nombres</label>
                    <input type="text" className="form-control" id="validationCustom01" placeholder="Mark" required />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label for="validationCustom02" className="form-label">Apellidos</label>
                    <input type="text" className="form-control" id="validationCustom02" placeholder="Otto" required />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label for="validationCustomUsername" className="form-label">Correo electrónico</label>
                    <div className="input-group has-validation">
                      <span className="input-group-text" id="inputGroupPrepend">@</span>
                      <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                      <div className="invalid-feedback">
                        Please choose a username.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label for="validationCustom03" className="form-label">Actividad realizada</label>
                    <input type="text" className="form-control" id="validationCustom03" required />
                    <div className="invalid-feedback">
                      Please provide a valid city.
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label for="validationCustom05" className="form-label">Hora de inicio</label>
                    <input type="text" className="form-control" id="validationCustom05" required />
                    <div className="invalid-feedback">
                      Please provide a valid hora.
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label for="validationCustom05" className="form-label">Hora de finalización</label>
                    <input type="text" className="form-control" id="validationCustom05" required />
                    <div className="invalid-feedback">
                      Please provide a valid zip.
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary" type="submit">Registrar actividad</button>
                  </div>
                </form>
              </div>
            </div>
        </div>
    </div>
  )
}

export default registrar
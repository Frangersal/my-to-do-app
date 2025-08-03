import { useState } from 'react'
import './todoApp.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


/// ===>>> Componente de AddTask / Añadir Tarea <<<===///
const AddTask = ({ }) => {


  return (
    <>
      <div className="col-12">
        <div data-mdb-input-init className="form-outline">

          <input type="text" id="form1" className="form-control" placeholder="Agregar tarea aqui..." />
        </div>
      </div>

      <div className="col-12">

        <ButtonSave />

      </div>
    </>
  )
}

/// ===>>> Componente de Save / Guardar Tarea <<<===///
const ButtonSave = ({ }) => {


  return (
    <>
      <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary">Guardar</button>
    </>
  )
}

/// ===>>> Componente de Task / Tarea <<<===///
const Task = ({ }) => {


  return (
    <>
      <tr>
        <th scope="row">1</th>
        <td>Buy groceries for next week</td>
        <td>In progress</td>
        <td>
          <div className="btn-group" role="group" aria-label="Basic mixed styles example">

            <ButtonCheck />

            <ButtonDelete />

          </div>
        </td>
      </tr>
    </>
  );
}

/// ===>>> Componente de Delete / Eliminar Tarea <<<===///
const ButtonCheck = ({ }) => {


  return (
    <>
      <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-success">Tachar</button>
    </>
  )
}

/// ===>>> Componente de Delete / Eliminar Tarea <<<===///
const ButtonDelete = ({ }) => {


  return (
    <>
      <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-danger">Eliminar</button>
    </>
  )
}

/// ===>>> Componente Padre <<<=== ///
export const TodoApp = () => {

  /// ===>>> States <<<=== ///
  const [task, setTask] = useState([])

  /// ===>>> Renderizado <<<=== ///
  return (
    <>
      <section className="vh-100" style={{
        background: '#eee',
      }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card rounded-3 text-bg-dark">
                <div className="card-body p-4 ">
                  <h4 className="text-center my-3 pb-3">To Do App</h4>

                  <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">

                    <AddTask />

                  </form>

                  <table className="table mb-4  table-dark ">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Tareas</th>
                        <th scope="col">Estatus</th>
                        <th scope="col">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>

                      <Task />

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
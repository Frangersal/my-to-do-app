import { useState } from 'react'
// import { db } from "./data/db.js";
import './todoApp.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


/// ===>>> Componente de AddTask / Añadir Tarea <<<===///
const AddTask = ({ }) => {

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    // fetch("/some-api", { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    const arrTask = [null,formJson.inputTask,"Pendiente",false]
    console.log(arrTask);
  }


  return (
    <>
      <form
        className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2"
        onSubmit={handleSubmit}
      >

        <div className="col-12">
          <div data-mdb-input-init className="form-outline">

            <input
              name="inputTask"
              type="text"
              id="form1"
              className="form-control"
              placeholder="Agregar tarea aqui..." 
              
              />

          </div>
        </div>

        <div className="col-12">

          <button
            type="submit"
            data-mdb-button-init data-mdb-ripple-init className="btn btn-primary"

          >

            Guardar

          </button>
          {/* <ButtonSave /> */}

        </div>

      </form>
    </>
  )
}

/// ===>>> Componente de Save / Guardar Tarea <<<===///
// const ButtonSave = ({ }) => {


//   return (
//     <>
//       <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary">Guardar</button>
//     </>
//   )
// }

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

  /// Inicializando lista de tareas en localStorage
  const initialTaskList = () => {
    const localStorageTaskList = localStorage.getItem('task')
    return localStorageTaskList ? JSON.parse(localStorageTaskList) : []
  }

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


                  <AddTask />


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
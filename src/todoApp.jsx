import { useState, useEffect } from 'react'
// import { db } from "./data/db.js";
import './todoApp.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

/// ===>>> Componente de AddTask / Añadir Tarea <<<===///
const AddTask = ({ storages, setStorages, todos, setTodos, }) => {

  // Función para manejar el envío del formulario
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const todosID = todos.length;

    // Crear el objeto de la nueva tarea
    const formJson = Object.fromEntries(formData.entries());
    const newTodo = {
      id: todosID,
      task: formJson.inputTask,
      status: "Pendiente",
      done: false
    };

    // Actualizar el estado de tareas
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);

    // Guardar en localStorage
    try {
      const stored = JSON.parse(localStorage.getItem('myArray'));
      const existing = Array.isArray(stored) ? stored : [];
      const updatedStorage = [...existing, newTodo];
      localStorage.setItem('myArray', JSON.stringify(updatedStorage));
      console.log("Guardado:", updatedStorage);
    } catch {
      localStorage.setItem('myArray', JSON.stringify([newTodo]));
    }
  }

  // Renderizado para agregar nuevas tareas
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

        </div>

      </form>
    </>
  )
}

/// ===>>> Componente de Task / Tarea <<<===///
// Componente que renderiza una fila de tarea individual
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
// Botón para marcar tarea como completada
const ButtonCheck = ({ }) => {

  return (
    <>
      <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-success">Tachar</button>
    </>
  )
}

/// ===>>> Componente de Delete / Eliminar Tarea <<<===///
// Botón para eliminar tarea
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
  // Estados para manejar las tareas
  const [todos, setTodos] = useState([]);
  const [storages, setStorages] = useState([]);

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

                  {/* Componente para agregar nuevas tareas */}
                  <AddTask tasks={storages} setTasks={setStorages} todos={todos} setTodos={setTodos} />

                  {/* Tabla que muestra la lista de tareas */}
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
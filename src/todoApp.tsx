import { useState } from 'react'
import './todoApp.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export const TodoApp = () => {
  const [count, setCount] = useState(0)

  return (
    //
    <>
      {/* <div className="container-fluid bg-dark" style={{ backgroundColor: '#eee' }}>
        <div className="card bg-primary-subtle">
          <div className="card-header">
            Featured
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div> */}


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
                    <div className="col-12">
                      <div data-mdb-input-init className="form-outline">
                        <input type="text" id="form1" className="form-control" placeholder="Enter a task here" />
                      </div>
                    </div>

                    <div className="col-12">
                      <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary">Save</button>
                    </div>

                    <div className="col-12">
                      <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning">Get tasks</button>
                    </div>
                  </form>

                  <table className="table mb-4  table-dark ">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Todo item</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Buy groceries for next week</td>
                        <td>In progress</td>
                        <td>
                          <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                            <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-danger">Delete</button>
                            <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-success">Finished</button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Renew car insurance</td>
                        <td>In progress</td>
                        <td>
                          <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                            <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-danger">Delete</button>
                            <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-success">Finished</button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Sign up for online course</td>
                        <td>In progress</td>
                        <td>
                          <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                            <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-danger">Delete</button>
                            <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-success">Finished</button>
                          </div>
                        </td>
                      </tr>
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
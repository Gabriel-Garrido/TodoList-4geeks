import React, { useState } from 'react';
import Eliminar from './eliminar.jsx';


function NewTask () {

    const [tasks, setTasks] = useState([])

    function addList(e) {
	
        if (e.key === 'Enter' && tasks.includes(e.target.value)) {
            alert("Esta tarea ya existe")
            e.target.value = ""
        }else if (e.key === 'Enter' && e.target.value != "") {
            setTasks([...tasks, e.target.value])
            e.target.value = ""
        }else if (e.key === 'Enter' && e.target.value == "") {
            alert("Debe ingresar una tarea")
        }
    }
        return (
            <div className='container mt-2 ml-4 mr-4 '>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Nueva tarea, ej: cocinar' onKeyPress={(e) => addList(e)}></input>
                </div>

                <ol className="list-group">

                    {tasks.length == 0 ? 
                    <p id="sinTareas" className="fs-3">No hay tareas, añadir tareas</p> 
                    : 
                    <p></p>}

                    {tasks.map((task, i) => {
                            return (

                                <li key={i} className="list-group-item d-flex justify-content-between align-items-start bg-light ">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Tarea {i + 1}</div>{task}</div>
                                    <Eliminar i={i} tasks={tasks} setTasks={setTasks} />
                                    
                                </li>
                            )
                    })
                    }
                </ol>
            </div>
        )
}

export default NewTask
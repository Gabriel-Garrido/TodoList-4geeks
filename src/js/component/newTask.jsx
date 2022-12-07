import React, { useState } from 'react';


function NewTask () {

    const [tasks, setTasks] = useState([])

    function addList(e) {
	
        if(e.key === 'Enter' && e.target.value != "") {
            setTasks([...tasks, e.target.value])
            e.target.value = ""
        }else if (e.key === 'Enter' && e.target.value == "") {
            alert("Debe ingresar una tarea")
        }
    }
        return (
            <div>
                <input onKeyPress={(e) => addList(e)}></input>
                <ol className="list-group">

                    {tasks.map((task) => {
                            return <li className="list-group-item" key={task}>{task}</li>
                    })
                    }
                </ol>
            </div>
        )
}

export default NewTask
import React from "react"


function Eliminar (props) {
    const tasksList = props.tasks
    return (
    <button className="badge rounded-pill fs-5" onClick={() => {
        let newTaskList = tasksList.filter(item => item !== tasksList[props.i])
        return props.setTasks(prev => prev = newTaskList)
    }}>X</button>
    )
}

export default Eliminar
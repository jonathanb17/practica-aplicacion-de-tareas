import React, { useState } from 'react'

const TaskCreator = ({ callback }) => {

    const createNewTask = () => {
        console.log('new task add')
        callback(newTaskName);
        setNewTaskName('')

    }

    const [newTaskName, setNewTaskName] = useState('')
    return (
        <div>
            <input type="text"
                className="form-control"
                value={newTaskName}
                onChange={e => setNewTaskName(e.target.value)}
            />

            <button
                className="btn btn-outline-secondary mt-1 form-control"
                onClick={createNewTask}
            >Add</button>
        </div>
    )
}

export default TaskCreator

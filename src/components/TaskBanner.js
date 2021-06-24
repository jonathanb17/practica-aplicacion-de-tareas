//  muestra cuantas tareas faltan por completar

import React from 'react'

const TaskBanner = ({ username, taskItems }) => {
    return (
        <div>
            <h4 className="bg-primary text-white p-4">
                {username} Task App{taskItems.filter((t) => !t.done).length} {/*dame las tareas que FALTAN por hacer */}
            </h4>
        </div>
    )
}

export default TaskBanner

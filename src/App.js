
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState, useEffect } from 'react';
import TaskBanner from './components/TaskBanner';
import TaskCreator from './components/TaskCreator';
import TaskRow from './components/TaskRow';
import VisibilityControl from './components/VisibilityControl';


// import { v4 as uuidv4 } from 'uuid';



function App() {

  const [username, setUsername] = useState('Jonathan')
  const [taskItems, setTaskItems] = useState([
    { name: 'Task one', done: false },
    { name: 'Task two', done: false },
    { name: 'Task three', done: true }, // esta que es true es q fue ya hecha
    { name: 'Task four', done: false }
  ]);

  const [showCompleted, setShowCompleted] = useState(true); // me va mostrar las tareas completas(true)

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("tasks"));
    if (data !== null) {
      setTaskItems(data)
    }
  }, [])


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems])

  const taskTableRow = (doneValue) => {
    return taskItems
      .filter(t => t.done === doneValue)
      .map((task, i) => {
        return (
          <TaskRow task={task} key={i} toggleTask={toggleTask} />
        )
      })
  };


  const createNewTask = (taskName) => {
    if (!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }])
    }
  }

  // busca y a la ves cambia una condicion ,si es falsa la cambia a true y viseversa
  const toggleTask = task => {
    setTaskItems(taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t)))
  }

  return (
    <div>
      <TaskBanner username={username} taskItems={taskItems} />
      <TaskCreator callback={createNewTask} />
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Description</th>
            <th>done</th>
          </tr>
        </thead>
        <tbody>
          {taskTableRow(false)}
        </tbody>
      </table>

      <div className="bg-secondary text-white text-center p-2 ml-2">
        <VisibilityControl
          descripcion="Completed Tasks"
          isChecked={showCompleted}
          callback={checked => setShowCompleted(checked)}
        />
      </div>

      {
        showCompleted && (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>{taskTableRow(true)}</tbody>
          </table>
        )}

    </div >
  );
}

export default App;

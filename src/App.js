
// import './App.css';
import './style.css'
import { useState } from 'react'
import Task from './Task';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    }
    setTodoList([...todoList, task])
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  }

  const completeTask = (id) => (
    setTodoList(todoList.map((task) => {
      if (task.id === id) {
        return { ...task, completed: true }
      } else {
        return task;
      }

    }
    )
    ))


  return (
    <div className="App">

      <div className='addtask'>
        <p id='ptodo'>TODO LIST</p>
        <input placeholder='write your todo list ...' onChange={handleChange} />
        <button id='badd' onClick={addTask}>Add Task</button>


      </div>

      <div className="list">
        <p id='listp'>List of Tasks</p>
        {todoList.map((task) => (
          <Task
            key={task.id}
            taskName={task.taskName}
            id={task.id}
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

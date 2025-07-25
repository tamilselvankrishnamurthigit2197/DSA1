import React, { useState } from 'react'
import Form from '../TaskForm/Form'
import './Task.css'
import TaskList from '../TaskList/ListOfTasks';

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);

    /* adding a task */
    const addTask = (text) =>{

        const newTask = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTasks([...tasks, newTask]);
    };

    /* toggle the task */

    const toggleTask = (id) =>{
        setTasks(tasks.map((task)=>{
            return task.id == id ? {...task, completed: !task.completed} : task;
        }))
    }

    /* delete by filter the unchanged */
    const deletetask = (id) =>{
        const filteredTask = tasks.filter((task)=>{
            return task['id'] !== id;
        });
        setTasks(filteredTask);
    }

  return (
    <>
        <h3>TaskManager</h3>
        <Form addTask={addTask} />
        <TaskList
            tasks={tasks}
            toggleTask={toggleTask}
            deleteTask={deletetask}
        />
    </>
    
    

  )
}

export default TaskManager
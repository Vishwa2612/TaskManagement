import React, { useState } from 'react';
import Task from './Task';
import './App.css';


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskDes, setTaskDes] = useState('');
  const [taskInput, setTaskInput] = useState('');
  const [deadlineInput, setDeadlineInput] = useState('');

  const addTask = () => {
    if (!taskInput || !deadlineInput || !taskDes) {
      alert('Task or Deadline is Missing');
      return;
    }
    
    const newTask = {
      name: taskInput,
      description: taskDes,
      deadline: new Date(deadlineInput),
      status: 'Progress',
    };
    setTasks([...tasks, newTask]);
    setTaskDes('');
    setTaskInput(''); 
    setDeadlineInput('');
  };

  const updateTaskStatus = (index, status) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = status;
    setTasks(updatedTasks);
  };

    const deleteTaskStatus = (index)=>{
    setTasks((currentValue)=>{
      const updatedTasks = currentValue.filter((e,i)=>{
        if(i===index){
          return false;
        }
        return true;
      });
      return updatedTasks;
    })
  }

  return (
    <div className="app">
      <h1>Task Management</h1>
      <div className="form">
        <label name="taskInput">New Task:</label>
        <input
          type="text"
          id="taskInput"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter Task"
        />
        <br/><br/>
        <label name="taskDes">Task Description:</label>
        <input 
          type="textarea" 
          id="taskDes"
          value={taskDes}
          onChange={(e) => setTaskDes(e.target.value)}
          placeholder="Enter Description"
          />
        <br/><br/>        
        <label name="deadlineInput">Deadline:</label>
        <input
          type="datetime-local"
          id="deadlineInput"
          value={deadlineInput}
          onChange={(e) => setDeadlineInput(e.target.value)}
        />
        <br/><br/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="taskList">
        {tasks.map((task, index) => (
          <Task 
          task={task} 
          key={index} 
          index={index} 
          updateTaskStatus={updateTaskStatus} 
          deleteTaskStatus={deleteTaskStatus} 
          />
        ))}
      </div>
    </div>
  );
};

export default App;
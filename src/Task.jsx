import React from 'react';
import "./Task.css"


const Task = ({ task, index, updateTaskStatus ,deleteTaskStatus}) => {
  const now = new Date();
  let taskClassName = '';

  const handleButton=()=>{
    deleteTaskStatus(index);
  };

  if (task.status === 'Completed') {
    taskClassName = 'Completed';
  } else if (task.deadline < now) {
    taskClassName = 'Ended';
    task.status = 'Ended';
  } else {
    taskClassName = 'Progress';
    task.status = 'Progress';
  }

  return (
    <div key={index} className={`task ${taskClassName}`}>
      <span>Task: </span>{task.name}
      <br/>
      <span>Description:  </span> {task.description}
      <br/>
      <span>Deadline: </span> {task.deadline.toLocaleString()}
      <br/>
      <span>Status: </span>{task.status}
      <br/>
      <button onClick={() => 
      updateTaskStatus(index, 
      task.status === 'Completed' ? 'Progress' : 'Completed')
      }>
        {task.status === 'Completed' ? 'Change Status' : 'Complete'}
      </button>
      <button className='taskDelete' onClick={handleButton}>
        Delete
      </button>
    </div>
  );
};

export default Task;
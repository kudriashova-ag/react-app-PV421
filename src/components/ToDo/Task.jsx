import React from 'react';

const Task = ({ task, deleteTask }) => {
    
    return (
      <div className="task">
        <input type="checkbox" defaultChecked={task.done} />
        <span className={task.done ? "done" : ""}>{task.title}</span>
        <button className="delete-btn" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    );
}

export default Task;

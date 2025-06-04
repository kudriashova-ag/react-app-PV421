import React, { useRef, useState } from "react";

const Task = ({ task, deleteTask, toggleDone, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const inputRef = useRef();



  const editHandler = () => {
    setIsEditing(true);
    //inputRef.current.focus();
  };

  const changeHandler = () => {
      if (title.trim() === '')
        deleteTask(task.id);
      else
        updateTask(task.id, title);

      setIsEditing(false);
  };

  const normalView = (
    <div className="task">
      <input
        type="checkbox"
        defaultChecked={task.done}
        onChange={() => toggleDone(task.id)}
      />
      <span className={task.done ? "done" : ""} onClick={editHandler}>
        {task.title}
      </span>
      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );

  const editView = (
    <div className="task">
      <input
        type="text"
        value={title}
        ref={inputRef}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => { if(e.code==="Enter") changeHandler() }}
        onBlur={changeHandler}
      />
    </div>
  );

  return isEditing ? editView : normalView;
};

export default Task;

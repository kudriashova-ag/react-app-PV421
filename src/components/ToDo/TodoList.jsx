import React, { useState } from "react";
import AddForm from "./AddForm";
import Filters from "./Filters";
import Task from "./Task";
import "./ToDo.css";
import tasks from "./TasksData";

const TodoList = () => {
  const [taskList, setTaskList] = useState(tasks);

  const addTask = (title) => {
    setTaskList([...taskList, { id: new Date().getTime(), title, done: false }]);
  };

  const deleteTask = (id) => { 
    setTaskList(taskList.filter((task) => task.id !== id));
  }

  const toggleDone = (id) => {
    
   }

  return (
    <div className="todo-list">
      <h1>TodoList</h1>
      <AddForm addTask={addTask} />
      <Filters />

      {taskList.map((task) => (
        <Task task={task} key={task.id} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TodoList;
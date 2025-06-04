import React, { useEffect, useState } from "react";
import AddForm from "./AddForm";
import Filters from "./Filters";
import Task from "./Task";
import "./ToDo.css";
import tasks from "./TasksData";

const TodoList = () => {
  const [taskList, setTaskList] = useState(tasks);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTaskList(JSON.parse(savedTasks));
    }

    const savedFilter = localStorage.getItem('filter');
    if (savedFilter) {
      setFilter(savedFilter);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }, [taskList]);

  useEffect(() => {
    localStorage.setItem('filter', filter);
  }, [filter]);


  const addTask = (title) => {
    setTaskList([
      ...taskList,
      { id: new Date().getTime(), title, done: false },
    ]);

  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const toggleDone = (id) => {
    const newTasks = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTaskList(newTasks);
  };

  const updateTask = (id, title) => {
    const newTasks = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, title };
      }
      return task;
    });
    setTaskList(newTasks);
  };

  const allFilters = {
    All: () => true,
    Done: (task) => task.done,
    'Todo': (task) => !task.done,
    Short: (task) => task.title.length < 3,
  };

  return (
    <div className="todo-list">
      <h1>TodoList</h1>
      <AddForm addTask={addTask} />

      <Filters setFilter={setFilter} filter={filter} allFilters={allFilters} />

      {taskList.filter(allFilters[filter]).map((task) => (
        <Task
          task={task}
          key={task.id}
          deleteTask={deleteTask}
          toggleDone={toggleDone}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
};

export default TodoList;



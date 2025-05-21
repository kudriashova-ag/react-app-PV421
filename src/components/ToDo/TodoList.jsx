import React from 'react';
import AddForm from './AddForm';
import Filters from './Filters';
import Task from './Task';
import './ToDo.css';
import tasks from './TasksData';

const TodoList = () => {
    return (
      <div className="todo-list">
        <h1>TodoList</h1>
        <AddForm />
        <Filters />

        { tasks.map(task => <Task task={task} key={task.id} />) }

      </div>
    );
}

export default TodoList;

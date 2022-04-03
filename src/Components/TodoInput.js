import { useState, useEffect } from "react";

import { addTask } from "../utils/updateTasks";

import "./Styles/TodoInput.css";

const TodoInput = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");

  // add todo
  const addTodo = (e) => {
    e.preventDefault();

    if (task === "") return;
    const taskData = {
      id: Math.floor(Math.random() * 1000) + 1,
      task: task,
      taskCompleted: false,
    };

    addTask(taskData, tasks, setTasks);
    setTask("");
  };

  return (
    <div className="todo-input-wrapper">
      <form onSubmit={addTodo}>
        <div className="todo-input">
          <button className="add-btn">Add</button>
          <input
            type="text"
            placeholder="Create a new todo"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default TodoInput;

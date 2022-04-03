import { useState, useEffect } from "react";

import { addTask } from "../utils/updateTasks";

import "./Styles/TodoInput.css";

const TodoInput = ({tasks, setTasks}) => {
  // localStorage
  const savedValue =
    localStorage.getItem("taskInputValue") != null
      ? localStorage.getItem("taskInputValue")
      : "";

  // useState
  const [task, setTask] = useState(savedValue);

  useEffect(() => {
    localStorage.setItem("taskInputValue", task);
  }, [task]);

  // changing the value of TaskInput
  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  // add todo
  const addTodo = () => {
    if (task === "") return;
    const taskData = {
      id: Math.floor(Math.random() * 1000) + 1,
      task: task,
      taskCompleted: false,
    };

    addTask(taskData, tasks, setTasks);
    setTask("");
  };

  // on clicking enter key
  const keyDownHandler = (e) => {
    if (e.keyCode === 13) addTodo();
  };

  // add btn
  const clickHandler = () => addTodo();

  return (
    <div className="todo-input">
      <button className="add-btn" onClick={clickHandler}>
        Add
      </button>
      <input
        type="text"
        placeholder="Create a new todo"
        value={task}
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
      />
    </div>
  );
};

export default TodoInput;

import "./Styles/Todo.css";

import { ReactComponent as CrossIcon } from "../assets/images/icon-cross.svg";

const Todo = (props) => {
  // delete todo
  const clickHandler = () => {
    props.deleteTodo(props.id);
  };

  // mark task completed
  const taskComplete = () => {
    props.updateItem(props.id);
  };

  return (
    <div className={`todo ${props.taskCompleted === true ? "completed" : ""}`}>
      <button
        className={`todo-checkbox ${
          props.taskCompleted === true ? "completed" : ""
        }`}
        onClick={taskComplete}
      ></button>
      <p className="todo-task">{props.todoData}</p>
      <button className="remove-task-btn" onClick={clickHandler}>
        <CrossIcon />
      </button>
    </div>
  );
};

export default Todo;

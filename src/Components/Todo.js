import "./Styles/Todo.css";

import { ReactComponent as CrossIcon } from "../assets/images/icon-cross.svg";
import { checkTask, deleteTodo } from "../utils/updateTasks";

const Todo = ({ todoData, tasks, setTasks }) => {
  const deleteTask = () => {
    deleteTodo(todoData.id, tasks, setTasks);
  };

  const taskComplete = () => {
    checkTask(todoData.id, tasks, setTasks);
  };

  return (
    <div
      className={`todo ${todoData.taskCompleted === true ? "completed" : ""}`}
    >
      <div className="todo-body" onClick={taskComplete}>
        <button
          className={`todo-checkbox ${
            todoData.taskCompleted === true ? "completed" : ""
          }`}
        ></button>
        <p className="todo-task">{todoData.task}</p>
      </div>
      <button className="remove-task-btn" onClick={deleteTask}>
        <CrossIcon />
      </button>
    </div>
  );
};

export default Todo;

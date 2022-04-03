import "./Styles/Todo.css";

import { ReactComponent as CrossIcon } from "../assets/images/icon-cross.svg";
import { checkTask, deleteTodo } from "../utils/updateTasks";

const Todo = ({ todoData, tasks, setTasks }) => {
  // delete todo
  const deleteTask = () => {
    deleteTodo(todoData.id, tasks, setTasks);
    //   props.deleteTodo(props.id);
  };

  // mark task completed
  const taskComplete = () => {
    checkTask(todoData.id, tasks, setTasks);
    // props.updateItem(tod.id);
  };

  console.log(todoData);

  return (
    <div
      className={`todo ${todoData.taskCompleted === true ? "completed" : ""}`}
    >
      <button
        className={`todo-checkbox ${
          todoData.taskCompleted === true ? "completed" : ""
        }`}
        onClick={taskComplete}
      ></button>
      <p className="todo-task">{todoData.task}</p>
      <button className="remove-task-btn" onClick={deleteTask}>
        <CrossIcon />
      </button>
    </div>
  );
};

export default Todo;

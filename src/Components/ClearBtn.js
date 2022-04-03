import { clearCompletedTasks } from "../utils/clearCompletedTasks";

const ClearBtn = ({ tasks, setTasks }) => {

  const deleteCompletedTasks = () => {
    clearCompletedTasks(tasks, setTasks);
  }

  return (
    <button className="clear-completed-btn" onClick={deleteCompletedTasks}>
      Clear Completed
    </button>
  );
};

export default ClearBtn;

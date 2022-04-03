import { clearCompletedTasks } from "../utils/clearCompletedTasks";

const ClearBtn = ({ tasks, setTasks }) => {

  return (
    <button className="clear-completed-btn" onClick={clearCompletedTasks}>
      Clear Completed
    </button>
  );
};

export default ClearBtn;

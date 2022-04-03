import TaskLeft from "./TaskLeft";
import Filters from "./Filterss";
import ClearBtn from "./ClearBtn";

const Footer = ({ tasks, setTasks, setFilter }) => {
  return (
    <div className="items-filters-clear-container">
      <TaskLeft items={tasks} />
      <div className="for-desktop">
        <Filters setFilter={setFilter} />
      </div>
      <ClearBtn tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Footer;

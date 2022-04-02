import "./Styles/TaskLeftClearBtn.css";

const TaskLeft = (props) => {
  // no. of items left
  const itemsLeft = () => {
    const completedItems = [];
    const totalItems = props.items.length;
    completedItems = props.items.filter((item) => item.taskCompleted === true);
    return totalItems - completedItems.length;
  };

  return (
    <div className="items-left">
      <span> {itemsLeft()} items Left</span>
    </div>
  );
};

const ClearCompleted = (props) => {
  return (
    <button className="clear-completed-btn" onClick={props.clearCompletedTasks}>
      Clear Completed
    </button>
  );
};

export { TaskLeft, ClearCompleted };

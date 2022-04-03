import "./Styles/TaskLeftClearBtn.css";

const TaskLeft = ({items}) => {
  const itemsLeft = () => {
    let completedItems = [];
    let totalItems = items.length;
    completedItems = items.filter((item) => item.taskCompleted === true);
    return totalItems - completedItems.length;
  };

  return (
    <div className="items-left">
      <span> {itemsLeft()} items Left</span>
    </div>
  );
};

export default TaskLeft
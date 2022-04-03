import Todo from "./Todo";

const TodoContainer = ({ todoData, setTasks, filter }) => {
  const activeTasksList = todoData.map((data) => {
    let task;
    if (data.taskCompleted === false) {
      task = (
        <Todo
          tasks={todoData}
          todoData={data}
          key={data.id}
          setTasks={setTasks}
        />
      );
    }

    return task;
  });

  const completedTasksList = todoData.map((data) => {
    let task;
    if (data.taskCompleted === true) {
      task = (
        <Todo
          tasks={todoData}
          todoData={data}
          key={data.id}
          setTasks={setTasks}
        />
      );
    }
    return task;
  });

  const allTasksList = todoData.map((data) => {
    return (
      <Todo
        tasks={todoData}
        todoData={data}
        key={data.id}
        setTasks={setTasks}
      />
    );
  });

  const tasksList = () => {
    if (filter === "active") return activeTasksList;
    else if (filter === "completed") return completedTasksList;
    else return allTasksList;
  };

  return (
    <div className="todo-container" id="sortableList">
      {tasksList()}
    </div>
  );
};

export default TodoContainer;

import React from "react";
import Todo from "./Todo";

let TodoContainer = (props) => {
  const activeTasksList = props.todoData.map((data) => {
    if (data.taskCompleted == false) {
      return (
        <Todo
          tasks={props.todoData}
          key={data.id}
          id={data.id}
          todoData={data.task}
          taskCompleted={data.taskCompleted}
          deleteTodo={props.deleteTodo}
          updateItem={props.updateItem}
        />
      );
    }
  });

  const completedTasksList = props.todoData.map((data) => {
    if (data.taskCompleted == true) {
      return (
        <Todo
          tasks={props.todoData}
          key={data.id}
          id={data.id}
          todoData={data.task}
          taskCompleted={data.taskCompleted}
          deleteTodo={props.deleteTodo}
          updateItem={props.updateItem}
        />
      );
    }
  });

  const allTasksList = props.todoData.map((data) => {
    return (
      <Todo
        tasks={props.todoData}
        key={data.id}
        id={data.id}
        todoData={data.task}
        taskCompleted={data.taskCompleted}
        deleteTodo={props.deleteTodo}
        updateItem={props.updateItem}
      />
    );
  });

  const tasksList = () => {
    if (props.filter == "active") return activeTasksList;
    else if (props.filter == "completed") return completedTasksList;
    else return allTasksList;
  };

  return (
    <div className="todo-container" id="sortableList">
      {tasksList()}
    </div>
  );
};

export default TodoContainer;

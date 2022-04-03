import { useState, useEffect } from "react";

import "./Components/Styles/App.css";

import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme, GlobalStyles } from "./theme";

import Header from "./Components/Header";
import TodoInput from "./Components/TodoInput";
import TodoContainer from "./Components/TodoContainer";
import Filters from "./Components/Filters";
import TaskLeft from "./Components/TaskLeft";
import ClearCompleted from "./Components/ClearBtn";
import Footer from "./Components/Footer";

const App = () => {
  // get todo and theme from local storage
  const savedTheme =
    localStorage.getItem("theme") != null
      ? localStorage.getItem("theme")
      : "dark";
  const savedTasks =
    localStorage.getItem("tasks") != null
      ? JSON.parse(localStorage.getItem("tasks"))
      : [];

  // use state
  const [theme, setTheme] = useState(savedTheme);
  const [tasks, setTasks] = useState(savedTasks);
  const [filter, setFilter] = useState("all");

  // use effect
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [theme, tasks]);

  // toggle theme
  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  // add todo
  const addTask = (taskData) => {
    let data = [taskData, ...tasks];
    setTasks(data);
  };

  // mark task completed
  const checkItem = (id) => {
    const updatedTasks = [...tasks];
    const task = updatedTasks.find((data) => data.id === id);
    task.taskCompleted = task ? !task.taskCompleted : task.taskCompleted;
    setTasks(updatedTasks);
  };

  // delete todo
  const deleteTodo = (taskId) => {
    setTasks([...tasks].filter((todo) => todo.id !== taskId));
  };

  // delete completed todo

  // filter tasks

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <main className="App">
        <Header themeToggler={themeToggler} theme={theme} />
        <TodoInput addTask={addTask} />
        <div className="container">
          <TodoContainer
            todoData={tasks}
            deleteTodo={deleteTodo}
            updateItem={checkItem}
            filter={filter}
          />
          <Footer tasks={tasks} setTasks={setTasks} setFilter={setFilter} />
        </div>
        <div className="for-mobile">
          <Filters setFilter={setFilter} />
        </div>
        {/* <p className="drag-drop-line">Drag and drop to reorder list</p> */}
      </main>
    </ThemeProvider>
  );
};

export default App;

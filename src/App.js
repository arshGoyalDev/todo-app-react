import { useState, useEffect } from "react";

import "./Components/Styles/App.css";

import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme, GlobalStyles } from "./theme";

import Header from "./Components/Header";
import TodoInput from "./Components/TodoInput";
import TodoContainer from "./Components/TodoContainer";
import Filters from "./Components/Filterss";
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

  const [theme, setTheme] = useState(savedTheme);
  const [tasks, setTasks] = useState(savedTasks);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [theme, tasks]);

  // toggle theme
  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <main className="App">
        <Header themeToggler={themeToggler} theme={theme} />
        <TodoInput tasks={tasks} setTasks={setTasks} />
        <div className="container">
          <TodoContainer
            todoData={tasks}
            setTasks={setTasks}
            filter={filter}
          />
          <Footer tasks={tasks} setTasks={setTasks} setFilter={setFilter} />
        </div>
        <div className="for-mobile">
          <Filters setFilter={setFilter} />
        </div>
      </main>
    </ThemeProvider>
  );
};

export default App;

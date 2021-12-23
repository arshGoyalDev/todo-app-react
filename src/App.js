import React, { useState, useEffect } from 'react';
import './components/styles/App.css';

import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyles } from './Theme';

import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoContainer from './components/TodoContainer';


function App() {

  let savedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(savedTheme);
  const todoItems = []
  const [tasks, setTasks] = useState(todoItems);
  
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.setAttribute('data-theme', theme);
  }, [theme])
  
  const themeToggler = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  const addTask = taskData => {
    let data = [...tasks, taskData]
    setTasks(data);
  } 
  
  const deleteTodo = taskId => { setTasks([...tasks].filter(todo => todo.id !== taskId)) };


  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>

    <GlobalStyles />
    <div className="App">

      <Header themeToggler={ themeToggler } theme={ theme } />
      <TodoInput addTask={ addTask } />
      <TodoContainer todoData={ tasks } deleteTodo={ deleteTodo } />

    </div>

    </ThemeProvider>
  );
}


export default App;

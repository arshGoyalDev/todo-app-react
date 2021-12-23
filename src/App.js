import React, { useState, useEffect } from 'react';
import './components/styles/App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyles } from './Theme';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoContainer from './components/TodoContainer';


const Styled = styled.div`
`


function App() {

  let savedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(savedTheme);
  const todoItems = [
    {
      id: 1,
      task: 'Read a book',
    },
    {
      id: 2,
      task: 'Do the homework',
    },
    {
      id: 3,
      task: 'Watch Hawkeye Finale',
    },
    {
      id: 4,
      task: 'Complete react tutorial',
    },
    {
      id: 5,
      task: 'Jog for 10 minutes',
    },
  ]
  
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.setAttribute('data-theme', theme);
  }, [theme])
  
  const themeToggler = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }


  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>

    <GlobalStyles />
    <Styled className="app">

      <Header themeToggler={ themeToggler } theme={ theme } />
      <TodoInput />
      <TodoContainer todoData={ todoItems } />

    </Styled>

    </ThemeProvider>
  );
}

export default App;

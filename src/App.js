import React, { useState, useEffect } from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyles } from './theme';
import Header from './Components/Header';
import TodoInput from './Components/TodoInput';


const Styled = styled.div`
`


function App() {

  const [theme, setTheme] = useState('dark');
  
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.setAttribute('data-theme', theme);
  })
  
  const themeToggler = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>

    <GlobalStyles />
    <Styled className="app">

      <Header themeToggler={ themeToggler } theme={ theme } />
      <TodoInput />

    </Styled>

    </ThemeProvider>
  );
}

export default App;

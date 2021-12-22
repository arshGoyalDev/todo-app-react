import React, { useState } from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyles } from './theme';
import Header from './Components/Header';
import TodoInput from './Components/TodoInput';


const Styled = styled.div`
`


function App() {

  const [theme, setTheme] = useState('dark');
  const themeToggler = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
    <GlobalStyles />
    <Styled className="container">
      <Header themeToggler={ themeToggler } theme={ theme } />
      <TodoInput />
    </Styled>

    </ThemeProvider>
  );
}

export default App;

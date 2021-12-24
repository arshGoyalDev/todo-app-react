import React from 'react';
import './styles/Header.css';

import { ReactComponent as SunIcon } from '../assets/images/icon-sun.svg';
import { ReactComponent as MoonIcon } from '../assets/images/icon-moon.svg';


let Header = props => {

  let clickHandler = (e) => {
    props.themeToggler();
  }

  return (
    <header className='header'>
      <h1 className='title'>Todo</h1>
      <button aria-label='theme-btn' className='theme-btn' onClick={ clickHandler }>
        { props.theme === 'dark' ? <SunIcon /> : <MoonIcon />  }
      </button>
    </header>
  );
}


export default Header;

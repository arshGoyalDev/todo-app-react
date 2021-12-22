import './Styles/Header.css';
import { ReactComponent as SunIcon } from '../assets/images/icon-sun.svg';
import { ReactComponent as MoonIcon } from '../assets/images/icon-moon.svg';


let Header = () => {

  let clickHandler = (e) => {
    console.log(e.target)
  }

  return (
    <header className='header'>
      <h1 className='title'>Todo</h1>
      <button aria-label='theme-btn' className='theme-btn' onClick={ clickHandler }>
        <SunIcon />
      </button>
    </header>
  );
}


export default Header;
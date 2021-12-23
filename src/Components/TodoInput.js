import React, {useState} from 'react';
import './styles/TodoInput.css';


let TodoInput = props => {

  let [task, setTask] = useState('');

  let changeHandler = e => {
    setTask(e.target.value);
  }

  let keyDownHandler = e => {
    if (e.keyCode == 13) {
      let taskData = { 
        id: Math.floor(Math.random() * 100) + 1,
        task: e.target.value, 
      }      
      props.addTask(taskData);
      setTask('');
    }
  }

  return(
    <div className='todo-input'>
      <button className='add-btn'></button>
      <input type="text" placeholder='Create a new todo' value={ task } onChange={ changeHandler } onKeyDown={ keyDownHandler } />
    </div>
  ); 
};


export default TodoInput;

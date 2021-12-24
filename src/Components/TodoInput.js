import React, {useState} from 'react';
import './styles/TodoInput.css';


let TodoInput = props => {

  let [task, setTask] = useState('');
  let id = 1;
  let [Id, setID] = useState(id);

  let changeHandler = e => {
    setTask(e.target.value);
  }

  let addTodo = () => {
    if (task == '') return;
    let taskData = { 
      id: Id,
      task: task, 
      taskCompleted: false,
    }
  
    setID(Id += 1);
    props.addTask(taskData);
    setTask('');
  }

  let keyDownHandler = e => {
    if (e.keyCode == 13) addTodo();
  }

  let clickHandler = () => addTodo();


  return(
    <div className='todo-input'>
      <button className='add-btn' onClick={ clickHandler }></button>
      <input type="text" placeholder='Create a new todo' value={ task } onChange={ changeHandler } onKeyDown={ keyDownHandler } />
    </div>
  ); 
};


export default TodoInput;

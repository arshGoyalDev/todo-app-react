import React, {useState} from 'react';
import './styles/Todo.css';

import { ReactComponent as CrossIcon } from '../assets/images/icon-cross.svg';


let Todo = (props) => {

  const [taskCompleted, setTaskCompleted] = useState(props.taskCompleted);

  let clickHandler = () => {
    props.deleteTodo(props.id);
  }

  let taskComplete = () => {
    setTaskCompleted( taskCompleted == false ? true : false );
  }
  
  
  return (
    <div className={`todo ${taskCompleted === true ? 'completed' : ''}` }>
      <div className={`todo-checkbox ${taskCompleted === true ? 'completed' : ''}`} onClick={ taskComplete }></div>
      <p className='todo-task'>{ props.todoData }</p>
      <CrossIcon className='remove-task-btn' onClick={ clickHandler } />
    </div>
  );
}


export default Todo;

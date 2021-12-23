import './styles/Todo.css';
import { ReactComponent as CrossIcon } from '../assets/images/icon-cross.svg';


let Todo = (props, checked) => {

  let clickHandler = () => {
    props.deleteTodo(props.id);
  }


  return (
    <div className={`'todo' ${checked ? 'competed' : ''}`}>
      <div className={`"todo-checkbox" ${checked ? 'completed' : ''}`}></div>
      <p className='todo-task'>{ props.todoData }</p>
      <CrossIcon className='remove-task-btn' onClick={ clickHandler } />
    </div>
  );
}


export default Todo;

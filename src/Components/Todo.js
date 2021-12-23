import './styles/Todo.css';


let Todo = props => {
  return (
    <div className='todo'>
      <input type="checkbox" name='task-complete-checkbox' className='todo-checkbox' />
      <p className='todo-task'>{ props.todoData }</p>
    </div>
  );
}


export default Todo;

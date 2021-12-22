import './Styles/TodoInput.css';


let TodoInput = () => {
  return(
    <div className='todo-input'>
      <button className='add-btn'></button>
      <input type="text" placeholder='Create a new todo' />
    </div>
  ); 
};


export default TodoInput;
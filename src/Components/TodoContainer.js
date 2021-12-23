import Todo from './Todo';


let TodoContainer = props => {
  return (
    <div className='todo-container'>
      {
        props.todoData.map(data => (
          <Todo todoData={data.task} key={ data.id } />
        ))
      }
    </div>
  );
}


export default TodoContainer;

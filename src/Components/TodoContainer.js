import React from 'react';
import Todo from './Todo';


let TodoContainer = props => {

  return (
    <div className='todo-container'>
      {
        props.todoData.map(data => (
          <Todo 
          key={ data.id }
          id={ data.id }
          todoData={ data.task } 
          taskCompleted={ data.taskCompleted } 
          deleteTodo={ props.deleteTodo }
          />
        ))
      }
    </div>
  );
}


export default TodoContainer;

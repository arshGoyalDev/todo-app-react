import React from 'react';
import Todo from './Todo';


let TodoContainer = (props) => {

  return (
    <div className='todo-container'>
      {props.todoData.map(data => (
        <Todo 
          tasks={ props.todoData }
          key={ data.id } 
          id={ data.id } 
          todoData={ data.task } 
          taskCompleted={ data.taskCompleted } 
          deleteTodo={ props.deleteTodo } 
          updateItem={ props.updateItem }
        />
      ))}
    </div>
  );
}


export default TodoContainer;

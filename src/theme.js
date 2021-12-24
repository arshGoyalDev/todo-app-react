import { createGlobalStyle } from "styled-components"


export const darkTheme = {
  text: 'hsl(234, 39%, 85%)',
  bodyBackground: 'hsl(235, 21%, 11%)',
  todoBackground: 'hsl(235, 24%, 19%)',
  todoBorder: 'hsl(237, 14%, 26%)',
  checkboxBorder: 'hsl(234, 11%, 52%)',
  placeholderAndCompletedTask: 'hsl(234, 11%, 52%)',
  
  // darkGrayishBlue: 'hsl(234, 11%, 52%)',
  // lightGrayishBlueHover: 'hsl(236, 33%, 92%)',
  // veryDarkGrayishBlueOne: 'hsl(233, 14%, 35%)',
}

export const lightTheme = {
  text: 'hsl(235, 21%, 11%)',
  bodyBackground: 'hsl(236, 33%, 92%)',
  todoBackground: 'hsl(0, 0%, 98%)',
  todoBorder: 'hsl(233, 11%, 84%)',
  checkboxBorder: 'hsl(236, 9%, 61%)',
  placeholderAndCompletedTask: 'hsl(236, 9%, 61%)',
  
  // darkGrayishBlue: 'hsl(236, 9%, 61%)',
  // lightGrayishBlue: 'hsl(233, 11%, 84%)',
  // veryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
}


export const GlobalStyles = createGlobalStyle`

	body {
		background-color: ${props => props.theme.bodyBackground};
	}

  .todo-input{
    background: ${props => props.theme.todoBackground};
  }
  
  .add-btn,
  .todo-checkbox{
    border: 1px solid ${props => props.theme.checkboxBorder};
  }
  
  .todo-input input{
    color: ${props => props.theme.text}
  }
  
  .todo-input input::placeholder,
  .todo-checkbox.completed ~ .todo-task{
    color: ${props => props.theme.placeholderAndCompletedTask}
  }

  .todo{
    background: ${props => props.theme.todoBackground};
    color: ${props => props.theme.text};
    border-bottom: 2px solid ${props => props.theme.todoBorder};
  }

`;

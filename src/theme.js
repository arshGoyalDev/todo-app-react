import { createGlobalStyle } from "styled-components"


export const darkTheme = {
  bodyBackground: 'hsl(235, 21%, 11%)',
  todoBackground: 'hsl(235, 24%, 19%)',
  text: 'hsl(234, 39%, 85%)',
  lightGrayishBlueHover: 'hsl(236, 33%, 92%)',
  darkGrayishBlue: 'hsl(234, 11%, 52%)',
  veryDarkGrayishBlueOne: 'hsl(233, 14%, 35%)',
  veryDarkGrayishBlueTwo: 'hsl(237, 14%, 26%)',
}

export const lightTheme = {
  bodyBackground: 'hsl(236, 33%, 92%)',
  todoBackground: 'hsl(0, 0%, 98%)',
  text: 'hsl(235, 21%, 11%)',
  lightGrayishBlue: 'hsl(233, 11%, 84%)',
  darkGrayishBlue: 'hsl(236, 9%, 61%)',
  veryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
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
    border: 1px solid ${props => props.theme.darkGrayishBlue};
  }
  
  .todo-input input{
    color: ${props => props.theme.text}
  }
  
  .todo-input input::placeholder,
  .todo-checkbox:checked ~ .todo-task{
    color: ${props => props.theme.darkGrayishBlue}
  }

  .todo{
    background: ${props => props.theme.todoBackground};
    color: ${props => props.theme.text};
  }

`;

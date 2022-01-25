import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
body,
html {
  height: 100%;
  font-family: sans-serif;
  
}

button{
  font: inherit;
  border: none;
  background-color: transparent;  
  cursor: pointer;
}

ul{
  list-style: none;
}
`;

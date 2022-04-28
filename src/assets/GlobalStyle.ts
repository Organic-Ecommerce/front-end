import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    --main-font: 'Roboto', sans-serif;
    --primary-color: hsla(74, 32%, 32%, 1);
    --secundary-color: hsla(0, 0%, 0%, 0.41);
  }
  
`
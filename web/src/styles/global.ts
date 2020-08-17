import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline:0;
  }

  html, body {
    height: 100%;
  }

  body {
    background: #312e38;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  #root {
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;

export const theme = {
  palette: {
    black: '#232129',
    primary: '#ff9000',
    grey: '#312e38',
    grey500: '#666360',
    white: '#f4ede8',
    danger: '#c53030',
  },
};

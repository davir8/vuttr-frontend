import { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    font-family: sans-serif;
    background-color: #363f45;
  }
`;

export default GlobalStyle;

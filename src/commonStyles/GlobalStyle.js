import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #6D7CE4;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, table {
    font-size: 18px;
    font-family: Roboto;
    font-weight: 300;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;

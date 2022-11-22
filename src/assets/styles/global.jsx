import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  *, *::after, *::before {
    box-sizing: inherit;
  }
  body {
    font-family: 'Barlow', sans-serif;
    font-size: 18;
    font-weight: 400;

    color: white;
    background-color: black;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    margin: 0;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
  }

  a {
    color:white;
    text-decoration: none;
  }
`;

export default GlobalStyle
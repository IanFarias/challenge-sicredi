import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --body-bg: #FFFFFF;
    --table-bg: #F7F7F7;
    --font-family: 'Nunito', sans-serif;
    --color-white: #FFFFFF;
    --color-gray: #AAAAAA;
    --color-text: #575757;
    --success: #008732;
    --warning: #FDD95A;
    --danger: #ea5455;
    --primary: #36405d;
;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
    line-height: 1.5rem;
  }

  body {
    background-color: var(--body-bg);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    color: var(--color-text);
    font-family: var(--font-family);
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    color: var(--primary);
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

`;

export default GlobalStyle;

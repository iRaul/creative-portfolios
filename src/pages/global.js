import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,600,900&display=swap');

  html,
  body {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Raleway', sans-serif;
    background-color: #0c0d17;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }

  p {
    line-height: 1.4;
  }

  /* Responsive */
  @media (max-width: 768px) {
    html { font-size: 9px; }
  }

  .contribute-btn {
    position: absolute;
    right: 15px;
    top: 15px;
    color: #fff;
    text-decoration: none;
    text-transform: lowercase;
  }
`

export default GlobalStyle

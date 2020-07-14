import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open Sans:400,600,900&display=swap');
  @import url('https://fonts.googleapis.com/css?family=VT323:400,600,900&display=swap');

  html,
  body {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  html {
    box-sizing: border-box;
    font-size: 1em;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'VT323', monospace;
    background-color: #0c0d17;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }

  .muted {
    font-family: 'Open Sans', sans serif;
}

  p {
    line-height: 1.4;
    color: #fff;
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

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');
  html,
  body {
    padding: 0;
    margin: 0;
    background: #160e13;
;
    
    
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
`

export default GlobalStyle
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    color: #f1f5fa;
    margin: 0px;
    background: #8692A4;
      }

h1{
  text-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}
  h2 {
    margin: 0;
    font-size: 20px;
  }
`

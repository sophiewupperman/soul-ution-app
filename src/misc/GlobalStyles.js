import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    background-image: linear-gradient(180deg, #a1c4fd 0%, #c2e9fb 100%);
      }

  body {
    font-family: 'Nunito';
    color: #f1f5fa;
    margin: 0px;
      }

h1{
  font-size: 34px
  text-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}
  h2 {
    margin: 0;
    font-size: 17px;
  }

  p {
  display: block;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
`

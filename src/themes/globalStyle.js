import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Titillium+Web:200,200i,300,300i,400,400i,600,600i,700,700i,900&subset=latin-ext');
  * {
    box-sizing: border-box;
    font-family: 'Titillium Web';
  }
  html, body, #root {
    height: 100%;
  }
  body {
    margin: 0;
    background-color: #0d2032;
  }
`

export default globalStyle

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Commissioner";
  }
  
  body {
    min-width: 440px;
  }
`

export default GlobalStyles
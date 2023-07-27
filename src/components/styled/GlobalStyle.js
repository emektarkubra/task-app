import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }
  
  body {
    background-color: white;
    color: black;
    margin: 0;
    padding: 0; 

  }

  .clear-fix {
    clear: both;
  }
 
    .mb-1 {
        margin-bottom : 0.8vw;
    }

    .text-align {
        text-align : center;
    }

`;
